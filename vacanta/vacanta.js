let slideNum = 1;

function showSlides(n){

    let i;
    let slides = document.getElementsByClassName("destinatie");
    if(n > slides.length){
        slideNum = 1;
    }
     
    if(n<1){
        slideNum = slides.length;
    }

    for(i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideNum-1].style.display = "block";
    console.log("slide-ul curent este: ", slideNum);
}


function miscaSlide(n){

    showSlides(slideNum += n);
}