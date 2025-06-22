const Menu = [
    {
        "img": "./Image-1.png",
        "name": "Greys Vage",
        "discount": "15%",
        "daysLeft": 6
    },
    {
        "img": "./Image-2.png",
        "name": "Greys Vage",
        "discount": "15%",
        "daysLeft": 6
    },
    {
        "img": "./Image-3.png",
        "name": "Greys Vage",
        "discount": "15%",
        "daysLeft": 7
    },
    {
        "img": "./Image-4.png",
        "name": "Greys Vage",
        "discount": "15%",
        "daysLeft": 8
    }
    
];

const Popular = [
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    },
    {
        "img": "./Frame.png",
        "name": "Cheese Burger",
        "location": "Burger Arena",
        "price": "$3.88"
    }
];

const Features = [
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    },
    {
    "img": "./Image1.png",
    "log": "./logo.png",
    "name": "FoodWorld",
    "rating": "*40",
    "offer": "15%"
    }
    
];

const searchFood = [
    {
        "img": "Image8.png",
        "name": "Pizza"
    },
    {
        "img": "Image8.png",
        "name": "Pizza"
    },
    {
        "img": "Image8.png",
        "name": "Pizza"
    },
    {
        "img": "Image8.png",
        "name": "Pizza"
    },
    {
        "img": "Image8.png",
        "name": "Pizza"
    },
    {
        "img": "Image8.png",
        "name": "Pizza"
    }
];

function loadMenu(){
    const f2 = document.getElementsByClassName("f2")[0];

    Menu.map(m => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="container">
            <img src=${m.img} alt="Image">
            </div>
            <div style="color: gray;"><b>${m.name}</b></div>
            <div><b>${m.daysLeft} Days Remaining</b></div>
        `
        f2.appendChild(div)

    })
    
}

function popularItems() {
    const f5 = document.getElementsByClassName("f5")[0];

    Popular.map(m => {
        const div = document.createElement("div");
        div.innerHTML = `
        <img src=${m.img} alt="Image">
        <div><b>${m.name}</b></div>
        <div style="color:  rgb(255, 187, 0);">${m.location}</div>
        <div><b>${m.price}</b></div>
        <button><b>Order now</b></button>
        `

        f5.appendChild(div);
    })
}

function features() {
    const f6 = document.getElementsByClassName("f6")[0];

    Features.map(m => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="imag">
                <img src=${m.img} alt="Image">
                <button style="background: rgb(255, 123, 0);;">${m.offer} off</button>
                <button style="background: orange; margin-left: 115px;"><b>Fast</b></button>
            </div>
            <div class="f6b">
                <div>
                    <img src=${m.log} alt="log">
                </div>
                <div>
                    <div><b> ${m.name} </b></div>
                    <div style="color: orange"> ${m.rating} </div>
                </div>
            </div>
            <button>Opens tomorrow</button>
        </div>
        `

        f6.appendChild(div);
    })

}

function scrollLeft1(){
    const f5 = document.getElementsByClassName("f5")[0];
    f5.scrollLeft -= 100;
}
function scrollRight(){
    const f5 = document.getElementsByClassName("f5")[0];
    f5.scrollLeft += 100;
}

function searchByFood() {
    const f7 = document.getElementsByClassName("f7a2")[0];

    searchFood.map(m => {
        const div = document.createElement("div");
        div.innerHTML = `
        <img src=${m.img} alt="Image">
        <div class="name">${m.name}</div>
        `

        f7.appendChild(div);
    })
}

loadMenu()
popularItems()
features()
searchByFood()