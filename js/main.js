var $menu = document.getElementById('botao-menu');



$menu.addEventListener('click', function(){
    document.getElementById('menu').style.display = 'flex'
});

document.getElementById('botao-pesquisa').addEventListener('click', function(){
    document.getElementById('menu').style.display = 'none'
});