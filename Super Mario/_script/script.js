/*
//for(var i=1; i <= 50; i++){ 
  //  document.write('<h1>Testando parallax' +i+ '</h1>'); 
//} 

function Parallax(){
    var layer = Array('layer1');
    for (var i = 1 ;i <= 5; i++){
      layer[i] = document.getElementById('layer'+[i]);
    }
    
    for(var j = 1 ; j <= 5 ; j++ ){
      layer[j].style.right = (window.pageXOffset / 5) + 'px';
    }
}
window.addEventListener("scroll", Parallax, false);
*/

//for(var i=1; i <= 50; i++){ 
  //  document.write('<h1>Testando parallax' +i+ '</h1>'); 
//} 

function Parallax(){
  var layer_1 = document.getElementById('layer-lakitu');
  var layer_2 = document.getElementById('layer-mario');
  var layer_3 = document.getElementById('layer-cano');
  var layer_4 = document.getElementById('layer-luigi');
  
  layer_1.style.right = (window.pageXOffset / 5) + 'px';
  layer_2.style.right = (window.pageXOffset / 5) + 'px';
  layer_3.style.right = (window.pageXOffset / 5) + 'px';
  layer_4.style.right = (window.pageXOffset / 5) + 'px';

}
window.addEventListener("scroll", Parallax, false);

  