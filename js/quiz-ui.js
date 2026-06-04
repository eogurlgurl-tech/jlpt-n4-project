let quizCurrent = null;
let quizScore = 0;
let quizStats = getQuizStats();

function getQuizRate(){
    if(quizStats.total===0) return 0;
    return Math.round((quizStats.correct/quizStats.total)*100);
}

function getQuizGrade(rate){
    if(rate>=90) return "S";
    if(rate>=80) return "A";
    if(rate>=70) return "B";
    if(rate>=60) return "C";
    return "D";
}

function renderQuiz(){
 const target=document.getElementById("quizArea");
 if(!target) return;
 const current=GRAMMAR_DATA[Math.floor(Math.random()*GRAMMAR_DATA.length)];
 quizCurrent=current;
 const wrongs=GRAMMAR_DATA.filter(x=>x.title!==current.title).sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.meaning);
 const choices=[current.meaning,...wrongs].sort(()=>Math.random()-0.5);
 const rate=getQuizRate();

 target.innerHTML=`
 <div class="quiz-card">
 <h3>${current.title}</h3>
 <p>의 의미는?</p>
 ${choices.map(choice=>`
 <button class="quiz-option" onclick="checkQuizAnswer('${choice.replace(/'/g,"\\'")}')">${choice}</button>
 `).join("")}
 <div id="quizResult"></div>
 <hr>
 <h3>📊 퀴즈 통계</h3>
 <p>총 문제 : ${quizStats.total}</p>
 <p>정답 : ${quizStats.correct}</p>
 <p>오답 : ${quizStats.wrong}</p>
 <p>정답률 : ${rate}%</p>
 <p>등급 : ${getQuizGrade(rate)}</p>
 </div>`;
}

function checkQuizAnswer(answer){
 const result=document.getElementById("quizResult");
 if(answer===quizCurrent.meaning){
   quizScore++;
   quizStats.correct++;
   quizStats.total++;
   saveQuizStats(quizStats);
   result.innerHTML=`<p>⭕ 정답</p><button class="reading-btn" onclick="renderQuiz()">다음 문제</button>`;
 }else{
   quizStats.wrong++;
   quizStats.total++;
   saveQuizStats(quizStats);
   saveWrongAnswer({id:"wrong-"+Date.now(),type:"문법",title:quizCurrent.title,meaning:quizCurrent.meaning});
   result.innerHTML=`<p>❌ 오답</p><p>정답 : ${quizCurrent.meaning}</p><button class="reading-btn" onclick="renderQuiz()">다음 문제</button>`;
 }
}
