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
        `
    })
}

loadMenu()