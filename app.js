const searchTemp = () =>{
   const city= document.getElementById('weather').value='';
   const cityName =document.getElementById('city-name')
   cityName.innerText=city
   
   fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(res => res.json())
        .then(data => displsyView(data))
}

const displsyView =(data)=>{
    console.log(data)
   
    const hot = document.getElementById('temp')
    const dscribe =document.getElementById('adrota')
   
    dscribe.innerText=`${data.description}`
    hot.innerText=`${data.temperature}`

 const city= document.getElementById('weather').value='';
}
