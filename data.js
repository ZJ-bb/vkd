// ===== 前缀数据 =====
const prefixData = {
    negative: [
        {
            prefix: 'un-',
            meaning: '不，无，相反',
            explanation: '最基础的否定前缀，可以直接加在形容词或动词前面，表示"相反"或"取消"。',
            examples: [
                { base: 'happy', result: 'unhappy', meaning: '不快乐', breakdown: 'un(不) + happy(快乐) → 不快乐的' },
                { base: 'able', result: 'unable', meaning: '不能', breakdown: 'un(不) + able(能够) → 不能够的' },
                { base: 'fair', result: 'unfair', meaning: '不公平', breakdown: 'un(不) + fair(公平) → 不公平的' },
                { base: 'do', result: 'undo', meaning: '撤销', breakdown: 'un(取消) + do(做) → 取消做 → 撤销' }
            ]
        },
        {
            prefix: 'dis-',
            meaning: '不，消失，分开',
            explanation: 'dis- 来自拉丁语，表示"分开、远离"，引申为"否定、相反"。',
            examples: [
                { base: 'agree', result: 'disagree', meaning: '不同意', breakdown: 'dis(不) + agree(同意) → 不同意' },
                { base: 'appear', result: 'disappear', meaning: '消失', breakdown: 'dis(消失) + appear(出现) → 不出现 → 消失' },
                { base: 'like', result: 'dislike', meaning: '不喜欢', breakdown: 'dis(不) + like(喜欢) → 不喜欢' },
                { base: 'cover', result: 'discover', meaning: '发现', breakdown: 'dis(去掉) + cover(盖子) → 去掉盖子 → 发现' }
            ]
        },
        {
            prefix: 'in- / im- / il- / ir-',
            meaning: '不，无（根据后面字母变化）',
            explanation: '这是英语中最常见的否定前缀之一。为了发音顺口，当后面遇到 b/m/p 时变成 im-，遇到 l 时变成 il-，遇到 r 时变成 ir-。这就是"同化现象"！',
            examples: [
                { base: 'correct', result: 'incorrect', meaning: '不正确', breakdown: 'in(不) + correct(正确) → 不正确' },
                { base: 'possible', result: 'impossible', meaning: '不可能', breakdown: 'im(不，后面是p) + possible(可能) → 不可能' },
                { base: 'legal', result: 'illegal', meaning: '非法', breakdown: 'il(不，后面是l) + legal(合法) → 非法' },
                { base: 'regular', result: 'irregular', meaning: '不规则', breakdown: 'ir(不，后面是r) + regular(规则) → 不规则' },
                { base: 'moral', result: 'immoral', meaning: '不道德的', breakdown: 'im(不，后面是m) + moral(道德) → 不道德的' }
            ]
        },
        {
            prefix: 'non-',
            meaning: '非，不',
            explanation: 'non- 表示"不是、没有"，语气比 un-/in- 更客观，常用于学术或正式场合。',
            examples: [
                { base: 'stop', result: 'nonstop', meaning: '直达的/不停的', breakdown: 'non(不) + stop(停) → 不停 → 直达' },
                { base: 'sense', result: 'nonsense', meaning: '胡说', breakdown: 'non(无) + sense(意义) → 无意义的话 → 胡说' },
                { base: 'fiction', result: 'nonfiction', meaning: '非虚构', breakdown: 'non(非) + fiction(虚构) → 非虚构' }
            ]
        },
        {
            prefix: 'anti-',
            meaning: '反，抗，防止',
            explanation: 'anti- 来自希腊语，表示"对抗、相反"，常用于科技、医学词汇。',
            examples: [
                { base: 'war', result: 'antiwar', meaning: '反战的', breakdown: 'anti(反) + war(战争) → 反战的' },
                { base: 'body', result: 'antibody', meaning: '抗体', breakdown: 'anti(抗) + body(体) → 抗体' },
                { base: 'biotic', result: 'antibiotic', meaning: '抗生素', breakdown: 'anti(抗) + biotic(生命的) → 抗生命的 → 抗生素' }
            ]
        },
        {
            prefix: 'de-',
            meaning: '去掉，向下，相反',
            explanation: 'de- 表示"向下、去掉、相反"的动作，常带有"降级、撤销"的含义。',
            examples: [
                { base: 'code', result: 'decode', meaning: '解码', breakdown: 'de(去掉) + code(密码) → 去掉密码 → 解码' },
                { base: 'press', result: 'depress', meaning: '压抑/使沮丧', breakdown: 'de(向下) + press(压) → 向下压 → 压抑' },
                { base: 'value', result: 'devalue', meaning: '贬值', breakdown: 'de(降低) + value(价值) → 降低价值 → 贬值' }
            ]
        },
        {
            prefix: 'a- / an-',
            meaning: '不，无，缺少',
            explanation: 'a-/an- 是希腊语来源的否定前缀，an- 用在元音字母前。常用于科学术语。',
            examples: [
                { base: 'typical', result: 'atypical', meaning: '非典型的', breakdown: 'a(不) + typical(典型的) → 非典型的' },
                { base: 'moral', result: 'amoral', meaning: '非道德的', breakdown: 'a(无) + moral(道德) → 与道德无关的' },
                { base: 'onym', result: 'anonymous', meaning: '匿名的', breakdown: 'an(无) + onym(名字) + ous → 无名字的 → 匿名' }
            ]
        }
    ],
    direction: [
        {
            prefix: 're-',
            meaning: '回，向后，再次',
            explanation: 're- 来自拉丁语，表示"回、向后、再次"，是最常用的前缀之一。',
            examples: [
                { base: 'turn', result: 'return', meaning: '返回', breakdown: 're(回) + turn(转) → 转回来 → 返回' },
                { base: 'write', result: 'rewrite', meaning: '重写', breakdown: 're(再次) + write(写) → 再次写 → 重写' },
                { base: 'view', result: 'review', meaning: '复习/回顾', breakdown: 're(回) + view(看) → 回头看 → 复习' },
                { base: 'act', result: 'react', meaning: '反应', breakdown: 're(回) + act(做) → 做回去 → 反应' }
            ]
        },
        {
            prefix: 'pre-',
            meaning: '前，预先',
            explanation: 'pre- 来自拉丁语，表示"在...之前、预先"。',
            examples: [
                { base: 'view', result: 'preview', meaning: '预习/预览', breakdown: 'pre(前) + view(看) → 提前看 → 预习' },
                { base: 'pay', result: 'prepay', meaning: '预付', breakdown: 'pre(预先) + pay(支付) → 预先支付' },
                { base: 'dict', result: 'predict', meaning: '预言', breakdown: 'pre(前) + dict(说) → 提前说 → 预言' },
                { base: 'pare', result: 'prepare', meaning: '准备', breakdown: 'pre(前) + pare(安排) → 提前安排 → 准备' }
            ]
        },
        {
            prefix: 'ab-',
            meaning: '离开，脱离，相反',
            explanation: 'ab- 来自拉丁语，表示"away from（离开）"。单词中看到 ab- 就联想"偏离、离开原来的状态"。',
            examples: [
                { base: 'normal', result: 'abnormal', meaning: '不正常的', breakdown: 'ab(离开) + normal(正常) → 偏离正常的 → 不正常' },
                { base: 'sent', result: 'absent', meaning: '缺席的', breakdown: 'ab(离开) + sent(坐/存在) → 离开座位 → 缺席' },
                { base: 'duct', result: 'abduct', meaning: '绑架', breakdown: 'ab(离开) + duct(引导) → 把人引导走 → 绑架' },
                { base: 'use', result: 'abuse', meaning: '滥用', breakdown: 'ab(偏离) + use(使用) → 偏离正常使用 → 滥用' }
            ]
        },
        {
            prefix: 'ad- / ac- / af- / ag- / al- / ap- / ar- / as- / at-',
            meaning: '朝向，加强，靠近',
            explanation: '这是英语构词法中最经典的"同化现象"！前缀 ad-（朝向）是个"变色龙"，为了和后面的词根拼在一起时发音更流畅，它的尾字母 d 会根据词根的首字母发生变化。遇到 c→ac-, f→af-, g→ag-, l→al-, p→ap-, r→ar-, s→as-, t→at-。你只需要记住 ad- 的核心意思是"朝向/加强"，以后看到 ac-/af-/ap-/at- 开头的单词，把它们都当成 ad- 来理解！',
            examples: [
                { base: 'cept', result: 'accept', meaning: '接受', breakdown: 'ac(朝向，ad-遇c变ac) + cept(抓) → 抓过来 → 接受' },
                { base: 'cess', result: 'access', meaning: '接近/通道', breakdown: 'ac(朝向) + cess(走) → 走过去 → 通道' },
                { base: 'fect', result: 'affect', meaning: '影响', breakdown: 'af(朝向，ad-遇f变af) + fect(做) → 对...做 → 影响' },
                { base: 'gress', result: 'aggress', meaning: '侵略', breakdown: 'ag(朝向，ad-遇g变ag) + gress(走) → 走向别人 → 侵略' },
                { base: 'lure', result: 'allure', meaning: '吸引/诱惑', breakdown: 'al(朝向，ad-遇l变al) + lure(诱惑) → 不断诱惑 → 吸引' },
                { base: 'pear', result: 'appear', meaning: '出现', breakdown: 'ap(朝向，ad-遇p变ap) + pear(出现) → 显现出来 → 出现' },
                { base: 'rive', result: 'arrive', meaning: '到达', breakdown: 'ar(朝向，ad-遇r变ar) + rive(河岸) → 到达河岸 → 到达' },
                { base: 'sist', result: 'assist', meaning: '协助', breakdown: 'as(朝向，ad-遇s变as) + sist(站) → 站在旁边 → 协助' },
                { base: 'tract', result: 'attract', meaning: '吸引', breakdown: 'at(朝向，ad-遇t变at) + tract(拉) → 拉向自己 → 吸引' }
            ]
        },
        {
            prefix: 'com- / con- / col- / cor- / co-',
            meaning: '共同，一起，加强',
            explanation: 'com- 是另一个"变色龙"前缀！它表示"共同、一起"。当后面遇到 l 时变成 col-，遇到 r 时变成 cor-，遇到元音或 h 时变成 co-，其余情况多为 con- 或 com-。核心记住"一起、共同"就够了！',
            examples: [
                { base: 'bine', result: 'combine', meaning: '结合', breakdown: 'com(一起) + bine(绑) → 绑在一起 → 结合' },
                { base: 'nect', result: 'connect', meaning: '连接', breakdown: 'con(一起) + nect(绑) → 绑在一起 → 连接' },
                { base: 'lect', result: 'collect', meaning: '收集', breakdown: 'col(一起，com-遇l变col) + lect(选) → 选到一起 → 收集' },
                { base: 'rect', result: 'correct', meaning: '正确的/纠正', breakdown: 'cor(一起，com-遇r变cor) + rect(直) → 一起拉直 → 纠正' },
                { base: 'operate', result: 'cooperate', meaning: '合作', breakdown: 'co(一起，遇元音变co) + operate(操作) → 一起操作 → 合作' }
            ]
        },
        {
            prefix: 'ex- / e-',
            meaning: '向外，出去，前任',
            explanation: 'ex- 来自拉丁语，表示"out（向外）"。在元音前简化为 e-。可以联想"exit（出口）"来记忆。',
            examples: [
                { base: 'port', result: 'export', meaning: '出口', breakdown: 'ex(向外) + port(运) → 运出去 → 出口' },
                { base: 'it', result: 'exit', meaning: '出口/退出', breakdown: 'ex(出去) + it(走) → 走出去 → 出口' },
                { base: 'ject', result: 'eject', meaning: '喷射/驱逐', breakdown: 'e(向外) + ject(扔) → 扔出去 → 驱逐' },
                { base: 'vapor', result: 'evaporate', meaning: '蒸发', breakdown: 'e(向外) + vapor(蒸汽) + ate → 使蒸汽出去 → 蒸发' }
            ]
        },
        {
            prefix: 'sub- / suc- / suf- / sup-',
            meaning: '下，次，副，接近',
            explanation: 'sub- 来自拉丁语，表示"under（在下面）"。遇到 c→suc-, f→suf-, p→sup-。记住"在下面、次一等"的意思。',
            examples: [
                { base: 'way', result: 'subway', meaning: '地铁', breakdown: 'sub(下) + way(路) → 地下的路 → 地铁' },
                { base: 'ject', result: 'subject', meaning: '主题/科目', breakdown: 'sub(下) + ject(扔) → 扔下去让大家讨论 → 主题' },
                { base: 'ceed', result: 'succeed', meaning: '成功/继承', breakdown: 'suc(下，sub-遇c变suc) + ceed(走) → 跟着走下去 → 继承/成功' },
                { base: 'fer', result: 'suffer', meaning: '遭受', breakdown: 'suf(下，sub-遇f变suf) + fer(承受) → 在下面承受 → 遭受' }
            ]
        },
        {
            prefix: 'inter-',
            meaning: '在...之间，互相',
            explanation: 'inter- 来自拉丁语，表示"在...中间"。现代常用词如 internet（互联网）就是这个前缀。',
            examples: [
                { base: 'net', result: 'internet', meaning: '互联网', breakdown: 'inter(互相) + net(网) → 互相连接的网 → 互联网' },
                { base: 'national', result: 'international', meaning: '国际的', breakdown: 'inter(之间) + national(国家的) → 国家之间的 → 国际' },
                { base: 'view', result: 'interview', meaning: '面试/采访', breakdown: 'inter(互相) + view(看) → 互相看 → 面试' }
            ]
        },
        {
            prefix: 'trans-',
            meaning: '穿过，跨越，转变',
            explanation: 'trans- 来自拉丁语，表示"across（穿过）"。看到 trans- 就联想"从一边到另一边"。',
            examples: [
                { base: 'port', result: 'transport', meaning: '运输', breakdown: 'trans(跨越) + port(运) → 从一个地方运到另一个地方 → 运输' },
                { base: 'form', result: 'transform', meaning: '转变', breakdown: 'trans(转变) + form(形状) → 转变形状 → 转变' },
                { base: 'late', result: 'translate', meaning: '翻译', breakdown: 'trans(跨越) + late(带) → 把意思带到另一种语言 → 翻译' }
            ]
        },
        {
            prefix: 'super- / sur-',
            meaning: '超过，在...上面',
            explanation: 'super- 来自拉丁语，表示"above（在...之上）"。sur- 是 super- 的简化形式。现代词 superhero（超级英雄）就是这个前缀。',
            examples: [
                { base: 'market', result: 'supermarket', meaning: '超市', breakdown: 'super(超级) + market(市场) → 超级市场' },
                { base: 'star', result: 'superstar', meaning: '超级明星', breakdown: 'super(超级) + star(明星) → 超级明星' },
                { base: 'pass', result: 'surpass', meaning: '超越', breakdown: 'sur(超过) + pass(过) → 超过 → 超越' }
            ]
        },
        {
            prefix: 'intro-',
            meaning: '向内，进入',
            explanation: 'intro- 来自拉丁语，表示"向内、进入"。和 ex-（向外）正好相反。',
            examples: [
                { base: 'duce', result: 'introduce', meaning: '介绍', breakdown: 'intro(向内) + duce(引导) → 引进来 → 介绍' },
                { base: 'spect', result: 'introspect', meaning: '内省', breakdown: 'intro(向内) + spect(看) → 向内看 → 内省' }
            ]
        },
        {
            prefix: 'extra- / extro-',
            meaning: '向外，超过，额外',
            explanation: 'extra- 来自拉丁语，表示"outside（在外面）"。和 intro-（向内）相反。',
            examples: [
                { base: 'ordinary', result: 'extraordinary', meaning: '非凡的', breakdown: 'extra(超出) + ordinary(普通) → 超出普通 → 非凡' },
                { base: 'vert', result: 'extrovert', meaning: '外向的人', breakdown: 'extro(向外) + vert(转) → 转向外面 → 外向' }
            ]
        },
        {
            prefix: 'peri-',
            meaning: '周围，附近',
            explanation: 'peri- 来自希腊语，表示"around（周围）"。',
            examples: [
                { base: 'meter', result: 'perimeter', meaning: '周长', breakdown: 'peri(周围) + meter(测量) → 测量周围 → 周长' },
                { base: 'od', result: 'period', meaning: '时期', breakdown: 'peri(周围) + od(路) → 绕一圈的路 → 周期/时期' }
            ]
        },
        {
            prefix: 'circum-',
            meaning: '环绕，周围',
            explanation: 'circum- 来自拉丁语，表示"around（围绕）"。看到它就想"绕一圈"。',
            examples: [
                { base: 'stance', result: 'circumstance', meaning: '环境/情况', breakdown: 'circum(周围) + stance(站) → 站在周围的东西 → 环境' },
                { base: 'navigate', result: 'circumnavigate', meaning: '环球航行', breakdown: 'circum(环绕) + navigate(航行) → 环绕航行' }
            ]
        }
    ],
    degree: [
        {
            prefix: 'mis-',
            meaning: '错误，坏',
            explanation: 'mis- 来自古英语，表示"错误地、坏地"。看到 mis- 就知道这个词表示"做错了"。',
            examples: [
                { base: 'understand', result: 'misunderstand', meaning: '误解', breakdown: 'mis(错误) + understand(理解) → 错误理解 → 误解' },
                { base: 'take', result: 'mistake', meaning: '错误', breakdown: 'mis(错误) + take(拿) → 拿错了 → 错误' },
                { base: 'use', result: 'misuse', meaning: '误用', breakdown: 'mis(错误) + use(使用) → 错误使用 → 误用' }
            ]
        },
        {
            prefix: 'multi- / poly-',
            meaning: '多',
            explanation: 'multi- 来自拉丁语，poly- 来自希腊语，两者都表示"多"。multi- 更常用。',
            examples: [
                { base: 'color', result: 'multicolor', meaning: '多色的', breakdown: 'multi(多) + color(颜色) → 多色的' },
                { base: 'media', result: 'multimedia', meaning: '多媒体', breakdown: 'multi(多) + media(媒体) → 多媒体' },
                { base: 'gon', result: 'polygon', meaning: '多边形', breakdown: 'poly(多) + gon(角) → 多角形 → 多边形' }
            ]
        },
        {
            prefix: 'mono- / uni-',
            meaning: '一，单一',
            explanation: 'mono- 来自希腊语，uni- 来自拉丁语，都表示"一"。mono- 常用于科技词汇，uni- 更常见于日常词汇。',
            examples: [
                { base: 'tone', result: 'monotone', meaning: '单调的', breakdown: 'mono(单一) + tone(音调) → 单一音调 → 单调' },
                { base: 'form', result: 'uniform', meaning: '制服/统一的', breakdown: 'uni(一) + form(形状) → 一种形状 → 统一的' },
                { base: 'cycle', result: 'unicycle', meaning: '独轮车', breakdown: 'uni(一) + cycle(轮子) → 一个轮子 → 独轮车' }
            ]
        },
        {
            prefix: 'bi- / di- / du-',
            meaning: '二，双',
            explanation: 'bi- 来自拉丁语，di-/du- 也来自拉丁语，都表示"二"。bi- 最常用。',
            examples: [
                { base: 'cycle', result: 'bicycle', meaning: '自行车', breakdown: 'bi(二) + cycle(轮子) → 两个轮子 → 自行车' },
                { base: 'lingual', result: 'bilingual', meaning: '双语的', breakdown: 'bi(双) + lingual(语言的) → 双语的' },
                { base: 'oxide', result: 'dioxide', meaning: '二氧化物', breakdown: 'di(二) + oxide(氧化物) → 二氧化物' }
            ]
        },
        {
            prefix: 'tri-',
            meaning: '三',
            explanation: 'tri- 来自拉丁语，表示"三"。tricycle（三轮车）很好记。',
            examples: [
                { base: 'cycle', result: 'tricycle', meaning: '三轮车', breakdown: 'tri(三) + cycle(轮子) → 三个轮子 → 三轮车' },
                { base: 'angle', result: 'triangle', meaning: '三角形', breakdown: 'tri(三) + angle(角) → 三角形' }
            ]
        },
        {
            prefix: 'semi- / demi- / hemi-',
            meaning: '半',
            explanation: 'semi- 来自拉丁语（最常用），demi- 来自法语，hemi- 来自希腊语，都表示"半"。',
            examples: [
                { base: 'circle', result: 'semicircle', meaning: '半圆', breakdown: 'semi(半) + circle(圆) → 半圆' },
                { base: 'conductor', result: 'semiconductor', meaning: '半导体', breakdown: 'semi(半) + conductor(导体) → 半导体' },
                { base: 'sphere', result: 'hemisphere', meaning: '半球', breakdown: 'hemi(半) + sphere(球) → 半球' }
            ]
        },
        {
            prefix: 'over-',
            meaning: '过度，超过，在...之上',
            explanation: 'over- 来自古英语，表示"在...上面"，引申为"过度、超过"。',
            examples: [
                { base: 'eat', result: 'overeat', meaning: '吃得过多', breakdown: 'over(过度) + eat(吃) → 吃得过多' },
                { base: 'look', result: 'overlook', meaning: '忽视/俯瞰', breakdown: 'over(上面) + look(看) → 从上面看 → 俯瞰；没往下看 → 忽视' },
                { base: 'work', result: 'overwork', meaning: '过度工作', breakdown: 'over(过度) + work(工作) → 过度工作' }
            ]
        },
        {
            prefix: 'under-',
            meaning: '不足，在...下',
            explanation: 'under- 来自古英语，表示"在...下面"，引申为"不足、不够"。',
            examples: [
                { base: 'stand', result: 'understand', meaning: '理解', breakdown: 'under(在下面) + stand(站) → 站在下面彻底搞懂 → 理解' },
                { base: 'ground', result: 'underground', meaning: '地下的', breakdown: 'under(下) + ground(地面) → 地面下的 → 地下' },
                { base: 'estimate', result: 'underestimate', meaning: '低估', breakdown: 'under(不足) + estimate(估计) → 估计不足 → 低估' }
            ]
        },
        {
            prefix: 'hyper-',
            meaning: '超过，过度',
            explanation: 'hyper- 来自希腊语，表示"over（超过）"，语气比 over- 更强。',
            examples: [
                { base: 'active', result: 'hyperactive', meaning: '过度活跃的', breakdown: 'hyper(过度) + active(活跃的) → 过度活跃' },
                { base: 'market', result: 'hypermarket', meaning: '大型超市', breakdown: 'hyper(超级) + market(市场) → 超级市场' }
            ]
        },
        {
            prefix: 'hypo-',
            meaning: '下，低，不足',
            explanation: 'hypo- 来自希腊语，是 hyper- 的反义词，表示"under（在下面）"。',
            examples: [
                { base: 'thesis', result: 'hypothesis', meaning: '假设', breakdown: 'hypo(下面) + thesis(放) → 放在下面的基础 → 假设' },
                { base: 'thermia', result: 'hypothermia', meaning: '低温症', breakdown: 'hypo(低) + thermia(热) → 低温 → 低温症' }
            ]
        },
        {
            prefix: 'equi-',
            meaning: '相等，同等',
            explanation: 'equi- 来自拉丁语，表示"equal（相等）"。',
            examples: [
                { base: 'valent', result: 'equivalent', meaning: '相等的', breakdown: 'equi(相等) + valent(价值) → 同等价值 → 相等' },
                { base: 'librium', result: 'equilibrium', meaning: '平衡', breakdown: 'equi(相等) + librium(秤) → 两边相等 → 平衡' }
            ]
        }
    ],
    other: [
        {
            prefix: 'pro-',
            meaning: '向前，支持，代替',
            explanation: 'pro- 来自拉丁语，表示"forward（向前）"。看到 pro- 就联想"向前推进"。',
            examples: [
                { base: 'gress', result: 'progress', meaning: '进步', breakdown: 'pro(向前) + gress(走) → 向前走 → 进步' },
                { base: 'mote', result: 'promote', meaning: '促进/晋升', breakdown: 'pro(向前) + mote(动) → 向前推动 → 促进' },
                { base: 'noun', result: 'pronoun', meaning: '代词', breakdown: 'pro(代替) + noun(名词) → 代替名词 → 代词' }
            ]
        },
        {
            prefix: 'post-',
            meaning: '后，之后',
            explanation: 'post- 来自拉丁语，表示"after（在...之后）"。和 pre-（前）正好相反。',
            examples: [
                { base: 'war', result: 'postwar', meaning: '战后的', breakdown: 'post(后) + war(战争) → 战后的' },
                { base: 'pone', result: 'postpone', meaning: '推迟', breakdown: 'post(后) + pone(放) → 往后放 → 推迟' },
                { base: 'graduate', result: 'postgraduate', meaning: '研究生', breakdown: 'post(后) + graduate(毕业) → 毕业后 → 研究生' }
            ]
        },
        {
            prefix: 'auto-',
            meaning: '自己，自动',
            explanation: 'auto- 来自希腊语，表示"self（自己）"。现代常用词 automatic（自动的）就是这个前缀。',
            examples: [
                { base: 'mobile', result: 'automobile', meaning: '汽车', breakdown: 'auto(自己) + mobile(移动) → 自己移动 → 汽车' },
                { base: 'graph', result: 'autograph', meaning: '亲笔签名', breakdown: 'auto(自己) + graph(写) → 自己写的 → 亲笔签名' },
                { base: 'biography', result: 'autobiography', meaning: '自传', breakdown: 'auto(自己) + biography(传记) → 自己的传记 → 自传' }
            ]
        },
        {
            prefix: 'tele-',
            meaning: '远，远距离',
            explanation: 'tele- 来自希腊语，表示"far（远）"。现代词 telephone（电话）、television（电视）都源于此。',
            examples: [
                { base: 'phone', result: 'telephone', meaning: '电话', breakdown: 'tele(远) + phone(声音) → 远距离传声 → 电话' },
                { base: 'vision', result: 'television', meaning: '电视', breakdown: 'tele(远) + vision(看) → 远距离看 → 电视' },
                { base: 'scope', result: 'telescope', meaning: '望远镜', breakdown: 'tele(远) + scope(看) → 看远处 → 望远镜' }
            ]
        },
        {
            prefix: 'micro- / macro-',
            meaning: '小 / 大',
            explanation: 'micro- 来自希腊语表示"small（小）"，macro- 表示"large（大）"。两者正好相反。',
            examples: [
                { base: 'scope', result: 'microscope', meaning: '显微镜', breakdown: 'micro(小) + scope(看) → 看微小东西 → 显微镜' },
                { base: 'wave', result: 'microwave', meaning: '微波炉', breakdown: 'micro(微小) + wave(波) → 微波' },
                { base: 'economics', result: 'macroeconomics', meaning: '宏观经济学', breakdown: 'macro(大) + economics(经济学) → 宏观经济学' }
            ]
        },
        {
            prefix: 'bene- / mal-',
            meaning: '好 / 坏',
            explanation: 'bene- 来自拉丁语表示"good（好）"，mal- 表示"bad（坏）"。这是一对反义前缀。',
            examples: [
                { base: 'fit', result: 'benefit', meaning: '益处', breakdown: 'bene(好) + fit(做) → 做好事 → 益处' },
                { base: 'diction', result: 'benediction', meaning: '祝福', breakdown: 'bene(好) + diction(说) → 说好话 → 祝福' },
                { base: 'nutrition', result: 'malnutrition', meaning: '营养不良', breakdown: 'mal(坏) + nutrition(营养) → 坏营养 → 营养不良' }
            ]
        },
        {
            prefix: 'eu- / dys-',
            meaning: '好，正常 / 困难，不良',
            explanation: 'eu- 来自希腊语表示"good（好）"，dys- 表示"bad（坏）"。常见于医学词汇。',
            examples: [
                { base: 'phoria', result: 'euphoria', meaning: '狂喜', breakdown: 'eu(好) + phoria(感觉) → 好感觉 → 狂喜' },
                { base: 'function', result: 'dysfunction', meaning: '功能障碍', breakdown: 'dys(不良) + function(功能) → 功能不良' }
            ]
        },
        {
            prefix: 'pseudo-',
            meaning: '假的，伪的',
            explanation: 'pseudo- 来自希腊语，表示"false（假的）"。',
            examples: [
                { base: 'nym', result: 'pseudonym', meaning: '笔名/假名', breakdown: 'pseudo(假) + nym(名字) → 假名字 → 笔名' },
                { base: 'science', result: 'pseudoscience', meaning: '伪科学', breakdown: 'pseudo(伪) + science(科学) → 伪科学' }
            ]
        },
        {
            prefix: 'para-',
            meaning: '旁边，类似，异常',
            explanation: 'para- 来自希腊语，有多重含义："在旁边"、"超越"、"异常的"。',
            examples: [
                { base: 'graph', result: 'paragraph', meaning: '段落', breakdown: 'para(旁边) + graph(写) → 写在旁边的 → 段落' },
                { base: 'normal', result: 'paranormal', meaning: '超自然的', breakdown: 'para(超越) + normal(正常) → 超越正常 → 超自然' }
            ]
        },
        {
            prefix: 'en- / em-',
            meaning: '使...，进入',
            explanation: 'en- 来自古法语，表示"使...进入某种状态"。遇到 b/m/p 时变成 em-。',
            examples: [
                { base: 'able', result: 'enable', meaning: '使能够', breakdown: 'en(使) + able(能够) → 使能够' },
                { base: 'large', result: 'enlarge', meaning: '扩大', breakdown: 'en(使) + large(大) → 使变大 → 扩大' },
                { base: 'body', result: 'embody', meaning: '体现', breakdown: 'em(使，en-遇b变em) + body(身体) → 使身体里有 → 体现' }
            ]
        }
    ]
};

// ===== 后缀数据 =====
const suffixData = {
    noun: [
        {
            suffix: '-er / -or / -ist / -eer',
            meaning: '做...的人',
            explanation: '最常用的"人"后缀。-er 最通用，-or 偏拉丁语来源（如 doctor），-ist 常表示"专家/从事某领域的人"，-eer 带有"从事...的人"之意（常含辛苦意味）。',
            examples: [
                { base: 'teach', result: 'teacher', meaning: '老师', breakdown: 'teach(教) + er → 教书的人' },
                { base: 'act', result: 'actor', meaning: '演员', breakdown: 'act(表演) + or → 表演的人' },
                { base: 'art', result: 'artist', meaning: '艺术家', breakdown: 'art(艺术) + ist → 搞艺术的人' },
                { base: 'engine', result: 'engineer', meaning: '工程师', breakdown: 'engine(引擎) + eer → 摆弄引擎的人 → 工程师' }
            ]
        },
        {
            suffix: '-tion / -sion / -ation / -ment / -ure',
            meaning: '动作、状态、结果（名词）',
            explanation: '这是将动词变成名词的最常用后缀群。-tion/-sion 最常用，-ation 用于以 -ate 结尾的动词，-ment 常加在动词后表示"行为结果"，-ure 也表示"行为结果或状态"。',
            examples: [
                { base: 'educate', result: 'education', meaning: '教育', breakdown: 'educate(教育) + ion → 教育（名词）' },
                { base: 'decide', result: 'decision', meaning: '决定', breakdown: 'decide(决定) + sion → 决定（名词）' },
                { base: 'inform', result: 'information', meaning: '信息', breakdown: 'inform(通知) + ation → 通知的内容 → 信息' },
                { base: 'develop', result: 'development', meaning: '发展', breakdown: 'develop(发展) + ment → 发展的结果' },
                { base: 'press', result: 'pressure', meaning: '压力', breakdown: 'press(压) + ure → 压的结果 → 压力' }
            ]
        },
        {
            suffix: '-ness / -ity / -ty',
            meaning: '性质、状态（加在形容词后变名词）',
            explanation: '-ness 是最常见的"性质/状态"后缀，直接加在形容词后面。-ity/-ty 多用于拉丁语来源的形容词，有时会发生拼写变化（如 able → ability）。',
            examples: [
                { base: 'happy', result: 'happiness', meaning: '快乐', breakdown: 'happy(快乐的) + ness → 快乐（名词）' },
                { base: 'dark', result: 'darkness', meaning: '黑暗', breakdown: 'dark(黑暗的) + ness → 黑暗' },
                { base: 'able', result: 'ability', meaning: '能力', breakdown: 'able(能够的) → 去e加ility → 能力' },
                { base: 'active', result: 'activity', meaning: '活动', breakdown: 'active(活跃的) → 去e加ity → 活动' },
                { base: 'safe', result: 'safety', meaning: '安全', breakdown: 'safe(安全的) → 去e加ty → 安全' }
            ]
        },
        {
            suffix: '-ance / -ence / -ancy / -ency',
            meaning: '性质、状态、行为（名词）',
            explanation: '这组后缀也是将形容词或动词变成名词，和 -tion 类似但来源不同。通常 -ance 对应 -ant 结尾的形容词，-ence 对应 -ent 结尾的形容词。',
            examples: [
                { base: 'important', result: 'importance', meaning: '重要性', breakdown: 'important(重要的) → 去t加ance → 重要性' },
                { base: 'different', result: 'difference', meaning: '差异', breakdown: 'different(不同的) → 去t加ence → 差异' },
                { base: 'emerge', result: 'emergency', meaning: '紧急情况', breakdown: 'emerge(出现) + ency → 突然出现的事 → 紧急情况' }
            ]
        },
        {
            suffix: '-dom / -hood / -ship',
            meaning: '状态、身份、领域',
            explanation: '这组后缀都来自古英语，带有"领域、状态、身份"的含义。-dom 表示"领域/状态"，-hood 表示"身份/时期"，-ship 表示"身份/技能"。',
            examples: [
                { base: 'free', result: 'freedom', meaning: '自由', breakdown: 'free(自由的) + dom → 自由的状态' },
                { base: 'king', result: 'kingdom', meaning: '王国', breakdown: 'king(国王) + dom → 国王的领域 → 王国' },
                { base: 'child', result: 'childhood', meaning: '童年', breakdown: 'child(孩子) + hood → 孩子的时期 → 童年' },
                { base: 'friend', result: 'friendship', meaning: '友谊', breakdown: 'friend(朋友) + ship → 朋友关系 → 友谊' },
                { base: 'leader', result: 'leadership', meaning: '领导力', breakdown: 'leader(领导) + ship → 领导的能力 → 领导力' }
            ]
        },
        {
            suffix: '-ism / -ist',
            meaning: '主义/学说 / 从事...的人',
            explanation: '-ism 表示"主义、学说、信仰"，-ist 表示"信奉...主义的人"。两者常成对出现！',
            examples: [
                { base: 'social', result: 'socialism', meaning: '社会主义', breakdown: 'social(社会的) + ism → 社会主义' },
                { base: 'social', result: 'socialist', meaning: '社会主义者', breakdown: 'social(社会的) + ist → 社会主义者' },
                { base: 'tour', result: 'tourism', meaning: '旅游业', breakdown: 'tour(旅游) + ism → 旅游这件事 → 旅游业' },
                { base: 'science', result: 'scientist', meaning: '科学家', breakdown: 'science(科学) → 变ce为t加ist → 科学家' }
            ]
        },
        {
            suffix: '-age / -al / -th',
            meaning: '行为、状态、结果',
            explanation: '-age 常表示"行为的结果或费用"，-al 将动词变为名词（也作形容词后缀），-th 加在形容词或数词后表示"第.../...度"。',
            examples: [
                { base: 'pass', result: 'passage', meaning: '通道/段落', breakdown: 'pass(通过) + age → 通过的地方 → 通道' },
                { base: 'arrive', result: 'arrival', meaning: '到达', breakdown: 'arrive(到达) → 去e加al → 到达（名词）' },
                { base: 'warm', result: 'warmth', meaning: '温暖', breakdown: 'warm(温暖的) + th → 温暖（名词）' },
                { base: 'four', result: 'fourth', meaning: '第四', breakdown: 'four(四) + th → 第四' }
            ]
        }
    ],
    adjective: [
        {
            suffix: '-able / -ible',
            meaning: '能...的，可...的',
            explanation: '这是最重要的形容词后缀之一！表示"能够被...的"。-able 更常用，-ible 多用于拉丁语来源的词。记住：看到 -able/-ible 就知道这个词是"能够被..."的意思。',
            examples: [
                { base: 'read', result: 'readable', meaning: '可读的', breakdown: 'read(读) + able → 能够被读的 → 可读的' },
                { base: 'access', result: 'accessible', meaning: '可进入的', breakdown: 'access(进入) + ible → 能够进入的 → 可进入的' },
                { base: 'flex', result: 'flexible', meaning: '灵活的', breakdown: 'flex(弯曲) + ible → 能够弯曲的 → 灵活的' },
                { base: 'reason', result: 'reasonable', meaning: '合理的', breakdown: 'reason(道理) + able → 能够被讲道理的 → 合理的' }
            ]
        },
        {
            suffix: '-ful / -less',
            meaning: '充满...的 / 没有...的',
            explanation: '这是一对黄金反义后缀！看到 -ful 就是"充满"，看到 -less 就是"没有"。同一个词根加不同后缀就是反义词：careful（小心的）↔ careless（粗心的）。',
            examples: [
                { base: 'care', result: 'careful', meaning: '小心的', breakdown: 'care(小心) + ful → 充满小心的 → 小心的' },
                { base: 'care', result: 'careless', meaning: '粗心的', breakdown: 'care(小心) + less → 没有小心的 → 粗心的' },
                { base: 'use', result: 'useful', meaning: '有用的', breakdown: 'use(用处) + ful → 充满用处的 → 有用的' },
                { base: 'use', result: 'useless', meaning: '无用的', breakdown: 'use(用处) + less → 没有用处的 → 无用的' },
                { base: 'hope', result: 'hopeless', meaning: '绝望的', breakdown: 'hope(希望) + less → 没有希望的 → 绝望的' }
            ]
        },
        {
            suffix: '-ive / -ative / -itive',
            meaning: '有...倾向的，...性的',
            explanation: '-ive 表示"具有某种性质的、倾向于...的"。常将动词变为形容词。-ative 和 -itive 是 -ive 的扩展形式。',
            examples: [
                { base: 'act', result: 'active', meaning: '活跃的', breakdown: 'act(做) + ive → 喜欢做的 → 活跃的' },
                { base: 'create', result: 'creative', meaning: '有创造力的', breakdown: 'create(创造) + ive → 喜欢创造的 → 有创造力的' },
                { base: 'attract', result: 'attractive', meaning: '有吸引力的', breakdown: 'attract(吸引) + ive → 有吸引力的' },
                { base: 'talk', result: 'talkative', meaning: '健谈的', breakdown: 'talk(说话) + ative → 喜欢说话的 → 健谈的' }
            ]
        },
        {
            suffix: '-ous / -ious / -eous',
            meaning: '充满...的，具有...性质的',
            explanation: '-ous 是拉丁语来源的形容词后缀，表示"充满...的"。在英语中非常常见，看到 -ous 就知道是形容词！',
            examples: [
                { base: 'danger', result: 'dangerous', meaning: '危险的', breakdown: 'danger(危险) + ous → 充满危险的 → 危险的' },
                { base: 'fame', result: 'famous', meaning: '著名的', breakdown: 'fame(名声) + ous → 充满名声的 → 著名的' },
                { base: 'mystery', result: 'mysterious', meaning: '神秘的', breakdown: 'mystery(神秘) → 去y加ious → 神秘的' },
                { base: 'courage', result: 'courageous', meaning: '勇敢的', breakdown: 'courage(勇气) + ous → 充满勇气的 → 勇敢的' }
            ]
        },
        {
            suffix: '-ent / -ant',
            meaning: '具有...性质的',
            explanation: '-ent 和 -ant 都来自拉丁语，表示"具有某种性质的"。常将动词变为形容词，对应的抽象名词形式是 -ence/-ance。',
            examples: [
                { base: 'differ', result: 'different', meaning: '不同的', breakdown: 'differ(不同) + ent → 不同的' },
                { base: 'import', result: 'important', meaning: '重要的', breakdown: 'import(进口/意义) + ant → 有意义的 → 重要的' },
                { base: 'please', result: 'pleasant', meaning: '愉快的', breakdown: 'please(使高兴) → 去e加ant → 愉快的' }
            ]
        },
        {
            suffix: '-ic / -ical / -al',
            meaning: '...的，与...有关的',
            explanation: '这三个都是形容词后缀，表示"与...有关的"。-ic 和 -ical 很多时候意思相同（如 historic/historical），-al 是最广泛的形容词后缀。',
            examples: [
                { base: 'history', result: 'historic', meaning: '历史性的', breakdown: 'history(历史) → 去y加ic → 历史性的' },
                { base: 'hero', result: 'heroic', meaning: '英雄的', breakdown: 'hero(英雄) + ic → 英雄的' },
                { base: 'music', result: 'musical', meaning: '音乐的', breakdown: 'music(音乐) + al → 音乐的' },
                { base: 'nation', result: 'national', meaning: '国家的', breakdown: 'nation(国家) + al → 国家的' }
            ]
        },
        {
            suffix: '-ar / -er / -or',
            meaning: '...的，与...有关的',
            explanation: '这组后缀也作形容词用，表示"与...有关的"。-ar 常用于拉丁语来源词（如 regular），-er/-or 偶尔也作形容词。',
            examples: [
                { base: 'reg', result: 'regular', meaning: '规则的', breakdown: 'reg(规则) + ular → 规则的' },
                { base: 'particular', result: 'particular', meaning: '特别的', breakdown: 'part(部分) + icular → 属于某部分的 → 特别的' },
                { base: 'super', result: 'superior', meaning: '优越的', breakdown: 'super(上面) + ior → 在上面 → 优越的' }
            ]
        },
        {
            suffix: '-some / -like / -ly / -ward',
            meaning: '像...的，有...性质的',
            explanation: '-some 表示"令人...的"，-like 表示"像...的"，-ly 偶尔作形容词后缀（如 friendly），-ward 表示"朝向...的"。',
            examples: [
                { base: 'awe', result: 'awesome', meaning: '令人惊叹的', breakdown: 'awe(敬畏) + some → 令人敬畏的 → awesome' },
                { base: 'child', result: 'childlike', meaning: '孩子般的', breakdown: 'child(孩子) + like → 像孩子的 → 孩子般的' },
                { base: 'friend', result: 'friendly', meaning: '友好的', breakdown: 'friend(朋友) + ly → 像朋友一样的 → 友好的' },
                { base: 'home', result: 'homeward', meaning: '回家的', breakdown: 'home(家) + ward → 朝向家的 → 回家的' }
            ]
        }
    ],
    'verb-adv': [
        {
            suffix: '-ize / -ise / -ify',
            meaning: '使...化，使成为',
            explanation: '这是最重要的动词后缀！表示"使...变成某种状态"。-ize 最常用（美式），-ise 是英式拼写，-ify 也表示"使...化"。看到 -ize/-ify 就知道这个动作是"使...化"。',
            examples: [
                { base: 'real', result: 'realize', meaning: '实现/意识到', breakdown: 'real(真实的) + ize → 使变成真的 → 实现' },
                { base: 'modern', result: 'modernize', meaning: '现代化', breakdown: 'modern(现代的) + ize → 使现代化' },
                { base: 'simple', result: 'simplify', meaning: '简化', breakdown: 'simple(简单的) → 去e加ify → 使简单 → 简化' },
                { base: 'beauty', result: 'beautify', meaning: '美化', breakdown: 'beauty(美丽) → 变y为i加fy → 使美丽 → 美化' },
                { base: 'popular', result: 'popularize', meaning: '普及', breakdown: 'popular(流行的) + ize → 使流行 → 普及' }
            ]
        },
        {
            suffix: '-en',
            meaning: '使...，变得...',
            explanation: '-en 是古英语来源的动词后缀，表示"使...进入某种状态"。常加在形容词后构成动词。',
            examples: [
                { base: 'wide', result: 'widen', meaning: '加宽', breakdown: 'wide(宽的) + en → 使变宽 → 加宽' },
                { base: 'sharp', result: 'sharpen', meaning: '削尖', breakdown: 'sharp(锋利的) + en → 使锋利 → 削尖' },
                { base: 'strength', result: 'strengthen', meaning: '加强', breakdown: 'strength(力量) + en → 使有力量 → 加强' }
            ]
        },
        {
            suffix: '-ate',
            meaning: '使...，做...',
            explanation: '-ate 是一个多功能的 suffix，可以作动词（表示"使..."）、形容词或名词。作动词时最常见。',
            examples: [
                { base: 'activate', result: 'activate', meaning: '激活', breakdown: 'active(活跃的) → 去e加ate → 使活跃 → 激活' },
                { base: 'origin', result: 'originate', meaning: '起源于', breakdown: 'origin(起源) + ate → 使产生 → 起源于' }
            ]
        },
        {
            suffix: '-ly',
            meaning: '...地（副词标志）',
            explanation: '-ly 是最常见的副词后缀！绝大多数副词都以 -ly 结尾。通常加在形容词后面，把形容词变成副词。看到 -ly 就知道这个词是"...地"。',
            examples: [
                { base: 'quick', result: 'quickly', meaning: '快速地', breakdown: 'quick(快的) + ly → 快速地' },
                { base: 'happy', result: 'happily', meaning: '快乐地', breakdown: 'happy(快乐的) → 变y为i加ly → 快乐地' },
                { base: 'careful', result: 'carefully', meaning: '小心地', breakdown: 'careful(小心的) + ly → 小心地' },
                { base: 'easy', result: 'easily', meaning: '容易地', breakdown: 'easy(容易的) → 变y为i加ly → 容易地' }
            ]
        },
        {
            suffix: '-ward(s)',
            meaning: '朝向...',
            explanation: '-ward 表示方向，加在名词后表示"朝向..."。可以加 s 变成 -wards（美式常用 -ward，英式常用 -wards）。',
            examples: [
                { base: 'home', result: 'homeward', meaning: '向家', breakdown: 'home(家) + ward → 向家' },
                { base: 'back', result: 'backwards', meaning: '向后', breakdown: 'back(后) + wards → 向后' },
                { base: 'up', result: 'upward', meaning: '向上', breakdown: 'up(上) + ward → 向上' }
            ]
        },
        {
            suffix: '-wise / -ways',
            meaning: '以...方式，在...方面',
            explanation: '-wise 表示"在...方面/以...方式"，-ways 也表示"方向/方式"。现代英语中 -wise 更常用于抽象意义。',
            examples: [
                { base: 'other', result: 'otherwise', meaning: '否则/以其他方式', breakdown: 'other(其他) + wise → 以其他方式 → 否则' },
                { base: 'clock', result: 'clockwise', meaning: '顺时针', breakdown: 'clock(钟) + wise → 像钟走的方向 → 顺时针' },
                { base: 'side', result: 'sideways', meaning: '侧身地', breakdown: 'side(旁边) + ways → 以旁边的方式 → 侧身地' }
            ]
        }
    ]
};

// ===== 词根数据 =====
const rootsData = [
    {
        root: 'vis / vid',
        meaning: '看',
        mnemonic: '都和"眼睛看"有关',
        words: [
            { word: 'visible', meaning: '看得见的', logic: 'vis(看) + ible(能...的) → 能看到的' },
            { word: 'video', meaning: '视频', logic: 'vid(看) + eo → 用来看的东西 → 视频' },
            { word: 'visit', meaning: '参观', logic: 'vis(看) + it → 去看 → 参观' },
            { word: 'vision', meaning: '视力/视野', logic: 'vis(看) + ion → 看的能力 → 视力' },
            { word: 'revise', meaning: '修订', logic: 're(回) + vise(看) → 重新看 → 修订' }
        ]
    },
    {
        root: 'port',
        meaning: '拿，运，港口',
        mnemonic: '把东西从一个港口运到另一个',
        words: [
            { word: 'import', meaning: '进口', logic: 'im(向内) + port(运) → 运进来 → 进口' },
            { word: 'export', meaning: '出口', logic: 'ex(向外) + port(运) → 运出去 → 出口' },
            { word: 'transport', meaning: '运输', logic: 'trans(跨越) + port(运) → 跨地运 → 运输' },
            { word: 'portable', meaning: '便携的', logic: 'port(拿) + able(能...的) → 能拿着走的 → 便携' },
            { word: 'report', meaning: '报告', logic: 're(回) + port(带) → 带回来 → 汇报' }
        ]
    },
    {
        root: 'dict',
        meaning: '说',
        mnemonic: '都是"用嘴说"',
        words: [
            { word: 'predict', meaning: '预言', logic: 'pre(前) + dict(说) → 提前说 → 预言' },
            { word: 'dictionary', meaning: '字典', logic: 'dict(说) + ion + ary → 说话的工具 → 字典' },
            { word: 'contradict', meaning: '反驳', logic: 'contra(反) + dict(说) → 反着说 → 反驳' },
            { word: 'dictate', meaning: '口述/命令', logic: 'dict(说) + ate → 说出来 → 口述' },
            { word: 'dedicate', meaning: '奉献', logic: 'de(下) + dic(说) + ate → 向下说出承诺 → 奉献' }
        ]
    },
    {
        root: 'spect',
        meaning: '看',
        mnemonic: '仔细看、回头看、向前看',
        words: [
            { word: 'inspect', meaning: '检查', logic: 'in(向内) + spect(看) → 仔细看 → 检查' },
            { word: 'respect', meaning: '尊敬', logic: 're(回) + spect(看) → 回头看 → 重视 → 尊敬' },
            { word: 'prospect', meaning: '前景', logic: 'pro(向前) + spect(看) → 向前看 → 前景' },
            { word: 'suspect', meaning: '怀疑', logic: 'su(下) + spect(看) → 向下看 → 怀疑' },
            { word: 'aspect', meaning: '方面', logic: 'a(朝向) + spect(看) → 看过去的方向 → 方面' }
        ]
    },
    {
        root: 'ject',
        meaning: '扔',
        mnemonic: '扔出去、扔回来、扔进去',
        words: [
            { word: 'project', meaning: '项目/投射', logic: 'pro(向前) + ject(扔) → 向前扔 → 投射/项目' },
            { word: 'reject', meaning: '拒绝', logic: 're(回) + ject(扔) → 扔回来 → 拒绝' },
            { word: 'inject', meaning: '注射', logic: 'in(向内) + ject(扔) → 扔进去 → 注射' },
            { word: 'subject', meaning: '主题/科目', logic: 'sub(下) + ject(扔) → 扔下去讨论 → 主题' },
            { word: 'eject', meaning: '喷射', logic: 'e(向外) + ject(扔) → 扔出去 → 喷射' }
        ]
    },
    {
        root: 'tract',
        meaning: '拉，拖',
        mnemonic: '拉过来、拉在一起、拉出来',
        words: [
            { word: 'attract', meaning: '吸引', logic: 'at(向) + tract(拉) → 拉过来 → 吸引' },
            { word: 'contract', meaning: '合同/收缩', logic: 'con(一起) + tract(拉) → 拉到一起 → 合同/收缩' },
            { word: 'extract', meaning: '提取', logic: 'ex(向外) + tract(拉) → 拉出来 → 提取' },
            { word: 'tractor', meaning: '拖拉机', logic: 'tract(拉) + or → 拉的东西 → 拖拉机' },
            { word: 'distract', meaning: '分散注意力', logic: 'dis(分开) + tract(拉) → 拉开注意力 → 分心' }
        ]
    },
    {
        root: 'press',
        meaning: '压',
        mnemonic: '压出声音、压进心里',
        words: [
            { word: 'pressure', meaning: '压力', logic: 'press(压) + ure → 压的结果 → 压力' },
            { word: 'express', meaning: '表达/快递', logic: 'ex(向外) + press(压) → 压出来 → 表达/快递' },
            { word: 'impress', meaning: '印象深刻', logic: 'im(向内) + press(压) → 压进心里 → 印象深刻' },
            { word: 'depress', meaning: '压抑', logic: 'de(向下) + press(压) → 向下压 → 压抑' },
            { word: 'compress', meaning: '压缩', logic: 'com(一起) + press(压) → 压到一起 → 压缩' }
        ]
    },
    {
        root: 'struct',
        meaning: '建造',
        mnemonic: '建在一起、反着建',
        words: [
            { word: 'structure', meaning: '结构', logic: 'struct(建) + ure → 建造的方式 → 结构' },
            { word: 'construct', meaning: '建设', logic: 'con(一起) + struct(建) → 建在一起 → 建设' },
            { word: 'destroy', meaning: '破坏', logic: 'de(反) + struct → 反着建 → 破坏' },
            { word: 'instruction', meaning: '指示/说明', logic: 'in(向内) + struct + ion → 建在心里的东西 → 教导 → 说明' },
            { word: 'obstruct', meaning: '阻碍', logic: 'ob(反) + struct(建) → 反着建 → 阻碍' }
        ]
    },
    {
        root: 'ven / vent',
        meaning: '来',
        mnemonic: '一起来、提前来、意外来',
        words: [
            { word: 'convene', meaning: '召集', logic: 'con(一起) + ven(来) → 一起来 → 召集' },
            { word: 'prevent', meaning: '阻止', logic: 'pre(前) + vent(来) → 提前来挡住 → 阻止' },
            { word: 'adventure', meaning: '冒险', logic: 'ad(向) + vent(来) + ure → 意外来的事 → 冒险' },
            { word: 'invent', meaning: '发明', logic: 'in(向内) + vent(来) → 从内心想出 → 发明' },
            { word: 'event', meaning: '事件', logic: 'e(向外) + vent(来) → 出来的事 → 事件' }
        ]
    },
    {
        root: 'aud',
        meaning: '听',
        mnemonic: '都是给耳朵听的',
        words: [
            { word: 'audio', meaning: '音频', logic: 'aud(听) + io → 听的东西 → 音频' },
            { word: 'audience', meaning: '观众', logic: 'aud(听) + ience → 听的人 → 观众' },
            { word: 'auditorium', meaning: '礼堂', logic: 'aud(听) + itorium → 听的地方 → 礼堂' },
            { word: 'audible', meaning: '听得见的', logic: 'aud(听) + ible → 能被听到的 → 听得见' },
            { word: 'obey', meaning: '服从', logic: 'ob(朝向) + aud(听) + y → 去听 → 服从' }
        ]
    },
    {
        root: 'form',
        meaning: '形状，形式',
        mnemonic: '各种"形状"和"形式"',
        words: [
            { word: 'transform', meaning: '转变', logic: 'trans(跨越) + form(形状) → 变形状 → 转变' },
            { word: 'inform', meaning: '通知', logic: 'in(向内) + form(形式) → 进入形式 → 使知晓 → 通知' },
            { word: 'uniform', meaning: '制服/统一的', logic: 'uni(一) + form(形状) → 一种形状 → 统一的' },
            { word: 'perform', meaning: '表演', logic: 'per(完全) + form(形式) → 完全做出来 → 表演' }
        ]
    },
    {
        root: 'miss / mit',
        meaning: '送，发，扔',
        mnemonic: '把东西送出去',
        words: [
            { word: 'mission', meaning: '任务', logic: 'miss(送) + ion → 被送出去做的事 → 任务' },
            { word: 'emit', meaning: '发出', logic: 'e(向外) + mit(送) → 送出去 → 发出' },
            { word: 'transmit', meaning: '传送', logic: 'trans(跨越) + mit(送) → 跨地送 → 传送' },
            { word: 'admit', meaning: '承认/允许进入', logic: 'ad(朝向) + mit(送) → 送进来 → 允许进入' },
            { word: 'commit', meaning: '承诺/犯罪', logic: 'com(一起) + mit(送) → 送出去 → 委托 → 承诺' }
        ]
    },
    {
        root: 'duc / duct',
        meaning: '引导，带领',
        mnemonic: '引导、带领',
        words: [
            { word: 'educate', meaning: '教育', logic: 'e(向外) + duc(引导) + ate → 引导出来 → 启发 → 教育' },
            { word: 'introduce', meaning: '介绍', logic: 'intro(向内) + duc(引导) + e → 引进来 → 介绍' },
            { word: 'produce', meaning: '生产', logic: 'pro(向前) + duc(引导) + e → 向前引导出来 → 生产' },
            { word: 'reduce', meaning: '减少', logic: 're(回) + duc(引导) + e → 引回去 → 减少' },
            { word: 'conduct', meaning: '引导/指挥', logic: 'con(一起) + duct(引导) → 一起引导 → 指挥' }
        ]
    },
    {
        root: 'cept / ceiv / cip',
        meaning: '拿，抓，接收',
        mnemonic: '用手抓、拿',
        words: [
            { word: 'accept', meaning: '接受', logic: 'ac(朝向) + cept(抓) → 抓过来 → 接受' },
            { word: 'receive', meaning: '收到', logic: 're(回) + ceiv(抓) + e → 抓回来 → 收到' },
            { word: 'except', meaning: '除了', logic: 'ex(向外) + cept(抓) → 抓出去 → 排除 → 除了' },
            { word: 'concept', meaning: '概念', logic: 'con(一起) + cept(抓) → 抓住的东西 → 概念' },
            { word: 'participate', meaning: '参与', logic: 'parti(部分) + cip(抓) + ate → 抓住一部分 → 参与' }
        ]
    },
    {
        root: 'grad / gress',
        meaning: '走，步',
        mnemonic: '走路、迈步',
        words: [
            { word: 'progress', meaning: '进步', logic: 'pro(向前) + gress(走) → 向前走 → 进步' },
            { word: 'graduate', meaning: '毕业', logic: 'grad(步) + uate → 走完一步 → 毕业' },
            { word: 'aggress', meaning: '侵略', logic: 'ag(朝向) + gress(走) → 走向别人 → 侵略' },
            { word: 'congress', meaning: '国会', logic: 'con(一起) + gress(走) → 走到一起 → 开会 → 国会' },
            { word: 'retrograde', meaning: '倒退', logic: 'retro(向后) + grade(走) → 向后走 → 倒退' }
        ]
    }
];

// ===== 测验题目 =====
const quizQuestions = {
    prefix: [
        { question: '"unhappy" 中的前缀 "un-" 是什么意思？', options: ['再次', '不，无', '向前', '一起'], answer: 1 },
        { question: '"return" 中的前缀 "re-" 是什么意思？', options: ['向下', '回，再次', '向外', '预先'], answer: 1 },
        { question: '"impossible" 中的前缀 "im-" 是什么意思？', options: ['向内', '不，无', '向外', '超过'], answer: 1 },
        { question: '"preview" 中的前缀 "pre-" 是什么意思？', options: ['后', '预先', '回', '向下'], answer: 1 },
        { question: '"disappear" 中的前缀 "dis-" 是什么意思？', options: ['不，消失', '再次', '一起', '超过'], answer: 0 },
        { question: '"subway" 中的前缀 "sub-" 是什么意思？', options: ['上', '下，次', '前', '后'], answer: 1 },
        { question: '"export" 中的前缀 "ex-" 是什么意思？', options: ['向内', '向外', '回', '不'], answer: 1 },
        { question: '"misunderstand" 中的前缀 "mis-" 是什么意思？', options: ['正确', '错误', '再次', '超过'], answer: 1 },
        { question: '"multimedia" 中的前缀 "multi-" 是什么意思？', options: ['少', '多', '一', '无'], answer: 1 },
        { question: '"overeat" 中的前缀 "over-" 是什么意思？', options: ['不足', '过度', '再次', '向下'], answer: 1 },
        { question: '"underground" 中的前缀 "under-" 是什么意思？', options: ['上', '在...下', '前', '后'], answer: 1 },
        { question: '"rewrite" 中的前缀 "re-" 表示什么意思？', options: ['写一次', '再次写', '预先写', '不写'], answer: 1 },
        { question: '"abnormal" 中的前缀 "ab-" 是什么意思？', options: ['朝向', '离开，偏离', '一起', '向下'], answer: 1 },
        { question: '"accept" 中的 "ac-" 其实是哪个前缀的变形？', options: ['ab-', 'ad-', 'ex-', 'sub-'], answer: 1 },
        { question: '"attract" 中的 "at-" 是什么意思？', options: ['离开', '朝向', '再次', '不'], answer: 1 },
        { question: '"combine" 中的 "com-" 是什么意思？', options: ['离开', '一起，共同', '向下', '不'], answer: 1 },
        { question: '"international" 中的 "inter-" 是什么意思？', options: ['在内', '在...之间', '向外', '超过'], answer: 1 },
        { question: '"transport" 中的 "trans-" 是什么意思？', options: ['回', '穿过，跨越', '下', '不'], answer: 1 },
        { question: '"supermarket" 中的 "super-" 是什么意思？', options: ['小', '超过，超级', '下', '半'], answer: 1 },
        { question: '"bicycle" 中的 "bi-" 是什么意思？', options: ['一', '二', '三', '多'], answer: 1 },
        { question: '"monotone" 中的 "mono-" 是什么意思？', options: ['多', '单一', '半', '双'], answer: 1 },
        { question: '"automatic" 中的 "auto-" 是什么意思？', options: ['远', '自己，自动', '超', '半'], answer: 1 },
        { question: '"telephone" 中的 "tele-" 是什么意思？', options: ['近', '远', '声音', '看'], answer: 1 },
        { question: '"progress" 中的 "pro-" 是什么意思？', options: ['回', '向前', '后', '下'], answer: 1 },
        { question: '"postpone" 中的 "post-" 是什么意思？', options: ['前', '后', '上', '下'], answer: 1 }
    ],
    suffix: [
        { question: '"teacher" 中的后缀 "-er" 是什么意思？', options: ['做...的人', '形容词', '副词', '状态'], answer: 0 },
        { question: '"education" 中的后缀 "-tion" 表示什么词性？', options: ['动词', '名词', '形容词', '副词'], answer: 1 },
        { question: '"happiness" 中的后缀 "-ness" 是什么意思？', options: ['人', '性质、状态', '动作', '地方'], answer: 1 },
        { question: '"readable" 中的后缀 "-able" 是什么意思？', options: ['能...的', '没有...的', '充满...的', '人'], answer: 0 },
        { question: '"careful" 中的后缀 "-ful" 是什么意思？', options: ['没有', '充满...的', '能...的', '状态'], answer: 1 },
        { question: '"useless" 中的后缀 "-less" 是什么意思？', options: ['充满', '没有...的', '能...的', '人'], answer: 1 },
        { question: '"active" 中的后缀 "-ive" 是什么意思？', options: ['有...倾向的', '人', '动作', '地方'], answer: 0 },
        { question: '"realize" 中的后缀 "-ize" 是什么意思？', options: ['使...化', '人', '状态', '地方'], answer: 0 },
        { question: '"quickly" 中的后缀 "-ly" 表示什么词性？', options: ['名词', '形容词', '副词', '动词'], answer: 2 },
        { question: '"simplify" 中的后缀 "-ify" 是什么意思？', options: ['使...化', '人', '状态', '地方'], answer: 0 },
        { question: '"importance" 中的后缀 "-ance" 是什么词性？', options: ['动词', '名词', '形容词', '副词'], answer: 1 },
        { question: '"freedom" 中的后缀 "-dom" 是什么意思？', options: ['人', '状态/领域', '动作', '形容词'], answer: 1 },
        { question: '"childhood" 中的后缀 "-hood" 是什么意思？', options: ['身份/时期', '人', '动作', '地方'], answer: 0 },
        { question: '"friendship" 中的后缀 "-ship" 是什么意思？', options: ['船', '身份/关系', '动作', '形容词'], answer: 1 },
        { question: '"socialism" 中的后缀 "-ism" 是什么意思？', options: ['人', '主义/学说', '动作', '形容词'], answer: 1 },
        { question: '"dangerous" 中的后缀 "-ous" 是什么意思？', options: ['充满...的', '没有', '能...的', '人'], answer: 0 },
        { question: '"different" 中的后缀 "-ent" 是什么词性？', options: ['名词', '形容词', '动词', '副词'], answer: 1 },
        { question: '"widen" 中的后缀 "-en" 是什么意思？', options: ['使...化', '使变得', '人', '状态'], answer: 1 },
        { question: '"homeward" 中的后缀 "-ward" 是什么意思？', options: ['人', '朝向', '状态', '形容词'], answer: 1 },
        { question: '"otherwise" 中的后缀 "-wise" 是什么意思？', options: ['聪明', '方式/方面', '人', '状态'], answer: 1 }
    ],
    roots: [
        { question: '词根 "vis" 是什么意思？', options: ['说', '看', '听', '拿'], answer: 1 },
        { question: '词根 "port" 是什么意思？', options: ['看', '说', '拿，运', '听'], answer: 2 },
        { question: '词根 "dict" 是什么意思？', options: ['看', '说', '拿', '建造'], answer: 1 },
        { question: '词根 "spect" 是什么意思？', options: ['看', '说', '拿', '压'], answer: 0 },
        { question: '词根 "ject" 是什么意思？', options: ['拉', '压', '扔', '来'], answer: 2 },
        { question: '词根 "tract" 是什么意思？', options: ['看', '拉，拖', '说', '听'], answer: 1 },
        { question: '词根 "press" 是什么意思？', options: ['压', '拿', '看', '来'], answer: 0 },
        { question: '词根 "struct" 是什么意思？', options: ['说', '听', '建造', '扔'], answer: 2 },
        { question: '词根 "ven / vent" 是什么意思？', options: ['来', '看', '拿', '压'], answer: 0 },
        { question: '词根 "aud" 是什么意思？', options: ['看', '说', '听', '来'], answer: 2 },
        { question: '词根 "form" 是什么意思？', options: ['形状', '说', '听', '拿'], answer: 0 },
        { question: '词根 "mit / miss" 是什么意思？', options: ['看', '送', '拿', '压'], answer: 1 },
        { question: '词根 "duc / duct" 是什么意思？', options: ['看', '引导', '拿', '听'], answer: 1 },
        { question: '词根 "cept / ceiv" 是什么意思？', options: ['看', '说', '抓，拿', '听'], answer: 2 },
        { question: '词根 "grad / gress" 是什么意思？', options: ['看', '走', '拿', '压'], answer: 1 }
    ],
    mixed: [
        { question: '"unpredictable" 怎么拆解？', options: ['un(不) + pre(前) + dict(说) + able(能)', 'un(回) + pre(不) + dict(看) + able(能)', 'un(不) + pre(后) + dict(拿) + able(能)', 'un(不) + pre(前) + dict(看) + able(能)'], answer: 0 },
        { question: '"transport" 的意思是什么？', options: ['进口', '出口', '运输', '港口'], answer: 2 },
        { question: '"inspect" 怎么理解？', options: ['向外看', '仔细看', '回头看', '向前看'], answer: 1 },
        { question: '"reject" 的词根词缀含义是什么？', options: ['扔出去', '扔回来', '扔进去', '拉过来'], answer: 1 },
        { question: '"attract" 的词根词缀含义是什么？', options: ['拉过来', '拉出去', '压进来', '看回来'], answer: 0 },
        { question: '"express" 怎么理解？', options: ['压进去', '压出来', '拉出来', '说出来'], answer: 1 },
        { question: '"convene" 的意思是什么？', options: ['一起来', '提前来', '意外来', '回去'], answer: 0 },
        { question: '"audience" 指的是什么？', options: ['说话的人', '听的人', '看的人', '建造的人'], answer: 1 },
        { question: '"careless" 中的后缀 "-less" 是什么意思？', options: ['充满', '没有', '能...的', '人'], answer: 1 },
        { question: '"preview" 的意思是？', options: ['复习', '预习/预览', '再看', '不看'], answer: 1 },
        { question: '"impossible" 中的 "im-" 为什么不用 "in-"？', options: ['因为后面是b,p,m', '因为后面是元音', '因为后面是辅音', '没有原因'], answer: 0 },
        { question: '"happiness" 的后缀 "-ness" 加在什么词性后面？', options: ['动词', '名词', '形容词', '副词'], answer: 2 },
        { question: '"teacher" 是什么词性？', options: ['动词', '名词', '形容词', '副词'], answer: 1 },
        { question: '"quickly" 是什么词性？', options: ['名词', '形容词', '动词', '副词'], answer: 3 },
        { question: '"modernize" 中的 "-ize" 是什么意思？', options: ['使...化', '人', '状态', '地方'], answer: 0 },
        { question: '"multicolor" 中的 "multi-" 是什么意思？', options: ['少', '多', '一', '无'], answer: 1 },
        { question: '"subtract" 中的 "sub-" 是什么意思？', options: ['上', '下', '前', '后'], answer: 1 },
        { question: '"misunderstand" 中的 "mis-" 是什么意思？', options: ['正确', '错误', '再次', '超过'], answer: 1 },
        { question: '"disagree" 中的 "dis-" 是什么意思？', options: ['不，消失', '再次', '一起', '超过'], answer: 0 },
        { question: '"return" 中的 "re-" 是什么意思？', options: ['向下', '回，再次', '向外', '预先'], answer: 1 },
        { question: '"abnormal" 中的 "ab-" 表示什么意思？', options: ['朝向', '离开，偏离', '一起', '向下'], answer: 1 },
        { question: '"accept" 中的 "ac-" 本质上是哪个前缀？', options: ['ab-', 'ad-', 'ex-', 'sub-'], answer: 1 },
        { question: '"attract" 中的 "at-" 表示什么意思？', options: ['离开', '朝向', '再次', '不'], answer: 1 },
        { question: '"combine" 中的 "com-" 表示什么意思？', options: ['离开', '一起', '向下', '不'], answer: 1 },
        { question: '"international" 中 "inter-" 表示什么意思？', options: ['在内', '之间', '向外', '超过'], answer: 1 }
    ]
};
