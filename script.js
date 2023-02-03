const button = document.getElementById("button");
const ayahText = document.getElementById("ayat");
const translate = document.getElementById("arti");
const desc = document.getElementById("desc");


  
const getAyah = () => {
  let getRandomSurah = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  let getRandomAyah = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  fetch(`https://quranenc.com/api/v1/translation/aya/indonesian_sabiq/${getRandomSurah}/${getRandomAyah}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      ayahText.innerHTML = data.result.arabic_text;
      translate.innerHTML = data.result.translation
      desc.innerHTML = `
        QS <span>${data.result.sura} : ${data.result.aya}</span>
      `
    })
    .catch((err) => console.log(err));
};

setInterval(getAyah, 3000);

// button.addEventListener("click", getAyah);


// const accountSID = 'AC4646714dd76be84ea8241815c5a3c83f';
// const authToken = 'a0f0c9b3df5c1157aab3822780141a82';
// const client = require('twilio')(accountSID, authToken);

// client.messages
//   .create({
//     from: 'whatsapp:+17264441314',
//     to: 'whatsapp:+6285156219612',
//     body: 'tes bot'
//   })
//   .then(message => console.log(message.sid));
