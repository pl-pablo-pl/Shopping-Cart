let ArrProducts=[
 
    {
        id:1,
        name:'mom fit',
        image:'img/mom fit.jpg',
        // image:'img/pexels-adeoye-daniel-806266234-20645805.jpg',
        price:'15000',
        rating:4
    },
    {
        id:2,
        name:'mom style',
        image:'img/momstyle2.jpg',
        // image:'img/pexels-craytive-1478442.jpg',
        price:'20000',
        rating:4
    },
   
    {
        id:3,
        name:'half baggy',
        image:'img/halfbag.jpg',
        // image:'img/pexels-mstudio-360817-1240892.jpg',
        price:'25000',
        rating:5
    },
    {
        id:4,
        name:'bershka',
        image:'img/bershka.jpg',
        // image:'img/pexels-nytheone-1031955.jpg',
        price:'22000',
        rating:5
    },
    {
        id:5,
        name:'baggy',
        image:'img/pexels-cottonbro-10400987.jpg',
        price:'29000',
        rating:5
    },
    {
        id:6,
        name:'all star',
        image:'img/view-skateboard-with-retro-memorabilia.jpg',
        price:'26000',
        rating:5
    },
    {
        id:7,
        name:'jordan 1',
        image:'img/pexels-nytheone-1031955.jpg',
        price:'28000',
        rating:5
    },
]

const body=document.querySelector('body')
 const products=document.querySelector('.products')
 const shoppingBasket=document.querySelector('.shoppingBasket')
 const close=document.querySelector('.close')
 let productList=document.querySelector('.productList')
 const quantity=document.querySelector('.quantity')
 const total=document.querySelector('.total')



 let checkOutList=[];

 shoppingBasket.addEventListener('click',()=>{
    body.classList.add('active')
 })
 close.addEventListener('click',()=>{
    body.classList.remove('active')
 })



 // create dynamic products
function onInit(){
    ArrProducts.forEach(function(item,key){
        let div=document.createElement('div')
        div.classList.add('item')

        let star=""
        for(i=0;i<item.rating;i++){
            star+='<i class="fa fa-Star></i>" '
            console.log(item.rating);
        }

        div.innerHTML=`
        <img src="${item.image}"/>
        <div class='mame'>${item.name}</div>
        <div>${star}</div>
        <div class='price'><small>$</small>${item.price}</div>
        <button  onclick='addToCart(${key})'><i class="fa fa-cart-plus"></i> Add to Cart</button>`

        products.append(div)
    })
}
onInit();

// checking add to carat 
function addToCart(Id){
    if(checkOutList[Id] == null){
        checkOutList[Id] = ArrProducts[Id];
        checkOutList[Id].quantity=1
    }else{
        checkOutList[Id].quantity+=1
    }

    reloadCart()
}

// create add products to cart
function reloadCart(){
    productList.innerHTML=""

    let count=0
    let totalPrice=0

    checkOutList.forEach(function(item,key){
        count+=item.quantity
        totalPrice+=parseInt(item.price * item.quantity)

        let li=document.createElement('li')

        li.innerHTML=`
        <img src="${item.image}"/>
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>
        <button onclick='changeQuantity(${key},${item.quantity -1})'>-</button>
        <div class="count">${item.quantity}</div>
        <button onclick='changeQuantity(${key},${item.quantity +1})'>+</button>
        </div>`

        productList.appendChild(li)
    });

    total.innerHTML=`<small>Subtotal (${count} items)</small>$${totalPrice}`
    quantity.innerHTML=count
}

// change quantity 
function changeQuantity(key,quantity){
    if(quantity==0){
        delete checkOutList[key]
    }else{
        checkOutList[key].quantity=quantity
    }
    reloadCart()
}

total.addEventListener('click',()=>{
    // quantity.innerHTML='0'
    total.innerHTML=`<small>Subtotal (no items)</small>nothing`
    swal("The purchase was made successfully", "Feel free to use", "success");

    setInterval(function(){
        location.reload()

    },2000)


     
    // if(quantity==0){
    //     delete checkOutList[key]
    // }
    // let li=document.createElement('li')
    // li.innerHTML=''

})
