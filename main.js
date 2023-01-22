
let productsArray=[{
    id:"kkll",
    name:"shirt1",
    desc:"lorem",
    img:"images/img-2.jpg",
    price:36000


},
{
    id:"kkp",
    name:"shirt2",
    desc:"loremfbn s jsbjdsbkkd",
    img:"images/img-2.jpg",
    price:35000
},{
    id:"kkc",
    name:"shirt3",
    desc:"goodsspdh[asan",
    img:"images/img-3.jpg",
    price:34000
},{
    id:"kko",
    name:"shirt4",
    desc:"goodsspdh[asan",
    img:"images/img-4.jpg",
    price:37000
}
]

let shop=document.getElementById('shop')

let generateProducts=()=>{
return(

    shop.innerHTML=productsArray.map((x)=>{
        let {id,name,desc,img,price}=x;  //
        return`<div id="product-id-${id}"class="item">
         
          <img width="200" src="${img}" alt="">
    <div class="details">
        <h2>${name}</h2>
        <p> ${desc}</p>
        <div class="price-qty">
            <h2>${price}</h2>
            <div class="btns">
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                <div id="${id}"class="quantity">0</div>
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            </div>

        </div>
    </div>
    </div>`
       
    }).join(" ")
)
}
generateProducts();

let basket=[]



//


let increment=(id)=>{
    let itemSelected=id;
    let search=basket.find((x)=>x.id===itemSelected.id);
    if(!search){
        basket.push({
            id:itemSelected.id,
            item:1
        })
       
        
    }
    else{
       search.item+=1
    }
    //  console.log(itemSelected.id)
    update(itemSelected.id)
    

    
}
let decrement=(id)=>{
    let selected=id
let search=basket.find((x)=>x.id===selected.id)
console.log(search.item)
if(search.item===0){
    return;
}else{
    search.item-=1;
}
// console.log(basket)
update(selected.id)
  
}

let update=(id)=>{
    // console.log(id)
let search=basket.find((x)=>x.id===id)
// console.log(search.item)
let qty=document.getElementById(id)
qty.innerHTML=search.item

calculation()
 }

 let calculation=()=>{
  let cartTotal=  basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    let cartVal=document.getElementById("cart")
    cartVal.innerHTML=cartTotal
 }