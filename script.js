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
    ruta.addEventListener('click',function(){
        btn.classList.add('synlig');
        btn.classList.remove('osynlig');
        console.log('ruta osynlig');
        ruta.classList.remove('synlig');
        ruta.classList.add('osynlig');
        console.log('knapp synlig');
    }); 

});