

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
   t.innerHTML = obj.text;

    let b = document.createElement('div');
    b.innerHTML = obj.tempc;

    let c = document.createElement('div');
    c.innerHTML = obj.ftempc;

    let d = document.createElement('div');
    d.innerHTML = obj.humidity;


    let div = document.querySelector('.data');
    
    
    div.appendChild(t);

    div.appendChild(b);

    div.appendChild(c);

    div.appendChild(d);

   
}



const clr = function(){
    let x = document.querySelector('.data');
    x.replaceChildren();
}





async function start(){
//let d = await getData("chennai");
//console.log(d);
putOutput('chennai');
let btn = document.querySelector('button');
btn.addEventListener('click',getInput);
}


start();
