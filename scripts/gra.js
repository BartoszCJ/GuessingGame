import { getWyraz, randomWyraz } from "./data.js";

getWyraz();

let granie = 0;
let graHTML = '';
let randomWyrazTablica = Array.from(randomWyraz);
console.log(randomWyrazTablica);



//Pobierz wyraz i wygeneruj inputy sprawdz czy gra trwa
document.getElementById('zacznij').addEventListener("click", ()=>
{
  if( granie === 0 )
    {
    let i,j = 0;
    randomWyrazTablica.forEach(()=>
      {
        graHTML += `<div class="js-wpisz-${i++}"> <input type="text" class="wyrazdozgadcss js-input-wpis-${j++}"></div>`
        document.querySelector('.js-gra').innerHTML = graHTML;
        granie = 1;
      });
    }
  else
    {
      alert('gra trwa!')
    }
});


document.getElementById('wpisGracza').addEventListener('keypress', (e) =>
{
  if (e.key === 'Enter')
  {
    let userInput = e.target.value.trim();
    console.log("SADAS")
    for(let i = 0; i<randomWyrazTablica.length;i++)
      {
        if(randomWyrazTablica[i] === userInput) 
        {
          console.log('ELO');
          console.log(userInput);
        }
      }
  }
})
