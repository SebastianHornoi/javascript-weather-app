const apiKey = "ff1a58fce59ac43d185acf3e760312aa"
const citta = document.getElementById('citta');
const temperatura = document.getElementById('temperatura');
const descrizioneTempo = document.getElementById('descrizioneTempo');
const form = document.querySelector('.form');
const input = document.querySelector('.form-textinput');
const content = document.querySelector('.container__content');
const contentHeader = document.querySelector('.container__header');
let inputValue;

form.addEventListener('submit', function(e){
 e.preventDefault();
 inputValue = input.value;
 console.log(inputValue)

 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&lang=it&appid=${apiKey}`)
  .then((data) =>data.json())
  .then((data) =>{
    contentHeader.style.height = 40 + '%'
    content.style.height = 48 + '%';
    console.log(data)
    citta.innerHTML = data.city.name;
    temperatura.innerHTML = Math.floor(data.list[0].main.temp) + '°';
    descrizioneTempo.innerHTML = data.list[0].weather[0].description;

    const settimana = ['domenica:','lunedi:','martedi:','mercoledi:','giovedi:','venerdi:','sabato:'];

    let numero1 = data.list[0].dt_txt;
    let numero2 = data.list[8].dt_txt;
    let numero3 = data.list[16].dt_txt;
    let numero4 = data.list[24].dt_txt;
    let numero5 = data.list[32].dt_txt;

    var date1 = new Date(`${numero1}`);
    var date2 = new Date(`${numero2}`);
    var date3 = new Date(`${numero3}`);
    var date4 = new Date(`${numero4}`);
    var date5 = new Date(`${numero5}`);

    const giorno1 = document.getElementById('giorno1');
    const giorno2 = document.getElementById('giorno2');
    const giorno3 = document.getElementById('giorno3');
    const giorno4 = document.getElementById('giorno4');
    const giorno5 = document.getElementById('giorno5');

    const temp1 = document.getElementById('temp1');
    const temp2 = document.getElementById('temp2');
    const temp3 = document.getElementById('temp3');
    const temp4 = document.getElementById('temp4');
    const temp5 = document.getElementById('temp5');

    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');
    const icon5 = document.getElementById('icon5');

    giorno1.innerHTML = settimana[date1.getDay()];
    giorno2.innerHTML = settimana[date2.getDay()];
    giorno3.innerHTML = settimana[date3.getDay()];
    giorno4.innerHTML = settimana[date4.getDay()];
    giorno5.innerHTML = settimana[date5.getDay()];

    temp1.innerHTML = Math.floor(data.list[8].main.temp) + ' °';
    temp2.innerHTML = Math.floor(data.list[16].main.temp) + ' °';
    temp3.innerHTML = Math.floor(data.list[24].main.temp) + ' °';
    temp4.innerHTML = Math.floor(data.list[32].main.temp) + ' °';
    temp5.innerHTML = Math.floor(data.list[39].main.temp) + ' °';

    icon1.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png"/>`;
    icon2.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png"/>`;
    icon3.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png"/>`;
    icon4.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png"/>`;
    icon5.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png"/>`;

  })







})





















// function caricaFile(){
//   navigator.geolocation.getCurrentPosition((success) =>{
//
//     let lat = success.coords.latitude;
//     let lon = success.coords.longitude;
//
//     const xml = new XMLHttpRequest();
//
//     xml.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&appid=${apiKey}`, true);
//     xml.send();
//
//     xml.onreadystatechange = function (){
//       if(this.readyState === 4 && this.status === 200){
//
//         const data = JSON.parse(this.responseText)
//         console.log(data)
//         const settimana = ['domenica:','lunedi:','martedi:','mercoledi:','giovedi:','venerdi:','sabato:'];
//





//         let numero1 = data.list[0].dt_txt;
//         let numero2 = data.list[8].dt_txt;
//         let numero3 = data.list[16].dt_txt;
//         let numero4 = data.list[24].dt_txt;
//         let numero5 = data.list[32].dt_txt;

//
//         var date1 = new Date(`${numero1}`);
//         var date2 = new Date(`${numero2}`);
//         var date3 = new Date(`${numero3}`);
//         var date4 = new Date(`${numero4}`);
//         var date5 = new Date(`${numero5}`);
//
//         var dataFinale1 = date1.getDay();
//         var dataFinale2 = date2.getDay();
//         var dataFinale3 = date3.getDay();
//         var dataFinale4 = date4.getDay();
//         var dataFinale5 = date5.getDay();
//
//         p.innerHTML = `${settimana[dataFinale1]} ${Math.floor(data.list[0].main.temp)} ° <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"/>`;
//         p1.innerHTML = `${settimana[dataFinale2]} ${Math.floor(data.list[8].main.temp)} °  <img src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png"/>`;
//         p2.innerHTML = `${settimana[dataFinale3]} ${Math.floor(data.list[16].main.temp)} ° <img src="http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png"/>`;
//         p3.innerHTML = `${settimana[dataFinale4]} ${Math.floor(data.list[24].main.temp)} ° <img src="http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png"/>`;
//         p4.innerHTML = `${settimana[dataFinale5]} ${Math.floor(data.list[32].main.temp)} ° <img src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png"/>`;
//
//
//       }
//     }
//   })
// }
