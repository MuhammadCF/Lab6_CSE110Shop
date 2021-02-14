// Script.js
let buttonStates = {};
window.addEventListener('DOMContentLoaded', () => {

  //let clothes = "initialize clothes";



  if(!(clothes = localStorage.getItem('clothes'))){

    
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',

    }).then(response => 
      response.json()).then(data => {
        clothes = data;
        localStorage.setItem('clothes', JSON.stringify(data));
        //console.log(clothes);

        let clothvalues = Object.values(clothes);
        clothvalues.forEach((cloth) => {
          buttonStates[cloth.id] = 1;
        });
        localStorage.setItem('buttonstates', JSON.stringify(buttonStates));
        console.log(buttonStates);
        render(clothvalues);

        //render(clothes);
        //console.log('this is the if');
        //console.log(clothes);
        //console.log(JSON.parse(localStorage.getItem('clothes')));
      });

  }
  else{
    //console.log('this is the else');

    clothes = JSON.parse(localStorage.getItem('clothes'));
    let clothvalues = Object.values(clothes);
    clothvalues.forEach((cloth) => {
      buttonStates[cloth.id] = JSON.parse(localStorage.getItem('buttonstates'))[cloth.id];
    })
    // console.log(buttonStates[1]);
    // console.log(buttonStates[1] ? 0: 1);
    //console.log(!0);
    render(clothvalues);
    //console.log(clothes);
    //console.log(clothes[0].id);
    //console.log(Object.values(clothes));
    //console.log(localStorage.getItem('clothes'));

    
  }

});

function render(clothes){

  let list = document.getElementById('product-list');
  clothes.forEach((cloth) => {
    // let card = document.createElement('product-item');
    let title = cloth.title;
    let price = cloth.price;
    let image = cloth.image;
    let id = cloth.id;
    // card.setAttribute('src', image);
    // card.setAttribute('alt', title);
    // card.setAttribute('title', title);
    // card.setAttribute('price', price);
    let card = new ProductItem(image,title,title,price, id);
    list.appendChild(card);


    // for(id = 1; id <= clothes.length;id++){

    //   const thebutton = document.getElementById(id);
    //   if(buttonStates[id]){
    //     thebutton.textContent = 'Add to Cart';
    //   }
    //   else{
    //     thebutton.textContent = 'Remove from Cart';
    //   }
    // }

    
  });

  //this toggle function below can't query the shadow dom, I just realized that
  //

  function toggle(id){
      buttonStates[id] = buttonStates[1] ? 0: 1;
      localStorage.setItem('buttonstates', buttonStates);
      const thebutton = document.querySelector('#product-list #' + id);
      if(buttonStates[id]){
        thebutton.textContent = 'Add to Cart';
      }
      else{
        thebutton.textContent = 'Remove from Cart';
      }
  }


}