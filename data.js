const QUIZ_DATA = [
  {
    question: "新しい料理や、見たことのない食材を出すと、食べる前に嫌がりますか？",
    options: [
      { text: "かなり嫌がる", points: { look: 3, veg: 1 }, intensity: 3 },
      { text: "たまに嫌がる", points: { look: 1 }, intensity: 1 },
      { text: "あまり気にせず食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "ドロドロしたものと、固形物が混ざっている（離乳食の進みかけのような）料理を嫌がりますか？",
    options: [
      { text: "非常に嫌がる", points: { texture: 3 }, intensity: 2 },
      { text: "少し気にする", points: { texture: 1 }, intensity: 1 },
      { text: "気にせず食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "パン、おにぎり、麺類などの「白いもの」ばかりを好んで食べますか？",
    options: [
      { text: "ほとんどそれしか食べない", points: { carb: 3, veg: 2 }, intensity: 2 },
      { text: "好きな傾向がある", points: { carb: 1 }, intensity: 1 },
      { text: "バランスよく食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "ピーマンの苦味や、トマトの酸味など、特定の味に対して強い拒否反応を示しますか？",
    options: [
      { text: "一口で吐き出すほど", points: { taste: 3 }, intensity: 3 },
      { text: "嫌がって避ける", points: { taste: 1 }, intensity: 1 },
      { text: "それほど気にしない", points: {}, intensity: 0 }
    ]
  },
  {
    question: "野菜が細かく刻んで入っていても、器用に見つけ出して取り出しますか？",
    options: [
      { text: "絶対に見つけ出す", points: { veg: 3, look: 1 }, intensity: 3 },
      { text: "たまに見つけ出す", points: { veg: 1 }, intensity: 1 },
      { text: "気づかずに食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "お肉の筋や、魚の独特な食感を嫌がりますか？",
    options: [
      { text: "かなり嫌がる", points: { texture: 3, veg: 1 }, intensity: 2 },
      { text: "たまに嫌がる", points: { texture: 1 }, intensity: 1 },
      { text: "気にせず食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "特定のメーカーのパンや、特定の形のおにぎりでないと食べないという「こだわり」がありますか？",
    options: [
      { text: "非常に強いこだわりがある", points: { look: 2, carb: 2 }, intensity: 3 },
      { text: "少しこだわりがある", points: { carb: 1 }, intensity: 2 },
      { text: "特にない", points: {}, intensity: 0 }
    ]
  },
  {
    question: "口の中でモグモグせずに、ずっと溜め込んでいることがありますか？",
    options: [
      { text: "よくある", points: { texture: 2, taste: 1 }, intensity: 2 },
      { text: "たまにある", points: { texture: 1 }, intensity: 1 },
      { text: "ほとんどない", points: {}, intensity: 0 }
    ]
  },
  {
    question: "少しでも色が濃い野菜（緑黄色野菜など）を避けますか？",
    options: [
      { text: "全く食べない", points: { veg: 3, look: 2 }, intensity: 2 },
      { text: "気分によって食べる", points: { veg: 1 }, intensity: 1 },
      { text: "普通に食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "食べ慣れたもの以外への警戒心が強いですか？",
    options: [
      { text: "かなり強い", points: { look: 3, taste: 1 }, intensity: 2 },
      { text: "やや強い", points: { look: 1 }, intensity: 1 },
      { text: "好奇心が強い", points: {}, intensity: 0 }
    ]
  },
  {
    question: "ご飯と魚がくっついているなど、食材同士が触れているのを嫌がりますか？",
    options: [
      { text: "非常に嫌がる", points: { look: 2, texture: 1 }, intensity: 3 },
      { text: "少し嫌がる", points: { look: 1 }, intensity: 1 },
      { text: "混ぜても平気", points: {}, intensity: 0 }
    ]
  },
  {
    question: "野菜の皮や、つぶつぶした食感（ごまやイチゴの種など）を嫌がりますか？",
    options: [
      { text: "かなり嫌がる", points: { texture: 3 }, intensity: 2 },
      { text: "たまに嫌がる", points: { texture: 1 }, intensity: 1 },
      { text: "全く気にしない", points: {}, intensity: 0 }
    ]
  },
  {
    question: "香りの強い野菜（セロリ、ネギ、大葉など）を極端に嫌がりますか？",
    options: [
      { text: "近づけるだけで嫌がる", points: { taste: 3, veg: 1 }, intensity: 3 },
      { text: "食べると嫌がる", points: { taste: 1 }, intensity: 1 },
      { text: "普通に食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "お菓子や甘いジュースは喜んで食べるが、食事は進まないですか？",
    options: [
      { text: "顕著にその傾向がある", points: { taste: 2, carb: 2 }, intensity: 2 },
      { text: "少しその傾向がある", points: { taste: 1 }, intensity: 1 },
      { text: "どちらもよく食べる", points: {}, intensity: 0 }
    ]
  },
  {
    question: "食事の途中で立ち上がったり、遊び食べをして集中が続きませんか？",
    options: [
      { text: "いつもそうなる", points: {}, intensity: 3 },
      { text: "たまにある", points: {}, intensity: 1 },
      { text: "最後まで座って食べる", points: {}, intensity: 0 }
    ]
  }
];

const RESULT_DATA = {
  texture: {
    title: "食感NGタイプ",
    emoji: "🫣",
    subType: "感覚過敏傾向あり",
    catch: "口の中の感覚がとっても繊細なタイプです",
    description: "ドロドロと固形が混ざったものや、お肉の筋、野菜の皮など、口の中で「不快」と感じるセンサーが人一倍強く働いています。わがままではなく、本当に「気持ち悪い」と感じている可能性があります。",
    do: [
      "ペースト状にするか、逆にしっかり固形にするか極端に分ける",
      "「カリカリ」「サクサク」など、お子さんが好む食感を見つける",
      "無理に飲み込ませず、ペッしても良いという安心感を与える"
    ],
    dont: [
      "「飲み込みなさい」と強く迫る",
      "嫌いなものを内緒で細かく混ぜ込む（不信感に繋がります）"
    ],
    actions: [
      "お肉はミンチ状からスタートする",
      "野菜はブレンダーでポタージュにする",
      "食材を一つずつ独立させて盛り付ける"
    ],
    recipes: [
      { name: "ふわふわ豆腐ハンバーグ", desc: "食感が均一で飲み込みやすく、お肉の筋も気になりません。", tag: "食感対策" },
      { name: "なめらかカボチャスープ", desc: "野菜の繊維を感じさせない究極のなめらかさ。", tag: "人気No.1" }
    ]
  },
  look: {
    title: "見た目NGタイプ",
    emoji: "👀",
    subType: "慎重派・ネオフォビア",
    catch: "「見たことない」は「怖い」と感じるタイプです",
    description: "視覚情報から「これは安全かな？」と判断する力が強いため、少しでも色が濃かったり、形が変わっていたりすると警戒してしまいます。新しいものを受け入れるのに時間がかかる、慎重で賢いお子さんです。",
    do: [
      "いつもと同じお皿、同じ形を意識する",
      "大人が美味しそうに食べている姿を何度も見せる",
      "「一口食べて」ではなく「ツンツンしてみる？」から始める"
    ],
    dont: [
      "無理やり口に押し込む",
      "「どうして食べないの！」と怒る"
    ],
    actions: [
      "型抜きを使って、可愛い形にする",
      "まずは食卓に置くだけ、からスタート",
      "スーパーの買い物で食材に触れる体験を作る"
    ],
    recipes: [
      { name: "型抜き野菜のコンソメ煮", desc: "好きな形の野菜なら、警戒心がワクワクに変わります。", tag: "見た目重視" },
      { name: "ひとくちコロコロおにぎり", desc: "手づかみしやすく、安心感のある形。", tag: "時短" }
    ]
  },
  taste: {
    title: "味覚敏感タイプ",
    emoji: "👅",
    subType: "グルメな美食家タイプ",
    catch: "わずかな苦味や酸味を敏感にキャッチします",
    description: "本能的に「毒（苦味）」や「腐敗（酸味）」を避ける能力が高いタイプです。大人には気にならない程度の野菜の苦味も、お子さんにとっては強烈な刺激になっているかもしれません。",
    do: [
      "マヨネーズやチーズなど、苦味をマスキングする食材を使う",
      "出汁をしっかり効かせて、旨味を強調する",
      "甘味のある野菜（コーン、さつまいも）から慣らしていく"
    ],
    dont: [
      "苦い野菜を単品で出す",
      "「美味しいよ」という嘘をつく（苦いものは苦いと認める）"
    ],
    actions: [
      "野菜をバターでソテーしてコクを出す",
      "味噌汁に少しだけ牛乳を入れてマイルドにする",
      "まずは好きな味（甘い・旨い）とセットで出す"
    ],
    recipes: [
      { name: "野菜たっぷりチーズグラタン", desc: "チーズのコクが野菜の苦味を優しく包み込みます。", tag: "完食率UP" },
      { name: "お出汁で炊いたツナご飯", desc: "ツナの旨味が全体に広がり、野菜も食べやすくなります。", tag: "栄養満点" }
    ]
  },
  carb: {
    title: "炭水化物偏食タイプ",
    emoji: "🍞",
    subType: "エネルギー効率優先タイプ",
    catch: "効率よくエネルギーになるものが大好き！",
    description: "パンやご飯など、すぐにエネルギーに変わる炭水化物を好みます。これは成長期の子どもとしては自然な反応でもありますが、そればかりになると栄養バランスが心配になりますね。",
    do: [
      "パンやご飯の中に、こっそりタンパク質を練り込む",
      "おにぎりの具材を徐々に増やしていく",
      "「ご飯の前に野菜を一口」というルールを作る"
    ],
    dont: [
      "炭水化物を完全に禁止する",
      "「パンしか食べないんだから」と諦めてパンだけ出す"
    ],
    actions: [
      "ホットケーキミックスに豆腐や野菜を混ぜる",
      "麺類に細かく刻んだ具材をたっぷり入れる",
      "サンドイッチにして具材を挟む"
    ],
    recipes: [
      { name: "お野菜パンケーキ", desc: "見た目は普通のパンケーキだけど、中身は栄養たっぷり。", tag: "朝ごはん" },
      { name: "具だくさんうどん", desc: "麺と一緒に野菜もチュルッといけちゃいます。", tag: "定番" }
    ]
  },
  veg: {
    title: "野菜・タンパク質拒否タイプ",
    emoji: "🥦",
    subType: "素材拒否タイプ",
    catch: "野菜の繊維やお肉の噛みごたえが苦手かも",
    description: "特定の食材グループ（特に野菜や肉・魚）を避けるタイプです。食感や味の問題が複合していることが多く、噛む力がまだ未発達な場合もあります。",
    do: [
      "「食べられた！」という小さな成功体験を積み重ねる",
      "すりおろしてカレーやハンバーグに混ぜる",
      "家庭菜園などで、育てる過程を体験させる"
    ],
    dont: [
      "山盛りの野菜を出す（見ただけで心が折れます）",
      "「野菜を食べないと大きくなれないよ」と脅す"
    ],
    actions: [
      "ハンバーグの半分を豆腐と野菜にする",
      "カレーに野菜を全てすりおろして入れる",
      "唐揚げなどの「揚げ物」にして食感を変える"
    ],
    recipes: [
      { name: "魔法のすりおろし野菜カレー", desc: "野菜の姿が見えないから、パクパク食べられます。", tag: "魔法のレシピ" },
      { name: "鶏肉と豆腐のふわふわナゲット", desc: "お肉の硬さが苦手な子でも大丈夫。", tag: "高タンパク" }
    ]
  }
};
