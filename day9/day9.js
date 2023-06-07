var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortdesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.vision-value')
var wind = document.querySelector('.wind-value')
var cloud = document.querySelector('.cloud-value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(input){
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=313f24447dc99ecbb6886c4d7a501f3c`
    
    let data = await fetch(apiURL).then(res => res.json())
    
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText =data.name
        country.innerText=data.sys.country
        time.innerHTML = new Date().toLocaleString()
        value.innerText= Math.round((data.main.temp - 273))
        let temp = value.innerText
        shortdesc.innerText=data.weather[0]?data.weather[0].main:''
        visibility.innerText=data.visibility +'(m)'
        wind.innerText=data.wind.speed+'(m/s)'
        cloud.innerText=data.main.humidity +'(%)'
            if(temp >= 25){
                body.setAttribute('class','hot')
            } else{
                body.setAttribute('class','cool')
            }

    }else{
        content.classList.add('hide')
    }

}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let input = search.value.trim()
        changeWeatherUI(input)
    }
})
changeWeatherUI('ha noi')