var acc = document.getElementsByClassName("btn");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        var listText =this.nextElementSibling;
        if(listText.style.maxHeight){
            listText.style.maxHeight = null;

        }
        else {
            listText.style.maxHeight = listText.scrollHeight + "px";
        }
    });
}