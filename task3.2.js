let slideIdx =  0;

function slideShow(){
    let slides=document.getElementsByClassName("slides");
    for(let i=0; i< slides.length; i++){
        slides[i].style.display="none";
    }
    slideIdx++;

    if(slideIdx > slides.length){
        slideIdx = 1;
    }
    slides[slideIdx - 1].style.display = "block";
    setTimeout(slideShow, 2000);
}


function plusSlides(n){
    slideIdx= slideIdx + n-1;
    slideShow();
}
slideShow();