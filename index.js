import { menuArray } from "./data.js";

let orderList = []
let isModal = false

document.addEventListener("click", (x) =>{

        if (!isModal){

        if (x.target.dataset.add) {
       makeOrder(x.target.dataset.add)
        }
        else if (x.target.dataset.remove) {
        RemoveOrder(x.target.dataset.remove)
        }else if(x.target.dataset.order) {
        showmodal()
        }

        }else{

        if (x.target.dataset.add) {
       makeOrder(x.target.dataset.add)
        }
        else if (x.target.dataset.remove) {
        RemoveOrder(x.target.dataset.remove)
        }else if(x.target.dataset.order) {
        showmodal()
        }else if(!x.target.dataset.set)
        {
            showmodal()
        }

        }

        render()
    })

function availableOrders() {
    let htmlstring = ''
    menuArray.forEach(
        (x) => {
            htmlstring += `<div class="item">

            <span class="icon">${x.emoji}</span>
            <div class="descrip">
                <span class="name">${x.name}</span>
                <span class="ingredient">${x.ingredients}</span>
                <span class="price">$${x.price}</span>
            </div>
            <button data-add="${x.id}">+</button>

        </div>
`
        }
    )
    return htmlstring
}

function cost(){
    let price = 0
    orderList.forEach((x) => {
        price += x.price
    })
    return price
}

function makeOrder(x) {

    const order = menuArray.filter((z)=> {
        return z.id == x
    })[0]

    orderList.push(order)
}


function RemoveOrder(x) {
   const num = orderList.filter((z) => {
        return z.id == x
    })[0]
    orderList.splice(orderList.indexOf(num))
}


function renderOrder(){
    let htmlstring = ''
    orderList.forEach( (x) => {
            htmlstring +=     `           
            <div class="order">
        
            <div class="order-name">
                <span>${x.name}</span>
                <button data-remove="${x.id}">Remove</button>
            </div>
        
            <span class="order-price">
            $${x.price}
            </span>
        
            </div>
            `    
        
        }
    )
    return htmlstring
}


function render(){
    const main = document.getElementById('main')
    const order = document.getElementById('order-list')
    const price = document.getElementById('totalprice')
    main.innerHTML = availableOrders()

    if (orderList){
    order.innerHTML = renderOrder()
    }

    price.innerHTML = `$${cost()}`

}

render()

function showmodal() {
    const modal = document.getElementById('modal')
    modal.classList.toggle('no-show')
    isModal = !isModal
}