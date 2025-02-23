anime.timeline({
    loop:true
})
.add({
    targets:'.dot',
    opacity:[0, 1, 0],
    scale:[0.5, 1.2, 1],
    duration:1200,
    delay:anime.stagger(250)
})
window.onload = function () {
  anime({
    targets: '#preloader',
    duration: 3000,
    easing: 'easeOutQuad',
    complete:function(){
        document.getElementById('preloader').style.display = "none"
    }
  });
};

document.querySelector('.btn').addEventListener('mouseenter', function(){
    anime({
        targets:'.btn',
        scale:1.1,
        translateY:-2,
        boxShadow:'0px 10px 20px red',
        duration:300,
        easing: 'easeOutExpo'
    })
})

document.querySelector('.btn').addEventListener('mouseleave', function(){
    anime({
        targets:'.btn',
        scale:1,
        translateY:0,
        boxShadow:'none',
        duration:300,
        easing: 'easeOutExpo'
    })
})


