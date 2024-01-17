window.onload=function(){
    const eff = document.getElementById("effect");
    

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect(){
        if(window.scrollY<100){
            eff.style.opacity = '1';
            eff.style.transition = '0.5s ease-in-out';
            
        }
        else{
            eff.style.opacity = '0';
            eff.style.transition = '0.5s ease-in-out';
        }
    }
    scrollEffect();
}
