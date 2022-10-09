carousel__back = document.querySelectorAll('.carousel__back');
carousel__next = document.querySelectorAll('.carousel__next');
let zero = 0;

for (let i = 0; i < carousel__back.length; i++) {
    carousel__back[i].addEventListener('click', function(){
        Back(this);
    })
}
for (let x = 0; x < carousel__next.length; x++) {
    carousel__next[x].addEventListener('click', function() {
        Next(this);
    });
    
}
function Next(nextBtn) {
    let carousel__ul = nextBtn.closest('.carousel').querySelector('.carousel__ul');
    let carousel__li = nextBtn.closest('.carousel').querySelectorAll('.carousel__li');
    if(window.innerWidth < 577 && window.innerWidth > 406) {
        zero = zero - 400;
        if(zero < -400){
            zero = 0;
        }
        carousel__ul.style.transform = `translateX(${zero}px)`;
    }
    else if(window.innerWidth < 407 && window.innerWidth > 320) {
        zero = zero - 300;
        if(zero < -300){
            zero = 0;
        }
        carousel__ul.style.transform = `translateX(${zero}px)`;
    }
    else {
        zero = zero - 550;
        if(zero < -550){
            zero = 0;
        }
        carousel__ul.style.transform = `translateX(${zero}px)`;
    }
    
}
function Back(backBtn) {
    let carousel__ul = backBtn.closest('.carousel').querySelector('.carousel__ul');
    let carousel__li = backBtn.closest('.carousel').querySelectorAll('.carousel__li');
    if(window.innerWidth < 577 && window.innerWidth > 406){
        zero = zero + 400;
        if(zero > 350){
            zero = -400;
        }
        carousel__ul.style.transform = `translateX(${zero}px)`;
    }
    else if(window.innerWidth < 406 && window.innerWidth > 0){
        zero = zero + 300;
        if(zero > 250){
            zero = -300;
        }
        carousel__ul.style.transform = `translateX(${zero}px)`;
    }
    else {
        zero = zero + 550;
        if(zero > 500){
            zero = -550;
        }
        carousel__ul.style.transform = `translateX(${zero}px)`;
    }
    
}