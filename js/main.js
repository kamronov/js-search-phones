let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')
let elBtn = document.querySelector('.searchBtn')
let elCardList = document.querySelector('.card_list')

const phoneArr = [
    {
        id:1,
        model: 'Xiaomi Redmi Note 11SE',
        memory:'128GB 8GB RAM',
        sum: '2 246 000 UZS',
        color: 'Black',
        img: './img/redmi1.jpg'
    },
    {
        id:2,
        model: 'Xiaomi Redmi Note 11 Pro ',
        memory:' 128GB 8GB RAM',
        sum: '3 032 000 UZS',
        color: 'White',
        img: './img/redmi2.jpg'
    },    {
        id:3,
        model: 'Xiaomi Mi 12 Lite',
        memory:'28GB 8GB RAM',
        sum: '4 001 000 UZS',
        color: 'Pink',
        img: './img/redmi3.jpg'
    },
    {
        id:4,
        model: 'Xiaomi Mi 12T',
        memory:'256GB 8GB RAM',
        sum: '4 959 000 UZS',
        color: 'Blue',
        img: './img/redmi4.jpg'
    },
    {
        id:5,
        model: 'Samsung Galaxy S22 Ultra',
        memory:'256GB 12GB RAM',
        sum: '10 944 000 UZS',
        color: 'Green',
        img: './img/samsun1.jpg'
    },    {
        id:6,
        model: 'Samsung Galaxy S21 Plus',
        memory:'256GB 8GB RAM',
        sum: '8 924 000 UZS',
        color: 'Violet',
        img: './img/samsun2.jpg'
    },    {
        id:7,
        model: 'Samsung Galaxy S21 Plus',
        memory:'128GB 8GB RAM',
        sum: '8 337 000 UZS',
        color: 'Silver',
        img: './img/samsun3.jpg'
    },    {
        id:8,
        model: 'Samsung Galaxy A53 5G',
        memory:'256GB 8GB RAM',
        sum: '4 275 000 UZS',
        color: 'Black',
        img: './img/samsun4.jpg'
    },
    {
        id:9,
        model: 'Apple iPhone 14 Pro Max',
        memory:'1TB 6GB RAM',
        sum: '25 582 000 UZS',
        color: 'Silver',
        img: './img/iphone1.jpg'
    },
    {
        id:10,
        model: ' Apple iPhone 14 Pro ',
        memory:'1TB 6GB RAM',
        sum: '22 093 000 UZS',
        color: 'Gold',
        img: './img/iphone2.jpg'
    },    {
        id:11,
        model: 'Apple iPhone 14',
        memory:'28GB 8GB RAM',
        sum: '12 209 000 UZS',
        color: 'Midnight',
        img: './img/iphone3.jpg'
    },
    {
        id:12,
        model: 'Apple iPhone 14 Plus',
        memory:'512GB 8GB RAM',
        sum: '4 959 000 UZS',
        color: 'White',
        img: './img/iphone4.jpg'
    },
]

elForm.addEventListener('submit', (evn)=>{
    evn.preventDefault();
    let inpVal = elInp.value;
    const newArr = []
    elCardList.innerHTML = ''
    phoneArr.forEach((a)=> {
        if(a.color.toLocaleLowerCase().indexOf(inpVal.toLocaleLowerCase()) != -1 || a.model.toLocaleLowerCase().indexOf(inpVal.toLocaleLowerCase()) != -1) {
            newArr.push(a);
            let newLi =document.createElement('li')
            newLi.className = 'card_item'
            newLi.innerHTML = `<img src="${a.img}" alt="">
            <h4>${a.model}</h4>
            <b>${a.memory}</b> <br>
            <i>${a.sum}</i><br>
            <span>${a.color}</span> `
            elCardList.appendChild(newLi)
        }
    })
    console.log(newArr);
    elInp.value = ''
})
