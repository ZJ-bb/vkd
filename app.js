// ===== 全局状态 =====
let currentQuiz = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let quizType = '';
let userAnswers = [];

// 学习进度（使用 localStorage 持久化）
let learningProgress = {
    prefix: new Set(),
    suffix: new Set(),
    roots: new Set()
};

// 从 localStorage 加载进度
function loadProgress() {
    const saved = localStorage.getItem('wordRootsProgress');
    if (saved) {
        const data = JSON.parse(saved);
        learningProgress.prefix = new Set(data.prefix || []);
        learningProgress.suffix = new Set(data.suffix || []);
        learningProgress.roots = new Set(data.roots || []);
    }
}

// 保存进度到 localStorage
function saveProgress() {
    const data = {
        prefix: Array.from(learningProgress.prefix),
        suffix: Array.from(learningProgress.suffix),
        roots: Array.from(learningProgress.roots)
    };
    localStorage.setItem('wordRootsProgress', JSON.stringify(data));
    updateProgressUI();
}

// 更新进度UI
function updateProgressUI() {
    const prefixTotal = Object.values(prefixData).flat().length;
    const suffixTotal = Object.values(suffixData).flat().length;
    const rootsTotal = rootsData.length;
    
    const prefixCount = learningProgress.prefix.size;
    const suffixCount = learningProgress.suffix.size;
    const rootsCount = learningProgress.roots.size;
    
    const totalLearned = prefixCount + suffixCount + rootsCount;
    const totalItems = prefixTotal + suffixTotal + rootsTotal;
    const percent = Math.round((totalLearned / totalItems) * 100);
    
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressPercent').textContent = percent + '%';
    
    document.getElementById('prefixProgress').style.width = (prefixCount / prefixTotal * 100) + '%';
    document.getElementById('suffixProgress').style.width = (suffixCount / suffixTotal * 100) + '%';
    document.getElementById('rootsProgress').style.width = (rootsCount / rootsTotal * 100) + '%';
    document.getElementById('quizProgress').style.width = percent + '%';
    document.getElementById('reciteProgress').style.width = percent + '%';
}

// ===== 页面导航 =====
function goToPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageName).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-btn[data-page="${pageName}"]`)?.classList.add('active');

    // 切换到维克多页面时初始化下拉框
    if (pageName === 'viktor') {
        initViktorDays();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 导航按钮点击事件
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => goToPage(btn.dataset.page));
});

// ===== 渲染前缀卡片 =====
function renderPrefixCards(category) {
    const container = document.getElementById('prefixCards');
    const items = prefixData[category] || [];
    
    container.innerHTML = items.map((item, index) => {
        const isLearned = learningProgress.prefix.has(item.prefix);
        const cardId = `prefix-${category}-${index}`;
        
        return `
            <div class="affix-card" id="${cardId}">
                <div class="affix-header">
                    <div class="affix-name">${item.prefix}</div>
                    <div class="affix-meaning">${item.meaning}</div>
                </div>
                <div class="affix-body">
                    <div class="explanation-box">
                        <span class="explanation-icon">💡</span>
                        <span class="explanation-text">${item.explanation || ''}</span>
                    </div>
                    ${item.examples.map(ex => `
                        <div class="example-item">
                            <div class="example-word">
                                <span class="example-base">${ex.base}</span>
                                <span class="example-arrow">→</span>
                                <span class="example-result">${ex.result}</span>
                            </div>
                            <div class="example-meaning">${ex.meaning}</div>
                            ${ex.breakdown ? `<div class="example-breakdown">🔍 ${ex.breakdown}</div>` : ''}
                        </div>
                    `).join('')}
                    <button class="card-learn-btn ${isLearned ? 'learned' : ''}" 
                            onclick="toggleLearned('prefix', '${item.prefix}', '${cardId}')">
                        ${isLearned ? '✓ 已学会' : '标记为已学会'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 渲染后缀卡片 =====
function renderSuffixCards(category) {
    const container = document.getElementById('suffixCards');
    const items = suffixData[category] || [];
    
    container.innerHTML = items.map((item, index) => {
        const isLearned = learningProgress.suffix.has(item.suffix);
        const cardId = `suffix-${category}-${index}`;
        
        return `
            <div class="affix-card" id="${cardId}">
                <div class="affix-header">
                    <div class="affix-name">${item.suffix}</div>
                    <div class="affix-meaning">${item.meaning}</div>
                </div>
                <div class="affix-body">
                    <div class="explanation-box">
                        <span class="explanation-icon">💡</span>
                        <span class="explanation-text">${item.explanation || ''}</span>
                    </div>
                    ${item.examples.map(ex => `
                        <div class="example-item">
                            <div class="example-word">
                                <span class="example-base">${ex.base}</span>
                                <span class="example-arrow">→</span>
                                <span class="example-result">${ex.result}</span>
                            </div>
                            <div class="example-meaning">${ex.meaning}</div>
                            ${ex.breakdown ? `<div class="example-breakdown">🔍 ${ex.breakdown}</div>` : ''}
                        </div>
                    `).join('')}
                    <button class="card-learn-btn ${isLearned ? 'learned' : ''}" 
                            onclick="toggleLearned('suffix', '${item.suffix}', '${cardId}')">
                        ${isLearned ? '✓ 已学会' : '标记为已学会'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 渲染词根卡片 =====
function renderRootsCards() {
    const container = document.getElementById('rootsGrid');
    
    container.innerHTML = rootsData.map((item, index) => {
        const isLearned = learningProgress.roots.has(item.root);
        const cardId = `root-${index}`;
        
        return `
            <div class="root-card" id="${cardId}">
                <div class="root-header">
                    <div class="root-name">${item.root}</div>
                    <div class="root-info">
                        <div class="root-meaning">${item.meaning}</div>
                        <div class="root-mnemonic">💡 ${item.mnemonic}</div>
                    </div>
                </div>
                <div class="root-body">
                    <div class="root-words-title">单词示例</div>
                    ${item.words.map(w => `
                        <div class="root-word-item">
                            <span class="root-word">${w.word}</span>
                            <span class="root-word-meaning">${w.meaning}</span>
                            <span class="root-word-logic">${w.logic}</span>
                        </div>
                    `).join('')}
                    <button class="card-learn-btn ${isLearned ? 'learned' : ''}" 
                            onclick="toggleLearned('roots', '${item.root}', '${cardId}')">
                        ${isLearned ? '✓ 已学会' : '标记为已学会'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 切换学习状态 =====
function toggleLearned(type, key, cardId) {
    const set = learningProgress[type];
    if (set.has(key)) {
        set.delete(key);
    } else {
        set.add(key);
        // 添加学习动画
        const card = document.getElementById(cardId);
        card.style.transform = 'scale(1.02)';
        setTimeout(() => card.style.transform = '', 200);
    }
    saveProgress();
    
    // 更新按钮状态
    const btn = document.querySelector(`#${cardId} .card-learn-btn`);
    if (btn) {
        const isLearned = set.has(key);
        btn.classList.toggle('learned', isLearned);
        btn.textContent = isLearned ? '✓ 已学会' : '标记为已学会';
    }
}

// ===== 分类标签切换 =====
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const parent = tab.closest('section');
        parent.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const category = tab.dataset.category;
        if (parent.id === 'prefix') {
            renderPrefixCards(category);
        } else if (parent.id === 'suffix') {
            renderSuffixCards(category);
        }
    });
});

// ===== 测验功能 =====
function startQuiz(type) {
    quizType = type;
    currentQuiz = [...quizQuestions[type]];
    
    // 随机打乱题目
    currentQuiz.sort(() => Math.random() - 0.5);
    
    currentQuestionIndex = 0;
    currentScore = 0;
    userAnswers = [];
    
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizGame').style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const total = currentQuiz.length;
    
    // 更新进度
    document.getElementById('quizProgressFill').style.width = ((currentQuestionIndex / total) * 100) + '%';
    document.getElementById('quizProgressText').textContent = `${currentQuestionIndex + 1}/${total}`;
    document.getElementById('scoreValue').textContent = currentScore;
    
    // 显示题目
    document.getElementById('quizQuestion').innerHTML = `
        <span class="question-type">${getQuizTypeName(quizType)}</span>
        <div class="question-text">${question.question}</div>
    `;
    
    // 显示选项
    const optionsHtml = question.options.map((opt, i) => `
        <button class="quiz-option" onclick="selectOption(${i})" data-index="${i}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${opt}</span>
        </button>
    `).join('');
    
    document.getElementById('quizOptions').innerHTML = optionsHtml;
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('quizNextBtn').style.display = 'none';
}

function getQuizTypeName(type) {
    const names = {
        prefix: '前缀',
        suffix: '后缀',
        roots: '词根',
        mixed: '综合'
    };
    return names[type] || '测验';
}

function selectOption(index) {
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = index === question.answer;
    
    // 禁用所有选项
    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
        btn.disabled = true;
        btn.style.cursor = 'default';
        if (i === question.answer) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // 更新分数
    if (isCorrect) {
        currentScore++;
        document.getElementById('scoreValue').textContent = currentScore;
    }
    
    // 记录答案
    userAnswers.push({
        question: question.question,
        selected: question.options[index],
        correct: question.options[question.answer],
        isCorrect: isCorrect
    });
    
    // 显示反馈
    const feedback = document.getElementById('quizFeedback');
    feedback.style.display = 'block';
    feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
    feedback.innerHTML = isCorrect 
        ? '✅ 回答正确！' 
        : `❌ 回答错误。正确答案是：<strong>${question.options[question.answer]}</strong>`;
    
    // 显示下一题按钮
    document.getElementById('quizNextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuiz.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    const total = currentQuiz.length;
    const percentage = (currentScore / total * 100);
    
    document.getElementById('resultScore').textContent = currentScore;
    document.getElementById('resultTotal').textContent = total;
    
    // 根据分数设置图标和消息
    let icon, title, message;
    if (percentage >= 90) {
        icon = '🏆';
        title = '太棒了！';
        message = '你已经掌握了这些词根词缀！';
    } else if (percentage >= 70) {
        icon = '🎉';
        title = '做得很好！';
        message = '继续加油，你离掌握不远了！';
    } else if (percentage >= 50) {
        icon = '💪';
        title = '还不错！';
        message = '再复习一下，你会做得更好！';
    } else {
        icon = '📚';
        title = '继续学习！';
        message = '建议先复习相关知识点再来挑战！';
    }
    
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;
    
    // 显示详细结果
    const detailsHtml = userAnswers.map((ans, i) => `
        <div class="result-detail-item">
            <span class="detail-status">${ans.isCorrect ? '✅' : '❌'}</span>
            <span class="detail-question">${i + 1}. ${ans.question}</span>
            <span class="detail-answer">${ans.isCorrect ? '' : `正确答案: ${ans.correct}`}</span>
        </div>
    `).join('');
    
    document.getElementById('resultDetails').innerHTML = detailsHtml;
}

function restartQuiz() {
    startQuiz(quizType);
}

// ===== 单词拆解动画 =====
function animateWordBreakdown(element, parts) {
    const html = parts.map((part, i) => {
        let className = 'breakdown-part';
        if (part.type === 'prefix') className += ' breakdown-prefix';
        else if (part.type === 'root') className += ' breakdown-root';
        else if (part.type === 'suffix') className += ' breakdown-suffix';
        
        const plus = i < parts.length - 1 ? '<span class="breakdown-plus">+</span>' : '';
        return `<span class="${className}">${part.text}</span>${plus}`;
    }).join('');
    
    element.innerHTML = html;
}

// ===== 背诵表功能 =====
let reciteFilter = 'all';
let reciteSearch = '';

function renderReciteTable() {
    const grid = document.getElementById('reciteGrid');
    const stats = document.getElementById('reciteStats');
    const noResult = document.getElementById('reciteNoResult');
    if (!grid || !reciteData) return;

    let items = reciteData;

    // 分类筛选
    if (reciteFilter !== 'all') {
        items = items.filter(item => item.type === reciteFilter);
    }

    // 搜索筛选（支持名称和中文意思）
    if (reciteSearch.trim()) {
        const kw = reciteSearch.trim().toLowerCase();
        items = items.filter(item =>
            item.name.toLowerCase().includes(kw) ||
            (item.meaning && item.meaning.toLowerCase().includes(kw))
        );
    }

    // 更新统计
    const pCount = items.filter(i => i.type === 'prefix').length;
    const rCount = items.filter(i => i.type === 'root').length;
    const sCount = items.filter(i => i.type === 'suffix').length;
    stats.innerHTML = `
        <span>共 ${items.length} 个</span>
        ${reciteFilter === 'all' || reciteFilter === 'prefix' ? `<span>前缀 ${pCount} 个</span>` : ''}
        ${reciteFilter === 'all' || reciteFilter === 'root' ? `<span>词根 ${rCount} 个</span>` : ''}
        ${reciteFilter === 'all' || reciteFilter === 'suffix' ? `<span>后缀 ${sCount} 个</span>` : ''}
    `;

    // 无结果
    if (items.length === 0) {
        noResult.classList.remove('hidden');
        grid.innerHTML = '';
        return;
    } else {
        noResult.classList.add('hidden');
    }

    // 渲染背诵卡片（只显示中英文意思）
    const typeLabels = { prefix: '前缀', root: '词根', suffix: '后缀' };
    const typeColors = { prefix: 'linear-gradient(135deg,#e74c3c,#c0392b)', root: 'linear-gradient(135deg,#27ae60,#229954)', suffix: 'linear-gradient(135deg,#f39c12,#e67e22)' };

    grid.innerHTML = items.map((item, index) => `
        <div class="recite-card recite-flashcard" style="animation-delay:${(index % 20) * 0.03}s">
            <div class="recite-card-header" style="background:${typeColors[item.type]}">
                <span class="recite-type-badge">${typeLabels[item.type]}</span>
                <div class="recite-card-name">${item.name}</div>
            </div>
            <div class="recite-card-body">
                <div class="recite-meaning">${item.meaning || ''}</div>
            </div>
        </div>
    `).join('');
}

// 背诵表筛选按钮
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.recite-filter-btn');
    if (!btn) return;
    document.querySelectorAll('.recite-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    reciteFilter = btn.dataset.filter;
    renderReciteTable();
});

// 背诵表搜索
document.addEventListener('input', (e) => {
    if (e.target.id === 'reciteSearchInput') {
        reciteSearch = e.target.value;
        renderReciteTable();
    }
});

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateProgressUI();

    // 初始渲染
    renderPrefixCards('negative');
    renderSuffixCards('noun');
    renderRootsCards();
    renderReciteTable();
    initViktorDays();

    // 添加卡片入场动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.affix-card, .root-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(card);
    });
});

// ===== 单词拆解工具 =====
function analyzeWord() {
    const input = document.getElementById('analyzerInput');
    const word = input.value.trim().toLowerCase();
    if (!word) return;

    const result = doAnalyze(word);
    showAnalyzerResult(word, result);
}

function quickAnalyze(word) {
    document.getElementById('analyzerInput').value = word;
    const result = doAnalyze(word.toLowerCase());
    showAnalyzerResult(word, result);
}

function doAnalyze(word) {
    if (!reciteData || reciteData.length === 0) return null;

    const prefixes = reciteData.filter(i => i.type === 'prefix');
    const suffixes = reciteData.filter(i => i.type === 'suffix');
    const roots = reciteData.filter(i => i.type === 'root');

    // 收集所有可能的前缀匹配
    let prefixMatches = [];
    for (const p of prefixes) {
        const pText = p.name.replace(/-$/, '');
        if (word.startsWith(pText)) {
            prefixMatches.push({ ...p, stripped: pText, len: pText.length });
        }
    }
    prefixMatches.sort((a, b) => b.len - a.len);

    // 收集所有可能的后缀匹配
    let suffixMatches = [];
    for (const s of suffixes) {
        const sText = s.name.replace(/^-/, '');
        if (word.endsWith(sText)) {
            suffixMatches.push({ ...s, stripped: sText, len: sText.length });
        }
    }
    suffixMatches.sort((a, b) => b.len - a.len);

    // 尝试所有前缀+后缀组合，找最佳匹配
    let best = null;
    let bestScore = -1;

    const tryCombos = (usePrefix, useSuffix) => {
        const pList = usePrefix ? prefixMatches : [{ stripped: '', len: 0, name: '', meaning: '', type: 'prefix' }];
        const sList = useSuffix ? suffixMatches : [{ stripped: '', len: 0, name: '', meaning: '', type: 'suffix' }];

        for (const p of pList) {
            for (const s of sList) {
                if (p.len + s.len >= word.length) continue;
                const middle = word.slice(p.len, word.length - s.len || undefined);
                if (!middle) continue;

                // 在中间部分找词根
                let matchedRoot = null;
                for (const r of roots) {
                    if (middle.includes(r.name)) {
                        if (!matchedRoot || r.name.length > matchedRoot.name.length) {
                            matchedRoot = r;
                        }
                    }
                }

                let score = p.len + s.len;
                if (matchedRoot) score += matchedRoot.name.length * 2;
                if (p.meaning) score += 1;
                if (s.meaning) score += 1;

                if (score > bestScore) {
                    bestScore = score;
                    best = { prefix: p.len > 0 ? p : null, suffix: s.len > 0 ? s : null, root: matchedRoot, middle };
                }
            }
        }
    };

    tryCombos(true, true);
    tryCombos(true, false);
    tryCombos(false, true);
    tryCombos(false, false);

    return best;
}

function showAnalyzerResult(word, result) {
    const resultBox = document.getElementById('analyzerResult');
    const emptyBox = document.getElementById('analyzerEmpty');
    const wordEl = document.getElementById('analyzerWord');
    const partsEl = document.getElementById('analyzerParts');
    const meaningEl = document.getElementById('analyzerMeaning');

    emptyBox.classList.add('hidden');
    resultBox.classList.remove('hidden');

    wordEl.textContent = word;

    if (!result || (!result.prefix && !result.suffix && !result.root)) {
        partsEl.innerHTML = `<span class="analyzer-part analyzer-part-word">${word}</span>`;
        meaningEl.innerHTML = `<p>未找到匹配的拆解，这个单词可能是一个简单词，或者词根词缀不在当前数据库中。</p>`;
        return;
    }

    // 构建拆解公式
    let formula = '';
    let formulaMean = '';
    const parts = [];

    if (result.prefix) {
        formula += `<span class="analyzer-part analyzer-part-prefix">${result.prefix.name}</span>`;
        formulaMean += `<span class="analyzer-mean-item prefix-mean">${result.prefix.name} = ${result.prefix.meaning}</span>`;
        parts.push({ text: result.prefix.stripped, type: 'prefix' });
    }
    if (result.root) {
        const idx = result.middle.indexOf(result.root.name);
        if (idx > 0) {
            parts.push({ text: result.middle.slice(0, idx), type: 'connect' });
        }
        formula += `<span class="analyzer-part analyzer-part-root">${result.root.name}</span>`;
        formulaMean += `<span class="analyzer-mean-item root-mean">${result.root.name} = ${result.root.meaning || '词根'}</span>`;
        parts.push({ text: result.root.name, type: 'root' });
        const afterRoot = result.middle.slice(idx + result.root.name.length);
        if (afterRoot) {
            parts.push({ text: afterRoot, type: 'connect' });
        }
    } else if (result.middle) {
        parts.push({ text: result.middle, type: 'connect' });
    }
    if (result.suffix) {
        formula += `<span class="analyzer-part analyzer-part-suffix">${result.suffix.name}</span>`;
        formulaMean += `<span class="analyzer-mean-item suffix-mean">${result.suffix.name} = ${result.suffix.meaning}</span>`;
        parts.push({ text: result.suffix.stripped, type: 'suffix' });
    }

    // 加号连接
    const partNames = [];
    if (result.prefix) partNames.push(result.prefix.name);
    if (result.root) partNames.push(result.root.name);
    if (result.suffix) partNames.push(result.suffix.name);

    partsEl.innerHTML = `
        <div class="analyzer-formula">${partNames.join(' <span class="analyzer-plus">+</span> ')}</div>
        <div class="analyzer-visual">
            ${word.split('').map((ch, i) => {
                let cls = 'analyzer-char';
                let label = '';
                let pos = 0;
                if (result.prefix && i < result.prefix.len) {
                    cls += ' char-prefix';
                    label = i === Math.floor((result.prefix.len - 1) / 2) ? '前缀' : '';
                } else if (result.suffix && i >= word.length - result.suffix.len) {
                    cls += ' char-suffix';
                    label = i === word.length - Math.floor((result.suffix.len + 1) / 2) ? '后缀' : '';
                } else if (result.root) {
                    const rootStart = result.prefix ? result.prefix.len : 0;
                    const rootIdx = result.middle.indexOf(result.root.name);
                    const absStart = rootStart + rootIdx;
                    const absEnd = absStart + result.root.name.length;
                    if (i >= absStart && i < absEnd) {
                        cls += ' char-root';
                        label = i === absStart + Math.floor(result.root.name.length / 2) ? '词根' : '';
                    }
                }
                return `<span class="${cls}">${ch}${label ? `<span class="char-label">${label}</span>` : ''}</span>`;
            }).join('')}
        </div>
    `;

    meaningEl.innerHTML = `
        <div class="analyzer-meaning-title">各部分含义</div>
        <div class="analyzer-meaning-list">${formulaMean}</div>
    `;
}

// ===== 维克多单词功能 =====
let viktorCurrentDay = '';
let viktorRandomPool = [];
let viktorRandomMode = 'en';
let viktorRandomQuestions = [];
let viktorAnswersShown = false;

function initViktorDays() {
    const select = document.getElementById('viktorDaySelect');
    if (!select || !viktorData) return;
    // 避免重复填充：如果已有超过1个选项，说明已经初始化过
    if (select.options.length > 1) return;
    const days = [...new Set(viktorData.map(w => w.day))].sort((a, b) => {
        const na = parseInt(a.replace('Day ', ''));
        const nb = parseInt(b.replace('Day ', ''));
        return na - nb;
    });
    days.forEach(day => {
        const opt = document.createElement('option');
        opt.value = day;
        opt.textContent = day;
        select.appendChild(opt);
    });
}

function renderViktorList() {
    const select = document.getElementById('viktorDaySelect');
    const list = document.getElementById('viktorList');
    const empty = document.getElementById('viktorEmpty');
    const randomBtn = document.getElementById('viktorRandomBtn');
    const randomCnBtn = document.getElementById('viktorRandomCnBtn');
    if (!select || !list) return;

    viktorCurrentDay = select.value;
    if (!viktorCurrentDay) {
        list.innerHTML = '';
        empty.style.display = 'block';
        randomBtn.style.display = 'none';
        randomCnBtn.style.display = 'none';
        return;
    }

    empty.style.display = 'none';
    randomBtn.style.display = 'inline-flex';
    randomCnBtn.style.display = 'inline-flex';

    const words = viktorData.filter(w => w.day === viktorCurrentDay);
    viktorRandomPool = words;

    list.innerHTML = words.map((w, i) => `
        <div class="viktor-word-card" style="animation-delay:${(i % 10) * 0.04}s">
            <div class="viktor-word-header">
                <span class="viktor-word-name">${w.word}</span>
                <span class="viktor-word-pos">${w.pos}</span>
            </div>
            <div class="viktor-word-formula">${w.formula}</div>
            ${w.prefix ? `<div class="viktor-word-part viktor-prefix"><b>前缀</b>：${w.prefix}</div>` : ''}
            ${w.root ? `<div class="viktor-word-part viktor-root"><b>词根</b>：${w.root}</div>` : ''}
            ${w.suffix ? `<div class="viktor-word-part viktor-suffix"><b>后缀</b>：${w.suffix}</div>` : ''}
            ${w.combo ? `<div class="viktor-word-part viktor-combo"><b>组合</b>：${w.combo}</div>` : ''}
        </div>
    `).join('');
}

// 随机抽查：一次抽5题
function startViktorRandom(mode) {
    if (!viktorRandomPool.length) return;
    viktorRandomMode = mode;
    viktorAnswersShown = false;
    document.getElementById('viktorRandomPanel').classList.remove('hidden');
    document.getElementById('viktorShowAllBtn').textContent = '📖 显示全部答案';
    generateViktorQuestions();
    renderViktorQuestions();
}

function generateViktorQuestions() {
    viktorRandomQuestions = [];
    const pool = [...viktorRandomPool];
    const count = Math.min(5, pool.length);
    for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        viktorRandomQuestions.push(pool.splice(idx, 1)[0]);
    }
}

function renderViktorQuestions() {
    const modeEl = document.getElementById('viktorRandomMode');
    const dayEl = document.getElementById('viktorRandomDay');
    const qsEl = document.getElementById('viktorRandomQuestions');

    modeEl.textContent = viktorRandomMode === 'en' ? '🇬🇧 按英文抽查 — 看英文，回忆拆解' : '🇨🇳 按中文抽查 — 看拆解，回忆单词';
    dayEl.textContent = `${viktorRandomQuestions[0]?.day || ''} — 共5题`;

    qsEl.innerHTML = viktorRandomQuestions.map((q, i) => {
        const partsHtml = [
            q.prefix ? `<div class="viktor-qa-part viktor-qa-prefix">${q.prefix}</div>` : '',
            q.root ? `<div class="viktor-qa-part viktor-qa-root">${q.root}</div>` : '',
            q.suffix ? `<div class="viktor-qa-part viktor-qa-suffix">${q.suffix}</div>` : '',
            q.combo ? `<div class="viktor-qa-part viktor-qa-combo">${q.combo}</div>` : ''
        ].join('');

        if (viktorRandomMode === 'en') {
            // 英文抽查：显示英文单词，答案=拆解
            return `
                <div class="viktor-qa-card" data-index="${i}">
                    <div class="viktor-qa-question">
                        <span class="viktor-qa-num">${i + 1}</span>
                        <span class="viktor-qa-word">${q.word}</span>
                        <span class="viktor-qa-pos">${q.pos}</span>
                    </div>
                    <div class="viktor-qa-answer" id="viktorAnswer${i}">
                        <div class="viktor-qa-formula">${q.formula}</div>
                        ${partsHtml}
                    </div>
                </div>
            `;
        } else {
            // 中文抽查：显示拆解，答案=英文单词
            return `
                <div class="viktor-qa-card" data-index="${i}">
                    <div class="viktor-qa-question">
                        <span class="viktor-qa-num">${i + 1}</span>
                        <span class="viktor-qa-hint">${q.formula}</span>
                    </div>
                    <div class="viktor-qa-hint-parts">${partsHtml}</div>
                    <div class="viktor-qa-answer" id="viktorAnswer${i}">
                        <span class="viktor-qa-word">${q.word}</span>
                        <span class="viktor-qa-pos">${q.pos}</span>
                    </div>
                </div>
            `;
        }
    }).join('');

    // 初始隐藏所有答案
    document.querySelectorAll('.viktor-qa-answer').forEach(el => {
        el.classList.add('viktor-qa-hidden');
    });
    document.querySelectorAll('.viktor-qa-hint-parts').forEach(el => {
        el.classList.remove('viktor-qa-hidden');
    });
}

function showAllViktorAnswers() {
    const btn = document.getElementById('viktorShowAllBtn');
    viktorAnswersShown = !viktorAnswersShown;
    document.querySelectorAll('.viktor-qa-answer').forEach(el => {
        if (viktorAnswersShown) {
            el.classList.remove('viktor-qa-hidden');
        } else {
            el.classList.add('viktor-qa-hidden');
        }
    });
    btn.textContent = viktorAnswersShown ? '🙈 隐藏全部答案' : '📖 显示全部答案';
}

function refreshViktorRandom() {
    viktorAnswersShown = false;
    document.getElementById('viktorShowAllBtn').textContent = '📖 显示全部答案';
    generateViktorQuestions();
    renderViktorQuestions();
}

function closeViktorRandom() {
    document.getElementById('viktorRandomPanel').classList.add('hidden');
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (document.activeElement && document.activeElement.id === 'analyzerInput') {
            analyzeWord();
            return;
        }
        if (document.getElementById('quizGame').style.display === 'block') {
            const nextBtn = document.getElementById('quizNextBtn');
            if (nextBtn && nextBtn.style.display !== 'none') {
                nextQuestion();
            }
        }
    }
    if (document.getElementById('quizGame').style.display === 'block') {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 4) {
            const options = document.querySelectorAll('.quiz-option:not([disabled])');
            if (options[key - 1]) {
                selectOption(key - 1);
            }
        }
    }
});
