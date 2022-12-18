let move = document.querySelector('.mover')


function change(i, j){

    

    move.style.position = "absolute";
    move.style.left = i + "px";
    move.style.top = j + "px";
    

}


move.addEventListener("mouseover", function(){ 
    
    change(Math.floor(Math.random()*500)+1, Math.floor(Math.random()*500)+1) ;

    
});

