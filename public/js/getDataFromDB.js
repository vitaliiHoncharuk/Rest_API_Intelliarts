async function getDataFromDB () {
    let response = await fetchRequest(reportUrl, "get");
    return await response.json();
}
