function showSuccess() {
  Toastify({
    text: 'Успешно выполнен!',
    style: { background: 'linear-gradient(to right, #56CCF2, #2F80ED)' },
    duration: 1000,
    gravity: 'bottom',
    position: 'left',
    destination: 'https://academy.codifylab.com/',
    newWindow: true,
  }).showToast();
}

const button = document.getElementById('run-btn');

const move = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: 'easeOutCirc',
  });

['mouseover', 'click'].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    move(this, 'left', left).play();
    move(this, 'top', top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};


const options = {
    valueNames: ["name","age"]
}

const users = new List('users', options)



anime.timeline({
  loop:true
}).add({
  targets:".dot",
  opacity:[0,1,0],
  scale:[0.5, 1.2, 1],
  easing:"easeInOutQuad",
  duration:1000,
  delay: anime.stagger(250)
})

window.onload = function(){
  anime({
    targets:"#preloader",
    duration:3000,
    easing:"easeOutQuad",
    complete: function(){
      document.getElementById('preloader').style.display = 'none'
    }
  })
}