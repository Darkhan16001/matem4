
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title:"Анықталған интеграл. Ньютон–Лейбниц формуласы",
  chapter:"I тарау. Алғашқы функция және интеграл",
  page:21,
  goal:"Анықталған интегралдың мағынасын түсіну, интеграл шекараларын дұрыс қолдану және Ньютон–Лейбниц формуласы арқылы анықталған интегралдың мәнін есептеу."
};

// 5 ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
const theory = [
  {
    title:"Анықталған интеграл дегеніміз не?",
    definition:"Анықталған интеграл — берілген екі шекараның арасында функцияға байланысты есептелетін сан. Анықталмаған интегралдан айырмашылығы: есеп нәтижесінде C тұрақтысы бар функциялар жиыны емес, нақты сан алынады.",
    explanation:"Мысалы, ∫₀²2x dx жазуында 0 — төменгі шекара, 2 — жоғарғы шекара, ал 2x — интеграл астындағы функция. Бұл интегралды есептеу үшін алдымен 2x функциясының алғашқы функциясын табамыз.",
    warning:"Анықталған интеграл әрқашан аудан емес. Функция теріс болса, интегралдың мәні де теріс болуы мүмкін.",
    formula:M`\int_a^b f(x)\,dx`
  },
  {
    title:"Интегралдың жоғарғы және төменгі шекаралары",
    definition:"Анықталған интегралда интеграл таңбасының төменгі бөлігінде a, ал жоғарғы бөлігінде b саны жазылады. Олар интегралдау аралығының шекаралары деп аталады.",
    explanation:"Мысалы, ∫₁⁴x dx интегралында төменгі шекара 1, жоғарғы шекара 4. Бұл есепте алғашқы функцияны алдымен 4 нүктесінде, содан кейін 1 нүктесінде есептейміз.",
    warning:"Интегралдың шекараларын кері алмастырғанда оның таңбасы өзгереді. Мысалы, ∫₁³f(x)dx және ∫₃¹f(x)dx бір-біріне қарама-қарсы.",
    formula:M`\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx`
  },
  {
    title:"Ньютон–Лейбниц формуласы",
    definition:"Ньютон–Лейбниц формуласы анықталған интегралды алғашқы функция арқылы есептеуге мүмкіндік береді. Егер F′(x)=f(x) болса, анықталған интеграл F(b)−F(a) айырмасына тең.",
    explanation:"Бірінші қадам: алғашқы функцияны табу. Екінші қадам: жоғарғы шекараны қою. Үшінші қадам: төменгі шекараны қою. Төртінші қадам: бірінші мәннен екінші мәнді азайту.",
    warning:"Жоғарғы шекарадағы мәннен төменгі шекарадағы мәнді азайтамыз, керісінше емес.",
    formula:M`\int_a^b f(x)\,dx=F(b)-F(a)`
  },
  {
    title:"Анықталған интегралды есептеудің мысалы",
    definition:"Мысалы, 0-ден 2-ге дейінгі x² функциясының интегралын есептейік. x² функциясының алғашқы функциясы — x³/3.",
    explanation:"Жоғарғы шекараға 2 қойғанда 8/3 шығады. Төменгі шекараға 0 қойғанда 0 шығады. Олардың айырмасы 8/3 болады. Жауапты бөлшек түрінде қалдыруға болады.",
    warning:"Анықталған интегралдың соңына +C жазылмайды. Себебі шекара мәндерінің айырмасында тұрақтылар қысқарады.",
    formula:M`\int_0^2x^2\,dx=\frac{2^3}{3}-\frac{0^3}{3}=\frac83`
  },
  {
    title:"Анықталған интегралдың негізгі қасиеттері",
    definition:"Анықталған интеграл шекараларына және интеграл астындағы функцияға байланысты бірнеше маңызды қасиетке ие.",
    explanation:"Шекаралар бірдей болса, интеграл нөлге тең. Аралықты екі бөлікке бөлсек, толық интеграл жеке интегралдардың қосындысына тең болады. Тұрақты көбейткішті интеграл алдына шығаруға болады.",
    warning:"Аралықты бөліктерге бөлген кезде шекаралар реті сақталуы керек. Қате аралық алынса, жалпы есептің нәтижесі өзгереді.",
    formula:M`\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx`
  }
];

// 10 КОНСПЕКТ
const notes = [
  {
    title:"Анықталған интегралдың анықтамасы",
    text:"Анықталған интеграл интеграл астындағы функцияға және екі шекараға байланысты есептелетін нақты сан болып табылады. Интеграл шекаралары a және b деп белгіленеді.",
    formula:M`\int_a^b f(x)\,dx`
  },
  {
    title:"Интегралдың төменгі және жоғарғы шекарасы",
    text:"a — төменгі, b — жоғарғы шекара. Интегралды есептеу үшін осы екі мән алғашқы функцияға қойылады.",
    formula:M`a\quad\text{және}\quad b`
  },
  {
    title:"Алғашқы функция",
    text:"f(x) функциясын интегралдау үшін оның F(x) алғашқы функциясын табу қажет. F(x) функциясының туындысы f(x) функциясына тең болады.",
    formula:M`F'(x)=f(x)`
  },
  {
    title:"Ньютон–Лейбниц формуласы",
    text:"Анықталған интегралды есептегенде алғашқы функцияның жоғарғы шекарадағы мәнінен төменгі шекарадағы мәні азайтылады.",
    formula:M`\int_a^b f(x)\,dx=F(b)-F(a)`
  },
  {
    title:"Интеграл шекарасының арнайы жазылуы",
    text:"Алғашқы функцияның шекараларда есептелуін тік жақша немесе тік сызық арқылы ықшам түрде көрсетуге болады.",
    formula:M`\left.F(x)\right|_a^b=F(b)-F(a)`
  },
  {
    title:"Бірдей шекаралардың қасиеті",
    text:"Анықталған интегралдың төменгі және жоғарғы шекаралары бірдей болса, интегралдың мәні нөл болады.",
    formula:M`\int_a^a f(x)\,dx=0`
  },
  {
    title:"Шекараларды алмастыру",
    text:"Интегралдың төменгі және жоғарғы шекараларын орын алмастырғанда интегралдың таңбасы қарама-қарсыға өзгереді.",
    formula:M`\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx`
  },
  {
    title:"Тұрақты көбейткіш қасиеті",
    text:"Интеграл астындағы тұрақты көбейткішті интеграл таңбасының алдына шығарып есептеуге болады.",
    formula:M`\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx`
  },
  {
    title:"Интегралдың қосылғыштық қасиеті",
    text:"Аралықты c нүктесінде екі бөлікке бөлсек, толық интеграл осы екі аралықтағы интегралдардың қосындысына тең болады.",
    formula:M`\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx`
  },
  {
    title:"Анықталған интегралдың геометриялық мағынасы",
    text:"Егер f(x) функциясы [a;b] аралығында үздіксіз және теріс емес болса, анықталған интеграл сол функция графигінің астындағы қисықсызықты трапецияның ауданын береді.",
    formula:M`S=\int_a^b f(x)\,dx,\quad f(x)\geq0`
  }
];

// НЕГІЗГІ ФОРМУЛАЛАР
const formulas = [
  {
    name:"Ньютон–Лейбниц формуласы",
    formula:M`\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}`
  },
  {
    name:"Дәрежелік функцияны интегралдау",
    formula:M`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne-1`
  },
  {
    name:"Бірдей шекаралар",
    formula:M`\int_a^a f(x)\,dx=0`
  },
  {
    name:"Шекараларды алмастыру",
    formula:M`\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx`
  },
  {
    name:"Тұрақты көбейткіш",
    formula:M`\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx`
  },
  {
    name:"Аралық бойынша қосу",
    formula:M`\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx`
  }
];

// 4 ТОЛЫҚ ШЫҒАРЫЛҒАН ЕСЕП
const examples = [
  {
    title:"1-есеп. Сызықтық функция интегралы",
    question:M`\int_1^3 2x\,dx`,
    explanation:"2x функциясының алғашқы функциясы x². Жоғарғы шекараға 3, төменгі шекараға 1 қойып, мәндерін азайтамыз.",
    steps:[
      M`F(x)=x^2`,
      M`\int_1^3 2x\,dx=\left.x^2\right|_1^3`,
      M`=3^2-1^2=9-1`
    ],
    answer:M`\boxed{8}`
  },
  {
    title:"2-есеп. Дәрежелік функция интегралы",
    question:M`\int_0^2 3x^2\,dx`,
    explanation:"3x² функциясының алғашқы функциясы x³. Ньютон–Лейбниц формуласы бойынша шекара мәндерінің айырмасын есептейміз.",
    steps:[
      M`F(x)=x^3`,
      M`\int_0^2 3x^2\,dx=\left.x^3\right|_0^2`,
      M`=2^3-0^3`
    ],
    answer:M`\boxed{8}`
  },
  {
    title:"3-есеп. Көпмүшеліктің интегралы",
    question:M`\int_0^2(4x+3)\,dx`,
    explanation:"Қосындыны жеке мүшелер бойынша интегралдаймыз. Алғашқы функция 2x²+3x болады.",
    steps:[
      M`F(x)=2x^2+3x`,
      M`F(2)=2\cdot2^2+3\cdot2=14`,
      M`F(0)=0`
    ],
    answer:M`\boxed{14}`
  },
  {
    title:"4-есеп. Таңбасы теріс интеграл",
    question:M`\int_0^3(-2x)\,dx`,
    explanation:"Интеграл астындағы функция берілген аралықта теріс. Сондықтан анықталған интегралдың нәтижесі теріс сан болуы мүмкін.",
    steps:[
      M`F(x)=-x^2`,
      M`\int_0^3(-2x)\,dx=\left.-x^2\right|_0^3`,
      M`=-9-0`
    ],
    answer:M`\boxed{-9}`
  }
];

// 6 ЖЕКЕ ТАПСЫРМА
const tasks = [
  {
    level:"Жеңіл",
    question:M`\int_0^4 2\,dx`,
    hint:"2 санының алғашқы функциясы 2x. Жоғарғы және төменгі шекараларды қойыңдар.",
    answer:M`\boxed{8}`
  },
  {
    level:"Жеңіл",
    question:M`\int_0^3 2x\,dx`,
    hint:"Алғашқы функция x². F(3)−F(0) мәнін есептеңдер.",
    answer:M`\boxed{9}`
  },
  {
    level:"Орташа",
    question:M`\int_1^2 6x^2\,dx`,
    hint:"6x² функциясының алғашқы функциясы 2x³ болады.",
    answer:M`\boxed{14}`
  },
  {
    level:"Орташа",
    question:M`\int_0^2 (3x^2+2x)\,dx`,
    hint:"Алғашқы функция x³+x² болады. Оған x=2 және x=0 мәндерін қойыңдар.",
    answer:M`\boxed{12}`
  },
  {
    level:"Қиын",
    question:M`\int_1^3 (x^2+2x)\,dx`,
    hint:"Алғашқы функция x³/3+x². Жоғарғы мәннен төменгі мәнді азайтыңдар.",
    answer:M`\boxed{\frac{44}{3}}`
  },
  {
    level:"Қиын",
    question:M`\int_{-1}^{2}(2x^3-4x)\,dx`,
    hint:"Алғашқы функция x⁴/2−2x². Екі шекараны қойып, мәндерінің айырмасын есептеңдер.",
    answer:M`\boxed{-\frac{3}{2}}`
  }
];

// 3 ТОПҚА 15 СҰРАҚ
const quiz = [
  {
    q:"Анықталған интегралдың нәтижесі қандай?",
    options:["Функциялар жиыны","Нақты сан","Тек C тұрақтысы","Тек нөл"],
    correct:1
  },
  {
    q:"Ньютон–Лейбниц формуласы қандай?",
    options:["F(a)+F(b)","F(a)−F(b)","F(b)−F(a)","F(a)·F(b)"],
    correct:2
  },
  {
    q:"∫₀¹2x dx мәні?",
    options:["1","2","0","3"],
    correct:0
  },
  {
    q:"∫₂²f(x)dx неге тең?",
    options:["2","1","−2","0"],
    correct:3
  },
  {
    q:"∫₀³2 dx мәні?",
    options:["3","6","9","2"],
    correct:1
  },
  {
    q:"∫₁³2x dx мәні?",
    options:["6","4","8","10"],
    correct:2
  },
  {
    q:"x² функциясының алғашқы функциясы?",
    options:["x³/3","2x","x²/2","3x"],
    correct:0
  },
  {
    q:"∫₀²3x² dx мәні?",
    options:["6","4","2","8"],
    correct:3
  },
  {
    q:"Шекараларды алмастырсақ не өзгереді?",
    options:["Интеграл жоғалады","Интеграл таңбасы өзгереді","Мәні екі еселенеді","Ештеңе өзгермейді"],
    correct:1
  },
  {
    q:"∫₀⁴x dx мәні?",
    options:["4","16","8","2"],
    correct:2
  },
  {
    q:"F(4)=12 және F(1)=3 болса, интеграл мәні?",
    options:["9","15","4","36"],
    correct:0
  },
  {
    q:"∫₀²(−x)dx мәні?",
    options:["2","4","0","−2"],
    correct:3
  },
  {
    q:"∫₀²x² dx мәні?",
    options:["4","8/3","2","8"],
    correct:1
  },
  {
    q:"∫₁²4x³ dx мәні?",
    options:["8","12","15","16"],
    correct:2
  },
  {
    q:"Анықталған интегралдың жауабына +C жазыла ма?",
    options:["Жоқ","Иә","Әрқашан","Тек нөл болса"],
    correct:0
  }
];

// ЖАҢА ҮЙ ЖҰМЫСЫ
const homework = [
  {
    title:"1-тапсырма. Есептерді шығару",
    text:"Ньютон–Лейбниц формуласын қолданып, үш интегралдың мәнін есептеңдер. Әр есепте алғашқы функцияны және шекараларға қойылған мәндерді көрсетіңдер.",
    formulas:[
      M`\int_1^4 2x\,dx`,
      M`\int_0^3(4x^3+2x)\,dx`,
      M`\int_1^2(6x^2-4x+3)\,dx`
    ]
  },
  {
    title:"2-тапсырма. Қатені табу",
    text:"Оқушы төмендегі интегралды −8 деп есептеді. Оның жіберген қатесін тауып, дұрыс шешу жолын жазыңдар.",
    formulas:[
      M`\int_1^3 2x\,dx=1^2-3^2=-8`
    ]
  },
  {
    title:"3-тапсырма. Түсіндірме жазу",
    text:"«Ньютон–Лейбниц формуласы не үшін қажет?» деген тақырыпта 8–10 сөйлем жазыңдар. Анықталған және анықталмаған интегралдардың айырмашылығын түсіндіріңдер.",
    formulas:[]
  }
];

// =====================================
// СЛАЙДТАРДЫ ҚҰРАСТЫРУ
// =====================================

const slides=[{type:"intro",name:"Кіріспе"}];

theory.forEach((_,index)=>{
  slides.push({
    type:"theory",index,
    name:"Түсіндірме "+(index+1)
  });
});

notes.forEach((_,index)=>{
  slides.push({
    type:"notes",index,
    name:"Конспект "+(index+1)
  });
});

slides.push({type:"formulas",name:"Формулалар"});

examples.forEach((_,index)=>{
  slides.push({
    type:"examples",index,
    name:"Үлгі есеп "+(index+1)
  });
});

tasks.forEach((_,index)=>{
  slides.push({
    type:"tasks",index,
    name:"Тапсырма "+(index+1)
  });
});

quiz.forEach((_,index)=>{
  slides.push({
    type:"game",index,
    name:(index%3+1)+"-топ • "+(index+1)+"-сұрақ"
  });
});

slides.push({type:"homework",name:"Үй жұмысы"});
slides.push({type:"finish",name:"Қорытынды"});

let currentPage=0;
let scores=[0,0,0];
let answered=new Map();
let remainingSeconds=4800;
let timerInterval=null;
let timerEndAt=0;

function safe(value) {
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));
}

function math(value) {
  return "\\["+value+"\\]";
}

function mathBox(value) {
  return `<div class="math-box">${math(value)}</div>`;
}

function card(color,title,body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>`;
}

// =====================================
// МАТЕМАТИКАЛЫҚ ФОРМУЛАЛАР
// =====================================

let mathRenderId=0;

function refreshMath() {
  const id=++mathRenderId;

  if(!window.MathJax) return;

  MathJax.startup.promise.then(()=>{
    if(id!==mathRenderId) return;
    return MathJax.typesetPromise([$("content")]);
  }).catch(error=>{
    console.warn("MathJax:",error);
  });
}

// =====================================
// СЛАЙДТЫ КӨРСЕТУ
// =====================================

function render() {
  const s=slides[currentPage];

  $("pageCount").textContent=
    `${currentPage+1} / ${slides.length}`;

  $("pageName").textContent=s.name;

  $("pageProgress").style.width=
    ((currentPage+1)/slides.length*100)+"%";

  $("totalScore").textContent=
    scores.reduce((a,b)=>a+b,0);

  let html=`
    <div class="slide">
      <div class="eyebrow">
        ${safe(lesson.chapter)} • ${lesson.page}-бет
      </div>`;

  if(s.type==="intro") {
    html+=`
      <h1 class="gradient">§3. ${safe(lesson.title)}</h1>

      ${card("blue","Сабақтың мақсаты",
        `<p>${safe(lesson.goal)}</p>`)}

      ${card("green","Бүгін не үйренеміз?",`
        <p>Анықталған интегралдың мағынасын түсінеміз.</p>
        <p>Алғашқы функцияны табамыз.</p>
        <p>Ньютон–Лейбниц формуласын қолданамыз.</p>
        <p>Есептер шығарып, 3 топпен ойын ойнаймыз.</p>
      `)}

      ${card("yellow","80 минуттық сабақ",`
        <p>Түсіндірме → Конспект → Формулалар →
        Үлгі есептер → Тапсырмалар → Топтық ойын →
        Үй жұмысы → Қорытынды</p>
      `)}
    `;
  }

  if(s.type==="theory") {
    const t=theory[s.index];

    html+=`<h2>📖 ${safe(t.title)}</h2>`;

    html+=card("blue","Анықтама",
      `<p>${safe(t.definition)}</p>`);

    html+=card("green","Түсінікті түсіндірме",
      `<p>${safe(t.explanation)}</p>`);

    html+=card("yellow","Негізгі формула",
      mathBox(t.formula));

    html+=card("red","Назар аударыңдар!",
      `<p>${safe(t.warning)}</p>`);
  }

  if(s.type==="notes") {
    const n=notes[s.index];

    html+=`<h2>📝 Конспект ${s.index+1}/10</h2>`;

    html+=card("yellow",n.title,`
      <p class="blue-text">Дәптерге жазып алыңдар:</p>
      <div class="note-box">${safe(n.text)}</div>
      ${mathBox(n.formula)}
    `);

    html+=card("green","Ауызша түсіндіру",`
      <p>Формуланың мағынасын және оны қандай
      жағдайда қолданатынымызды түсіндіріңдер.</p>
    `);
  }

  if(s.type==="formulas") {
    html+=`<h2>∫ Негізгі формулалар</h2>`;

    formulas.forEach((f,i)=>{
      html+=card(
        i%2===0?"yellow":"blue",
        `${i+1}. ${f.name}`,
        mathBox(f.formula)
      );
    });
  }

  if(s.type==="examples") {
    const e=examples[s.index];

    html+=`<h2>✏️ ${safe(e.title)}</h2>`;

    html+=card("blue","Есептің шарты",
      mathBox(e.question));

    html+=card("green","Шешу жолын түсіндіру",
      `<p>${safe(e.explanation)}</p>`);

    e.steps.forEach((step,i)=>{
      html+=card("yellow",
        `${i+1}-қадам`,
        mathBox(step));
    });

    html+=card("green","Дұрыс жауап",
      mathBox(e.answer));
  }

  if(s.type==="tasks") {
    const t=tasks[s.index];

    html+=`<h2>📐 ${s.index+1}-тапсырма</h2>`;

    html+=card("blue",`Деңгейі: ${t.level}`,`
      ${mathBox(t.question)}
      <p>Алғашқы функцияны тауып,
      интеграл шекараларын қолданыңдар.</p>
    `);

    html+=card("purple","Көмек",`
      <button class="action" data-reveal="hint">
        Көмекті көрсету
      </button>
      <div id="hint" class="reveal">${safe(t.hint)}</div>
    `);

    html+=card("green","Дұрыс жауап",`
      <button class="action" data-reveal="answer">
        Жауапты көрсету
      </button>
      <div id="answer" class="reveal">
        ${math(t.answer)}
      </div>
    `);
  }

  if(s.type==="game") {
    const i=s.index;
    const q=quiz[i];
    const team=i%3;
    const saved=answered.get(i);

    html+=`<h2>🏆 Командалық ойын</h2>`;

    html+=`
      <div class="scores">
        ${scores.map((value,index)=>`
          <div class="team ${index===team?"current":""}">
            ${index+1}-топ
            <strong>${value}</strong>
          </div>`).join("")}
      </div>`;

    html+=`
      <section class="card yellow">
        <h3>${i+1}-сұрақ / ${quiz.length}</h3>
        <p class="yellow-text">
          ${team+1}-топ жауап береді
        </p>
        <p>${safe(q.q)}</p>

        <div class="answers">
          ${q.options.map((option,index)=>{
            let className="";

            if(saved!==undefined) {
              if(index===q.correct) className="correct";
              else if(index===saved) className="wrong";
            }

            return `
              <button
                class="${className}"
                data-answer="${index}"
                ${saved!==undefined?"disabled":""}>
                ${"ABCD"[index]}. ${safe(option)}
              </button>`;
          }).join("")}
        </div>

        <p id="gameMessage">
          ${saved===undefined
            ?"Бір жауапты таңдаңдар."
            :saved===q.correct
              ?"✓ Дұрыс! +10 ұпай."
              :"Дұрыс жауап: "+safe(q.options[q.correct])}
        </p>
      </section>`;

    html+=card("blue","Ойын ережесі",`
      <p>Әр дұрыс жауапқа 10 ұпай беріледі.</p>
      <p>Топтар 1 → 2 → 3 ретімен кезектеседі.</p>
      <p>Жауаптан кейін «Келесі» батырмасын басыңдар.</p>
    `);
  }

  if(s.type==="homework") {
    html+=`<h2>📚 Үй жұмысы</h2>`;

    homework.forEach((h,i)=>{
      html+=card(
        ["blue","yellow","green"][i],
        h.title,
        `<p>${safe(h.text)}</p>`+
        h.formulas.map(mathBox).join("")
      );
    });

    html+=card("red","Ескерту",`
      <p>Интеграл шекараларын дұрыс қойыңдар.</p>
      <p>Анықталған интеграл нәтижесіне +C жазылмайды.</p>
    `);
  }

  if(s.type==="finish") {
    const best=Math.max(...scores);

    const winners=scores
      .map((value,index)=>
        value===best ? `${index+1}-топ` : null
      )
      .filter(Boolean);

    html+=`<h1 class="gradient">Сабақ аяқталды!</h1>`;

    html+=`
      <div class="scores">
        ${scores.map((value,index)=>`
          <div class="team">
            ${index+1}-топ
            <strong>${value}</strong>
          </div>`).join("")}
      </div>`;

    html+=card("green","Ойын нәтижесі",`
      <p>${winners.join(", ")}
      ${winners.length===1
        ?"— жеңімпаз!"
        :"— тең ұпай жинады!"}</p>
    `);

    html+=card("blue","Сабақ қорытындысы",`
      <p>Анықталған интегралдың мағынасын түсіндік.</p>
      <p>Ньютон–Лейбниц формуласын үйрендік.</p>
      <p>Шекараларды дұрыс қойып, есептер шығардық.</p>
    `);

    html+=card("yellow","Сау болыңыздар!",`
      <p>Сабаққа қатысқандарыңызға рақмет!</p>
    `);
  }

  $("content").innerHTML=html+"</div>";
  $("content").scrollTop=0;

  updateSidebar();
  refreshMath();
}

// =====================================
// БАСҚАРУ ЖӘНЕ НАВИГАЦИЯ
// =====================================

function nextPage() {
  if(currentPage<slides.length-1) {
    currentPage++;
    render();
  }
}

function previousPage() {
  if(currentPage>0) {
    currentPage--;
    render();
  }
}

function goSection(type) {
  const index=slides.findIndex(s=>s.type===type);

  if(index>=0) {
    currentPage=index;
    render();
  }
}

function updateSidebar() {
  const type=slides[currentPage].type;

  document.querySelectorAll("[data-section]").forEach(button=>{
    button.classList.toggle(
      "active",
      button.dataset.section===type
    );
  });

  $("previousPage").disabled=currentPage===0;
  $("nextPage").disabled=currentPage===slides.length-1;
}

$("content").addEventListener("click",event=>{
  const reveal=event.target.closest("[data-reveal]");

  if(reveal) {
    const element=$(reveal.dataset.reveal);

    if(element) {
      element.style.display=
        getComputedStyle(element).display==="none"
        ?"block":"none";

      refreshMath();
    }

    return;
  }

  const choice=event.target.closest("[data-answer]");

  if(choice) {
    answerQuestion(Number(choice.dataset.answer));
  }
});

// =====================================
// КОМАНДАЛЫҚ ҰПАЙ
// =====================================

function answerQuestion(choice) {
  const slide=slides[currentPage];

  if(slide.type!=="game") return;
  if(answered.has(slide.index)) return;

  const question=quiz[slide.index];

  answered.set(slide.index,choice);

  if(choice===question.correct) {
    scores[slide.index%3]+=10;
  }

  render();
}

function resetGame() {
  scores=[0,0,0];
  answered.clear();
  render();
}

document.querySelectorAll("[data-section]").forEach(button=>{
  button.addEventListener("click",()=>{
    goSection(button.dataset.section);
  });
});

$("nextPage").addEventListener("click",nextPage);
$("previousPage").addEventListener("click",previousPage);
$("resetGame").addEventListener("click",resetGame);

// =====================================
// ТОЛЫҚ ЭКРАН
// =====================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран қолжетімсіз",error);
  }
});

// =====================================
// 80 МИНУТТЫҚ ТАЙМЕР
// =====================================

function formatTime(seconds) {
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=formatTime(remainingSeconds);

  $("elapsed").textContent=
    formatTime(4800-remainingSeconds);

  $("timeProgress").style.width=
    ((4800-remainingSeconds)/4800*100)+"%";
}

function startTimer() {
  if(timerInterval!==null || remainingSeconds<=0)return;

  timerEndAt=Date.now()+remainingSeconds*1000;

  timerInterval=setInterval(()=>{
    remainingSeconds=Math.max(
      0,
      Math.ceil((timerEndAt-Date.now())/1000)
    );

    updateTimer();

    if(remainingSeconds===0)pauseTimer();
  },250);
}

function pauseTimer() {
  if(timerInterval!==null) {
    clearInterval(timerInterval);
    timerInterval=null;
  }
}

function resetTimer() {
  pauseTimer();
  remainingSeconds=4800;
  updateTimer();
}

$("startTimer").addEventListener("click",startTimer);
$("pauseTimer").addEventListener("click",pauseTimer);
$("resetTimer").addEventListener("click",resetTimer);

// =====================================
// АЛМАТЫ УАҚЫТЫ
// =====================================

function updateClock() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// =====================================
// ЕКІ ШАҒЫН КАЛЬКУЛЯТОР
// =====================================

const calcValues={
  basic:"",
  scientific:""
};

const calcButtons={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  scientific:[
    "C","⌫","(",")",
    "sin","cos","tan","√",
    "log","ln","π","e",
    "x²","xʸ","1/x","÷",
    "7","8","9","×",
    "4","5","6","−",
    "1","2","3","+",
    "%","0",".","="
  ]
};

const replacements={
  "×":"*",
  "÷":"/",
  "−":"-",
  "√":"sqrt(",
  "sin":"sin(",
  "cos":"cos(",
  "tan":"tan(",
  "log":"log(",
  "ln":"ln(",
  "π":"pi",
  "x²":"^2",
  "xʸ":"^",
  "1/x":"1/("
};

function createCalculator(type) {
  const grid=$(type+"Keys");

  calcButtons[type].forEach(key=>{
    const button=document.createElement("button");

    button.type="button";
    button.textContent=key;

    if(key==="C")button.classList.add("clear");
    if(key==="=")button.classList.add("equal");

    if([
      "+","−","×","÷","%","√","sin","cos",
      "tan","log","ln","x²","xʸ","1/x"
    ].includes(key)) {
      button.classList.add("operator");
    }

    button.addEventListener("click",()=>{
      pressCalc(type,key);
    });

    grid.appendChild(button);
  });
}

function pressCalc(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value.slice(0,-1);
  } else if(key==="=") {
    try {
      const result=calculate(value);
      value=String(Number(result.toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=replacements[key]??key;
  }

  calcValues[type]=value;

  const display=$(type+"Display");
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// =====================================
// АШУ ЖӘНЕ ЖАБУ
// =====================================

function openCalculator(type) {
  const element=$(type+"Calculator");
  const opening=!element.classList.contains("visible");

  const other=type==="basic"?"scientific":"basic";
  $(other+"Calculator").classList.remove("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);
    const rect=element.getBoundingClientRect();

    element.style.left=
      Math.max(0,Math.min(maxX,rect.left))+"px";
    element.style.top=
      Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

function closeCalculator(type) {
  $(type+"Calculator").classList.remove("visible");
}

$("openBasic").addEventListener("click",()=>{
  openCalculator("basic");
});

$("openScientific").addEventListener("click",()=>{
  openCalculator("scientific");
});

document.querySelectorAll("[data-close]").forEach(button=>{
  button.addEventListener("click",()=>{
    closeCalculator(button.dataset.close);
  });
});

// =====================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ ЖҮЙЕСІ
// =====================================

function calculate(input) {
  const source=String(input).replace(/\s+/g,"");
  let position=0;

  const functions={
    sin:x=>Math.sin(x*Math.PI/180),
    cos:x=>Math.cos(x*Math.PI/180),

    tan:x=>{
      const rad=x*Math.PI/180;

      if(Math.abs(Math.cos(rad))<1e-12) {
        throw new Error("Тангенс анықталмаған");
      }

      return Math.tan(rad);
    },

    sqrt:Math.sqrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(char) {
    if(source[position]===char) {
      position++;
      return true;
    }
    return false;
  }

  function atom() {
    if(take("(")) {
      const result=expression();

      if(!take(")")) {
        throw new Error("Жақша");
      }

      return result;
    }

    const rest=source.slice(position);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number) {
      position+=number[0].length;
      return Number(number[0]);
    }

    if(rest.startsWith("pi")) {
      position+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      position++;
      return Math.E;
    }

    for(const name of Object.keys(functions)) {
      if(rest.startsWith(name+"(")) {
        position+=name.length+1;

        const argument=expression();

        if(!take(")")) {
          throw new Error("Жақша");
        }

        return functions[name](argument);
      }
    }

    throw new Error("Белгісіз өрнек");
  }

  function postfix() {
    let value=atom();

    while(take("%")) {
      value/=100;
    }

    return value;
  }

  function power() {
    let value=postfix();

    if(take("^")) {
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();

    return power();
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*")) {
        value*=unary();
      } else if(take("/")) {
        value/=unary();
      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+")) {
        value+=term();
      } else if(take("-")) {
        value-=term();
      } else {
        break;
      }
    }

    return value;
  }

  if(!source)throw new Error("Бос өрнек");

  const result=expression();

  if(position!==source.length || !Number.isFinite(result)) {
    throw new Error("Есептеу қатесі");
  }

  return result;
}

// =====================================
// КЕЗ КЕЛГЕН ЖЕРІНЕН ЖЫЛЖЫТУ
// =====================================

function enableDragging(element) {
  let drag=null;
  let suppressClick=false;

  element.addEventListener("pointerdown",event=>{
    if(event.target.closest(".calc-close"))return;
    if(event.pointerType==="mouse" && event.button!==0)return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      startX:event.clientX,
      startY:event.clientY,
      left:rect.left,
      top:rect.top,
      moved:false
    };

    element.setPointerCapture(event.pointerId);
  });

  element.addEventListener("pointermove",event=>{
    if(!drag || drag.id!==event.pointerId)return;

    const dx=event.clientX-drag.startX;
    const dy=event.clientY-drag.startY;

    if(Math.hypot(dx,dy)>6)drag.moved=true;
    if(!drag.moved)return;

    element.classList.add("dragging");

    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=
      Math.max(0,Math.min(maxX,drag.left+dx))+"px";

    element.style.top=
      Math.max(0,Math.min(maxY,drag.top+dy))+"px";
  });

  element.addEventListener("pointerup",event=>{
    if(!drag || drag.id!==event.pointerId)return;

    suppressClick=drag.moved;
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("pointercancel",()=>{
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("click",event=>{
    if(!suppressClick)return;

    event.preventDefault();
    event.stopImmediatePropagation();
    suppressClick=false;
  },true);
}

// =====================================
// ЕСЕПТЕРДІҢ ТЕКСЕРІЛГЕН ЖАУАПТАРЫ
// =====================================

// 5-есеп: F(3)-F(1)=18-4/3=50/3.
// 6-есеп: F(2)-F(-1)=0-(-3/2)=3/2.
tasks[4].answer=M`\boxed{\frac{50}{3}}`;
tasks[5].answer=M`\boxed{\frac{3}{2}}`;

// =====================================
// САЙТТЫ ІСКЕ ҚОСУ
// =====================================

createCalculator("basic");
createCalculator("scientific");

enableDragging($("basicCalculator"));
enableDragging($("scientificCalculator"));

updateTimer();
render();
