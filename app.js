const quote = document.querySelector('.quoute-js')
const heading = document.querySelector('.heading')
const dice = document.querySelector('.dice')
const diceImg = document.querySelector('.dice-img')

const url = "https://api.adviceslip.com/advice"

async function fetchData(){
    const promise = await fetch(url,{
        cache:'no-cache',
        
    })
    promise.json().then(data =>{
        heading.textContent = `advice #${data.slip.id}`
        quote.textContent = data.slip.advice;

    })
    diceImg.style.animation = "none";
    setTimeout(()=>{
        diceImg.style.animation = "rotate .4s"
    },10)
}


dice.addEventListener('click',fetchData)
// dice.addEventListener('click',fetchData)
