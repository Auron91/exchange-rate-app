const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-one');
const rateInfo = document.querySelector('.rate-info');
const swapBtn = document.querySelector('.swap');

//  Rates API https://ratesapi.io
const url = 'https://api.ratesapi.io/api/latest';

const httpGet = (theUrl) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

