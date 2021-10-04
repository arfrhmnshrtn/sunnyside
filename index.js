const navbarMenu = document.getElementById('navbar-menu');
window.addEventListener("scroll", function(event) {
    if(this.scrollY > 50){
        navbarMenu.classList.add('active');
    }else{
        navbarMenu.classList.remove('active');
    }

    if(this.scrollY > 717){
        navbarMenu.classList.add('active2');
    }else{
        navbarMenu.classList.remove('active2');
    }
});