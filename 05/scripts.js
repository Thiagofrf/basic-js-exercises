// Capture 10 items para compor a lista de um supermercado

let shopList = [];


for(let i = 0; i < 10; i++) {
    let item = prompt('Adicione um item na sua lista de compras')
    shopList = [...shopList, item]
}

// Apos capturar os 10 items, imprima-os, separando por virgula 
alert(shopList)