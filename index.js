import { menuArray } from "./data.js";

let orderList = []

document.addEventListener("click", (x) =>{

        if (x.target.dataset.add) {
       makeOrder(x.target.dataset.add)
        }
        else if (x.target.dataset.remove) {
        RemoveOrder(x.target.dataset.remove)
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
    main.innerHTML = availableOrders()
    if (orderList){
    order.innerHTML = renderOrder()
    }
}

render()