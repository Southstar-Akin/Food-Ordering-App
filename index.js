import { menuArray } from "./data.js";

function render(){
    const main = document.getElementById('main')
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
            <button>+</button>

        </div>
`
        }
    )
    main.innerHTML = htmlstring
}

render()