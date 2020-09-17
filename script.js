const currencyOne = document.querySelector('#currency-one');
const ammountOne = document.querySelector('.ammount-one');
const currencyTwo = document.querySelector('#currency-two');
const ammountTwo = document.querySelector('.ammount-two');
const rateInfo = document.querySelector('.rate-info');
const swapBtn = document.querySelector('.swap');

//  Rates API https://ratesapi.io

const calculate = () => {
    rates = fetch(`https://api.ratesapi.io/api/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1 = currencyOne.value;
        const currency2 = currencyTwo.value;

        const rate =data.rates[currency2];
        rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
        console.log(rate);

        ammountTwo.value = (ammountOne.value * rate).toFixed(2);
    });
}

const swap = () =>{
    [currencyOne.value, currencyTwo.value]  =[currencyTwo.value, currencyOne.value];
    calculate();
}


currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
ammountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swap);
calculate();
