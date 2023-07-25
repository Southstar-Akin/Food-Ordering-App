import { menuArray } from "./data.js";

let orderList = ""


document.addEventListener("click", (x) =>{

        if (x.target.dataset.add) {
       makeOrder(x.target.dataset.add)
       render()
        }
})

function makeOrder(x) {
    const order = menuArray.filter((z)=> {
        return z.id == x
    })[0]

    orderList += `           
    <div class="order">

    <div class="order-name">
        <span>${order.name}</span>
        <button>Remove</button>
    </div>

    <span class="order-price">
    ${order.price}
    </span>

    </div>
    `    
}

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

function render(){
    const main = document.getElementById('main')
    const order = document.getElementById('order-list')
    main.innerHTML = availableOrders()
    if (order){
    order.innerHTML = orderList
    }
}

render()