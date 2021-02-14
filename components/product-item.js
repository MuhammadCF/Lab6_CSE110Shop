// product-item.js
class ProductItem extends HTMLElement {
  // TODO
  constructor(src, alt, ititle, iprice, id) {
    super();
    //console.log(id);
    
    this.attachShadow({mode:'open'});

    // if(this.hasAttribute('src') && 
    // this.hasAttribute('alt') &&
    //  this.hasAttribute('price') && this.hasAttribute('title')){

      
    //  }
    // let isource = this.getAttribute('src');
    // let ialt = this.getAttribute('alt');
    // let title = this.getAttribute('title');
    // let price = this.getAttribute('price');

    let isource = src;
    let ialt = alt;
    let title = ititle;
    let price = iprice; 

    const wrapper = document.createElement('li');
    wrapper.classList.add('product');

    const image = document.createElement('img');
    image.setAttribute('src', isource);
    image.setAttribute('alt', ialt);

    const p1 = document.createElement('p');
    p1.classList.add('title');
    p1.textContent = title;
    
    const p2 = document.createElement('p');
    p1.classList.add('price');
    p1.textContent = price;

    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.setAttribute('onclick', "alert('Added to Cart!');");
    button.textContent = 'Add to Cart';

    wrapper.appendChild(image);
    wrapper.appendChild(p1);
    wrapper.appendChild(p2);
    wrapper.appendChild(button);



    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', '../styles/styles.css');

    // const script = document.createElement('script');
    // script.textContent = `function toggle(id){
    //   buttonStates[id] = buttonStates[1] ? 0: 1;
    //   localStorage.setItem('buttonstates', buttonStates);
    //   const thebutton = document.querySelector('#product-list #' + id);
    //   if(buttonStates[id]){
    //     thebutton.textContent = 'Add to Cart';
    //   }
    //   else{
    //     thebutton.textContent = 'Remove from Cart';
    //   }
    // }`

    this.shadowRoot.append(style, wrapper);
    

  }

}

customElements.define('product-item', ProductItem);

// <!-- li class="product">
// <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
// <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
// <p class="price">$109.95</p>
// <button onclick="alert('Added to Cart!')">Add to Cart</button>
// </li -->