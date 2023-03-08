const adviceButton = document.getElementById('btn-advice');
const adviceNumber = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".description");

async function criarConselho(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const adviceJson = await response.json()    
    const adviceId = `Adivice #${adviceJson.slip.id}`;
    const adviceText = `"${adviceJson.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceButton.addEventListener("click", criarConselho)

criarConselho()

