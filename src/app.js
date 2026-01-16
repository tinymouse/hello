/*
    app.js
*/

window.onload = async function(){
    document.querySelector('#info').innerText = await main.info();
}
