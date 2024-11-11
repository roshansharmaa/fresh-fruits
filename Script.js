
let itemscont = document.querySelector('.items-cont');
let data = [
  {
    id: '01',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(109,177,5), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Amrood.png',
    rating: {
      star: 4.9,
      review: 1400,
    },
    coompName: "Guava",
    coompDecr: "This is Product Description",
    price: 200,
    oldPrice: 400,
    discount: 50,
  },
  {
    id: '02',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(128, 0, 0), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/anae.png',
    rating: {
      star:5,
      review: 1400,
    },
    coompName: "Pomegranate",
    coompDecr: "This is Product Description",
    price: 350,
    oldPrice: 900,
    discount: 70,
  },



  {
    id: '03',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(242, 133,0), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Orange.png',
    rating: {
      star: 5,
      review: 1400,
    },
    coompName: "Orange",
    coompDecr: "This is Product Description",
    price: 400,
    oldPrice: 800,
    discount: 50,
  },


  {
    id: '04',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(86, 130, 3), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Avacado.png',
    rating: {
      star: 2.9,
      review: 1400,
    },
    coompName: "Avocado",
    coompDecr: "This is Product Description",
    price: 180,
    oldPrice: 500,
    discount: 60,
  },
  {
    id: '05',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(247, 57, 14), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Apple2.png',
    rating: {
      star: 3.9,
      review: 1400,
    },
    coompName: "Apple",
    coompDecr: "This is Product Description",
    price: 400,
    oldPrice: 1200,
    discount: 80,
  },

  {
    id: '06',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(255, 116, 49), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Papaya.png',
    rating: {
      star: 2.5,
      review: 1400,
    },
    coompName: "Papaya",
    coompDecr: "This is Product Description",
    price: 555,
    oldPrice: 600,
    discount: 20,
  },

  {
    id: '07',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(230, 174, 37), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Pineapple.png',
    rating: {
      star: 3.5,
      review: 1400,
    },
    coompName: "Pineapple",
    coompDecr: "This is Product Description",
    price: 320,
    oldPrice: 599,
    discount: 62,
  },

  {
    id: '08',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(0, 72, 132), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/BlackBErry.png',
    rating: {
      star: 3,
      review: 1400,
    },
    coompName: "BlackBerry",
    coompDecr: "This is Product Description",
    price: 999,
    oldPrice: 1299,
    discount: 30,
  },


  {
    id: '09',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(243, 93, 139), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Dragon.png',
    rating: {
      star: 4,
      review: 1400,
    },
    coompName: "Dragon Fruit",
    coompDecr: "This is Product Description",
    price: 410,
    oldPrice: 500,
    discount: 15,
  },

  {
    id: '10',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(255, 255, 53), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Banana.png',
    rating: {
      star: 5,
      review: 1400,
    },
    coompName: "Banana",
    coompDecr: "This is Product Description",
    price: 325,
    oldPrice: 500,
    discount: 30,
  },
  {
    id: '11',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(170, 80, 59), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Imali.png',
    rating: {
      star: 3.5,
      review: 1400,
    },
    coompName: "Tamarind",
    coompDecr: "This is Product Description",
    price: 120,
    oldPrice: 1200,
    discount: 90,
  },
  {
    id: '12',
    stl: 'border-radius: 20px;  background: linear-gradient(to bottom, rgb(232, 71, 106), rgba(255, 0, 0, 0)); padding: 10px 15px; margin: 15px; width: 250px;',
    img: 'Fruits/Watermelon.png',
    rating: {
      star: 4.,
      review: 1400,
    },
    coompName: "Watermelon",
    coompDecr: "This is Product Description",
    price: 99,
    oldPrice: 300,
    discount: 60,
  },
]

let bagdata;


function addToBag(dataId) {
  bagdata.push(dataId);
  localStorage.setItem('bagdata', JSON.stringify(bagdata));
  dispBagVal();
}


function dispBagVal() {
  let bagstor = document.querySelector('.bag-item-count');
  if(!bagstor){
    return;
  }

  if (bagdata.length > 0) {
    bagstor.innerText = bagdata.length;
    bagstor.style.visibility = 'visible';
  } else {
    bagstor.style.visibility = 'hidden';
  }

}



let finalinnerHTML = '';
data.forEach(data => {

  finalinnerHTML += `   <div class="item-cont" style="${data.stl}">
          <img src="${data.img}" alt="" />
          <div class="rating">${data.rating.star}⭐| ${data.rating.review}</div>
          <div class="comp-name">${data.coompName}</div>
          <div class="product-decrption">${data.coompDecr}</div>
          <div class="price-secton">
            <span class="price">${data.price}</span>
            <span class="old-price">${data.oldPrice}</span>
            <span class="discount">(${data.discount}%)</span>
          </div>
    
          <button class="add-to-bag" onClick="addToBag('${data.id}');">Add To Bag</button>
        </div>`;
});
itemscont.innerHTML = finalinnerHTML;

function onload (){

  let bagdatastr = localStorage.getItem('bagitem');
  bagdata = bagdatastr ? JSON.parse(bagdatastr) : [];
  dispBagVal();
}

onload();





// // this was bag Data 
// let bagobj;
// onLoadbag();
// function onLoadbag(){
//   loadbagobjects();
//   displeftBagData();

// }
 
//  function loadbagobjects(){

//   bagobj =  bagdata.map(bagid =>{
//   for (let i = 0; i<bagdata.length;i++){
//     if(bagid == data[i].id){
//       return data[i];
//     }
//   }
//  })
//  console.log(bagobj);
//  }



// console.log(bagdata)
// function displeftBagData() {
//   let leftBagItems = document.querySelector('.bag-items-container');
//   // leftBagItems.innerHTML = '';
// }


// // function generatBagData(){
// //     `<div class="bag-item-container">
// //               <div class="item-left-part">
// //                 <img class="bag-item-img" src="${data.img}" />
// //               </div>
// //               <div class="item-right-part">
// //                 <div class="company">${data.coompName}</div>
// //                 <div class="item-name">
// //                 ${data.coompDecr}
// //                 </div>
// //                 <div class="price-container">
// //                   <span class="current-price">Rs ${data.price}</span>
// //                   <span class="original-price">Rs ${data.oldPrice}</span>
// //                   <span class="discount-percentage">(${data.discount}% OFF)</span>
// //                 </div>
// //                 <div class="return-period">
// //                   <span class="return-period-days">14 days</span> return
// //                   available
// //                 </div>
// //                 <div class="delivery-details">
// //                   Delivery by
// //                   <span class="delivery-details-days">10 Oct 2023</span>
// //                 </div>
// //               </div>

// //               <div class="remove-from-cart">X</div>
// //             </div>`
// // }
// // leftBagData();
// // console.log(bagdata);

