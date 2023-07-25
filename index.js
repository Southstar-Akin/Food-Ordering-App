import { menuArray } from "./data.js";

let orderList = []
let isModal = false
let username = ''
let orderup = false

document.addEventListener("click", (x) =>{

        if (!isModal){

        if (x.target.dataset.add) {
       makeOrder(x.target.dataset.add)
        }
        else if (x.target.dataset.remove) {
        RemoveOrder(x.target.dataset.remove)
        }else if(x.target.dataset.order) {
        if(orderList.length > 0){
            showmodal()
        }
        }
        else if(x.target.dataset.pay){
            pay(x)
        }
        }
        
        else{

        if (x.target.dataset.add) {
       makeOrder(x.target.dataset.add)
        }
        else if (x.target.dataset.remove) {
        RemoveOrder(x.target.dataset.remove)
        }else if(x.target.dataset.order) {
        if(orderList.length > 0){
            showmodal()
        }
        }else if(!x.target.dataset.set)
        {
            showmodal()
        }else if(x.target.dataset.pay){

        const name = document.getElementById('username')
        const Card = document.getElementById('cardNumber')
        const cvv = document.getElementById('cvv')

        if (Card.value && name.value && cvv.value) {
        username = name.value
        pay()
        showmodal()
        }

        }

        }

        render()
    })

function availableOrders() {
    let htmlstring = ''
    menuArray.forEach(
        (x) => {
            htmlstring += `
            <div class="item">

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
    orderList.splice(orderList.indexOf(num), 1)
}


function renderOrder(){
    let htmlstring = ''
    orderList.forEach( (x) => {
            htmlstring +=  `           
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
    const price = document.getElementById('totalprice')
    const footer = document.getElementById('footer')
    const order = document.getElementById('order-list')

    main.innerHTML = availableOrders()
    
    if(!orderup){
    if (orderList){
    order.innerHTML = renderOrder()
    }

    price.innerHTML = `$${cost()}`

    }else{
    footer.innerHTML = pay()
    }
}

render()

function showmodal() {
    const modal = document.getElementById('modal')
    modal.classList.toggle('no-show')
    isModal = !isModal
}

function pay(){
    orderup = true;
    let orderu = `
        <div class="orderup" data-aos="fade-left" data-aos-duration="2000">
        Thank You, ${username}. Your order is on the way
        </div>
    `
    return orderu    
}

