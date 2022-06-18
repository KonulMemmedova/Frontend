const btn = document.querySelector(".btn");
const boxContainer = document.querySelector(".box-container")

btn.addEventListener("click",function(event){
  
    //?  Task 1 Version 1

    // let html =""
    // for (let index = 1; index <= 10; index++) {
       
    //     html = html + "<div class='box'></div>"
    // }

    // boxContainer.innerHTML = html

    //?  Task 1 Version 2

    for (let index = 1; index <= 10; index++) {
       
        let div = document.createElement("div")
        div.setAttribute("class","box")
        div.innerText = index

        //?  Task 2
        div.addEventListener("click",function(event){
            let item = event.currentTarget;
            
            boxContainer.removeChild(item)
        })

        boxContainer.appendChild(div)

    }
   


})
