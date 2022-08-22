let allSlides = document.getElementsByClassName('slide');
let flag = 0;

slider(flag);

function slider(num){
    for(let x of allSlides){
        x.style.display = "none"
    }
    allSlides[num].style.display = "block"
}

function controller(x) {

    // if((flag+x)<0 || (flag+x)>allSlides.length-1){
    //     alert("You Reach End of the Slide");
    // }
    // else{
    //     flag = flag+x;
    //     slider(flag)
    // }

    flag = flag+x;
    if((flag+x)<0 || (flag+x)>allSlides.length-1){
        if(flag===0){
            flag=allSlides.length-1;
        }
        if(flag===allSlides.length){
            flag=0;
        }
    }
    slider(flag)
}