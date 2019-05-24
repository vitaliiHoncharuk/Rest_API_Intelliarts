function getAll (elem) {
    let div = document.createElement("div");
    div.className = "block";
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            let p = document.createElement("p");
            let date = new Date(elem[i]._id);
            p.innerHTML += `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
            p.innerHTML += "<br>";
            div.appendChild(p);
            for (let i = 0; i < elem[i].item.length; i++) {
                p.innerHTML += ` ${elem[i].item[i]} ${elem[i].price[i]} ${elem[i].currency[i]}`+"<br>";
            }
        }
        document.body.appendChild(div);
    }
    else if (elem.length === 1 && elem[0].currency[0] === elem[0].currency[0]) {
            let p = document.createElement("p");
            let date = new Date(elem[0]._id);
            p.innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` +"<br>";
            div.appendChild(p);
            for (let i = 0; i < elem[0].price.length; i++){
                p.innerHTML += ` ${elem[0].item[i]} ${elem[0].price[i]} ${elem[0].currency[i]}`+"<br>";

             }
            document.body.appendChild(div);
        }
}

