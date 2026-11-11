
function doGet(e) {
  return ContentService
    .createTextOutput("Frontend Challenge API ishlayapti!")
    .setMimeType(ContentService.MimeType.TEXT);
}

const TEACHER_EMAIL = 'sarakim2224@gmail.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const name = String(data.name || 'Ism kiritilmagan').slice(0, 70);
    const score = Number(data.score || 0);
    const total = Number(data.total || 30);
    const answers = Array.isArray(data.answers) ? data.answers : [];

    const details = answers.map((item, i) => {
      return `${i + 1}. ${item.question}
Tanlangan javob: ${item.selected}
To‘g‘ri javob: ${item.correctAnswer}
Natija: ${item.isCorrect ? 'To‘g‘ri' : 'Noto‘g‘ri'}`;
    }).join('\n\n');

    const subject = `Frontend Challenge natijasi: ${name} — ${score}/${total}`;

    const body = `Yangi o‘yin natijasi!

O‘quvchi: ${name}
Ball: ${score}/${total}
To‘g‘ri javoblar: ${score}
Noto‘g‘ri javoblar: ${total - score}
Yakunlangan vaqt: ${data.finishedAt || ''}

JAVOBLAR TAHLILI

${details}`;

    MailApp.sendEmail({
      to: TEACHER_EMAIL,
      subject: subject,
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({
        ok: false,
        error: String(err)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
