let currentStep = 0;
let userAnswers = [];
let scores = { texture: 0, look: 0, taste: 0, carb: 0, veg: 0 };
let totalIntensity = 0;

function startDiagnosis() {
    currentStep = 0;
    userAnswers = [];
    scores = { texture: 0, look: 0, taste: 0, carb: 0, veg: 0 };
    totalIntensity = 0;
    
    switchPage('page-quiz');
    showQuestion();
}

function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function showQuestion() {
    const quiz = QUIZ_DATA[currentStep];
    const progress = ((currentStep + 1) / QUIZ_DATA.length) * 100;
    
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').innerText = `${currentStep + 1} / ${QUIZ_DATA.length}`;
    document.getElementById('quiz-number').innerText = `Q${currentStep + 1}`;
    document.getElementById('quiz-question').innerText = quiz.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    quiz.options.forEach((opt, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn fade-in';
        button.style.animationDelay = `${index * 0.1}s`;
        button.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${opt.text}</span>
        `;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

function selectOption(index) {
    const selectedOpt = QUIZ_DATA[currentStep].options[index];
    userAnswers.push(index);
    
    // 加算
    for (let type in selectedOpt.points) {
        scores[type] += selectedOpt.points[type];
    }
    totalIntensity += selectedOpt.intensity;
    
    if (currentStep < QUIZ_DATA.length - 1) {
        currentStep++;
        showQuestion();
    } else {
        processResult();
    }
}

function goBack() {
    if (currentStep > 0) {
        // 直前のスコアを減算（簡易的な戻る機能）
        const prevStep = currentStep - 1;
        const prevAnswerIndex = userAnswers.pop();
        const prevOpt = QUIZ_DATA[prevStep].options[prevAnswerIndex];
        
        for (let type in prevOpt.points) {
            scores[type] -= prevOpt.points[type];
        }
        totalIntensity -= prevOpt.intensity;
        
        currentStep--;
        showQuestion();
    } else {
        switchPage('page-top');
    }
}

function processResult() {
    switchPage('page-loading');
    
    // 演出のために2秒待機
    setTimeout(() => {
        showResult();
    }, 2000);
}

function showResult() {
    // 最も高いスコアのタイプを決定
    let mainTypeKey = 'texture';
    let maxScore = -1;
    
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            mainTypeKey = type;
        }
    }
    
    const result = RESULT_DATA[mainTypeKey];
    const intensityLabel = getIntensityLabel(totalIntensity);
    
    const container = document.getElementById('result-container');
    container.innerHTML = `
        <div class="result-hero">
            <div class="result-label">あなたの診断結果は...</div>
            <div class="result-type-badge">${result.subType}</div>
            <h2 class="result-main-type">${result.emoji} ${result.title}</h2>
            <p class="result-catch">${result.catch}</p>
        </div>

        <div class="result-section fade-in">
            <h3 class="result-section-title"><span class="section-icon">📝</span>どんなタイプ？</h3>
            <p class="result-text">${result.description}</p>
        </div>

        <div class="sub-tendency-box fade-in fade-in-delay-1">
            <h3 class="sub-tendency-title">🔥 イヤイヤ・こだわり度</h3>
            <ul class="sub-list">
                <li>現在は<strong>【${intensityLabel}】</strong>の状態です。</li>
                <li>${getIntensityDesc(totalIntensity)}</li>
            </ul>
        </div>

        <div class="result-section fade-in fade-in-delay-1">
            <h3 class="result-section-title"><span class="section-icon">✨</span>おすすめの対応</h3>
            <ul class="result-list">
                ${result.do.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="result-section fade-in fade-in-delay-2">
            <h3 class="result-section-title"><span class="section-icon">⚠️</span>これはNG！</h3>
            <ul class="result-list ng-list">
                ${result.dont.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="result-section fade-in fade-in-delay-2">
            <h3 class="result-section-title"><span class="section-icon">💡</span>今日からできるアクション</h3>
            <div class="action-box">
                <div class="action-box-title">具体策</div>
                <ul class="action-list">
                    ${result.actions.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="result-section fade-in fade-in-delay-3">
            <h3 class="result-section-title"><span class="section-icon">🍳</span>おすすめレシピ</h3>
            <div class="recipe-cards">
                ${result.recipes.map(recipe => `
                    <div class="recipe-card">
                        <div class="recipe-name">${recipe.name}</div>
                        <div class="recipe-desc">${recipe.desc}</div>
                        <div class="recipe-tag">${recipe.tag}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="paid-cta fade-in fade-in-delay-3">
            <div class="paid-cta-icon">🎁</div>
            <h3 class="paid-cta-title">もっと詳しく知りたい方へ<br>「最短1日で、野菜を一口。<br>ママとハイタッチする食卓へ」</h3>
            <p class="paid-cta-desc">最短1日で“野菜を一口”に変わる具体ステップと、<br>つまずき別の対処・再現できる内容をまとめた完全版。<br><br>今なら人数限定で、状況に合わせて一緒に進める<br>個別サポート付き。</p>
            <div class="paid-cta-warn">※ 本気でお子さんの偏食に向き合いたいママ専用です</div>
            <a href="https://note.com/monmon_kahchan/n/ndb1cc10660fa?sub_rt=share_sb" class="btn-paid" target="_blank">詳しく見てみる</a>
        </div>

        <div class="share-box">
            <h3 class="share-title">結果をシェアする</h3>
            <p class="share-lead">同じ悩みを持つママに届けよう！</p>
            <button class="share-btn" onclick="shareOnThreads()">
                <span>Threads</span> 結果をシェアする
            </button>
        </div>

        <div class="retry-box">
            <button class="btn-retry" onclick="switchPage('page-top')">もう一度診断する</button>
        </div>
    `;
    
    switchPage('page-result');
}

function getIntensityLabel(val) {
    if (val > 30) return "こだわりMAX！爆発期";
    if (val > 15) return "イヤイヤ本格期";
    return "ちょっぴりこだわり期";
}

function getIntensityDesc(val) {
    if (val > 30) return "今は何を言っても「イヤ！」となりやすい時期。食事のルールよりも、まずは「食卓が怖くない場所」であることを優先しましょう。";
    if (val > 15) return "自己主張が強くなっています。「自分で選びたい」という気持ちを尊重し、2択で選ばせるなどの工夫が効果的です。";
    return "こだわりはありますが、工夫次第でスムーズに食べられることも多いです。今のうちに色々な食材に触れる機会を作っておきましょう。";
}

function shareOnThreads() {
    const text = "うちの子の偏食タイプは「食感NGタイプ」でした！原因がわかってスッキリ✨ #偏食タイプ診断 #育児";
    const url = "https://example.com"; // 実際のURLに合わせて変更
    window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(text + "\n" + url)}`, '_blank');
}
