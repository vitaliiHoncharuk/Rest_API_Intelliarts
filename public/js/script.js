const mainUrl = "api/products";
const purchaseUrl = "api/products/purchase";
const reportUrl = "api/products/report";
const textInput = document.getElementById("text");

function manageRoute() {
    // controller = >   all || purchase || clear || report || bad request
    // inputQuery = > 2019-04-27 4.75 EUR Beer   - > [2019-04-27] - date |  4.75 - price |  EUR - currency |  Beer - product
    let controller = textInput.value.split(" ")[0];
    let [,...inputQuery] = textInput.value.split(" ");
    switch (controller) {
        case "all" : {
            fetch(mainUrl)
                .then(res => res.json())
                .then(e => getAll(e))
                .catch(err => console.log(err));
            break;
        }
        case "purchase" : {
            let [date,price,currency,...productNameQuery] = inputQuery;
            let productName;
            let isValidDate = Date.parse(date);
            !productNameQuery[1]? productName = productNameQuery[0] : productName = productNameQuery.join(" ");

            if( !isNaN(isValidDate) && !isNaN(price) && CurrencyValidationArray.includes(currency) && !productName) {
                fetchRequest(mainUrl, "post", {date, price, currency,productName});
                showPurchase(inputQuery);
                console.log(inputQuery);
                fetch(purchaseUrl)
                    .then(res => res.json())
                    .catch(err => console.log(err));
            }
            else {
                alert("Bad request! Please,try again...");
            }

            break;
        }
        case "clear" : {
            let date = new Date(inputQuery[0]);
            let isValidDate = Date.parse(date);
            if (!isNaN(isValidDate)) {
                fetchRequest(mainUrl, "delete", {date})
                    .then(res => res.json())
                    .then(e => console.log(e))
                    .catch(err => console.log(err));
            }
            else{
                alert("Bad request! Please,try again...");
            }
            break;
        }
        case "report" : {
            let [year,ccy] = inputQuery;
            if (year && CurrencyValidationArray.includes(ccy) ) {
                convertToAndShow(+year, ccy);
            }
            else {
                alert("Bad request! Please,try again...");
            }
            break;
        }
        default: {
            alert("Bad request");
        }

    }
}



BtnListener();




