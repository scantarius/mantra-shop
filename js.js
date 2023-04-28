//Search
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const item = document.querySelectorAll(".item")
  const itemName = document.getElementsByTagName("h3")
  const btn = document.getElementsByTagName("button")

  for(var i=0; i < itemName.length; i++){
    let match = item[i].getElementsByTagName("h3")[0];

    if(match){
      let textValue = match.textContent || match.innerHTML
      if(textValue.toUpperCase().indexOf(searchbox) > -1) {
        item[i].style.display = "grid";
      } else {
        item[i].style.display = "none";
      }
    }
  }
}

//Show and hide discount and search (on brands load)
removeDSF = (event) => {
  document.getElementById("DSF").innerHTML = "";
}

showDSF = (event) => {
  document.getElementById("DSF").innerHTML = `<section id="DSF">
                                              <div class="discount">
                                                <h1>Discount on all watches 20%!</h1>
                                              </div>
                                              
                                              <div class="searchbar">
                                              <form>
                                                <label for="search">Search:</label>
                                                <input type="text" id="search-item" onkeyup="search()">
                                              </form>
                                              </div>
                                              </section>`;
}

//Open basket on checkout
function finishButton() {
  let content = document.getElementsByClassName("content")
  if (content) {
    for(var i = 0; i < content.length; i++) {
      content[i].style.visibility = "visible";
      }
  }
} 

function closeButton() {
  content = document.getElementsByClassName("content")
  if (content) {
    for(var i = 0; i < content.length; i++) {
      content[i].style.visibility = "hidden";
    }
  }
}

//Get up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let btn = document.getElementById("btt");
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//First load
function firstLoad(watches){
  showDSF()
  if(watches == null)
    return;

  var deleteAll = document.getElementById("container");
  deleteAll.innerHTML = "<div class= " + "item" + ">" +
                        "<img src= " + watches.vacheron.pic + ">" +
                        "<h3>" + watches.vacheron.name + "</h3>" +
                        "<p class= " + "priceVacheron>" + watches.vacheron.price + "</p>" +
                        "<p class= " + "leftVacheron" + ">Left: 1</p>" +
                        "<button class= " + "buyVacheron " + "onclick= " + "addVacheron() " + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.dark.pic + ">" +
                        "<h3>" + watches.dark.name + "</h3>" +
                        "<p class= " + "priceDark>" + watches.dark.price + "</p>" +
                        "<p class= " + "leftDark" + ">Left: 2</p>" +
                        "<button class= " + "buyDark " + "onclick= " + "addDark()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.aquaterra.pic + ">" +
                        "<h3>" + watches.aquaterra.name + "</h3>" +
                        "<p class= " + "priceAquaterra>" + watches.aquaterra.price + "</p>" +
                        "<p class= " + "leftAquaterra" + ">Left: 8</p>" +
                        "<button class= " + "buyAquaterra " + "onclick= " + "addAquaterra()" + ">ADD TO BASKET</button>" +
                        "</div>" +
  
                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.constellation.pic + ">" +
                        "<h3>" + watches.constellation.name + "</h3>" +
                        "<p class= " + "priceConstellation>" + watches.constellation.price + "</p>" +
                        "<p class= " + "leftConstellation" + ">Left: 4</p>" +
                        "<button class= " + "buyConstellation " + "onclick= " + "addConstellation()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.railmaster.pic + ">" +
                        "<h3>" + watches.railmaster.name + "</h3>" +
                        "<p class= " + "priceRailmaster>" + watches.railmaster.price + "</p>" +
                        "<p class= " + "leftRailmaster" + ">Left: 5</p>" +
                        "<button class= " + "buyRailmaster " + "onclick= " + "addRailmaster()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.powermatic.pic + ">" +
                        "<h3>" + watches.powermatic.name + "</h3>" +
                        "<p class= " + "pricePowermatic>" + watches.powermatic.price + "</p>" +
                        "<p class= " + "leftPowermatic" + ">Left: 18</p>" +
                        "<button class= " + "buyPowermatic " + "onclick= " + "addPowermatic()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.PRS.pic + ">" +
                        "<h3>" + watches.PRS.name + "</h3>" +
                        "<p class= " + "pricePRS>" + watches.PRS.price + "</p>" +
                        "<p class= " + "leftPRS" + ">Left: 12</p>" +
                        "<button class= " + "buyPRS " + "onclick= " + "addPRS()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.heritage.pic + ">" +
                        "<h3>" + watches.heritage.name + "</h3>" +
                        "<p class= " + "priceHeritage>" + watches.heritage.price + "</p>" +
                        "<p class= " + "leftHeritage" + ">Left: 14</p>" +
                        "<button class= " + "buyHeritage " + "onclick= " + "addHeritage()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.seastar.pic + ">" +
                        "<h3>" + watches.seastar.name + "</h3>" +
                        "<p class= " + "priceSeastar>" + watches.seastar.price + "</p>" +
                        "<p class= " + "leftSeastar" + ">Left: 16</p>" +
                        "<button class= " + "buySeastar " + "onclick= " + "addSeastar()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.supersport.pic + ">" +
                        "<h3>" + watches.supersport.name + "</h3>" +
                        "<p class= " + "priceSupersport>" + watches.supersport.price + "</p>" +
                        "<p class= " + "leftSupersport" + ">Left: 4</p>" +
                        "<button class= " + "buySupersport " + "onclick= " + "addSupersport()" + ">ADD TO BASKET</button>" +
                        "</div>" +
  
                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.traditional.pic + ">" +
                        "<h3>" + watches.traditional.name + "</h3>" +
                        "<p class= " + "priceTraditional>" + watches.traditional.price + "</p>" +
                        "<p class= " + "leftTraditional" + ">Left: 2</p>" +
                        "<button class= " + "buyTraditional " + "onclick= " + "addTraditional()" + ">ADD TO BASKET</button>" +
                        "</div>" +

                        "<div class= " + "item" + ">" + 
                        "<img src= " + watches.north.pic + ">" +
                        "<h3>" + watches.north.name + "</h3>" +
                        "<p class= " + "priceNorth>" + watches.north.price + "</p>" +
                        "<p class= " + "leftNorth" + ">Left: 2</p>" +
                        "<button class= " + "buyNorth " + "onclick= " + "addNorth()" + ">ADD TO BASKET</button>" +
                        "</div>";

  deleteAll.style.display = "grid";
  deleteAll.style.gridTemplateColumns = "auto auto auto auto";          
}

//Brand buttons
function showOmega(watches){
  removeDSF()
  if(watches == null)
    return;
  var omega = document.getElementById("container");
  omega.innerHTML =   "<div class= " + "title" + ">" +
                      "<h2 style= " + "text-align:center>" + "Sorted by Omega</h2>" +
                      "<hr style= " + "height:1px;width:80%;background-color:greenyellow" + ">" +
                      "<h3>4 Results</h3>" +
                      "</div>" +

                      "<section id= " + "container-omega" + ">" +
                      "<div>" +
                      "<img src= " + watches.aquaterra.pic + ">" +
                      "<h3>" + watches.aquaterra.name + "</h3>" +
                      "<p class= " + "priceAquaterra>" + watches.aquaterra.price + "</p>" +
                      "<p class= " + "leftAquaterra" + ">Left: 8</p>" +
                      "<button class= " + "buyAquaterra " + "onclick= " + "addAquaterra()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.constellation.pic + ">" +
                      "<h3>" + watches.constellation.name + "</h3>" +
                      "<p class= " + "priceConstellation>" + watches.constellation.price + "</p>" +
                      "<p class= " + "leftConstellation" + ">Left: 4</p>" +
                      "<button class= " + "buyConstellation " + "onclick= " + "addConstellation()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.dark.pic + ">" +
                      "<h3>" + watches.dark.name + "</h3>" +
                      "<p class= " + "priceDark>" + watches.dark.price + "</p>" +
                      "<p class= " + "leftDark" + ">Left: 2</p>" +
                      "<button class= " + "buyDark " + "onclick= " + "addDark()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.railmaster.pic + ">" +
                      "<h3>" + watches.railmaster.name + "</h3>" +
                      "<p class= " + "priceRailmaster>" + watches.railmaster.price + "</p>" +
                      "<p class= " + "leftRailmaster" + ">Left: 5</p>" +
                      "<button class= " + "buyRailmaster " + "onclick= " + "addRailmaster()" + ">ADD TO BASKET</button>" +
                      "</div>" +
                      "</section>";
                      
  var omegaContainer = document.getElementById("container-omega");       
  omegaContainer.style.display = "grid";
  omegaContainer.style.gridTemplateColumns = "auto auto auto";
  omegaContainer.style.columnGap = "100px";
  omegaContainer.style.rowGap = "50px";
  omegaContainer.style.width = "60%";
}

function showTissot(watches){
  removeDSF()
  if(watches == null)
    return;
  var tissot = document.getElementById("container");
  tissot.innerHTML =  "<div class= " + "title" + ">" +
                      "<h2 style= " + "text-align:center>" + "Sorted by Tissot</h2>" +
                      "<hr style= " + "height:1px;width:80%;background-color:greenyellow" + ">" +
                      "<h3>5 Results</h3>" +
                      "</div>" +
                      
                      "<section id= " + "container-tissot" + ">" +
                      "<div>" +
                      "<img src= " + watches.powermatic.pic + ">" +
                      "<h3>" + watches.powermatic.name + "</h3>" +
                      "<p class= " + "pricePowermatic>" + watches.powermatic.price + "</p>" +
                      "<p class= " + "leftPowermatic" + ">Left: 18</p>" +
                      "<button class= " + "buyPowermatic " + "onclick= " + "addPowermatic()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.heritage.pic + ">" +
                      "<h3>" + watches.heritage.name + "</h3>" +
                      "<p class= " + "priceHeritage>" + watches.heritage.price + "</p>" +
                      "<p class= " + "leftHeritage" + ">Left: 14</p>" +
                      "<button class= " + "buyHeritage " + "onclick= " + "addHeritage()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.seastar.pic + ">" +
                      "<h3>" + watches.seastar.name + "</h3>" +
                      "<p class= " + "priceSeastar>" + watches.seastar.price + "</p>" +
                      "<p class= " + "leftSeastar" + ">Left: 16</p>" +
                      "<button class= " + "buySeastar " + "onclick= " + "addSeastar()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.PRS.pic + ">" +
                      "<h3>" + watches.PRS.name + "</h3>" +
                      "<p class= " + "pricePRS>" + watches.PRS.price + "</p>" +
                      "<p class= " + "leftPRS" + ">Left: 12</p>" +
                      "<button class= " + "buyPRS " + "onclick= " + "addPRS()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.supersport.pic + ">" +
                      "<h3>" + watches.supersport.name + "</h3>" +
                      "<p class= " + "priceSupersport>" + watches.supersport.price + "</p>" +
                      "<p class= " + "leftSupersport" + ">Left: 4</p>" +
                      "<button class= " + "buySupersport " + "onclick= " + "addSupersport()" + ">ADD TO BASKET</button>" +
                      "<div>" +
                      "</section>";


  var tissotContainer = document.getElementById("container-tissot");       
  tissotContainer.style.display = "grid";
  tissotContainer.style.gridTemplateColumns = "auto auto auto";
  tissotContainer.style.columnGap = "100px";
  tissotContainer.style.rowGap = "50px";
  tissotContainer.style.width = "60%";
}

function showTimex(watches){
  removeDSF()
  if(watches == null)
    return;
  var timex = document.getElementById("container");
  timex.innerHTML =   "<div class= " + "title" + ">" +
                      "<h2 style= " + "text-align:center>" + "Sorted by Timex</h2>" +
                      "<hr style= " + "height:1px;width:80%;background-color:greenyellow" + ">" +
                      "<h3>2 Results</h3>" +
                      "</div>" +
  
                      "<section id= " + "container-timex" + ">" +
                      "<div>" +
                      "<img src= " + watches.north.pic + ">" +
                      "<h3>" + watches.north.name + "</h3>" +
                      "<p class= " + "priceNorth>" + watches.north.price + "</p>" +
                      "<p class= " + "leftNorth" + ">Left: 2</p>" +
                      "<button class= " + "buyNorth " + "onclick= " + "addNorth()" + ">ADD TO BASKET</button>" +
                      "</div>" +

                      "<div>" +
                      "<img src= " + watches.traditional.pic + ">" +
                      "<h3>" + watches.traditional.name + "</h3>" +
                      "<p class= " + "priceTraditional>" + watches.traditional.price + "</p>" +
                      "<p class= " + "leftTraditional" + ">Left: 2</p>" +
                      "<button class= " + "buyTraditional " + "onclick= " + "addTraditional()" + ">ADD TO BASKET</button>" +
                      "</div>" +
                      "</section>";

  var timexContainer = document.getElementById("container-timex");       
  timexContainer.style.display = "grid";
  timexContainer.style.gridTemplateColumns = "auto auto auto";
  timexContainer.style.columnGap = "100px";
  timexContainer.style.rowGap = "50px";
  timexContainer.style.width = "60%";
}

function showVacheron(watches){
  if(watches == null)
    return;
  var vacheron = document.getElementById("container");
  vacheron.innerHTML =  "<div class= " + "title" + ">" +
                        "<h2 style= " + "text-align:center>" + "Sorted by Vacheron</h2>" +
                        "<hr style= " + "height:1px;width:80%;background-color:greenyellow" + ">" +
                        "<h3>1 Result</h3>" +
                        "</div>" +

                        "<section id= " + "container-vacheron" + ">" +
                        "<div>" +
                        "<img src= " + watches.vacheron.pic + ">" +
                        "<h3>" + watches.vacheron.name + "</h3>" +
                        "<p class= " + "priceVacheron>" + watches.vacheron.price + "</p>" +
                        "<p class= " + "leftVacheron" + ">Left: 1</p>" +
                        "<button class= " + "buyVacheron " + "onclick= " + "addVacheron()" + ">ADD TO BASKET</button>" +
                        "</div>" +
                        "</section>";

  var vacheronContainer = document.getElementById("container-vacheron");       
  vacheronContainer.style.display = "grid";
  vacheronContainer.style.gridTemplateColumns = "auto auto auto";
  vacheronContainer.style.columnGap = "100px";
  vacheronContainer.style.rowGap = "50px";
  vacheronContainer.style.width = "60%";
}

//"Added to basket" popup
function showPopup() {
  document.getElementById('popup').style.visibility = 'visible';
  setTimeout(() => {
    document.getElementById('popup').style.visibility = 'hidden';
}, 6000);
}

//Quantity of each watch
var leftAquaterra = 8;
var leftConstellation = 4;
var leftDark = 2;
var leftRailmaster = 5;
var leftPowermatic = 18;
var leftHeritage = 14;
var leftSeastar = 16;
var leftPRS = 12;
var leftSupersport = 4;
var leftNorth = 2;
var leftTraditional = 2;
var leftVacheron = 1;

function addAquaterra() {
    showPopup()
    if(leftAquaterra == 0) return;
    leftAquaterra -= 1;
    let text = document.querySelector(".leftAquaterra")
    text.innerHTML = "Left: " + leftAquaterra;
    let basket = document.getElementById("basketul")
    let li = document.createElement('li')
    li.classList.add('basketitem')
    li.setAttribute('data-value', "Omega Aquaterra - $4500")
    li.textContent = "Omega Aquaterra - $4500";
    basket.append(li);
}

function addConstellation() {
  showPopup()
  if(leftConstellation == 0) return;
  leftConstellation -= 1;
  let text = document.querySelector(".leftConstellation")
  text.innerHTML = "Left: " + leftConstellation;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Omega Constellation - $3900")
  li.textContent = "Omega Constellation - $3900";
  basket.append(li);
}

function addDark() {
  showPopup()
  if(leftDark == 0) return;
  leftDark -= 1;
  let text = document.querySelector(".leftDark")
  text.innerHTML = "Left: " + leftDark;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Omega Dark Side - $5700")
  li.textContent = "Omega Dark Side - $5700";
  basket.append(li);
}

function addRailmaster() {
  showPopup()
  if(leftRailmaster == 0) return;
  leftRailmaster -= 1;
  let text = document.querySelector(".leftRailmaster")
  text.innerHTML = "Left: " + leftRailmaster;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Omega Railmaster - $3500")
  li.textContent = "Omega Railmaster - $3500";
  basket.append(li);
}

function addPowermatic() {
  showPopup()
  if(leftPowermatic == 0) return;
  leftPowermatic -= 1;
  let text = document.querySelector(".leftPowermatic")
  text.innerHTML = "Left: " + leftPowermatic;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Tissot Powermatic - $845")
  li.textContent = "Tissot Powermatic - $845";
  basket.append(li);
}

function addHeritage() {
  showPopup()
  if(leftHeritage == 0) return;
  leftHeritage -= 1;
  let text = document.querySelector(".leftHeritage")
  text.innerHTML = "Left: " + leftHeritage;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Tissot Heritage - $645")
  li.textContent = "Tissot Heritage - $645";
  basket.append(li);
}

function addSeastar() {
  showPopup()
  if(leftSeastar == 0) return;
  leftSeastar -= 1;
  let text = document.querySelector(".leftSeastar")
  text.innerHTML = "Left: " + leftSeastar;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Tissot Seastar - $445")
  li.textContent = "Tissot Seastar - $445";
  basket.append(li);
}

function addPRS() {
  showPopup()
  if(leftPRS == 0) return;
  leftPRS -= 1;
  let text = document.querySelector(".leftPRS")
  text.innerHTML = "Left: " + leftPRS;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Tissot PRS - $695")
  li.textContent = "Tissot PRS - $695";
  basket.append(li);
}

function addSupersport() {
  showPopup()
  if(leftSupersport == 0) return;
  leftSupersport -= 1;
  let text = document.querySelector(".leftSupersport")
  text.innerHTML = "Left: " + leftSupersport;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Tissot Supersport - $345")
  li.textContent = "Tissot Supersport - $345";
  basket.append(li);
}

function addNorth() {
  showPopup()
  if(leftNorth == 0) return;
  leftNorth -= 1;
  let text = document.querySelector(".leftNorth")
  text.innerHTML = "Left: " + leftNorth;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Timex North - $229")
  li.textContent = "Timex North - $229";
  basket.append(li);
}

function addTraditional() {
  showPopup()
  if(leftTraditional == 0) return;
  leftTraditional -= 1;
  let text = document.querySelector(".leftTraditional")
  text.innerHTML = "Left: " + leftTraditional;  
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Timex Traditional - $269")
  li.textContent = "Timex Traditional - $269";
  basket.append(li);
}

function addVacheron() {
  showPopup()
  if(leftVacheron == 0) return;
  leftVacheron -= 1;
  let text = document.querySelector(".leftVacheron")
  text.innerHTML = "Left: " + leftVacheron;
  let basket = document.getElementById("basketul")
  let li = document.createElement('li')
  li.classList.add('basketitem')
  li.setAttribute('data-value', "Vacheron - $110000")
  li.textContent = "Vacheron - $110000";
  basket.append(li);
}

//Logic for last screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
          entry.target.classList.add('show')
      } else {
          entry.target.classList.remove('show')
      }
  })
})

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((el) => observer.observe(el))

//Small backend, send information about purchase and load pages
function saveInformation () {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', 'https://mantra-a07aa-default-rtdb.europe-west1.firebasedatabase.app/osobe.json', true);
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4) {
    }
  };

  let firstName = document.getElementById('firstname-input').value;
  let lastName = document.getElementById('lastname-input').value;
  let adress = document.getElementById('adress-input').value;
  let city = document.getElementById('city-input').value;
  let post = document.getElementById('post-input').value;
  let number = document.getElementById('number-input').value;
  //let item = document.getElementsByClassName('basketitem')
  let item = document.querySelectorAll('[data-value]')
  console.log(item)
  const osobe = {
    Name: firstName,
    LastName: lastName,
    Adress: adress,
    City: city,
    PostCode: post,
    PhoneNumber: number,
    Buying: item
  }

  xmlhttp.send(JSON.stringify(osobe));
  closeButton();
}

xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'https://mantra-a07aa-default-rtdb.europe-west1.firebasedatabase.app/.json', true);
xmlhttp.onreadystatechange = function () {
  if(this.readyState == 4) {
    var json = JSON.parse(this.responseText);
    firstLoad(json);

    document.getElementById('shop').addEventListener("click", function() {
      firstLoad(json);
    });
    document.getElementById('btnomega').addEventListener("click", function() {
      showOmega(json)
    });
    document.getElementById('btntissot').addEventListener("click", function() {
      showTissot(json)
    });
    document.getElementById('btntimex').addEventListener("click", function() {
      showTimex(json)
    });
    document.getElementById('btnvacheron').addEventListener("click", function() {
      showVacheron(json)
    });
  }
}
xmlhttp.send();