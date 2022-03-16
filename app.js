const searchTemp = () =>{
   const city= document.getElementById('weather').value;
   const cityName =document.getElementById('city-name')
   cityName.innerText=city
   fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(res => res.json())
        .then(data => displsyView(data))
        city.value=''
}

const displsyView =(data)=>{
 
   
   
    const dscribe =document.getElementById('adrota')
    dscribe.innerText=`${data.description}`
       console.log(data.description)
    const hot = document.getElementById('temp')
    
    hot.innerText=`${data.temperature}`
}
