function getAll (elem) {
    let div = document.createElement("div");
    div.className = "block";
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            let p = document.createElement("p");
            let res = elem[i];
            let date = new Date(res._id);
            p.innerHTML += `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
            p.innerHTML += "<br>";
            div.appendChild(p);
            for (let i = 0; i < res.item.length; i++) {
                p.innerHTML += ` ${res.item[i]} ${res.price[i]} ${res.currency[i]}`+"<br>";
            }
        }
        document.body.appendChild(div);
    }
    else if (elem.length === 1 && elem[0].currency[0] === elem[0].currency[0]) {
            let res = elem[0];
            let p = document.createElement("p");
            let date = new Date(res._id);
            p.innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` +"<br>";
            div.appendChild(p);
            for (let i = 0; i < res.price.length; i++){
                p.innerHTML += ` ${res.item[i]} ${res.price[i]} ${res.currency[i]}`+"<br>";

             }
            document.body.appendChild(div);
        }
}

