function cleanUp() {
    const selectBlock = document.getElementsByClassName("block");
    document.body.removeChild(selectBlock[0]);
}



function BtnListener() {
    const btn = document.getElementsByTagName("button");
    const input = document.getElementById("text");
   for (let i = 1; i <btn.length; i++) {
       btn[i].onclick = function() {
           let data = btn[i].innerHTML;
           let [, ...textToAdd] = data;
           input.value += textToAdd.join("").toLowerCase();
       }
   }
}

