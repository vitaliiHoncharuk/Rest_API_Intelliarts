function cleanUp() {
    const className = "block";
    const q = document.getElementsByClassName(className);
    document.body.removeChild(q[0]);
}



function add() {
    const btn = document.getElementsByTagName("button");
    const input = document.getElementById("text");
   for (let i = 1; i <btn.length; i++) {
       btn[i].onclick = function() {
           let data = btn[i].innerHTML;
           let [, ...textToAdd] = data;
           input.value += textToAdd.join("");
       }
   }
}

