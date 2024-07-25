var x = 0;
var l = document.querySelectorAll(".fst");
var k = document.querySelectorAll(".name-req");

function fadeOut(hl){
    var fadeEff = setInterval(function(){
        if(hl.style.opacity === ""){
            hl.style.opacity = 1;
        }

        if(hl.style.opacity > 0){
            hl.style.opacity -= 0.1;
        }

        else{
            clearInterval(fadeEff);
        }
        
    },30);
}


function fadeIn(hi){
    var opacity = 0;
    var appearEff = setInterval(function(){
        if(opacity < 1){
            opacity = opacity + 0.1;
            hi.style.opacity = opacity;
        }
        else{
            clearInterval(appearEff);
        }
        
    },75);
    console.log(hi.style.opacity);
}

document.addEventListener("keydown", function(){
    
    if (x===0){
        for (n=0;n<l.length; n=n+1){
            fadeOut(l[n]);
        }
        fadeIn(k[0]);    
        x=1;
    }



});

document.addEventListener("click", function(){
    
    if (x===0){
        for (n=0;n<l.length; n=n+1){
            fadeOut(l[n]);    
        }
        fadeIn(k[0]);
        x=1;
    }



});

