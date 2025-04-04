document.addEventListener("DOMContentLoaded", function () {
    headID = document.getElementById("header");
    
    console.log(headID.innerHTML);
    headID.innerHTML = "<h1><a href='../../index.html'>Teu Cálculo</a></h1>";
});
