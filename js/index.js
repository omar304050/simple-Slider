var imgList = Array.from(document.querySelectorAll(".item img"))
var modalElment = document.querySelector("#modal")
var modalInner = document.querySelector("#modal-inner")
var prevElement = document.querySelector("#prevElement")
var nextElement = document.querySelector("#nextElement")
var closeElement = document.querySelector("#closeElement")
var curruntindex;
for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function (e) {
        modalElment.classList.replace("d-none", "d-flex")
        var imgsrc = e.target.getAttribute("src")
        modalInner.style.backgroundImage = `url(${imgsrc})`
        curruntindex = imgList.indexOf(e.target)

    })
}


closeElement.addEventListener("click", close)

function close() {
    modalElment.classList.replace("d-flex", "d-none")
}

nextElement.addEventListener("click", next)

function next() {

    curruntindex++;
    if (curruntindex == imgList.length) {
        curruntindex = 0
    }
    var imgsrc = imgList[curruntindex].getAttribute("src")
    modalInner.style.backgroundImage = `url(${imgsrc})`
}


prevElement.addEventListener("click", prev)

function prev() {
    curruntindex--;
    if (curruntindex < 0) {
        curruntindex = imgList.length - 1
    }
    var imgsrc = imgList[curruntindex].getAttribute("src")
    modalInner.style.backgroundImage = `url(${imgsrc})`
}



document.addEventListener("keydown", function(e){
   console.log(e);
   if(e.key == "ArrowRight"){
    next()
   }else if(e.key == "ArrowLeft"){
    prev()
   }else if(e.key == "Escape"){
    close()
   }

})


modalElment.addEventListener("click",function(e){
    if(e.target == modalElment){
        close()
    }
})



