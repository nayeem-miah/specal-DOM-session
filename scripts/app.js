const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const Category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;
    const selectedContainer = document.getElementById(
      "selected-players-container"
    );

    event.target.setAttribute('disabled', true);

 

    
    const firstCount = getConvertedValue('cart') + 1;
    const secondCount = getConvertedValue('left') - 1;
    if(firstCount > 6 || secondCount < 0){
        alert('limit shes are hobe nah');
        return;
    }
    event.target.parentNode.style.backgroundColor = 'gray';

    const budget = getConvertedValue('budget');
    document.getElementById('budget').innerText= budget - parseInt(price);

    const card = getConvertedValue('cart');
    document.getElementById('cart').innerText = card + 1;

    const leftCount = getConvertedValue('left');
    document.getElementById('left').innerText = leftCount - 1;

    




    const div = document.createElement("div");
    div.classList.add("selected-players");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = Category;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);

    updateCost(price);
    updateGrandTotal();
  });

  //    updated total cost
  function updateGrandTotal(status) {
      const totalCost = getConvertedValue("total-cost");
    if (status == undefined) {
      document.getElementById("grand-total").innerText = totalCost;
    }
    else {
        
        const couponCode = document.getElementById('coupon-code').value;
        
        if(couponCode == 'love420' ){
            const discount = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost - discount;

        }
        else{
            alert('please enter a valid code');
        }
    }
  }
}

//  update value set--------->
function updateCost(price) {
  const totalCost = getConvertedValue("total-cost");
  const sum = totalCost + parseInt(price);
  document.getElementById("total-cost").innerText = sum;
}

//  const price = document.getElementById('budget').innerText;
//  const convertPrice=parseInt(price);
//  console.log( convertPrice);

//  const price = getConvertedValue('budget');
//  console.log(price);

//  const card= document.getElementById('cart').innerText;
//  const convertCard=parseInt(card);
//  console.log(convertCard);
// //  console.log(parseInt(card));

// const cardCount=getConvertedValue('cart');
// console.log(cardCount);

// const left= document.getElementById('left').innerText;
// const convertLeft=parseInt(left);
// console.log(convertLeft);

// const leftCount=getConvertedValue('left');
// console.log(leftCount);

// function use kora hoise------jokon kuno variable value set kora hobe then return korta hobe--->
function getConvertedValue(elementId) {
  const element = document.getElementById(elementId).innerText;
  const convertedElement = parseInt(element);
  return convertedElement;
}
