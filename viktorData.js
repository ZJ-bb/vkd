// ===== 维克多单词数据（从拆解手册提取） =====
const viktorData = [
    {
        "word": "absent",
        "day": "Day 1",
        "pos": "adj.",
        "formula": "absent = ab- + sent",
        "prefix": "ab-表'离开'",
        "root": "sent来自esse'存在'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "accept",
        "day": "Day 1",
        "pos": "v.",
        "formula": "accept = ac- + cept",
        "prefix": "ac-是ad-在c前同化",
        "root": "cept来自capere'拿'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "accident",
        "day": "Day 1",
        "pos": "n.",
        "formula": "accident = ac- + cid + -ent",
        "prefix": "ac-是ad-同化",
        "root": "cid来自cadere'落下'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "active",
        "day": "Day 1",
        "pos": "adj.",
        "formula": "active = act + -ive",
        "prefix": "",
        "root": "act来自agere'做'",
        "suffix": "ive 是形容词后缀，-ive 是个'形容词魔法师'，一加在词根后面，单词立刻变成形容词，表示'具有……性质的'。比如 active = 活跃的，creative = 有创造力的！",
        "combo": ""
    },
    {
        "word": "activity",
        "day": "Day 1",
        "pos": "n.",
        "formula": "activity = act + -ivity",
        "prefix": "",
        "root": "act来自agere'做'",
        "suffix": "ity 是名词后缀，-ity 是抽象名词制造机！比如 reality = 现实！",
        "combo": ""
    },
    {
        "word": "actress",
        "day": "Day 1",
        "pos": "n.",
        "formula": "actress = act + -r- + -ess",
        "prefix": "",
        "root": "act来自agere'表演'",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "additional",
        "day": "Day 1",
        "pos": "adj.",
        "formula": "additional = ad- + dit + -ion + -al",
        "prefix": "ad-表'朝向'",
        "root": "dit来自dare'给'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "advantage",
        "day": "Day 1",
        "pos": "n.",
        "formula": "advantage = ad- + vant + -age",
        "prefix": "ad-表'朝向'",
        "root": "vant来自ante'前面'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "adventure",
        "day": "Day 1",
        "pos": "n.",
        "formula": "adventure = ad- + vent + -ure",
        "prefix": "ad-表'朝向'",
        "root": "vent来自venire'来'",
        "suffix": "ure 是名词后缀，-ure 表示结果。比如 pressure = 压力！",
        "combo": ""
    },
    {
        "word": "advice",
        "day": "Day 1",
        "pos": "n.",
        "formula": "advice = ad- + vice",
        "prefix": "ad-表'朝向'",
        "root": "vice来自visum'看'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "advertise",
        "day": "Day 1",
        "pos": "v.",
        "formula": "advertise = ad- + vert + -ise",
        "prefix": "ad-表'朝向'",
        "root": "vert来自vertere'转'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "advise",
        "day": "Day 1",
        "pos": "v.",
        "formula": "advise = ad- + vis + -e",
        "prefix": "ad-表'朝向'",
        "root": "vis来自videre'看'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "achieve",
        "day": "Day 1",
        "pos": "v.",
        "formula": "achieve = a- + chieve",
        "prefix": "a-是ad-简写",
        "root": "chieve来自chief'头/结束'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "abroad",
        "day": "Day 1",
        "pos": "adv.",
        "formula": "abroad = a- + broad",
        "prefix": "a-表'在……上'",
        "root": "broad来自古英语'宽广'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "ability",
        "day": "Day 1",
        "pos": "n.",
        "formula": "ability = ab- + -il- + -ity",
        "prefix": "ab-来自habilis",
        "root": "abil来自拉丁语'能够'",
        "suffix": "ity 是名词后缀，-ity 是抽象名词制造机！比如 reality = 现实！",
        "combo": ""
    },
    {
        "word": "affect",
        "day": "Day 2",
        "pos": "v.",
        "formula": "affect = af- + fect",
        "prefix": "af-是ad-在f前同化",
        "root": "fect来自facere'做'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "afford",
        "day": "Day 2",
        "pos": "v.",
        "formula": "afford = af- + ford",
        "prefix": "af-是ad-同化",
        "root": "ford与'向前'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "afraid",
        "day": "Day 2",
        "pos": "adj.",
        "formula": "afraid = a- + fraid",
        "prefix": "a-表状态",
        "root": "fraid来自古英语'害怕'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "after",
        "day": "Day 2",
        "pos": "prep./conj./adv.",
        "formula": "after = af- + ter",
        "prefix": "af-是ad-在f前的同化变体，表示'朝向'",
        "root": "ter与'比较级'有关，整体来自古英语æfter",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "agree",
        "day": "Day 2",
        "pos": "v.",
        "formula": "agree = a- + gree",
        "prefix": "a-来自ad-",
        "root": "gree来自gratus'愉悦'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "aim",
        "day": "Day 2",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自古法语esmer'估计/瞄准'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "alive",
        "day": "Day 2",
        "pos": "adj.",
        "formula": "alive = a- + live",
        "prefix": "a-表状态",
        "root": "live来自古英语'活'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "alarm",
        "day": "Day 2",
        "pos": "n./v.",
        "formula": "alarm = al- + arm",
        "prefix": "al-是ad-在l前同化",
        "root": "arm来自arma'武器'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "airport",
        "day": "Day 2",
        "pos": "n.",
        "formula": "airport = air + port",
        "prefix": "",
        "root": "air(航空)+port(港口)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "allow",
        "day": "Day 2",
        "pos": "v.",
        "formula": "allow = al- + low",
        "prefix": "al-是ad-同化",
        "root": "low与'允许'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "although",
        "day": "Day 2",
        "pos": "conj.",
        "formula": "although = al- + though",
        "prefix": "al-是all变体",
        "root": "though来自古英语'虽然'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "aloud",
        "day": "Day 2",
        "pos": "adv.",
        "formula": "aloud = a- + loud",
        "prefix": "a-表'在……上'",
        "root": "loud来自古英语'大声'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "alone",
        "day": "Day 2",
        "pos": "adj./adv.",
        "formula": "alone = al- + one",
        "prefix": "al-是all变体",
        "root": "one来自an'一'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "along",
        "day": "Day 2",
        "pos": "prep./adv.",
        "formula": "along = a- + long",
        "prefix": "a-表'在……上'",
        "root": "long来自古英语'长'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "amazed",
        "day": "Day 3",
        "pos": "adj.",
        "formula": "amazed = a- + maze + -ed",
        "prefix": "a-表加强",
        "root": "maze来自amasen'惊奇'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "amazing",
        "day": "Day 3",
        "pos": "adj.",
        "formula": "amazing = a- + maze + -ing",
        "prefix": "a-表加强",
        "root": "maze来自amasen'惊奇'",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "amusement",
        "day": "Day 3",
        "pos": "n.",
        "formula": "amusement = a- + muse + -ment",
        "prefix": "a-表加强",
        "root": "muse来自拉丁语'沉思'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "angry",
        "day": "Day 3",
        "pos": "adj.",
        "formula": "angry = angr- + -y",
        "prefix": "",
        "root": "angr来自古挪威语'愤怒'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "annoy",
        "day": "Day 3",
        "pos": "v.",
        "formula": "annoy = an- + noy",
        "prefix": "an-是ad-在n前同化",
        "root": "noy与'恨'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "another",
        "day": "Day 3",
        "pos": "adj./pron.",
        "formula": "another = an- + other",
        "prefix": "an-是and变体'一'",
        "root": "other来自古英语'另一'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "anything",
        "day": "Day 3",
        "pos": "pron.",
        "formula": "anything = any + thing",
        "prefix": "",
        "root": "any来自古英语ænig'任何'",
        "suffix": "thing来自古英语þing'事物'",
        "combo": ""
    },
    {
        "word": "anyway",
        "day": "Day 3",
        "pos": "adv.",
        "formula": "anyway = any + way",
        "prefix": "",
        "root": "any来自古英语ænig'任何'",
        "suffix": "way来自古英语weg'路/方式'",
        "combo": ""
    },
    {
        "word": "apologize",
        "day": "Day 3",
        "pos": "v.",
        "formula": "apologize = apo- + log + -ize",
        "prefix": "apo-表'远离'",
        "root": "log来自logos'说话'",
        "suffix": "ize 是动词后缀，-ize 表示'使成为'。比如 modernize = 使现代化！",
        "combo": ""
    },
    {
        "word": "appear",
        "day": "Day 3",
        "pos": "v.",
        "formula": "appear = ap- + pear",
        "prefix": "ap-是ad-在p前同化",
        "root": "pear来自parere'出现'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "appearance",
        "day": "Day 3",
        "pos": "n.",
        "formula": "appearance = ap- + pear + -ance",
        "prefix": "ap-是ad-同化",
        "root": "pear来自parere'出现'",
        "suffix": "ance 是名词后缀，-ance 是个'状态记录仪'，把动作变成状态名词。比如 importance = 重要的状态！",
        "combo": ""
    },
    {
        "word": "appreciate",
        "day": "Day 3",
        "pos": "v.",
        "formula": "appreciate = ap- + preci + -ate",
        "prefix": "ap-是ad-同化",
        "root": "preci来自pretium'价值'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "argue",
        "day": "Day 3",
        "pos": "v.",
        "formula": "argue = argu- + -e",
        "prefix": "",
        "root": "argu来自arguere'指责'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "arrange",
        "day": "Day 3",
        "pos": "v.",
        "formula": "arrange = ar- + range",
        "prefix": "ar-是ad-在r前同化",
        "root": "range来自rang'行列'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "article",
        "day": "Day 3",
        "pos": "n.",
        "formula": "article = art- + -icle",
        "prefix": "",
        "root": "art来自artis'技艺/条款'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "artist",
        "day": "Day 3",
        "pos": "n.",
        "formula": "artist = art + -ist",
        "prefix": "",
        "root": "art来自ars'艺术'",
        "suffix": "ist 是名词后缀，-ist 表示'从事……的人'。比如 scientist = 科学家！",
        "combo": ""
    },
    {
        "word": "ashamed",
        "day": "Day 4",
        "pos": "adj.",
        "formula": "ashamed = a- + sham + -ed",
        "prefix": "a-表状态",
        "root": "sham来自scamu'羞耻'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "asleep",
        "day": "Day 4",
        "pos": "adj.",
        "formula": "asleep = a- + sleep",
        "prefix": "a-表状态",
        "root": "sleep来自古英语'睡'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "astronaut",
        "day": "Day 4",
        "pos": "n.",
        "formula": "astronaut = astro- + naut",
        "prefix": "astro-来自astron'星星'",
        "root": "naut来自naubes'船员'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "athlete",
        "day": "Day 4",
        "pos": "n.",
        "formula": "athlete = athlet- + -e",
        "prefix": "",
        "root": "athlet来自希腊语'竞技者'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "attention",
        "day": "Day 4",
        "pos": "n.",
        "formula": "attention = at- + tent + -ion",
        "prefix": "at-是ad-在t前同化",
        "root": "tent来自tendere'伸展'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "attitude",
        "day": "Day 4",
        "pos": "n.",
        "formula": "attitude = at- + tit + -ude",
        "prefix": "at-是ad-同化",
        "root": "tit来自aptitudo'倾向'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "attract",
        "day": "Day 4",
        "pos": "v.",
        "formula": "attract = at- + tract",
        "prefix": "at-是ad-在t前同化",
        "root": "tract来自trahere'拉'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "attractive",
        "day": "Day 4",
        "pos": "adj.",
        "formula": "attractive = at- + tract + -ive",
        "prefix": "at-是ad-同化",
        "root": "tract来自trahere'拉'",
        "suffix": "ive 是形容词后缀，-ive 是个'形容词魔法师'，一加在词根后面，单词立刻变成形容词，表示'具有……性质的'。比如 active = 活跃的，creative = 有创造力的！",
        "combo": ""
    },
    {
        "word": "avoid",
        "day": "Day 4",
        "pos": "v.",
        "formula": "avoid = a- + void",
        "prefix": "a-来自es-'离开'",
        "root": "void来自vuide'空'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "available",
        "day": "Day 4",
        "pos": "adj.",
        "formula": "available = a- + vail + -able",
        "prefix": "a-来自ad-",
        "root": "vail来自valere'价值'",
        "suffix": "able 是形容词后缀，-able 是个'能力认证官'，加在词根后面表示'能够被……的'。比如 readable = 能被读的！",
        "combo": ""
    },
    {
        "word": "average",
        "day": "Day 4",
        "pos": "adj./n.",
        "formula": "average = aver + -age",
        "prefix": "",
        "root": "aver来自阿拉伯语'损坏货物'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "awake",
        "day": "Day 4",
        "pos": "adj./v.",
        "formula": "awake = a- + wake",
        "prefix": "a-表状态",
        "root": "wake来自古英语'醒'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "awful",
        "day": "Day 4",
        "pos": "adj.",
        "formula": "awful = awe + -ful",
        "prefix": "",
        "root": "awe来自古挪威语'敬畏'",
        "suffix": "ful 是形容词后缀，-ful 像只装满东西的杯子，表示'充满……的'。比如 beautiful = 充满美的 = 美丽的！",
        "combo": ""
    },
    {
        "word": "background",
        "day": "Day 4",
        "pos": "n.",
        "formula": "background = back + ground",
        "prefix": "",
        "root": "back+ground",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "balance",
        "day": "Day 4",
        "pos": "n./v.",
        "formula": "balance = bal- + -ance",
        "prefix": "",
        "root": "bal来自bilanx'天平'",
        "suffix": "ance 是名词后缀，-ance 是个'状态记录仪'，把动作变成状态名词。比如 importance = 重要的状态！",
        "combo": ""
    },
    {
        "word": "awfully",
        "day": "Day 4",
        "pos": "adv.",
        "formula": "awfully = awe + -ful + -ly",
        "prefix": "",
        "root": "awe来自古挪威语'敬畏'",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "basis",
        "day": "Day 5",
        "pos": "n.",
        "formula": "basis = bas- + -is",
        "prefix": "",
        "root": "bas来自basis'基础'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "basic",
        "day": "Day 5",
        "pos": "adj.",
        "formula": "basic = bas- + -ic",
        "prefix": "",
        "root": "bas来自basis'基础'",
        "suffix": "ic 是形容词后缀，-ic 来自希腊语 -ikos，像件希腊长袍，穿上就是形容词。比如 historic = 历史的！",
        "combo": ""
    },
    {
        "word": "bear",
        "day": "Day 5",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语beran'携带/忍受'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "beat",
        "day": "Day 5",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语beatan'击打'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "beautiful",
        "day": "Day 5",
        "pos": "adj.",
        "formula": "beautiful = beauty + -ful",
        "prefix": "",
        "root": "beauty来自biauté'美'",
        "suffix": "ful 是形容词后缀，-ful 像只装满东西的杯子，表示'充满……的'。比如 beautiful = 充满美的 = 美丽的！",
        "combo": ""
    },
    {
        "word": "beauty",
        "day": "Day 5",
        "pos": "n.",
        "formula": "beauty = beaut + -y",
        "prefix": "",
        "root": "beaut来自bel'美丽'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "behave",
        "day": "Day 5",
        "pos": "v.",
        "formula": "behave = be- + have",
        "prefix": "be-表'使'",
        "root": "have来自habban'持有'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "behaviour",
        "day": "Day 5",
        "pos": "n.",
        "formula": "behaviour = be- + hav- + -iour",
        "prefix": "be-表'使'",
        "root": "hav来自habban'持有'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "belief",
        "day": "Day 5",
        "pos": "n.",
        "formula": "belief = be- + lief",
        "prefix": "be-表强调",
        "root": "lief来自geleafan'相信'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "believe",
        "day": "Day 5",
        "pos": "v.",
        "formula": "believe = be- + lieve",
        "prefix": "be-表强调",
        "root": "lieve来自geliefan'相信'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "belong",
        "day": "Day 5",
        "pos": "v.",
        "formula": "belong = be- + long",
        "prefix": "be-表强调",
        "root": "long与'伴随'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "benefit",
        "day": "Day 5",
        "pos": "n./v.",
        "formula": "benefit = bene- + fit",
        "prefix": "bene-表'好'",
        "root": "fit来自facere'做'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "bell",
        "day": "Day 5",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语belle，拟声词",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "beyond",
        "day": "Day 6",
        "pos": "prep.",
        "formula": "beyond = be- + yond",
        "prefix": "be-表'在'",
        "root": "yond来自geond'那边'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "bill",
        "day": "Day 6",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自拉丁语bulla'封印'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "biology",
        "day": "Day 6",
        "pos": "n.",
        "formula": "biology = bio- + -logy",
        "prefix": "bio-来自bios'生命'",
        "root": "logy来自logos'学问'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "bin",
        "day": "Day 6",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语binne'箱子'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "birth",
        "day": "Day 6",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语berð，与bear有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "birthday",
        "day": "Day 6",
        "pos": "n.",
        "formula": "birthday = birth + day",
        "prefix": "",
        "root": "birth+day",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "blackboard",
        "day": "Day 6",
        "pos": "n.",
        "formula": "blackboard = black + board",
        "prefix": "",
        "root": "black(黑)+board(板)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "blog",
        "day": "Day 6",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "weblog缩写，web(网)+log(日志)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "blind",
        "day": "Day 6",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语blind'盲'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "blame",
        "day": "Day 6",
        "pos": "v./n.",
        "formula": "blame = blam- + -e",
        "prefix": "",
        "root": "来自blasmer'责备'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "board",
        "day": "Day 6",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语bord'木板'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "boil",
        "day": "Day 7",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自拉丁语bullire'冒泡'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "bookstore",
        "day": "Day 7",
        "pos": "n.",
        "formula": "bookstore = book + store",
        "prefix": "",
        "root": "book+store",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "boring",
        "day": "Day 7",
        "pos": "adj.",
        "formula": "boring = bor- + -ing",
        "prefix": "",
        "root": "bor来自borian'钻孔'引申",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "borrow",
        "day": "Day 7",
        "pos": "v.",
        "formula": "borrow = bor- + -row",
        "prefix": "",
        "root": "来自borgian'借'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "bottom",
        "day": "Day 7",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语botm'底部'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "branch",
        "day": "Day 7",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自branche'树枝'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "brave",
        "day": "Day 7",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自意大利语bravo'勇敢'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "break",
        "day": "Day 7",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语brecan'打破'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "breathe",
        "day": "Day 7",
        "pos": "v.",
        "formula": "breathe = breath + -e",
        "prefix": "",
        "root": "breath来自bræth'呼吸'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "bright",
        "day": "Day 7",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语beorht'明亮'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "brilliant",
        "day": "Day 7",
        "pos": "adj.",
        "formula": "brilliant = brilli- + -ant",
        "prefix": "",
        "root": "brilli来自'闪耀'",
        "suffix": "ant 是形容词/名词后缀，-ant 可以表示'做……的人'，也可以表示形容词。比如 assistant = 帮助的人 = 助手！",
        "combo": ""
    },
    {
        "word": "budget",
        "day": "Day 7",
        "pos": "n./v.",
        "formula": "budget = budg- + -et",
        "prefix": "",
        "root": "来自bougette'小皮袋'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "building",
        "day": "Day 7",
        "pos": "n.",
        "formula": "building = build + -ing",
        "prefix": "",
        "root": "build来自byldan'建造'",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "bully",
        "day": "Day 8",
        "pos": "v./n.",
        "formula": "bully = bull + -y",
        "prefix": "",
        "root": "来自boel'兄弟'变贬义",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "burst",
        "day": "Day 8",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语berstan'破裂'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "business",
        "day": "Day 8",
        "pos": "n.",
        "formula": "business = busi- + -ness",
        "prefix": "",
        "root": "busi来自bisig'忙碌'",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "busy",
        "day": "Day 8",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语bisig'忙碌'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "calculate",
        "day": "Day 8",
        "pos": "v.",
        "formula": "calculate = calcul- + -ate",
        "prefix": "",
        "root": "calcul来自calculus'小石子'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "calendar",
        "day": "Day 8",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自calendarium'账本'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "calm",
        "day": "Day 8",
        "pos": "adj./v.",
        "formula": "",
        "prefix": "",
        "root": "来自希腊语kauma'热'后指宁静",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cancel",
        "day": "Day 8",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自cancellare'画格子'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "capital",
        "day": "Day 8",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自caput'头'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "careful",
        "day": "Day 8",
        "pos": "adj.",
        "formula": "careful = care + -ful",
        "prefix": "",
        "root": "care+ful",
        "suffix": "ful 是形容词后缀，-ful 像只装满东西的杯子，表示'充满……的'。比如 beautiful = 充满美的 = 美丽的！",
        "combo": ""
    },
    {
        "word": "cancer",
        "day": "Day 8",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自cancer'螃蟹'(肿瘤像蟹脚)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "caring",
        "day": "Day 8",
        "pos": "adj.",
        "formula": "caring = care + -ing",
        "prefix": "",
        "root": "care+ing",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "career",
        "day": "Day 8",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自carrière'跑道'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "careless",
        "day": "Day 9",
        "pos": "adj.",
        "formula": "careless = care + -less",
        "prefix": "",
        "root": "care+less",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "case",
        "day": "Day 9",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自casus'发生的事'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cash",
        "day": "Day 9",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自capsa'盒子'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "celebrate",
        "day": "Day 9",
        "pos": "v.",
        "formula": "celebrate = celebr- + -ate",
        "prefix": "",
        "root": "celebr来自celebrare'庆祝'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "central",
        "day": "Day 9",
        "pos": "adj.",
        "formula": "central = centr- + -al",
        "prefix": "",
        "root": "centr来自centrum'中心'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "century",
        "day": "Day 9",
        "pos": "n.",
        "formula": "century = centur- + -y",
        "prefix": "",
        "root": "centur来自centum'一百'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "ceremony",
        "day": "Day 9",
        "pos": "n.",
        "formula": "ceremony = ceremon- + -y",
        "prefix": "",
        "root": "来自caerimonia'仪式'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "challenge",
        "day": "Day 9",
        "pos": "n./v.",
        "formula": "challenge = challeng- + -e",
        "prefix": "",
        "root": "来自chalonger'质疑'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "champion",
        "day": "Day 9",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自campio'战场斗士'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "chance",
        "day": "Day 9",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自cheance'发生的事'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "character",
        "day": "Day 9",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自kharakter'刻印'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "characteristic",
        "day": "Day 9",
        "pos": "n./adj.",
        "formula": "characteristic = character + -istic",
        "prefix": "",
        "root": "character+istic",
        "suffix": "ic 是形容词后缀，-ic 来自希腊语 -ikos，像件希腊长袍，穿上就是形容词。比如 historic = 历史的！",
        "combo": ""
    },
    {
        "word": "chemistry",
        "day": "Day 10",
        "pos": "n.",
        "formula": "chemistry = chem- + -istry",
        "prefix": "",
        "root": "chem来自khemeia'炼金术'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "choice",
        "day": "Day 10",
        "pos": "n.",
        "formula": "choice = cho- + -ice",
        "prefix": "",
        "root": "来自chois'选择'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "citizen",
        "day": "Day 10",
        "pos": "n.",
        "formula": "citizen = cit- + -izen",
        "prefix": "",
        "root": "cit来自cite'城市'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "clap",
        "day": "Day 10",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自clæppan'拍击'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "classic",
        "day": "Day 10",
        "pos": "adj./n.",
        "formula": "classic = class + -ic",
        "prefix": "",
        "root": "class+ic",
        "suffix": "ic 是形容词后缀，-ic 来自希腊语 -ikos，像件希腊长袍，穿上就是形容词。比如 historic = 历史的！",
        "combo": ""
    },
    {
        "word": "clear",
        "day": "Day 10",
        "pos": "adj./v.",
        "formula": "",
        "prefix": "",
        "root": "来自clarus'明亮'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "clever",
        "day": "Day 10",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自cliver'灵巧'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "climate",
        "day": "Day 10",
        "pos": "n.",
        "formula": "climate = clim- + -ate",
        "prefix": "",
        "root": "clim来自klima'倾斜/纬度'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "clearly",
        "day": "Day 10",
        "pos": "adv.",
        "formula": "clearly = clear + -ly",
        "prefix": "",
        "root": "clear来自拉丁语clarus'明亮/清楚'",
        "suffix": "-ly是副词后缀，表示'……地'。像给形容词加个小尾巴，clear立刻变成'清楚地'！",
        "combo": ""
    },
    {
        "word": "click",
        "day": "Day 10",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "拟声词",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cinema",
        "day": "Day 10",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自kinema'运动'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cleaner",
        "day": "Day 10",
        "pos": "n.",
        "formula": "cleaner = clean + -er",
        "prefix": "",
        "root": "clean+er",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "chore",
        "day": "Day 10",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自chare'零星活'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "circle",
        "day": "Day 10",
        "pos": "n./v.",
        "formula": "circle = circ- + -le",
        "prefix": "",
        "root": "circ来自circulus'圆'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cloudy",
        "day": "Day 11",
        "pos": "adj.",
        "formula": "cloudy = cloud + -y",
        "prefix": "",
        "root": "cloud+y",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "coach",
        "day": "Day 11",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自kocsi'马车'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "coast",
        "day": "Day 11",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自costa'肋骨/边缘'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "collect",
        "day": "Day 11",
        "pos": "v.",
        "formula": "collect = col- + lect",
        "prefix": "col-是com-在l前同化",
        "root": "lect来自legere'收集'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "college",
        "day": "Day 11",
        "pos": "n.",
        "formula": "college = col- + leg + -e",
        "prefix": "col-是com-变体",
        "root": "leg来自legere'读'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "comfortable",
        "day": "Day 11",
        "pos": "adj.",
        "formula": "comfortable = com- + fort + -able",
        "prefix": "com-表加强",
        "root": "fort来自fortis'强壮'",
        "suffix": "able 是形容词后缀，-able 是个'能力认证官'，加在词根后面表示'能够被……的'。比如 readable = 能被读的！",
        "combo": ""
    },
    {
        "word": "common",
        "day": "Day 11",
        "pos": "adj.",
        "formula": "common = com- + -mon",
        "prefix": "com-表共同",
        "root": "mon来自munis'公共'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "communicate",
        "day": "Day 11",
        "pos": "v.",
        "formula": "communicate = com- + mun + -ic + -ate",
        "prefix": "com-表共同",
        "root": "mun来自munus'公共'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "compare",
        "day": "Day 11",
        "pos": "v.",
        "formula": "compare = com- + par + -e",
        "prefix": "com-表共同",
        "root": "par来自par'相等'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "compete",
        "day": "Day 11",
        "pos": "v.",
        "formula": "compete = com- + pet + -e",
        "prefix": "com-表共同",
        "root": "pet来自petere'追求'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "complete",
        "day": "Day 11",
        "pos": "v./adj.",
        "formula": "complete = com- + ple + -te",
        "prefix": "com-表加强",
        "root": "ple来自plere'填满'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "concentrate",
        "day": "Day 11",
        "pos": "v.",
        "formula": "concentrate = con- + centr + -ate",
        "prefix": "con-表共同",
        "root": "centr来自centrum'中心'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "control",
        "day": "Day 12",
        "pos": "v./n.",
        "formula": "control = contra- + -rol",
        "prefix": "contra-表反对",
        "root": "rol与'名单'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "convenient",
        "day": "Day 12",
        "pos": "adj.",
        "formula": "convenient = con- + ven + -ient",
        "prefix": "con-表共同",
        "root": "ven来自venire'来'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "conversation",
        "day": "Day 12",
        "pos": "n.",
        "formula": "conversation = con- + vers + -ation",
        "prefix": "con-表共同",
        "root": "vers来自vertere'转'",
        "suffix": "ation 是名词后缀，-ate + -ion 组合而成，表示动作或结果。比如 education = 教育这件事！",
        "combo": ""
    },
    {
        "word": "cooperate",
        "day": "Day 12",
        "pos": "v.",
        "formula": "cooperate = co- + oper + -ate",
        "prefix": "co-表共同",
        "root": "oper来自opera'工作'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "courage",
        "day": "Day 12",
        "pos": "n.",
        "formula": "courage = cour- + -age",
        "prefix": "",
        "root": "cour来自cor'心'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "cover",
        "day": "Day 12",
        "pos": "v./n.",
        "formula": "cover = co- + ver",
        "prefix": "co-表完全",
        "root": "ver与operire'覆盖'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "competition",
        "day": "Day 12",
        "pos": "n.",
        "formula": "competition = com- + pet + -ition",
        "prefix": "com-表共同",
        "root": "pet来自petere'追求'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "continue",
        "day": "Day 12",
        "pos": "v.",
        "formula": "continue = con- + tin + -ue",
        "prefix": "con-表共同",
        "root": "tin来自tenere'保持'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cook",
        "day": "Day 12",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自cocus'厨师'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "cool",
        "day": "Day 12",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自col'凉爽'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "contain",
        "day": "Day 12",
        "pos": "v.",
        "formula": "contain = con- + tain",
        "prefix": "con-表一起",
        "root": "tain来自tenere'拿住'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "corner",
        "day": "Day 12",
        "pos": "n.",
        "formula": "corner = corn- + -er",
        "prefix": "",
        "root": "corn来自cornu'角'",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "correct",
        "day": "Day 12",
        "pos": "adj./v.",
        "formula": "correct = cor- + rect",
        "prefix": "cor-是com-在r前同化",
        "root": "rect来自rectus'直'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "creature",
        "day": "Day 13",
        "pos": "n.",
        "formula": "creature = cre- + -ature",
        "prefix": "",
        "root": "cre来自creare'创造'",
        "suffix": "ture 是名词后缀，-ture 表示结果。比如 picture = 画出来的东西 = 图画！",
        "combo": ""
    },
    {
        "word": "criticize",
        "day": "Day 13",
        "pos": "v.",
        "formula": "criticize = crit- + -ic + -ize",
        "prefix": "",
        "root": "crit来自kritikos'判断'",
        "suffix": "ize 是动词后缀，-ize 表示'使成为'。比如 modernize = 使现代化！",
        "combo": ""
    },
    {
        "word": "crowded",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "crowded = crowd + -ed",
        "prefix": "",
        "root": "crowd+ed",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "cruel",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自crudelis'粗糙'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "custom",
        "day": "Day 13",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自consuetudo'习惯'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "dangerous",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "dangerous = danger + -ous",
        "prefix": "",
        "root": "danger来自dominium'统治权'",
        "suffix": "ous 是形容词后缀，-ous 来自拉丁语 -osus，是形容词外套。比如 dangerous = 危险的！",
        "combo": ""
    },
    {
        "word": "decide",
        "day": "Day 13",
        "pos": "v.",
        "formula": "decide = de- + cid + -e",
        "prefix": "de-表向下",
        "root": "cid来自caedere'切'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "deeply",
        "day": "Day 13",
        "pos": "adv.",
        "formula": "deeply = deep + -ly",
        "prefix": "",
        "root": "deep+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "crazy",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "crazy = craz- + -y",
        "prefix": "",
        "root": "来自crasen'发狂'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "curious",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "curious = cur- + -ious",
        "prefix": "",
        "root": "cur来自cura'关心'",
        "suffix": "ous 是形容词后缀，-ous 来自拉丁语 -osus，是形容词外套。比如 dangerous = 危险的！",
        "combo": ""
    },
    {
        "word": "cure",
        "day": "Day 13",
        "pos": "v./n.",
        "formula": "cure = cur- + -e",
        "prefix": "",
        "root": "cur来自cura'照料'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "damage",
        "day": "Day 13",
        "pos": "n./v.",
        "formula": "damage = dam- + -age",
        "prefix": "",
        "root": "dam来自damnum'损失'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "dark",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自deorc'黑暗'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "date",
        "day": "Day 13",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自data'写明的日期'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "deaf",
        "day": "Day 13",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自deaf'聋'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "death",
        "day": "Day 13",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自古英语deað'死亡'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "dentist",
        "day": "Day 14",
        "pos": "n.",
        "formula": "dentist = dent- + -ist",
        "prefix": "",
        "root": "dent来自dens'牙齿'",
        "suffix": "ist 是名词后缀，-ist 表示'从事……的人'。比如 scientist = 科学家！",
        "combo": ""
    },
    {
        "word": "describe",
        "day": "Day 14",
        "pos": "v.",
        "formula": "describe = de- + scrib + -e",
        "prefix": "de-表向下",
        "root": "scrib来自scribere'写'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "design",
        "day": "Day 14",
        "pos": "v./n.",
        "formula": "design = de- + sign",
        "prefix": "de-表完全",
        "root": "sign来自signum'标记'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "determined",
        "day": "Day 14",
        "pos": "adj.",
        "formula": "determined = de- + termin + -ed",
        "prefix": "de-表完全",
        "root": "termin来自terminus'界限'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "development",
        "day": "Day 14",
        "pos": "n.",
        "formula": "development = de- + velop + -ment",
        "prefix": "de-表展开",
        "root": "velop来自voloper'包裹'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "diet",
        "day": "Day 14",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自diaita'生活方式'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "difference",
        "day": "Day 14",
        "pos": "n.",
        "formula": "difference = dif- + fer + -ence",
        "prefix": "dif-表分开(dis-变体)",
        "root": "fer来自ferre'携带'",
        "suffix": "ence 是名词后缀，-ence 和 -ance 是姐妹，都表示名词性质。比如 difference = 差异！",
        "combo": ""
    },
    {
        "word": "difficult",
        "day": "Day 14",
        "pos": "adj.",
        "formula": "difficult = dif- + fic + -ult",
        "prefix": "dif-表不",
        "root": "fic来自facere'做'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "direct",
        "day": "Day 14",
        "pos": "adj./v.",
        "formula": "direct = di- + rect",
        "prefix": "di-是de-变体",
        "root": "rect来自rectus'直'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "digital",
        "day": "Day 14",
        "pos": "adj.",
        "formula": "digital = digit- + -al",
        "prefix": "",
        "root": "digit来自digitus'手指'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "disabled",
        "day": "Day 14",
        "pos": "adj.",
        "formula": "disabled = dis- + abled",
        "prefix": "dis-表否定",
        "root": "abled能够",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "disadvantage",
        "day": "Day 14",
        "pos": "n.",
        "formula": "disadvantage = dis- + advantage",
        "prefix": "dis-表相反",
        "root": "advantage优势",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "disappointed",
        "day": "Day 14",
        "pos": "adj.",
        "formula": "disappointed = dis- + appoint + -ed",
        "prefix": "dis-表否定",
        "root": "appoint指定",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "discussion",
        "day": "Day 14",
        "pos": "n.",
        "formula": "discussion = dis- + cuss + -ion",
        "prefix": "dis-表分开",
        "root": "cuss来自quatere'打击'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "dislike",
        "day": "Day 14",
        "pos": "v./n.",
        "formula": "dislike = dis- + like",
        "prefix": "dis-表否定",
        "root": "like喜欢",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "display",
        "day": "Day 14",
        "pos": "v./n.",
        "formula": "display = dis- + play",
        "prefix": "dis-表展开",
        "root": "play来自plicare'折叠'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "divide",
        "day": "Day 15",
        "pos": "v.",
        "formula": "divide = di- + vid + -e",
        "prefix": "di-表分开",
        "root": "vid来自videre'看'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "documentary",
        "day": "Day 15",
        "pos": "n.",
        "formula": "documentary = docu- + -ment + -ary",
        "prefix": "",
        "root": "docu来自docere'教'",
        "suffix": "ary 是形容词/名词后缀，-ary 像个小房子，表示'与……有关的'或场所。比如 library = 放书的地方 = 图书馆！",
        "combo": ""
    },
    {
        "word": "donate",
        "day": "Day 15",
        "pos": "v.",
        "formula": "donate = don- + -ate",
        "prefix": "",
        "root": "don来自donare'给'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "double",
        "day": "Day 15",
        "pos": "adj./n./v.",
        "formula": "double = doub- + -le",
        "prefix": "",
        "root": "来自duplus'两倍'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "doubt",
        "day": "Day 15",
        "pos": "n./v.",
        "formula": "doubt = doub- + -t",
        "prefix": "",
        "root": "来自dubitare'犹豫'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "download",
        "day": "Day 15",
        "pos": "v./n.",
        "formula": "download = down + load",
        "prefix": "",
        "root": "down+load",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "drought",
        "day": "Day 15",
        "pos": "n.",
        "formula": "drought = droug- + -ht",
        "prefix": "",
        "root": "来自古英语drugoth'干燥'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "due",
        "day": "Day 15",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自deu'欠'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "duty",
        "day": "Day 15",
        "pos": "n.",
        "formula": "duty = du- + -ty",
        "prefix": "",
        "root": "来自debere'欠'",
        "suffix": "ty 是名词后缀，-ty 是抽象名词后缀。比如 safety = 安全！",
        "combo": ""
    },
    {
        "word": "dull",
        "day": "Day 15",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自dol'愚蠢'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "during",
        "day": "Day 15",
        "pos": "prep.",
        "formula": "during = dur- + -ing",
        "prefix": "",
        "root": "dur来自durare'持续'",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "easy-going",
        "day": "Day 16",
        "pos": "adj.",
        "formula": "easy-going = easy + going",
        "prefix": "",
        "root": "easy(容易的)+going(进行)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "editor",
        "day": "Day 16",
        "pos": "n.",
        "formula": "editor = e- + dit + -or",
        "prefix": "e-是ex-简写",
        "root": "dit来自dare'给'",
        "suffix": "or 是名词后缀，-or 和 -er 是兄弟，都表示'做……的人'。比如 actor = 演员！",
        "combo": ""
    },
    {
        "word": "educate",
        "day": "Day 16",
        "pos": "v.",
        "formula": "educate = e- + duc + -ate",
        "prefix": "e-是ex-简写",
        "root": "duc来自ducere'引导'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "education",
        "day": "Day 16",
        "pos": "n.",
        "formula": "education = e- + duc + -ation",
        "prefix": "e-是ex-简写",
        "root": "duc来自ducere'引导'",
        "suffix": "ation 是名词后缀，-ate + -ion 组合而成，表示动作或结果。比如 education = 教育这件事！",
        "combo": ""
    },
    {
        "word": "elder",
        "day": "Day 16",
        "pos": "adj./n.",
        "formula": "elder = eld- + -er",
        "prefix": "",
        "root": "来自eald'老'",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "electricity",
        "day": "Day 16",
        "pos": "n.",
        "formula": "electricity = electr- + -icity",
        "prefix": "",
        "root": "electr来自elektron'琥珀'(摩擦生电)",
        "suffix": "ity 是名词后缀，-ity 是抽象名词制造机！比如 reality = 现实！",
        "combo": ""
    },
    {
        "word": "embarrassed",
        "day": "Day 16",
        "pos": "adj.",
        "formula": "embarrassed = em- + barr + -ass + -ed",
        "prefix": "em-表进入",
        "root": "barr来自barra'障碍'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "emergency",
        "day": "Day 16",
        "pos": "n.",
        "formula": "emergency = e- + merg + -ency",
        "prefix": "e-是ex-简写",
        "root": "merg来自mergere'沉'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "encourage",
        "day": "Day 16",
        "pos": "v.",
        "formula": "encourage = en- + cour + -age",
        "prefix": "en-表使",
        "root": "cour来自cor'心'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "endanger",
        "day": "Day 16",
        "pos": "v.",
        "formula": "endanger = en- + danger",
        "prefix": "en-表使",
        "root": "danger危险",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "enemy",
        "day": "Day 16",
        "pos": "n.",
        "formula": "enemy = en- + -emy",
        "prefix": "",
        "root": "来自inimicus'非朋友'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "energetic",
        "day": "Day 16",
        "pos": "adj.",
        "formula": "energetic = energ- + -etic",
        "prefix": "",
        "root": "energ来自energeia'能量'",
        "suffix": "ic 是形容词后缀，-ic 来自希腊语 -ikos，像件希腊长袍，穿上就是形容词。比如 historic = 历史的！",
        "combo": ""
    },
    {
        "word": "energy",
        "day": "Day 16",
        "pos": "n.",
        "formula": "energy = en- + erg + -y",
        "prefix": "en-表在内",
        "root": "erg来自ergon'工作'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "emotion",
        "day": "Day 16",
        "pos": "n.",
        "formula": "emotion = e- + mot + -ion",
        "prefix": "e-是ex-简写",
        "root": "mot来自movere'移动'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "emperor",
        "day": "Day 16",
        "pos": "n.",
        "formula": "emperor = emper- + -or",
        "prefix": "",
        "root": "来自imperator'统治者'",
        "suffix": "or 是名词后缀，-or 和 -er 是兄弟，都表示'做……的人'。比如 actor = 演员！",
        "combo": ""
    },
    {
        "word": "empty",
        "day": "Day 16",
        "pos": "adj./v.",
        "formula": "empty = empt- + -y",
        "prefix": "",
        "root": "来自æmettig'空闲'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "engineer",
        "day": "Day 17",
        "pos": "n.",
        "formula": "engineer = engine + -er",
        "prefix": "",
        "root": "engine来自ingenium'机械'",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "enough",
        "day": "Day 17",
        "pos": "adj./adv.",
        "formula": "",
        "prefix": "",
        "root": "来自genog'足够'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "enter",
        "day": "Day 17",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自intrare'进入'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "entertainment",
        "day": "Day 17",
        "pos": "n.",
        "formula": "entertainment = enter- + tain + -ment",
        "prefix": "enter-是inter-变体",
        "root": "tain来自tenere'保持'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "equipment",
        "day": "Day 17",
        "pos": "n.",
        "formula": "equipment = e- + quip + -ment",
        "prefix": "e-表使",
        "root": "quip与装备有关",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "especially",
        "day": "Day 17",
        "pos": "adv.",
        "formula": "especially = e- + special + -ly",
        "prefix": "e-是ex-简写",
        "root": "special特别",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "event",
        "day": "Day 17",
        "pos": "n.",
        "formula": "event = e- + vent",
        "prefix": "e-是ex-简写",
        "root": "vent来自venire'来'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "exact",
        "day": "Day 17",
        "pos": "adj.",
        "formula": "exact = ex- + act",
        "prefix": "ex-表向外",
        "root": "act来自agere'做'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "examine",
        "day": "Day 17",
        "pos": "v.",
        "formula": "examine = ex- + amin + -e",
        "prefix": "ex-表向外",
        "root": "amin与'检查'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "excellent",
        "day": "Day 17",
        "pos": "adj.",
        "formula": "excellent = ex- + cell + -ent",
        "prefix": "ex-表向外",
        "root": "cell来自cellere'升起'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "exchange",
        "day": "Day 17",
        "pos": "v./n.",
        "formula": "exchange = ex- + change",
        "prefix": "ex-表向外",
        "root": "change换",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "excite",
        "day": "Day 17",
        "pos": "v.",
        "formula": "excite = ex- + cit + -e",
        "prefix": "ex-表向外",
        "root": "cit来自ciere'激起'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "exciting",
        "day": "Day 17",
        "pos": "adj.",
        "formula": "exciting = ex- + cit + -ing",
        "prefix": "ex-表向外",
        "root": "cit来自ciere'激起'",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "excuse",
        "day": "Day 17",
        "pos": "v./n.",
        "formula": "excuse = ex- + cuse",
        "prefix": "ex-表向外",
        "root": "cuse来自causa'原因'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "experience",
        "day": "Day 17",
        "pos": "n./v.",
        "formula": "experience = ex- + peri + -ence",
        "prefix": "ex-表向外",
        "root": "peri来自periri'尝试'",
        "suffix": "ence 是名词后缀，-ence 和 -ance 是姐妹，都表示名词性质。比如 difference = 差异！",
        "combo": ""
    },
    {
        "word": "exist",
        "day": "Day 17",
        "pos": "v.",
        "formula": "exist = ex- + ist",
        "prefix": "ex-表向外",
        "root": "ist来自stare'站立'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "experiment",
        "day": "Day 18",
        "pos": "n./v.",
        "formula": "experiment = ex- + per + -iment",
        "prefix": "ex-表向外",
        "root": "per来自periri'尝试'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "explain",
        "day": "Day 18",
        "pos": "v.",
        "formula": "explain = ex- + plain",
        "prefix": "ex-表向外",
        "root": "plain来自planus'清楚'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "explore",
        "day": "Day 18",
        "pos": "v.",
        "formula": "explore = ex- + plor + -e",
        "prefix": "ex-表向外",
        "root": "plor来自plorare'喊'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "express",
        "day": "Day 18",
        "pos": "v./n.",
        "formula": "express = ex- + press",
        "prefix": "ex-表向外",
        "root": "press来自premere'压'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "extreme",
        "day": "Day 18",
        "pos": "adj./n.",
        "formula": "extreme = extr- + -eme",
        "prefix": "",
        "root": "extr来自extremus'最外'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "eyesight",
        "day": "Day 18",
        "pos": "n.",
        "formula": "eyesight = eye + sight",
        "prefix": "",
        "root": "eye+sight",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "facial",
        "day": "Day 18",
        "pos": "adj./n.",
        "formula": "facial = fac- + -ial",
        "prefix": "",
        "root": "fac来自facies'脸'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "fail",
        "day": "Day 18",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自faillir'使人失望'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fair",
        "day": "Day 18",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自fæger'美丽/公平'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "familiar",
        "day": "Day 18",
        "pos": "adj.",
        "formula": "familiar = famili- + -ar",
        "prefix": "",
        "root": "famili来自familia'家庭'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "famous",
        "day": "Day 18",
        "pos": "adj.",
        "formula": "famous = fam- + -ous",
        "prefix": "",
        "root": "fam来自fama'名声'",
        "suffix": "ous 是形容词后缀，-ous 来自拉丁语 -osus，是形容词外套。比如 dangerous = 危险的！",
        "combo": ""
    },
    {
        "word": "fantastic",
        "day": "Day 18",
        "pos": "adj.",
        "formula": "fantastic = fantas- + -tic",
        "prefix": "",
        "root": "fantas来自phantasia'想象'",
        "suffix": "ic 是形容词后缀，-ic 来自希腊语 -ikos，像件希腊长袍，穿上就是形容词。比如 historic = 历史的！",
        "combo": ""
    },
    {
        "word": "fascinate",
        "day": "Day 18",
        "pos": "v.",
        "formula": "fascinate = fascin- + -ate",
        "prefix": "",
        "root": "来自fascinare'施魔法'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "fashion",
        "day": "Day 18",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自façon'制作'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "favourite",
        "day": "Day 18",
        "pos": "adj./n.",
        "formula": "favourite = favour + -ite",
        "prefix": "",
        "root": "favour+ite",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fearless",
        "day": "Day 18",
        "pos": "adj.",
        "formula": "fearless = fear + -less",
        "prefix": "",
        "root": "fear+less",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "feature",
        "day": "Day 19",
        "pos": "n./v.",
        "formula": "feature = featur- + -e",
        "prefix": "",
        "root": "来自faicture'做'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "feeling",
        "day": "Day 19",
        "pos": "n.",
        "formula": "feeling = feel + -ing",
        "prefix": "",
        "root": "feel+ing",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "female",
        "day": "Day 19",
        "pos": "adj./n.",
        "formula": "female = fem- + -ale",
        "prefix": "",
        "root": "fem来自femina'女人'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "firm",
        "day": "Day 19",
        "pos": "adj./n.",
        "formula": "",
        "prefix": "",
        "root": "来自firmus'坚固'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fit",
        "day": "Day 19",
        "pos": "v./adj.",
        "formula": "",
        "prefix": "",
        "root": "来自中古英语fitten'合适'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fix",
        "day": "Day 19",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自figere'固定'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "flight",
        "day": "Day 19",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自flyht'飞'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "floor",
        "day": "Day 19",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自flor'地板'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "flower",
        "day": "Day 19",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自flour'花'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "flu",
        "day": "Day 19",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "influenza缩写，来自'影响'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fireman",
        "day": "Day 19",
        "pos": "n.",
        "formula": "fireman = fire + man",
        "prefix": "",
        "root": "fire+man",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "firework",
        "day": "Day 19",
        "pos": "n.",
        "formula": "firework = fire + work",
        "prefix": "",
        "root": "fire+work",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fine",
        "day": "Day 19",
        "pos": "adj./n.",
        "formula": "",
        "prefix": "",
        "root": "来自finis'结束'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "financial",
        "day": "Day 19",
        "pos": "adj.",
        "formula": "financial = fin- + -anc- + -ial",
        "prefix": "",
        "root": "fin来自finis'结束/付款'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "finally",
        "day": "Day 19",
        "pos": "adv.",
        "formula": "finally = fin- + -al + -ly",
        "prefix": "",
        "root": "fin来自finis'结束'",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "focus",
        "day": "Day 20",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自focus'壁炉'(围火集中)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fond",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自fonned'溺爱'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "foolish",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "foolish = fool + -ish",
        "prefix": "",
        "root": "fool+ish",
        "suffix": "ish 是形容词后缀，-ish 表示'有点……的'。比如 childish = 有点孩子气的！",
        "combo": ""
    },
    {
        "word": "force",
        "day": "Day 20",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自fortis'力量'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "foreign",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "foreign = fore- + -ign",
        "prefix": "fore-表外面",
        "root": "ign来自ignotus'未知'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "forgive",
        "day": "Day 20",
        "pos": "v.",
        "formula": "forgive = for- + give",
        "prefix": "for-表远离",
        "root": "give给",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "formal",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "formal = form- + -al",
        "prefix": "",
        "root": "form+al",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "fortunate",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "fortunate = fortun- + -ate",
        "prefix": "",
        "root": "fortun来自fortuna'运气'",
        "suffix": "ate 是动词/形容词后缀，-ate 像个动词开关，一加就变动作！比如 activate = 使活跃起来！",
        "combo": ""
    },
    {
        "word": "freeze",
        "day": "Day 20",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自freosan'结冰'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fresh",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自fersc'新鲜'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "frightened",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "frightened = fright + -en + -ed",
        "prefix": "",
        "root": "fright+en+ed",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "frightening",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "frightening = fright + -en + -ing",
        "prefix": "",
        "root": "fright+en+ing",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "friendship",
        "day": "Day 20",
        "pos": "n.",
        "formula": "friendship = friend + -ship",
        "prefix": "",
        "root": "friend+ship",
        "suffix": "ship 是名词后缀，-ship 表示状态或身份。比如 friendship = 朋友的状态 = 友谊！",
        "combo": ""
    },
    {
        "word": "full",
        "day": "Day 20",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自full'满'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "fuel",
        "day": "Day 20",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自focus'火'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "funny",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "funny = fun + -n- + -y",
        "prefix": "",
        "root": "fun+y",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "further",
        "day": "Day 21",
        "pos": "adj./adv.",
        "formula": "further = furth- + -er",
        "prefix": "",
        "root": "来自furthor'更远'",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "gather",
        "day": "Day 21",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自gadrian'聚集'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "generation",
        "day": "Day 21",
        "pos": "n.",
        "formula": "generation = gener- + -ation",
        "prefix": "",
        "root": "gener来自generare'产生'",
        "suffix": "ation 是名词后缀，-ate + -ion 组合而成，表示动作或结果。比如 education = 教育这件事！",
        "combo": ""
    },
    {
        "word": "generous",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "generous = gener- + -ous",
        "prefix": "",
        "root": "gener来自genus'出身'",
        "suffix": "ous 是形容词后缀，-ous 来自拉丁语 -osus，是形容词外套。比如 dangerous = 危险的！",
        "combo": ""
    },
    {
        "word": "global",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "global = glob- + -al",
        "prefix": "",
        "root": "glob来自globus'球'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "golden",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "golden = gold + -en",
        "prefix": "",
        "root": "gold+en",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "graceful",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "graceful = grace + -ful",
        "prefix": "",
        "root": "grace+ful",
        "suffix": "ful 是形容词后缀，-ful 像只装满东西的杯子，表示'充满……的'。比如 beautiful = 充满美的 = 美丽的！",
        "combo": ""
    },
    {
        "word": "gradual",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "gradual = grad- + -ual",
        "prefix": "",
        "root": "grad来自gradus'步'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "grateful",
        "day": "Day 21",
        "pos": "adj.",
        "formula": "grateful = grate- + -ful",
        "prefix": "",
        "root": "来自gratus'愉悦'",
        "suffix": "ful 是形容词后缀，-ful 像只装满东西的杯子，表示'充满……的'。比如 beautiful = 充满美的 = 美丽的！",
        "combo": ""
    },
    {
        "word": "government",
        "day": "Day 21",
        "pos": "n.",
        "formula": "government = govern + -ment",
        "prefix": "",
        "root": "govern来自gubernare'掌舵'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "greet",
        "day": "Day 22",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自gretan'问候'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "grow",
        "day": "Day 22",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自growan'生长'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "grow-up",
        "day": "Day 22",
        "pos": "v./n.",
        "formula": "grow-up = grow + up",
        "prefix": "",
        "root": "grow(生长)+up(向上)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "guess",
        "day": "Day 22",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "可能来自gessen",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "guide",
        "day": "Day 22",
        "pos": "n./v.",
        "formula": "guide = guid- + -e",
        "prefix": "",
        "root": "来自guider'引导'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "gym",
        "day": "Day 22",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自gymnasion'裸体训练场'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "habit",
        "day": "Day 22",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自habitus'居住'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "haircut",
        "day": "Day 22",
        "pos": "n.",
        "formula": "haircut = hair + cut",
        "prefix": "",
        "root": "hair+cut",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "handsome",
        "day": "Day 22",
        "pos": "adj.",
        "formula": "handsome = hand + -some",
        "prefix": "",
        "root": "hand+some",
        "suffix": "some 是形容词后缀，-some 表示'令人……的'。比如 awesome = 令人敬畏的 = 很棒的！",
        "combo": ""
    },
    {
        "word": "grey",
        "day": "Day 22",
        "pos": "adj./n.",
        "formula": "",
        "prefix": "",
        "root": "来自græg'灰色'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "greenhouse",
        "day": "Day 22",
        "pos": "n.",
        "formula": "greenhouse = green + house",
        "prefix": "",
        "root": "green+house",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "gun",
        "day": "Day 22",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "可能来自Gunhilda",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "guard",
        "day": "Day 22",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自wardon'看护'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hang",
        "day": "Day 23",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自hangian'悬挂'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "happiness",
        "day": "Day 23",
        "pos": "n.",
        "formula": "happiness = happy + -ness",
        "prefix": "",
        "root": "happy+ness",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "hard",
        "day": "Day 23",
        "pos": "adj./adv.",
        "formula": "",
        "prefix": "",
        "root": "来自heard'坚硬'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hardly",
        "day": "Day 23",
        "pos": "adv.",
        "formula": "hardly = hard + -ly",
        "prefix": "",
        "root": "hard+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "hard-working",
        "day": "Day 23",
        "pos": "adj.",
        "formula": "hard-working = hard + working",
        "prefix": "",
        "root": "hard+working",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "harm",
        "day": "Day 23",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自hearm'伤害'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hate",
        "day": "Day 23",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自hatian'憎恨'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "health",
        "day": "Day 23",
        "pos": "n.",
        "formula": "health = heal + -th",
        "prefix": "",
        "root": "heal+th",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "heartbroken",
        "day": "Day 23",
        "pos": "adj.",
        "formula": "heartbroken = heart + broken",
        "prefix": "",
        "root": "heart+broken",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "heavily",
        "day": "Day 23",
        "pos": "adv.",
        "formula": "heavily = heavy + -ly",
        "prefix": "",
        "root": "heavy+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "height",
        "day": "Day 23",
        "pos": "n.",
        "formula": "height = heigh- + -t",
        "prefix": "",
        "root": "来自hiehþu'高'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hers",
        "day": "Day 23",
        "pos": "pron.",
        "formula": "hers = her + -s",
        "prefix": "",
        "root": "her+s",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "herself",
        "day": "Day 23",
        "pos": "pron.",
        "formula": "herself = her + self",
        "prefix": "",
        "root": "her+self",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hospital",
        "day": "Day 24",
        "pos": "n.",
        "formula": "hospital = hospit- + -al",
        "prefix": "",
        "root": "hospit来自hospes'客人'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "host",
        "day": "Day 24",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自hospes'主人'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "history",
        "day": "Day 24",
        "pos": "n.",
        "formula": "history = histor- + -y",
        "prefix": "",
        "root": "histor来自histor'知道'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "historical",
        "day": "Day 24",
        "pos": "adj.",
        "formula": "historical = histor- + -ical",
        "prefix": "",
        "root": "histor+ical",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "hold",
        "day": "Day 24",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自healdan'握住'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hobby",
        "day": "Day 24",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自hobi'小马'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "holiday",
        "day": "Day 24",
        "pos": "n.",
        "formula": "holiday = holi- + day",
        "prefix": "",
        "root": "holi来自halig'神圣'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "honest",
        "day": "Day 24",
        "pos": "adj.",
        "formula": "honest = hon- + -est",
        "prefix": "",
        "root": "来自honos'荣誉'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "available",
        "day": "Day 24",
        "pos": "adj.",
        "formula": "available = a- + vail + -able",
        "prefix": "a-来自ad-",
        "root": "vail来自valere'价值'",
        "suffix": "able 是形容词后缀，-able 是个'能力认证官'，加在词根后面表示'能够被……的'。比如 readable = 能被读的！",
        "combo": ""
    },
    {
        "word": "average",
        "day": "Day 24",
        "pos": "adj./n.",
        "formula": "average = aver + -age",
        "prefix": "",
        "root": "aver来自阿拉伯语'损坏货物'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "awake",
        "day": "Day 24",
        "pos": "adj./v.",
        "formula": "awake = a- + wake",
        "prefix": "a-表状态",
        "root": "wake来自古英语'醒'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "awful",
        "day": "Day 24",
        "pos": "adj.",
        "formula": "awful = awe + -ful",
        "prefix": "",
        "root": "awe来自古挪威语'敬畏'",
        "suffix": "ful 是形容词后缀，-ful 像只装满东西的杯子，表示'充满……的'。比如 beautiful = 充满美的 = 美丽的！",
        "combo": ""
    },
    {
        "word": "background",
        "day": "Day 24",
        "pos": "n.",
        "formula": "background = back + ground",
        "prefix": "",
        "root": "back+ground",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "balance",
        "day": "Day 24",
        "pos": "n./v.",
        "formula": "balance = bal- + -ance",
        "prefix": "",
        "root": "bal来自bilanx'天平'",
        "suffix": "ance 是名词后缀，-ance 是个'状态记录仪'，把动作变成状态名词。比如 importance = 重要的状态！",
        "combo": ""
    },
    {
        "word": "awfully",
        "day": "Day 24",
        "pos": "adv.",
        "formula": "awfully = awe + -ful + -ly",
        "prefix": "",
        "root": "awe来自古挪威语'敬畏'",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "humour",
        "day": "Day 25",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自humor'体液'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "hungry",
        "day": "Day 25",
        "pos": "adj.",
        "formula": "hungry = hungr- + -y",
        "prefix": "",
        "root": "来自hungrig'饥饿'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "hunter",
        "day": "Day 25",
        "pos": "n.",
        "formula": "hunter = hunt + -er",
        "prefix": "",
        "root": "hunt+er",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "hurt",
        "day": "Day 25",
        "pos": "v./adj.",
        "formula": "",
        "prefix": "",
        "root": "来自hurter'撞击'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "ignore",
        "day": "Day 25",
        "pos": "v.",
        "formula": "ignore = ig- + nore",
        "prefix": "ig-是in-变体'不'",
        "root": "nore来自noscere'知道'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "illness",
        "day": "Day 25",
        "pos": "n.",
        "formula": "illness = ill + -ness",
        "prefix": "",
        "root": "ill+ness",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "image",
        "day": "Day 25",
        "pos": "n.",
        "formula": "image = imag- + -e",
        "prefix": "",
        "root": "来自imago'形象'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "imagination",
        "day": "Day 25",
        "pos": "n.",
        "formula": "imagination = imag- + -in- + -ation",
        "prefix": "",
        "root": "imag来自imago'形象'",
        "suffix": "ation 是名词后缀，-ate + -ion 组合而成，表示动作或结果。比如 education = 教育这件事！",
        "combo": ""
    },
    {
        "word": "importance",
        "day": "Day 25",
        "pos": "n.",
        "formula": "importance = im- + port + -ance",
        "prefix": "im-是in-变体'向内'",
        "root": "port来自portare'携带'",
        "suffix": "ance 是名词后缀，-ance 是个'状态记录仪'，把动作变成状态名词。比如 importance = 重要的状态！",
        "combo": ""
    },
    {
        "word": "impossible",
        "day": "Day 25",
        "pos": "adj.",
        "formula": "impossible = im- + possible",
        "prefix": "im-表'不'",
        "root": "possible能够",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "impress",
        "day": "Day 25",
        "pos": "v.",
        "formula": "impress = im- + press",
        "prefix": "im-是in-变体'向内'",
        "root": "press来自premere'压'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "improve",
        "day": "Day 25",
        "pos": "v.",
        "formula": "improve = im- + prove",
        "prefix": "im-表使",
        "root": "prove来自probare'测试'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "independence",
        "day": "Day 25",
        "pos": "n.",
        "formula": "independence = in- + depend + -ence",
        "prefix": "in-表示否定'不'",
        "root": "depend来自de-+pend'悬挂'，意为'依赖'",
        "suffix": "-ence是名词后缀，表示'性质、状态'",
        "combo": ""
    },
    {
        "word": "industry",
        "day": "Day 25",
        "pos": "n.",
        "formula": "industry = in- + dustr + -y",
        "prefix": "in-表在内",
        "root": "dustr来自struere'建造'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "influence",
        "day": "Day 25",
        "pos": "n./v.",
        "formula": "influence = in- + flu + -ence",
        "prefix": "in-表向内",
        "root": "flu来自fluere'流动'",
        "suffix": "ence 是名词后缀，-ence 和 -ance 是姐妹，都表示名词性质。比如 difference = 差异！",
        "combo": ""
    },
    {
        "word": "influential",
        "day": "Day 25",
        "pos": "adj.",
        "formula": "influential = in- + flu + -ent + -ial",
        "prefix": "in-表向内",
        "root": "flu来自fluere'流动'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "interested",
        "day": "Day 26",
        "pos": "adj.",
        "formula": "interested = inter- + est + -ed",
        "prefix": "inter-表之间",
        "root": "est来自esse'存在'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "interrupt",
        "day": "Day 26",
        "pos": "v.",
        "formula": "interrupt = inter- + rupt",
        "prefix": "inter-表之间",
        "root": "rupt来自rumpere'破'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "international",
        "day": "Day 26",
        "pos": "adj.",
        "formula": "international = inter- + nation + -al",
        "prefix": "inter-表之间",
        "root": "nation来自nasci'出生'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "introduce",
        "day": "Day 26",
        "pos": "v.",
        "formula": "introduce = intro- + duc + -e",
        "prefix": "intro-表向内",
        "root": "duc来自ducere'引导'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "invent",
        "day": "Day 26",
        "pos": "v.",
        "formula": "invent = in- + vent",
        "prefix": "in-表在上",
        "root": "vent来自venire'来'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "invitation",
        "day": "Day 26",
        "pos": "n.",
        "formula": "invitation = in- + vit + -ation",
        "prefix": "in-表向内",
        "root": "vit来自vitare'邀请'",
        "suffix": "ation 是名词后缀，-ate + -ion 组合而成，表示动作或结果。比如 education = 教育这件事！",
        "combo": ""
    },
    {
        "word": "involved",
        "day": "Day 26",
        "pos": "adj.",
        "formula": "involved = in- + volv + -ed",
        "prefix": "in-表向内",
        "root": "volv来自volvere'卷'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "item",
        "day": "Day 26",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自拉丁语item'同样地'，原指'同样地(列举下一项)'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "jeans",
        "day": "Day 26",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自Genes'热那亚'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "jogging",
        "day": "Day 26",
        "pos": "n.",
        "formula": "jogging = jog + -ging",
        "prefix": "",
        "root": "jog来源不确定",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "join",
        "day": "Day 26",
        "pos": "v.",
        "formula": "",
        "prefix": "",
        "root": "来自jungere'连接'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "joke",
        "day": "Day 26",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自jocus'笑话'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "journey",
        "day": "Day 26",
        "pos": "n.",
        "formula": "journey = journ- + -ey",
        "prefix": "",
        "root": "来自journee'一天路程'",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "joy",
        "day": "Day 26",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自joie'欢乐'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "judgement",
        "day": "Day 26",
        "pos": "n.",
        "formula": "judgement = judg- + -ement",
        "prefix": "",
        "root": "来自judicare'判断'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "junior",
        "day": "Day 27",
        "pos": "adj./n.",
        "formula": "junior = jun- + -ior",
        "prefix": "",
        "root": "来自juvenis'年轻'",
        "suffix": "or 是名词后缀，-or 和 -er 是兄弟，都表示'做……的人'。比如 actor = 演员！",
        "combo": ""
    },
    {
        "word": "kick",
        "day": "Day 27",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自kiken'挥击'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "kilogramme",
        "day": "Day 27",
        "pos": "n.",
        "formula": "kilogramme = kilo- + gramme",
        "prefix": "kilo-表千",
        "root": "gramme来自gramma'克'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "kindness",
        "day": "Day 27",
        "pos": "n.",
        "formula": "kindness = kind + -ness",
        "prefix": "",
        "root": "kind+ness",
        "suffix": "ess 是名词后缀，-ess 是个'公主标记'，表示女性。比如 actress = 女演员！",
        "combo": ""
    },
    {
        "word": "knock",
        "day": "Day 27",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自cnocian'敲击'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "knowledge",
        "day": "Day 27",
        "pos": "n.",
        "formula": "knowledge = know + -ledge",
        "prefix": "",
        "root": "know+ledge",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lab",
        "day": "Day 27",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "laboratory缩写",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lack",
        "day": "Day 27",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自lak'不足'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "land",
        "day": "Day 27",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自land'土地'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "landscape",
        "day": "Day 27",
        "pos": "n.",
        "formula": "landscape = land + scape",
        "prefix": "",
        "root": "land+scape(景色)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lady",
        "day": "Day 27",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自hlaefdige'揉面人'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "label",
        "day": "Day 27",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自labelle'布条'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "laptop",
        "day": "Day 28",
        "pos": "n.",
        "formula": "laptop = lap + top",
        "prefix": "",
        "root": "lap(大腿)+top",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "largely",
        "day": "Day 28",
        "pos": "adv.",
        "formula": "largely = large + -ly",
        "prefix": "",
        "root": "large+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "lately",
        "day": "Day 28",
        "pos": "adv.",
        "formula": "lately = late + -ly",
        "prefix": "",
        "root": "late+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "latest",
        "day": "Day 28",
        "pos": "adj.",
        "formula": "latest = late + -st",
        "prefix": "",
        "root": "late+st",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "launch",
        "day": "Day 28",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自lanchier'掷矛'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "law",
        "day": "Day 28",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自lagu'法律'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lawyer",
        "day": "Day 28",
        "pos": "n.",
        "formula": "lawyer = law + -yer",
        "prefix": "",
        "root": "law+yer",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "lead",
        "day": "Day 28",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自lædan'引导'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "learned",
        "day": "Day 28",
        "pos": "adj.",
        "formula": "learned = learn + -ed",
        "prefix": "",
        "root": "learn来自古英语leornian'学习'",
        "suffix": "-ed是形容词后缀，表示'……的'",
        "combo": ""
    },
    {
        "word": "learner",
        "day": "Day 28",
        "pos": "n.",
        "formula": "learner = learn + -er",
        "prefix": "",
        "root": "learn+er",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "least",
        "day": "Day 28",
        "pos": "adj./adv./n.",
        "formula": "",
        "prefix": "",
        "root": "来自læst'最少'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lecture",
        "day": "Day 28",
        "pos": "n.",
        "formula": "lecture = lect- + -ure",
        "prefix": "",
        "root": "lect来自legere'读/讲'",
        "suffix": "ure 是名词后缀，-ure 表示结果。比如 pressure = 压力！",
        "combo": ""
    },
    {
        "word": "length",
        "day": "Day 28",
        "pos": "n.",
        "formula": "length = leng- + -th",
        "prefix": "",
        "root": "来自lengðu'长'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lesson",
        "day": "Day 28",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自lectio'读'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "licence",
        "day": "Day 28",
        "pos": "n.",
        "formula": "licence = lic- + -ence",
        "prefix": "",
        "root": "来自licentia'允许'",
        "suffix": "ence 是名词后缀，-ence 和 -ance 是姐妹，都表示名词性质。比如 difference = 差异！",
        "combo": ""
    },
    {
        "word": "lift",
        "day": "Day 29",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自lyft'举起'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lightning",
        "day": "Day 29",
        "pos": "n.",
        "formula": "lightning = lightn- + -ing",
        "prefix": "",
        "root": "lightn+ing",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "likely",
        "day": "Day 29",
        "pos": "adj./adv.",
        "formula": "likely = like + -ly",
        "prefix": "",
        "root": "like+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "limited",
        "day": "Day 29",
        "pos": "adj.",
        "formula": "limited = limit + -ed",
        "prefix": "",
        "root": "limit来自limes'界限'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "liquid",
        "day": "Day 29",
        "pos": "n./adj.",
        "formula": "liquid = liqu- + -id",
        "prefix": "",
        "root": "来自liquidus'流动'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "literature",
        "day": "Day 29",
        "pos": "n.",
        "formula": "literature = liter- + -ature",
        "prefix": "",
        "root": "liter来自littera'文字'",
        "suffix": "ture 是名词后缀，-ture 表示结果。比如 picture = 画出来的东西 = 图画！",
        "combo": ""
    },
    {
        "word": "litter",
        "day": "Day 29",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自litière'垫草'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "lively",
        "day": "Day 29",
        "pos": "adj.",
        "formula": "lively = live + -ly",
        "prefix": "",
        "root": "live+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "living",
        "day": "Day 29",
        "pos": "n./adj.",
        "formula": "living = liv- + -ing",
        "prefix": "",
        "root": "live+ing",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "local",
        "day": "Day 29",
        "pos": "adj./n.",
        "formula": "local = loc- + -al",
        "prefix": "",
        "root": "loc来自locus'地方'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "lonely",
        "day": "Day 29",
        "pos": "adj.",
        "formula": "lonely = lone + -ly",
        "prefix": "",
        "root": "lone+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "lost",
        "day": "Day 29",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "lose过去分词",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "luckily",
        "day": "Day 29",
        "pos": "adv.",
        "formula": "luckily = luck + -ily",
        "prefix": "",
        "root": "luck+ily",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "magazine",
        "day": "Day 30",
        "pos": "n.",
        "formula": "magazine = magaz- + -ine",
        "prefix": "",
        "root": "来自makhazin'仓库'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "magic",
        "day": "Day 30",
        "pos": "n./adj.",
        "formula": "magic = mag- + -ic",
        "prefix": "",
        "root": "来自magike'巫术'",
        "suffix": "ic 是形容词后缀，-ic 来自希腊语 -ikos，像件希腊长袍，穿上就是形容词。比如 historic = 历史的！",
        "combo": ""
    },
    {
        "word": "main",
        "day": "Day 30",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自mægen'力量'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "manage",
        "day": "Day 30",
        "pos": "v.",
        "formula": "manage = man- + -age",
        "prefix": "",
        "root": "来自manus'手'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "man-made",
        "day": "Day 30",
        "pos": "adj.",
        "formula": "man-made = man + made",
        "prefix": "",
        "root": "man(人)+made(制造)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "manner",
        "day": "Day 30",
        "pos": "n.",
        "formula": "manner = mann- + -er",
        "prefix": "",
        "root": "来自manuarius'手'",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "mark",
        "day": "Day 30",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自mearc'标记'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "married",
        "day": "Day 30",
        "pos": "adj.",
        "formula": "married = marri- + -ed",
        "prefix": "",
        "root": "来自maritare'结婚'",
        "suffix": "ed 是形容词/过去式后缀，-ed 像面小镜子，表示'……的'或过去发生的事情。比如 excited = 感到兴奋的！",
        "combo": ""
    },
    {
        "word": "match",
        "day": "Day 30",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自mæcca'匹配'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "material",
        "day": "Day 30",
        "pos": "n.",
        "formula": "material = materi- + -al",
        "prefix": "",
        "root": "来自materia'物质'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "maths",
        "day": "Day 30",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "mathematics缩写",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "matter",
        "day": "Day 30",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自materia'物质'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mean",
        "day": "Day 30",
        "pos": "v./adj.",
        "formula": "",
        "prefix": "",
        "root": "来自mænan'意思是'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "meaning",
        "day": "Day 30",
        "pos": "n.",
        "formula": "meaning = mean + -ing",
        "prefix": "",
        "root": "mean+ing",
        "suffix": "ing 是形容词/名词/现在分词后缀，-ing 是个多面手！可以是现在分词、形容词或名词。比如 interesting = 令人感兴趣的！",
        "combo": ""
    },
    {
        "word": "meanwhile",
        "day": "Day 31",
        "pos": "adv.",
        "formula": "meanwhile = mean + while",
        "prefix": "",
        "root": "mean(中间)+while",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "medical",
        "day": "Day 31",
        "pos": "adj.",
        "formula": "medical = medic- + -al",
        "prefix": "",
        "root": "medic来自mederi'治疗'",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "member",
        "day": "Day 31",
        "pos": "n.",
        "formula": "member = memb- + -er",
        "prefix": "",
        "root": "来自membrum'部分'",
        "suffix": "er 是名词后缀，-er 是个'身份制造机'，表示做某事的人或物。比如 teacher = 教书的人 = 老师！",
        "combo": ""
    },
    {
        "word": "mention",
        "day": "Day 31",
        "pos": "v./n.",
        "formula": "mention = ment- + -ion",
        "prefix": "",
        "root": "ment来自mens'心智'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "message",
        "day": "Day 31",
        "pos": "n.",
        "formula": "message = mess- + -age",
        "prefix": "",
        "root": "来自mittere'发送'",
        "suffix": "age 是名词后缀，-age 像个小仓库，把东西装进去变成名词。比如 storage = 储存的状态！",
        "combo": ""
    },
    {
        "word": "metal",
        "day": "Day 31",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自metallon'矿'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "method",
        "day": "Day 31",
        "pos": "n.",
        "formula": "method = meth- + -od",
        "prefix": "",
        "root": "来自methodos'跟随的路'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "million",
        "day": "Day 31",
        "pos": "num./n.",
        "formula": "million = mill- + -ion",
        "prefix": "",
        "root": "来自mille'千'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "mind",
        "day": "Day 31",
        "pos": "n./v.",
        "formula": "",
        "prefix": "",
        "root": "来自gemynd'记忆'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mistake",
        "day": "Day 31",
        "pos": "n./v.",
        "formula": "mistake = mis- + take",
        "prefix": "mis-表错误",
        "root": "take拿",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mobile",
        "day": "Day 31",
        "pos": "adj.",
        "formula": "mobile = mob- + -ile",
        "prefix": "",
        "root": "mob来自movere'移动'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "modern",
        "day": "Day 31",
        "pos": "adj.",
        "formula": "modern = mod- + -ern",
        "prefix": "",
        "root": "mod来自modo'现在'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "model",
        "day": "Day 31",
        "pos": "n.",
        "formula": "model = mod- + -el",
        "prefix": "",
        "root": "mod来自modulus'度量'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mix",
        "day": "Day 31",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自miscere'混合'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mistaken",
        "day": "Day 31",
        "pos": "adj.",
        "formula": "mistaken = mis- + taken",
        "prefix": "mis-表错误",
        "root": "taken拿",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "moment",
        "day": "Day 31",
        "pos": "n.",
        "formula": "moment = mom- + -ent",
        "prefix": "",
        "root": "来自momentum'移动'",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "mood",
        "day": "Day 32",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自mod'心境'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mountain",
        "day": "Day 32",
        "pos": "n.",
        "formula": "mountain = mount + -ain",
        "prefix": "",
        "root": "mount来自mons'山'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "move",
        "day": "Day 32",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自movere'移动'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "mud",
        "day": "Day 32",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来源不确定",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "museum",
        "day": "Day 32",
        "pos": "n.",
        "formula": "museum = muse- + -um",
        "prefix": "",
        "root": "muse来自mousa'缪斯'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "musician",
        "day": "Day 32",
        "pos": "n.",
        "formula": "musician = music + -ian",
        "prefix": "",
        "root": "music+ian",
        "suffix": "ian 是名词/形容词后缀，-ian 表示'从事……的人'。比如 musician = 音乐家！",
        "combo": ""
    },
    {
        "word": "narrow",
        "day": "Day 32",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自nearu'狭窄'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "nation",
        "day": "Day 32",
        "pos": "n.",
        "formula": "nation = nat- + -ion",
        "prefix": "",
        "root": "nat来自nasci'出生'",
        "suffix": "ion 是名词后缀，-ion 来自拉丁语 -io，是最常见的名词后缀之一。比如 action = 行动！",
        "combo": ""
    },
    {
        "word": "native",
        "day": "Day 32",
        "pos": "adj./n.",
        "formula": "native = nat- + -ive",
        "prefix": "",
        "root": "nat来自nasci'出生'",
        "suffix": "ive 是形容词后缀，-ive 是个'形容词魔法师'，一加在词根后面，单词立刻变成形容词，表示'具有……性质的'。比如 active = 活跃的，creative = 有创造力的！",
        "combo": ""
    },
    {
        "word": "nature",
        "day": "Day 32",
        "pos": "n.",
        "formula": "nature = nat- + -ure",
        "prefix": "",
        "root": "nat来自nasci'出生'",
        "suffix": "ure 是名词后缀，-ure 表示结果。比如 pressure = 压力！",
        "combo": ""
    },
    {
        "word": "naughty",
        "day": "Day 32",
        "pos": "adj.",
        "formula": "naughty = naught + -y",
        "prefix": "",
        "root": "naught(无)+y",
        "suffix": "y 是形容词/名词后缀，-y 可以当形容词，也可以当名词。比如 sunny = 晴朗的！",
        "combo": ""
    },
    {
        "word": "nearly",
        "day": "Day 32",
        "pos": "adv.",
        "formula": "nearly = near + -ly",
        "prefix": "",
        "root": "near+ly",
        "suffix": "ly 是副词/形容词后缀，-ly 是副词制造机！加在形容词后面，就变成'……地'。比如 quickly = 快速地！",
        "combo": ""
    },
    {
        "word": "national",
        "day": "Day 32",
        "pos": "adj.",
        "formula": "national = nation + -al",
        "prefix": "",
        "root": "nation+al",
        "suffix": "al 是形容词/名词后缀，-al 来自拉丁语 -alis，像件外套，穿上它单词就变成形容词或名词。比如 national = 国家的！",
        "combo": ""
    },
    {
        "word": "myself",
        "day": "Day 32",
        "pos": "pron.",
        "formula": "myself = my + self",
        "prefix": "",
        "root": "my+self",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "movement",
        "day": "Day 32",
        "pos": "n.",
        "formula": "movement = move + -ment",
        "prefix": "",
        "root": "move+ment",
        "suffix": "ent 是形容词/名词后缀，-ent 可以当形容词用，也可以指人。比如 student = 学习的人 = 学生！",
        "combo": ""
    },
    {
        "word": "nod",
        "day": "Day 32",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自hnoddian'点头'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "necessary",
        "day": "Day 33",
        "pos": "adj.",
        "formula": "necessary = ne- + cess + -ary",
        "prefix": "ne-表'不'",
        "root": "cess来自cedere'走'",
        "suffix": "ary 是形容词/名词后缀，-ary 像个小房子，表示'与……有关的'或场所。比如 library = 放书的地方 = 图书馆！",
        "combo": ""
    },
    {
        "word": "necklace",
        "day": "Day 33",
        "pos": "n.",
        "formula": "necklace = neck + lace",
        "prefix": "",
        "root": "neck+lace",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "negative",
        "day": "Day 33",
        "pos": "adj.",
        "formula": "negative = neg- + -ative",
        "prefix": "neg-表否定",
        "root": "neg来自negare'否定'",
        "suffix": "ative 是形容词后缀，-ative 表示'有……倾向的'。比如 creative = 有创造倾向的 = 有创造力的！",
        "combo": ""
    },
    {
        "word": "neither",
        "day": "Day 33",
        "pos": "pron./conj./adv.",
        "formula": "neither = ne- + ither",
        "prefix": "ne-表'不'",
        "root": "ither来自hwæther'哪一个'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "nervous",
        "day": "Day 33",
        "pos": "adj.",
        "formula": "nervous = nerv- + -ous",
        "prefix": "",
        "root": "nerv来自nervus'神经'",
        "suffix": "ous 是形容词后缀，-ous 来自拉丁语 -osus，是形容词外套。比如 dangerous = 危险的！",
        "combo": ""
    },
    {
        "word": "network",
        "day": "Day 33",
        "pos": "n.",
        "formula": "network = net + work",
        "prefix": "",
        "root": "net(网)+work(工作/结构)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "never",
        "day": "Day 33",
        "pos": "adv.",
        "formula": "never = ne- + ver",
        "prefix": "ne-来自古英语，表示'不'",
        "root": "ver来自æfre'曾经'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "news",
        "day": "Day 33",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自new'新'的复数，原指'新发生的事情'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "newspaper",
        "day": "Day 33",
        "pos": "n.",
        "formula": "newspaper = news + paper",
        "prefix": "",
        "root": "news(新闻)+paper(纸)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "nod",
        "day": "Day 33",
        "pos": "v./n.",
        "formula": "",
        "prefix": "",
        "root": "来自hnoddian'点头'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "noise",
        "day": "Day 33",
        "pos": "n.",
        "formula": "noise = nois- + -e",
        "prefix": "",
        "root": "来自拉丁语nausea'恶心/不适'，后指'噪音'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "none",
        "day": "Day 33",
        "pos": "pron.",
        "formula": "",
        "prefix": "",
        "root": "来自ne'不'+an'一'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "normal",
        "day": "Day 33",
        "pos": "adj./n.",
        "formula": "normal = norm + -al",
        "prefix": "",
        "root": "norm来自拉丁语norma'规则/标准'",
        "suffix": "-al是形容词后缀，像件外套，norm穿上它立刻变成形容词！",
        "combo": ""
    },
    {
        "word": "notebook",
        "day": "Day 33",
        "pos": "n.",
        "formula": "notebook = note + book",
        "prefix": "",
        "root": "note(笔记)+book(本)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "nothing",
        "day": "Day 33",
        "pos": "pron.",
        "formula": "nothing = no + thing",
        "prefix": "",
        "root": "no来自古英语na'不'",
        "suffix": "thing来自古英语þing'事物'",
        "combo": ""
    },
    {
        "word": "northern",
        "day": "Day 33",
        "pos": "adj.",
        "formula": "northern = north + -ern",
        "prefix": "",
        "root": "north(北)+-ern(方向的)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "notice",
        "day": "Day 34",
        "pos": "v./n.",
        "formula": "notice = not- + -ice",
        "prefix": "",
        "root": "not来自nota'标记/知道'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "novel",
        "day": "Day 34",
        "pos": "n./adj.",
        "formula": "novel = nov- + -el",
        "prefix": "",
        "root": "nov来自novus'新的'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "nowadays",
        "day": "Day 34",
        "pos": "adv.",
        "formula": "nowadays = nowa- + days",
        "prefix": "",
        "root": "now(现在)",
        "suffix": "days(日子)",
        "combo": ""
    },
    {
        "word": "object",
        "day": "Day 34",
        "pos": "n./v.",
        "formula": "object = ob- + ject",
        "prefix": "ob-表'朝向'",
        "root": "ject来自jacere'投掷'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "ocean",
        "day": "Day 34",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自希腊语okeanos，原指'环绕大地的河流'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "official",
        "day": "Day 34",
        "pos": "adj./n.",
        "formula": "official = of- + fic + -ial",
        "prefix": "of-是ob-在f前的同化变体，表示'朝向'",
        "root": "fic来自拉丁语facere'做'",
        "suffix": "-ial是形容词后缀",
        "combo": ""
    },
    {
        "word": "once",
        "day": "Day 34",
        "pos": "adv./conj.",
        "formula": "",
        "prefix": "来自古英语anes'一次'",
        "root": "",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "online",
        "day": "Day 34",
        "pos": "adj./adv.",
        "formula": "online = on + line",
        "prefix": "on表示'在……上'",
        "root": "line来自古英语line'线'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "opening",
        "day": "Day 34",
        "pos": "n./adj.",
        "formula": "opening = open + -ing",
        "prefix": "",
        "root": "open来自古英语openian'打开'",
        "suffix": "-ing可以构成名词或现在分词",
        "combo": ""
    },
    {
        "word": "opinion",
        "day": "Day 34",
        "pos": "n.",
        "formula": "opinion = o- + pin + -ion",
        "prefix": "o-是op-的简写，表示'朝向'",
        "root": "pin来自拉丁语opinari'认为'",
        "suffix": "-ion是名词后缀，把动作变成名词",
        "combo": ""
    },
    {
        "word": "opera",
        "day": "Day 34",
        "pos": "n.",
        "formula": "opera = oper- + -a",
        "prefix": "",
        "root": "oper来自opera'工作/作品'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "operate",
        "day": "Day 34",
        "pos": "v.",
        "formula": "operate = oper + -ate",
        "prefix": "",
        "root": "oper来自拉丁语opera'工作'",
        "suffix": "-ate是动词后缀，像开关一样，一加就变动作！",
        "combo": ""
    },
    {
        "word": "order",
        "day": "Day 34",
        "pos": "n./v.",
        "formula": "order = ord- + -er",
        "prefix": "",
        "root": "ord来自拉丁语ordinis'顺序'",
        "suffix": "-er是名词后缀",
        "combo": ""
    },
    {
        "word": "opportunity",
        "day": "Day 34",
        "pos": "n.",
        "formula": "opportunity = op- + portun + -ity",
        "prefix": "op-是ob-在p前的同化变体，表示'朝向'",
        "root": "portun来自拉丁语portus'港口'。古人做生意要看风向，港口风向对了，机会就来了！",
        "suffix": "-ity是名词后缀",
        "combo": ""
    },
    {
        "word": "opposite",
        "day": "Day 34",
        "pos": "adj./n./prep.",
        "formula": "opposite = op- + posit + -e",
        "prefix": "op-是ob-在p前的同化变体，表示'对着/相反'",
        "root": "posit来自ponere'放置'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "ordinary",
        "day": "Day 35",
        "pos": "adj.",
        "formula": "ordinary = ordin + -ary",
        "prefix": "",
        "root": "ordin来自拉丁语ordinis'顺序'",
        "suffix": "-ary是形容词后缀",
        "combo": ""
    },
    {
        "word": "organization",
        "day": "Day 35",
        "pos": "n.",
        "formula": "organization = organ + -iz + -ation",
        "prefix": "",
        "root": "organ来自希腊语organon'工具/器官'",
        "suffix": "-ize是动词后缀，-ation是名词后缀",
        "combo": ""
    },
    {
        "word": "otherwise",
        "day": "Day 35",
        "pos": "adv.",
        "formula": "otherwise = other + -wise",
        "prefix": "",
        "root": "other来自古英语oðer'另一个'",
        "suffix": "-wise是副词后缀，表示'方式'",
        "combo": ""
    },
    {
        "word": "outgoing",
        "day": "Day 35",
        "pos": "adj.",
        "formula": "outgoing = out + go + -ing",
        "prefix": "",
        "root": "out(向外)+go(走)",
        "suffix": "-ing构成形容词或名词",
        "combo": ""
    },
    {
        "word": "overcome",
        "day": "Day 35",
        "pos": "v.",
        "formula": "overcome = over- + come",
        "prefix": "over-表示'越过'",
        "root": "come来自古英语cuman'来'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "overnight",
        "day": "Day 35",
        "pos": "adv./adj.",
        "formula": "overnight = over- + night",
        "prefix": "over-表示'贯穿'",
        "root": "night来自古英语niht'夜'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "owner",
        "day": "Day 35",
        "pos": "n.",
        "formula": "owner = own + -er",
        "prefix": "",
        "root": "own来自古英语agan'拥有'",
        "suffix": "-er是名词后缀，表示'做……的人'",
        "combo": ""
    },
    {
        "word": "pain",
        "day": "Day 35",
        "pos": "n.",
        "formula": "",
        "prefix": "",
        "root": "来自拉丁语poena'惩罚'，与'痛苦'有关",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "painless",
        "day": "Day 35",
        "pos": "adj.",
        "formula": "painless = pain + -less",
        "prefix": "",
        "root": "pain来自拉丁语poena'惩罚/痛苦'",
        "suffix": "-less是形容词后缀，表示'没有……的'",
        "combo": ""
    },
    {
        "word": "painting",
        "day": "Day 35",
        "pos": "n.",
        "formula": "painting = paint + -ing",
        "prefix": "",
        "root": "paint来自拉丁语pingere'画'",
        "suffix": "-ing可以构成名词",
        "combo": ""
    },
    {
        "word": "pale",
        "day": "Day 35",
        "pos": "adj.",
        "formula": "",
        "prefix": "",
        "root": "来自拉丁语pallidus'苍白的'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "paper-cut",
        "day": "Day 35",
        "pos": "n.",
        "formula": "paper-cut = paper + cut",
        "prefix": "",
        "root": "paper(纸)+cut(剪)",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "parking",
        "day": "Day 35",
        "pos": "n.",
        "formula": "parking = park + -ing",
        "prefix": "",
        "root": "park来自古法语parc'围场'",
        "suffix": "-ing构成名词",
        "combo": ""
    },
    {
        "word": "particular",
        "day": "Day 35",
        "pos": "adj.",
        "formula": "particular = partic- + -ular",
        "prefix": "",
        "root": "partic来自pars'部分'",
        "suffix": "",
        "combo": ""
    },
    {
        "word": "palace",
        "day": "Day 35",
        "pos": "n.",
        "formula": "palace = pal- + -ace",
        "prefix": "",
        "root": "来自拉丁语palatium'帕拉蒂尼山'(罗马皇宫所在地)",
        "suffix": "",
        "combo": ""
    }
];
