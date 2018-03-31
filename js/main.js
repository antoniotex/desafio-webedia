var $abrirmenu = document.getElementById('botao-menu');
var $fecharmenu = document.getElementById('fechar-menu');
var $abrirpesquisa = document.getElementById('botao-pesquisa');
var $fecharpesquisa = document.getElementById('fechar-pesquisa');



$abrirmenu.addEventListener('click', function(){
    document.getElementById('menu').style.display = 'flex'
});

$fecharmenu.addEventListener('click', function(){
    document.getElementById('menu').style.display = 'none'
});