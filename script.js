document.addEventListener('DOMContentLoaded', function() {
    
    const btn=document.getElementById("btn");
    const ruta=document.getElementById("ruta");

    btn.addEventListener('click',function(){
    ruta.classList.add('synlig');
    ruta.classList.remove('osynlig');
    console.log('ruta synlig');
    btn.classList.remove('synlig');
    btn.classList.add('osynlig');
    console.log('knapp osynlig');
    });

});