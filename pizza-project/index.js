document.getElementById('menu').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

let api = 'https://5c782080f150df17.mokky.dev/pizza';
let box = document.getElementById('pizza-box');
let filter = document.querySelector('.filter-box');
let pizza = [];

async function getPizza() {
  try {
    let response = await fetch(api);
    pizza = await response.json();
    render(pizza)
  } catch (error) {
    console.log(error);
  }
}

function render(pizzas) {
  pizzas.forEach((pizza) => {
    const card = document.createElement('div');

    card.innerHTML = `
          <div class="card w-[297px] bg-[#210A01] p-[20px] rounded-lg">
          <img src="${pizza.image}" alt="">
          <h3 class="text-white">${pizza.title}</h3>
          <p class="text-[#A3A3A3] text-[12px]">${pizza.description}</p>
          <div class="flex justify-around my-[20px]">
            <button class="w-[40px] h-[40px] border border-[orange] 
            rounded-full text-white hover:bg-[orange]">22</button>
            <button class="w-[40px] h-[40px] border border-[orange] 
            rounded-full text-white header-btn hover:bg-[orange]">28</button>
            <button class="w-[40px] h-[40px] border border-[orange] 
            rounded-full text-white hover:bg-[orange]">33</button>
          </div>
          <button class="border border-[orange] w-full py-[10px]
          rounded-full text-[orange]">+Inridients</button>
          <div class="flex justify-between my-[20px]">
            <p class="text-white ">${pizza.price}$</p>
            <div class="flex">
              <button class="border border-[gray] w-[23px] h-[23px] 
              rounded-full flex items-center justify-center text-white">-</button>
              <p class="text-white mx-[13px]">1</p>
              <button class="border border-[gray] w-[23px] h-[23px] 
              rounded-full flex items-center justify-center text-white header-btn">+</button>
            </div>
          </div>
          <button class="w-full header-btn py-[15px] text-white rounded-full">Order Now</button>
        </div>
    `;
    box.appendChild(card)
  });
}

let filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function(){
    const category = btn.dataset.category
    if(category === 'all'){
      render(pizza)
    }else{
      const filtered = pizza.filter(pizza => pizza.category === 'category')
      render(filtered)
    }
  })
})

getPizza()