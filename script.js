// Google Apps Script Web App URL manzilini shu yerga joylashtiring.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2mzMDkIXnbxW-0sNqEHuEYXQ0yoKVelpXtwZIn7IV3KXuAkALDFqg_6JyQhKWRoU/exec"

const questions = [
  {topic:"HTML ASOSLARI",icon:"HTML",q:"HTML nimaning qisqartmasi?",a:["HyperText Markup Language","HighText Machine Language","Home Tool Markup Language","Hyper Transfer Main Link"],c:0},
  {topic:"HTML ASOSLARI",icon:"HTML",q:"Veb-sahifaning eng katta sarlavhasi qaysi teg bilan yoziladi?",a:["<h6>","<head>","<h1>","<title>"],c:2},
  {topic:"HTML ASOSLARI",icon:"HTML",q:"Havola yaratish uchun qaysi teg ishlatiladi?",a:["<img>","<a>","<linktext>","<href>"],c:1},
  {topic:"HTML ASOSLARI",icon:"HTML",q:"Rasm joylashtirish uchun qaysi teg ishlatiladi?",a:["<picturetext>","<image>","<src>","<img>"],c:3},
  {topic:"HTML ASOSLARI",icon:"HTML",q:"HTML hujjatining asosiy ko‘rinadigan qismi qaysi teg ichida bo‘ladi?",a:["<body>","<meta>","<head>","<style>"],c:0},
  {topic:"CSS ASOSLARI",icon:"CSS",q:"CSS da matn rangini o‘zgartirish xususiyati qaysi?",a:["font-size","background","color","border"],c:2},
  {topic:"CSS ASOSLARI",icon:"CSS",q:"Element atrofiga chegara qo‘yish uchun qaysi xususiyat ishlatiladi?",a:["border","padding","margin","display"],c:0},
  {topic:"CSS ASOSLARI",icon:"CSS",q:"Elementning ichki bo‘shlig‘ini qaysi xususiyat belgilaydi?",a:["margin","padding","outline","gap"],c:1},
  {topic:"CSS ASOSLARI",icon:"CSS",q:"Element fon rangini o‘zgartirish xususiyati qaysi?",a:["text-color","font-color","border-color","background-color"],c:3},
  {topic:"CSS ASOSLARI",icon:"CSS",q:"Matn o‘lchamini belgilash uchun qaysi xususiyat ishlatiladi?",a:["font-size","text-style","size-text","font-weight"],c:0},
  {topic:"JAVASCRIPT",icon:"JS",q:"JavaScript da o‘zgarmas qiymat e’lon qilish uchun qaysi kalit so‘z ishlatiladi?",a:["var","let","const","fixed"],c:2},
  {topic:"JAVASCRIPT",icon:"JS",q:"let age = 12; kodida age nima?",a:["Funksiya","O‘zgaruvchi","Sikl","Shart"],c:1},
  {topic:"JAVASCRIPT",icon:"JS",q:"Ikki sonni qo‘shish uchun qaysi operator ishlatiladi?",a:["+","-","*","/"],c:0},
  {topic:"JAVASCRIPT",icon:"JS",q:"console.log(5 + 3) natijasi nima bo‘ladi?",a:["53","2","8","15"],c:2},
  {topic:"JAVASCRIPT",icon:"JS",q:"JavaScript da teng qiymat va teng turini tekshiruvchi operator qaysi?",a:["=","==","!=","==="],c:3},
  {topic:"IF / ELSE",icon:"IF",q:"if operatori nima uchun ishlatiladi?",a:["Takrorlash uchun","Shartni tekshirish uchun","Rang berish uchun","Matn chiqarish uchun"],c:1},
  {topic:"IF / ELSE",icon:"IF",q:"if (5 > 3) sharti qanday natija beradi?",a:["true","false","5","3"],c:0},
  {topic:"IF / ELSE",icon:"IF",q:"if sharti bajarilmasa, boshqa holatni qaysi kalit so‘z bilan yozamiz?",a:["for","then","else","while"],c:2},
  {topic:"IF / ELSE",icon:"IF",q:"let x = 4; if (x > 5) { ... } sharti bajariladimi?",a:["Ha","Yo‘q","Faqat x=5 bo‘lsa","Xatolik beradi"],c:1},
  {topic:"IF / ELSE",icon:"IF",q:"Quyidagi shart qachon true bo‘ladi: age >= 18?",a:["age 18 dan kichik bo‘lsa","age faqat 17 bo‘lsa","age 18 yoki undan katta bo‘lsa","age 0 bo‘lsa"],c:2},
  {topic:"FOR / WHILE",icon:"FOR",q:"for sikli nima uchun ishlatiladi?",a:["Kodlarni takror bajarish uchun","Rangni o‘zgartirish uchun","Rasm qo‘yish uchun","O‘zgaruvchini o‘chirish uchun"],c:0},
  {topic:"FOR / WHILE",icon:"FOR",q:"for (let i = 0; i < 3; i++) sikli necha marta bajariladi?",a:["2 marta","3 marta","4 marta","Cheksiz"],c:1},
  {topic:"FOR / WHILE",icon:"FOR",q:"Sikl ichidagi i++ ifodasi nimani anglatadi?",a:["i ni 1 ga kamaytiradi","i ni 2 ga oshiradi","i ni 1 ga oshiradi","i ni 0 qiladi"],c:2},
  {topic:"FOR / WHILE",icon:"FOR",q:"while sikli qachon ishlashda davom etadi?",a:["Shart true bo‘lib turganda","Shart false bo‘lganda","Faqat bir marta","Hech qachon"],c:0},
  {topic:"FOR / WHILE",icon:"FOR",q:"for siklida i = 1; i <= 4; i++ bo‘lsa, i qanday qiymatlarni oladi?",a:["0, 1, 2, 3","1, 2, 3, 4","1, 2, 3","2, 3, 4, 5"],c:1},
  {topic:"MANTIQIY AMALLAR",icon:"LOGIC",q:"JavaScript da AND mantiqiy operatori qaysi belgi bilan yoziladi?",a:["||","!","&&","=="],c:2},
  {topic:"MANTIQIY AMALLAR",icon:"LOGIC",q:"OR (||) operatori qachon true qaytaradi?",a:["Ikkala shart ham false bo‘lsa","Kamida bitta shart true bo‘lsa","Faqat ikkala shart true bo‘lsa","Hech qachon"],c:1},
  {topic:"MANTIQIY AMALLAR",icon:"LOGIC",q:"NOT (!) operatori nima qiladi?",a:["Qiymatni teskarisiga o‘zgartiradi","Sonlarni qo‘shadi","Shartlarni takrorlaydi","Qiymatni matnga aylantiradi"],c:0},
  {topic:"MANTIQIY AMALLAR",icon:"LOGIC",q:"true && true natijasi nima?",a:["false","0","null","true"],c:3},
  {topic:"MANTIQIY AMALLAR",icon:"LOGIC",q:"(5 > 3) && (2 < 4) ifodasi natijasi nima?",a:["false","true","5","undefined"],c:1}
];

const introScreen=document.getElementById('introScreen'),quizScreen=document.getElementById('quizScreen'),resultScreen=document.getElementById('resultScreen');
const startForm=document.getElementById('startForm'),answersBox=document.getElementById('answers'),nextBtn=document.getElementById('nextBtn');
let studentName='',index=0,score=0,selected=null,answerLog=[];
startForm.addEventListener('submit',e=>{e.preventDefault();studentName=document.getElementById('studentName').value.trim();if(!studentName)return;index=0;score=0;answerLog=[];introScreen.classList.add('hidden');resultScreen.classList.add('hidden');quizScreen.classList.remove('hidden');renderQuestion();});
function renderQuestion(){const item=questions[index];selected=null;document.getElementById('topicLabel').textContent=item.topic;document.getElementById('questionIcon').textContent=item.icon;document.getElementById('questionText').textContent=item.q;document.getElementById('currentNumber').textContent=String(index+1).padStart(2,'0');document.getElementById('progressText').textContent=`${index+1}-savol`;document.getElementById('progressFill').style.width=`${((index+1)/questions.length)*100}%`;answersBox.innerHTML='';nextBtn.disabled=true;nextBtn.innerHTML=index===questions.length-1?'Natijani ko‘r <span>✓</span>':'Keyingi savol <span>→</span>';item.a.forEach((answer,i)=>{const btn=document.createElement('button');btn.type='button';btn.className='answer';btn.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span></span>`;btn.querySelector('span:last-child').textContent=answer;btn.addEventListener('click',()=>chooseAnswer(i));answersBox.appendChild(btn);});}
function chooseAnswer(i){selected=i;[...answersBox.children].forEach((el,n)=>el.classList.toggle('selected',n===i));nextBtn.disabled=false;}
nextBtn.addEventListener('click',()=>{if(selected===null)return;const q=questions[index];const correct=selected===q.c;if(correct)score++;answerLog.push({question:q.q,selected:q.a[selected],correctAnswer:q.a[q.c],isCorrect:correct});index++;if(index<questions.length)renderQuestion();else showResult();});
function showResult(){quizScreen.classList.add('hidden');resultScreen.classList.remove('hidden');document.getElementById('resultName').textContent=studentName;document.getElementById('scoreValue').textContent=score;let message='Yaxshi harakat!';if(score>=27)message='Siz haqiqiy CODE MASTER! 🚀';else if(score>=22)message='Juda yaxshi natija! 🌟';else if(score>=15)message='Yaxshi! Yana mashq qiling! 💪';else message='Davom eting, albatta uddalaysiz! ✨';document.getElementById('resultMessage').textContent=message;document.getElementById('resultDetail').textContent=`${score} ta to‘g‘ri, ${30-score} ta noto‘g‘ri javob.`;sendResult();}
async function sendResult(){const status=document.getElementById('sendStatus');if(GOOGLE_SCRIPT_URL.startsWith('PASTE_')){status.textContent='Email yuborish sozlanmagan. script.js fayliga Google Apps Script URL manzilini kiriting.';status.style.color='#fbbf24';return;}status.textContent='Natija yuborilmoqda…';try{await fetch(GOOGLE_SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({name:studentName,score,total:questions.length,answers:answerLog,finishedAt:new Date().toLocaleString('uz-UZ')})});status.textContent='Natija o‘qituvchiga yuborildi!';status.style.color='#86efac';}catch(err){status.textContent='Yuborishda muammo yuz berdi. O‘qituvchiga xabar bering.';status.style.color='#fca5a5';}}
document.getElementById('restartBtn').addEventListener('click',()=>{resultScreen.classList.add('hidden');introScreen.classList.remove('hidden');document.getElementById('studentName').value=studentName;});
