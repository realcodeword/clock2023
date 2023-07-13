// clock
function clock() {
    let hr = document.getElementById("hr")
    let min = document.getElementById("min")
    let sec = document.getElementById("sec")
    let AMPM = document.getElementById("am-pm")
    let date = document.getElementById("date")


    // js counts months from 0 to 11;
    let h = new Date().getHours();
    let m = new Date().getMinutes() ;
    let s = new Date().getSeconds();
    let ampm = "AM";

    // AMPM Converter
    ampm = h >= 12 ? ampm = "PM" : ampm;

    // Background Changer

    /*
        5am to 10am -> morning bg
        10am to 4pm -> day bg
        4pm to 7pm -> evening bg
        7pm to 5am -> night bg
    */
    if (h >= 5 && h < 10) {
        document.body.style.backgroundImage = "url('img/morning-bg.jpg')";
        document.body.style.backgroundPosition = "center" ;
        document.body.style.backgroundSize = "cover" ;
        document.body.style.backgroundRepeat = "no-repeat"
    }
    else if (h >= 10 && h < 16) {
        document.body.style.backgroundImage = "url('img/day-bg.jpg')";
        document.body.style.backgroundPosition = "center" ;
        document.body.style.backgroundSize = "cover" ;
        document.body.style.backgroundRepeat = "no-repeat"
    }
    else if (h >= 16 && h < 19) {
        document.body.style.backgroundImage = "url('img/evening-bg.jpg')";
        document.body.style.backgroundPosition = "center" ;
        document.body.style.backgroundSize = "cover" ;
        document.body.style.backgroundRepeat = "no-repeat"
    }
    else {
        document.body.style.backgroundImage = "url('img/night-bg.jpg')";
        document.body.style.backgroundPosition = "center" ;
        document.body.style.backgroundSize = "cover" ;
        document.body.style.backgroundRepeat = "no-repeat"
    }



    // 24 hr Into 12 hr format 
    // if(h > 12){
    //     h = h -12;
    // }
    h = h > 12 ? h - 12 : h;

    // Adding 0 for number less than 10;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    AMPM.innerText = ampm;

    // Date
    let dd = new Date().getDate();
    let mm = new Date().getMonth() +1 ;
    let yy = new Date().getFullYear();

    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;

    date.innerText = `${dd}/${mm}/${yy}`;

    setTimeout(
        ()=>{
            clock();
        }
    )
}
clock();







// Weather API Call
function weather() {
    let temp = document.getElementById("temp")
    let city = document.getElementById("city")
    let country = document.getElementById("country")
    let weatherIcon = document.getElementById("weather-icon")


    let url = "http://api.weatherapi.com/v1/current.json?key=77da7159250e45c782d53340231206&q=india&aqi=no"

    fetch(url).then(res => res.json())
        .then(data => {
            temp.innerText = data.current.temp_c + 9 + "°",
                city.innerText = data.location.name,
                country.innerText = data.location.country,
                weatherIcon.src = "https:" + data.current.condition.icon
        })

    // temp -> data.current.temp_c
    // city -> data.location.name
    // country -> data.location.country
    // deg sign -> ° 


    // 1000 ms = 1s
    // 1hr = 60min = 60 x 60 = 3600 sec = 3600 x 1000 = 3600000 ms
    setTimeout(
        () => {
            weather();
        }, 3600000
    )
}
weather();