function showPurchase(arr) {
    let div = document.createElement("div");
    div.className = "block";
    let q = document.createElement("p");
    q.innerHTML += ` ${arr[0]}`+"<br>" + `${arr[3]} ${arr[1]} ${arr[2]}`;
    div.appendChild(q);
    document.body.appendChild(div);
}
