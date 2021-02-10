window.onload = () => createButton();

function createButton() {
  let button = document.createElement('button');
  button.setAttribute('id', 'button-cart');
  button.setAttribute(
    'style',
    'position: fixed; left:0px; bottom: 0px;border-radius: 5px; width: 100px; height: 100px; background-color: transparent; border: 0'
  );
  button.classList.add('trigger');

  let svg = `
          <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
            <ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -3.8938 19.1726)" style="fill:#2A4899"  cx="12.4" cy="12.5" rx="11.2" ry="11.2"/>
            <g>
              <path style="fill:#FFFFFF;" d="M10.6,16c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.3,1.2,1.3c0.7,0,1.2-0.5,1.2-1.2S11.3,16,10.6,16z M10.6,17.8
                c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.8,0.4,0.7,0.7C11.3,17.5,11.1,17.8,10.6,17.8z"/>
              <path style="fill:#FFFFFF;" d="M15.7,16c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.3,1.2,1.3c0.6,0,1.2-0.5,1.2-1.2S16.4,16,15.7,16z M15.7,17.8
                c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.4,0.7,0.7C16.4,17.5,16.1,17.8,15.7,17.8z"/>
              <path style="fill:#FFFFFF;" d="M17.2,12.1c-0.2,0-0.3,0.1-0.3,0.2c0,0.4-0.3,0.6-0.7,0.6H9.5L8.8,9.4h3.4c0.2,0,0.3-0.2,0.3-0.3
                c0-0.1-0.1-0.2-0.3-0.2H8.8L8.5,7.7C8.4,7.6,8.3,7.5,8.2,7.5H6.8c-0.2,0-0.3,0-0.3,0.2S6.6,8,6.8,8H8l1.1,6.2
                c0.2,0.8,0.9,1.4,1.7,1.4h5.7c0.2,0,0.3-0.1,0.3-0.3S16.7,15,16.5,15h-5.6c-0.6,0-1.1-0.5-1.2-1v-0.6h6.6c0.6,0,1.2-0.4,1.2-1
                C17.5,12.2,17.4,12.2,17.2,12.1z"/>
              <path style="fill:#FFFFFF;" d="M15.7,6.6c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7c1.4,0,2.7-1.2,2.7-2.7S17.2,6.6,15.7,6.6z M15.7,11.4
                c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1.1,2.2,2.2C17.9,10.4,16.9,11.4,15.7,11.4z"/>
              <path style="fill:#FFFFFF;" d="M16.6,9h-0.7V8.3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.2-0.3,0.3V9h-0.7c-0.2,0-0.3,0.1-0.3,0.2
                c0,0.1,0.1,0.3,0.3,0.3h0.7v0.7c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3V9.5h0.7c0.1,0,0.3-0.1,0.3-0.3
                C16.9,9.1,16.7,9,16.6,9z"/>
            </g>
          </svg>
  `;

  button.insertAdjacentHTML('beforeend', svg);

  button.onclick = function () {
    createHTMLModal();
    addModal();
    createLinkCartTudoForte();
  };

  document.body.appendChild(button);
}

function createHTMLModal() {
  let templateCSS = `

    .modal-tudoforte {
        position: fixed ;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
        z-index: 1;
    }

    .modal-content-tudoforte {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 24px;
        width: 384px;
        border-radius: 8px;
    }

    .modal-content-title-tudoforte{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: gray;
        font-weight: 600;
    }

    .modal-content-svg-tudoforte{
        width: 50px;
        height: 50px;
        color: gray;
        fill: gray;
    }

    .modal-content-input-tudoforte{
        width: 100%;
        height: 40px;
        padding: 20px;
        text-align: center;
        margin-top: 16px;
        border: 1px solid lightgray;
        border-radius: 0px;
    }

    .modal-content-button-tudoforte{
        width: 100%;
        height: 40px;
        text-align: center;
        margin-top: 16px;
        background-color: #0047d9;
        border: 0px;
        color: #ffffff;
        text-transform: uppercase;
    }

    .close-button-tudoforte {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
        font-size: 18px;
        color: lightgray;
        cursor: pointer
    }

    .close-button-tudoforte:hover{
        color: gray;
    }

    .modal-content-wrapper-components-tudoforte{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .modal-content-wrapper-whatsapp-tudoforte{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
    }

    .modal-content-input-whatsapp-tudoforte{
        width: 125px;
        height: 40px;
        padding: 10px;
        text-align: center;
        border: 1px solid lightgray;
        border-radius: 0px;
    }

    .modal-content-button-whatsapp-tudoforte{
        background-color: #25D366;
        border: 0px;
        color: #ffff;
        width: 85px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content-button-whatsapp-svg-tudoforte{
        width: 25px;
        height: 25px;
        color: #ffff;
        fill: #ffff;
    }

    .modal-content-button-copy-tudoforte{
        width: 100px;
        height: 40px;
        border: 0px;
        margin-top: 16px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #34B7F1;
        color: #ffff;
    }

    .modal-content-button-copy-svg-tudoforte{
        width: 25px;
        height: 25px;
        color: #ffff;
        fill: #ffff;
    }

    .show-modal-tudoforte {
        display: block;
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    }


    @media(max-width:320px){

      .modal-content-tudoforte {
        width: 256px;
      }

      .modal-content-wrapper-components-tudoforte{
        flex-direction: column;
      }

      .modal-content-button-whatsapp-tudoforte{
        width: 81px;
      }

      .modal-content-svg-tudoforte {
        width: 35px;
        height: 40px;
      }

      .modal-content-title-tudoforte{
        font-size: 14.5px;
      }

      .modal-content-button-copy-tudoforte{
        width: 100%;
      }

    }

  `;

  let templateHTML = `

      <div id="modal" class="modal-tudoforte">
        <div class="modal-content-tudoforte">
            <span id="close-button" class="close-button-tudoforte" onClick="removeModal()">x</span>

            <h1 class="modal-content-title-tudoforte">
              <svg class="modal-content-svg-tudoforte" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                <g>
                  <path d="M17.3,17.6c-1,0-1.8,0.8-1.8,1.8s0.8,1.9,1.8,1.9s1.8-0.8,1.8-1.8S18.3,17.6,17.3,17.6z M17.3,20.5c-0.6,0-1.1-0.5-1.1-1.1
                    s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S17.9,20.5,17.3,20.5z"/>
                  <path d="M9.9,17.6c-1,0-1.8,0.8-1.8,1.8s0.8,1.9,1.8,1.9s1.8-0.8,1.8-1.8S10.9,17.6,9.9,17.6z M9.9,20.5c-0.6,0-1.1-0.5-1.1-1.1
                    s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S10.6,20.5,9.9,20.5z"/>
                  <path d="M19.6,11.9c-0.2,0-0.4,0.1-0.4,0.3c0,0.6-0.5,0.9-1.1,0.9H8.2l-1-5.1h4.9c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.4-0.3H7.1
                    L6.7,5.5C6.6,5.3,6.5,5.2,6.3,5.2H4.2C4,5.2,3.8,5.3,3.8,5.5s0.2,0.4,0.4,0.4H6l1.8,8.9c0.3,1.2,1.3,2.1,2.5,2.1h8.4
                    c0.2,0,0.4-0.1,0.4-0.4c0-0.2-0.1-0.4-0.4-0.4h-8.3c-0.9,0-1.6-0.6-1.8-1.4l-0.1-0.8h9.8c0.9,0,1.7-0.7,1.8-1.6
                    C20,12.1,19.9,12,19.6,11.9z"/>
                  <path d="M17.3,3.8c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S19.5,3.8,17.3,3.8z M17.3,11.1c-1.8,0-3.3-1.5-3.3-3.3
                    c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3C20.5,9.6,19,11.1,17.3,11.1z"/>
                  <path d="M18.7,7.4h-1.1V6.3c0-0.2-0.1-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v1.1h-1.1c-0.2,0-0.4,0.2-0.4,0.3s0.1,0.4,0.4,0.4h1.1v1.1
                    c0,0.2,0.1,0.4,0.4,0.4c0.2,0,0.4-0.1,0.4-0.4V8.1h1.1c0.2,0,0.4-0.2,0.4-0.4C19.1,7.6,18.9,7.4,18.7,7.4z"/>
                </g>
              </svg>

              Compartilhar Carrinho

            </h1>

            <input id="inputCart" style="opacity: 0; height: 1px;"></input>


            <div class="modal-content-wrapper-components-tudoforte">

              <div class="modal-content-wrapper-whatsapp-tudoforte">
                <input id="inputWhatsapp" class="modal-content-input-whatsapp-tudoforte" type="text" placeholder="(00) 00000-0000" onkeyup="onlyNumbers(this)" /> 
                <button id="buttonWhatsapp" class="modal-content-button-whatsapp-tudoforte" onclick="createLinkCartWithPhone()">
                  Enviar 
                  <svg class="modal-content-button-whatsapp-svg-tudoforte" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                  <path d="M38.4,12.4C35.1,9.1,30.7,7.3,26,7.3c-4.7,0-9.1,1.8-12.5,5.1c-3.4,3.3-5.2,7.7-5.2,12.4v0v0c0,2.8,0.7,5.7,2.2,8.3
                    l-2.1,9.6l9.7-2.2c2.4,1.2,5.2,1.9,7.9,1.9h0c4.7,0,9.1-1.8,12.5-5.1c3.4-3.3,5.2-7.7,5.2-12.4C43.7,20.1,41.8,15.7,38.4,12.4z
                    M26,39.5L26,39.5c-2.5,0-4.9-0.6-7.1-1.8l-0.5-0.2L12,39l1.4-6.3l-0.3-0.5c-1.3-2.3-2-4.9-2-7.4C11.1,16.6,17.8,10,26,10
                    c4,0,7.7,1.5,10.5,4.3c2.8,2.8,4.4,6.5,4.4,10.4C40.9,32.9,34.2,39.5,26,39.5z"/>
                  <path d="M21.2,17.1h-0.8c-0.3,0-0.7,0.1-1.1,0.5c-0.4,0.4-1.4,1.4-1.4,3.4s1.4,3.9,1.6,4.2c0.2,0.3,2.8,4.5,6.9,6.1
                    c3.4,1.3,4.1,1.1,4.8,1c0.7-0.1,2.4-1,2.7-1.9s0.3-1.7,0.2-1.9c-0.1-0.2-0.4-0.3-0.8-0.5c-0.4-0.2-2.4-1.2-2.8-1.3
                    c-0.4-0.1-0.6-0.2-0.9,0.2c-0.3,0.4-1.1,1.3-1.3,1.6c-0.2,0.3-0.5,0.3-0.9,0.1c-0.4-0.2-1.7-0.6-3.2-2c-1.2-1.1-2-2.4-2.3-2.8
                    c-0.2-0.4,0-0.6,0.2-0.8c0.2-0.2,0.4-0.4,0.6-0.7c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.1-0.5,0-0.7c-0.1-0.2-0.9-2.2-1.2-3h0
                    C21.8,17.1,21.5,17.1,21.2,17.1z"/>
                  </svg>
                </button>
              </div>

              <button id="buttonCopy" class="modal-content-button-copy-tudoforte" onclick="copyToClipboard()">
                Copiar
                <svg class="modal-content-button-copy-svg-tudoforte" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                  <g>
                    <path d="M42,10.9l-4.6-4.6c-0.4-0.4-0.9-0.6-1.4-0.6H21.1c-1.1,0-2,0.9-2,2v4.5h-7.7c-1.1,0-2,0.9-2,2v13c0,1,1.5,1,1.5,0v-13
                      c0-0.3,0.2-0.5,0.5-0.5h14.6v3.4c0,1.1,0.9,2,2,2h3.4V42c0,0.3-0.2,0.5-0.5,0.5H11.3c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-1-1.5-1-1.5,0
                      V42c0,1.1,0.9,2,2,2h19.5c1.1,0,2-0.9,2-2v-4.5h7.7c1.1,0,2-0.9,2-2V12.3C42.6,11.8,42.4,11.3,42,10.9L42,10.9z M40.1,11.1h-2.4
                      c-0.3,0-0.5-0.2-0.5-0.5V8.2L40.1,11.1z M27.4,17.1v-2.4l2.9,2.9h-2.4C27.6,17.6,27.4,17.4,27.4,17.1z M40.5,36h-7.7V18.8
                      c0-0.5-0.2-1.1-0.6-1.4l-4.6-4.6c-0.4-0.4-0.9-0.6-1.4-0.6h-5.6V7.7c0-0.3,0.2-0.5,0.5-0.5h14.6v3.4c0,1.1,0.9,2,2,2H41v22.8
                      C41,35.7,40.8,36,40.5,36L40.5,36z"/>
                    <path d="M14.4,22h5.3c1,0,1-1.5,0-1.5h-5.3C13.4,20.5,13.4,22,14.4,22z"/>
                    <path d="M14.4,25.2h13.2c1,0,1-1.5,0-1.5H14.4C13.4,23.7,13.4,25.2,14.4,25.2z"/>
                    <path d="M14.4,28.6h13.2c1,0,1-1.5,0-1.5H14.4C13.4,27.1,13.4,28.6,14.4,28.6z"/>
                    <path d="M14.4,32h13.2c1,0,1-1.5,0-1.5H14.4C13.4,30.4,13.4,32,14.4,32z"/>
                    <path d="M14.4,35.3h13.2c1,0,1-1.5,0-1.5H14.4C13.4,33.7,13.4,35.3,14.4,35.3z"/>
                    <path d="M10,31.1c0.4,0,0.7-0.3,0.8-0.7c0.1-0.7-0.8-1.2-1.3-0.7C9,30.2,9.3,31.1,10,31.1L10,31.1z"/>
                  </g>
                </svg>
              </button>
            </div>


        </div>
      </div>

  `;

  let style = document.createElement('style');
  style.innerHTML = templateCSS;

  let getButton = document.getElementById('button-cart');
  getButton.insertAdjacentElement('beforebegin', style);
  getButton.insertAdjacentHTML('beforebegin', templateHTML);
}

function createLinkCartTudoForte() {

  let dataSession = document.getElementsByTagName('html')[0]?.getAttribute('data-session');
 
  if(dataSession === null){
     dataSession = document.getElementsByTagName('html')[0]?.getAttribute('data-checkout-session_id');
  }

  let URL = `https://${window.location.hostname}`;
  let URL_TO_FETCH_GET_CART = `${URL}/web_api/carts/${dataSession}/`;

  axios
    .get(URL_TO_FETCH_GET_CART)
    .then(function (response) {
      let arrayProduct = response.data;

      let products = [];

      arrayProduct.forEach((item) => {
        products.push(
          `${item.Cart.product_id}:${item.Cart.quantity}:${item.Cart.variant_id}`
        );
      });

      let partner=1;

      let productsCart = products.join();

      let APIURL = `https://carrinho.tudoforte.com.br/api/cart/session/share?products=${productsCart}&store=${storeGTM}&partner=${partner}`;

      fetch(APIURL)
        .then((dataWrappedByPromise) => dataWrappedByPromise.json())
        .then((data) => {
          const urlShareCart = data.redirect;

          console.log(data);
          console.log(urlShareCart);

          document.getElementById('inputCart').value = urlShareCart;

        });
    })
    .catch(function (error) {
      document.getElementById('inputCart').style.border = '1px solid red';
      alert('Por Favor Adicione Produto ao Carrinho')

      return Promise.reject(error);
    });
}

function resetInput() {
  document.getElementById('inputCart').style.border = '1px solid lightgray';
  
}

function addModal() {
  let modalElement = document.getElementById('modal');
  modalElement.classList.add('show-modal-tudoforte');
}

function removeModal() {
  let modalElement = document.getElementById('modal');
  modalElement.classList.remove('show-modal-tudoforte');
}

function windowOnClick(event) {
  let modalElement = document.getElementById('modal');

  if (event.target === modalElement) {
    removeModal();
  }
}

window.addEventListener('click', windowOnClick);

function onlyNumbers(num) {
  let er = /[^0-9.]/;
  er.lastIndex = 0;
  let campo = num;
  if (er.test(campo.value)) {
    campo.value = '';
  }
}

function copyToClipboard() {
  let copyText = document.getElementById('inputCart');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');

  changeTextButtonCopy();
}

function changeTextButtonCopy(){
  buttonCopy = document.getElementById('buttonCopy')
  buttonCopy.innerHTML = 'Link Copiado!';
}

function createLinkCartWithPhone() {
  let phone = document.getElementById('inputWhatsapp').value;
  let linkCart = document.getElementById('inputCart').value;

  let urlShareCartWithPhone;

  if (document.getElementById('inputWhatsapp').value == '') {
    urlShareCartWithPhone = `${linkCart}`;
  } else {
    urlShareCartWithPhone = `${linkCart}&phone=55${phone}`;
  }

  window.open(`http://api.whatsapp.com/send?text=${urlShareCartWithPhone}`);
}
