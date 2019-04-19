 //Definição de variaveis
 function parallax(){
    var layer_1 = document.getElementById('layer-1');
    var layer_2 = document.getElementById('layer-2');
    var layer_3 = document.getElementById('layer-3');
    var layer_4 = document.getElementById('layer-4');

    layer_1.style.top = -(window.pageYOffset / 3) + 'px';
    layer_2.style.top = -(window.pageYOffset / 6) + 'px';
    layer_3.style.top = -(window.pageYOffset / 7) + 'px';
    layer_4.style.top = -(window.pageYOffset / 7) + 'px';
}

window.addEventListener("scroll",parallax,false);