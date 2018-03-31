var $menu = document.getElementById('botao-menu');



$menu.addEventListener('click', function(){
    document.getElementById('menu').style.display = 'flex'
});

document.getElementById('fechar-menu').addEventListener('click', function(){
    document.getElementById('menu').style.display = 'none'
});