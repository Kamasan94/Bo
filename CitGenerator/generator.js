//Handle Button Click
function generate() {
    //Take random index
    var i = Math.floor(Math.random() * quotes.length)
    //Assign quote to container
    document.getElementById("cit-text").innerText = quotes[i].quote;
}