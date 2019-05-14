const mainUrl = "api/products";
const purchaseUrl = "api/products/purchase";
const reportUrl = "api/products/report";
const textInput = document.getElementById("text");


function manageRoute() {
    let controller = textInput.value.split(" ")[0];
    let [,...rest] = textInput.value.split(" ");
    switch (controller) {
        case "all" : {
            fetch(mainUrl)
                .then(res => res.json())
                .then(e => getAll(e))
                .catch(err => console.log(err));
            break;
        }
        case "purchase" : {
            let [date,price,currency,...items] = rest;
            let item;
            !items[1]? item = items[0] : item = items.join(" ");
            fetchRequest(mainUrl,"post",{ date ,price ,currency ,item });
            showPurchase(rest);
            console.log(rest);

            fetch(purchaseUrl)
                .then(res => res.json())
                .catch(err => console.log(err));
            break;
        }
        case "clear" : {
            console.log(rest[0]);
            let date = new Date(rest[0]);
            console.log(date.getTime());
            fetchRequest(mainUrl,"delete",{ date })
                .then(res => res.json())
                .then(e => console.log(e))
                .catch(err => console.log(err));
            break;
        }
        case "report" : {
            let [year,ccy] = rest;
             convertToAndShow(+year,ccy);
        }


    }
}

add();




