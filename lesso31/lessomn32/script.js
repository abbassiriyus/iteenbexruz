var a=["All"]
function RenderFile() {
  document.querySelector(".cards").innerHTML =""
  items.map(item=>{
    document.querySelector(".cards").innerHTML +=`<div class="card" style="width: 18rem;">
  <img src="${item.img}">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.price}</li>
    <li class="list-group-item">${item.category}</li>
    <li class="list-group-item">${item.features}</li>
  </ul>
  <button class="btn btn-primary" onclick="shop('${item.name}','${item.price}','${item.img}')">buy</button>
</div>`
  })
}
RenderFile()

function searchdata() {
  var word = document.querySelector('#srch').value;
  document.querySelector(".cards").innerHTML = "";

items.map(item=>{



  if ((item.name.toLowerCase()).includes(word.toLowerCase())) {
    var isms=item.name.toLowerCase()
    word=word.toLowerCase()
   var ism=""
    if (isms.indexOf(word)===0){
// satrni ikki qismga bol
      ism = `<span>${isms.slice(0,word.length)}</span>${isms.slice(word.length)}`
}else{
  ism=`${isms.slice(0, isms.indexOf(word))}<span>${isms.slice(isms.indexOf(word), isms.indexOf(word) + word.length)}</span>${isms.slice(item.name.indexOf(word)+word.length)}`
// satrni uch qismga bol
}
  document.querySelector(".cards").innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${item.img}">
  <div class="card-body">
    <h5 class="card-title">${ism}</h5>
    <p class="card-text">${item.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.price}</li>
    <li class="list-group-item">${item.category}</li>
    <li class="list-group-item">${item.features}</li>
  </ul>
  <button class="btn btn-primary" onclick="shop('${item.name}','${item.price}','${item.img}')">buy</button>
</div>`
}
})

}

function renderCategory() {

  items.map(item=>{
    var q=true;
  for (let i=0; i<a.length; i++) {
    if (a[i]===item.category) {
    q=false  
    }
  }
 if(q){
  a.push(item.category)
 }
  })
}


function getCategoriya() {
  document.querySelector('.dropdown-menu').innerHTML=""
  a.map(item=>{
    document.querySelector('.dropdown-menu').innerHTML +=`<li>
                <hr class="dropdown-divider">
              </li><li><a class="dropdown-item" 
              onclick="Drop('${item}')" href="#">${item}</a></li>
 `
  })
}
renderCategory()
getCategoriya()


function Drop(categoriya) {
  document.querySelector(".cards").innerHTML =""
  if (categoriya==="All") {
    RenderFile()
  }else{
  items.map(item=>{
if (categoriya===item.category) {
    document.querySelector(".cards").innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${item.img}">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.price}</li>
    <li class="list-group-item">${item.category}</li>
    <li class="list-group-item">${item.features}</li>
  </ul>
  <button class="btn btn-primary" onclick="shop('${item.name}','${item.price}','${item.img}')">buy</button>
</div>`
}
  })
}
}         

var k=[]
function shop(name,price,img) {
  var shop={
    "nomi":name,
    "narxi":price,
    "img":img
  }
k.push(shop)
  localStorage.setItem('sotib', JSON.stringify(k))
  getStorg()
}

function getStorg(){
  document.querySelector('#soni').innerHTML = JSON.parse(localStorage.getItem('sotib')).length;
  k = JSON.parse(localStorage.getItem('sotib'))
}
getStorg()
