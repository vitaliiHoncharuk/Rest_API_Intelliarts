async function convertToAndShow(year,currencyName) {
    let data = await getDataFromDB();
    let sum = 0;
    let Euro = 0;
    let response = await fetch("http://data.fixer.io/api/latest?access_key=32ac004ac55fd87e65c0594fc651efc5");
    let parsed = await response.json();
    for (let i = 0;i < data.length;i++){
        if (data[i]._id.year === year){
            Euro = data[i].sum / parsed.rates[data[i]._id.currency];
            sum += Euro * parsed.rates[currencyName];
        }
    }
    let p = document.createElement("p");
    p.innerHTML = `${sum.toFixed(2)} ${currencyName}`;
    document.body.appendChild(p);
}
