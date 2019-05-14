function fetchRequest(link,method,body) {
    let options = { method: `${method}`};
    if (method === "post" || method ==="delete") {
        options.body =  JSON.stringify(body);
        options.headers =  new Headers({'Content-type': 'application/json'})
    }
    return fetch(`${link}`,options)
}
