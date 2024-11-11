onLoad();
function onLoad(){
  leftBagData();
}

function leftBagData() {
  console.log(bagdata)
  let leftBagItems = document.querySelector('.bag-items-container');
  leftBagItems.innerHTML = `  <div class="bag-item-container">
              <div class="item-left-part">
                <img class="bag-item-img" src="Fruits/Amrood.png" />
              </div>
              <div class="item-right-part">
                <div class="company">Guava</div>
                <div class="item-name">
                 This is Product Description
                </div>
                <div class="price-container">
                  <span class="current-price">Rs 999</span>
                  <span class="original-price">Rs 999</span>
                  <span class="discount-percentage">(0% OFF)</span>
                </div>
               
                <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">10 Oct 2023</span>
                </div>
              </div>

              <div class="remove-from-cart">X</div>
            </div>`;
}


// leftBagData();
console.log(bagdata);

