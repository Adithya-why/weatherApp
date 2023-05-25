

const getData = async function(city){
    let response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=59232237e6bb42f6afb54121232205&q=${city}&aqi=yes`);
    data = await response.json();
    console.log(data);
    let obj = processData(data);
    return obj;
}


const processData = function(data){
    let tempc,ftempc,humidity,text;
    tempc = data.current.temp_c;
    ftempc = data.current.feelslike_c;
    humidity = data.current.humidity;
    text = data.current.condition.text;
    let obj = {text,tempc,ftempc,humidity};
    return obj;
}


const getInput = function(){
    let c = document.querySelector('input').value;
    putOutput(c);
}


const putOutput = async function(c){
    let obj = await getData(c);
    console.log(obj);
    displayData(obj);
}



const displayData = function(obj){
    clr();
    
    
   let t = document.createElement('div');
   t.innerHTML = "Weather : "+obj.text;

    let b = document.createElement('div');
    b.innerHTML = "Temperature : " + obj.tempc + "°C";

    let c = document.createElement('div');
    c.innerHTML = "But feels like : "  + obj.ftempc + "°C";

    let d = document.createElement('div');
    d.innerHTML = "Humidity: " + obj.humidity;


    let mdiv = document.querySelector('.data');
    let div = document.createElement('div');
    
    
    div.appendChild(t);

    div.appendChild(b);

    div.appendChild(c);

    div.appendChild(d);


    mdiv.appendChild(div);


    getPutGif(obj.text);
   
}



const clr = function(){
    let x = document.querySelector('.data');
    x.replaceChildren();
}







const getPutGif = async function(te){
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=R79jyx7Jq9jMJonmwqmV1u7xuA5D5HBB&s=${te}`,{mode:"cors"});
    let rep2 = await response.json();
    let src = rep2.data.images.original.url;
    let x = document.querySelector('.data>div');
    x.style.backgroundImage = `url('${src}')`;
    x.style.backgroundRepeat = "no-repeat";
    x.style.backgoundSize = "cover";
    x.style.backgoundPosition = "center";
    console.log(src);


}

async function start(){
//let d = await getData("chennai");
//console.log(d);
putOutput('chennai');
let btn = document.querySelector('button');
btn.addEventListener('click',getInput);
}


start();
