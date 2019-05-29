function showPurchase(date,price,currency,productNameQuery) {
    let div = document.createElement("div");
    div.className = "block";
    let q = document.createElement("p");
    q.innerHTML += ` ${date}`+"<br>" + `${productNameQuery.join(" ")} ${price} ${currency}`;
    div.appendChild(q);
    document.body.appendChild(div);
}
