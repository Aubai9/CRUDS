//clear localStorage
var out= document.getElementById("out")
out.onclick = function () {
  confirm("Are You Sure To Delete All Data")
  localStorage.clear();
};
//calc finall price
var price = document.getElementById("price");
var tax = document.getElementById("tax");
var ads = document.getElementById("ads");
var discount = document.getElementById("dscount");
var show = document.getElementById("total");
var total = 0;
var temp;

function getTotal() {
  total = +price.value + +tax.value + +ads.value - +discount.value;
  show.innerHTML = "total : " + total;
  show.style.backgroundColor = "green";
}
// create product
var matrix = [];
if (localStorage.product != null) {
  matrix = JSON.parse(localStorage.getItem("product") || "[]");
} else {
  matrix = [];
}

var create = document.getElementById("create");
var title = document.getElementById("title");
var counter = document.getElementById("counter");
var category = document.getElementById("category");

create.onclick = function () {
  var newPro = {
    title: title.value.toLowerCase(),
    price: price.value,
    tax: tax.value,
    ads: ads.value,
    discount: discount.value,
    total: total,
    count: counter.value,
    category: category.value.toLowerCase(),
  };
  if (title.value != "" && price.value != "" && category.value != "" && newPro.count < 100) {
    if (mood === 'create') {
      if (newPro.count > 1) {
        for (let i = 0; i < newPro.count; i++) {
          matrix.push(newPro);
        }
      } else {
        matrix.push(newPro);
      }
    } else {
      matrix[temp] = newPro;
      mood = "create"
      create.innerHTML = "create"
    } clearData();
  }


  localStorage.setItem("product", JSON.stringify(matrix));
  showData();


};
//clear inputs
var empty = document.querySelectorAll(".empty");
function clearData() {
  empty.forEach((e) => {
    e.value = "";
  });
  show.innerHTML = "total : ";
  show.style.backgroundColor = "red";
}
// Show Data
function showData() {
  var table = "";
  for (let i = 0; i < matrix.length; i++) {
    table += `
                 <tr>
                        <td>${i}</td>
                        <td>${matrix[i].title}</td>
                        <td>${matrix[i].price}</td>
                        <td>${matrix[i].tax}</td>
                        <td>${matrix[i].ads}</td>
                        <td>${matrix[i].discount}</td>
                        <td>${matrix[i].category}</td>           
                        <td><button onclick="update(${i})">update</button></td>
                        <td onclick="del(${i})"><button>delete</button></td>
                    </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = table;
  var delAll = document.getElementById("del");
  if (matrix.length > 0) {
    // counter 
    delAll.innerHTML = "Delte All : " + matrix.length;
    delAll.onclick = deleteAll;
  }
  delAll.innerHTML = "Delte All : " + matrix.length;
}
showData()

// delete product
function del(i) {
  matrix.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(matrix))
  showData();
}
// delete all

function deleteAll() {
  localStorage.clear();
  matrix.splice(0);
  showData();
}

//update
var mood = "create";
function update(i) {
  title.value = matrix[i].title
  price.value = matrix[i].price
  tax.value = matrix[i].tax
  ads.value = matrix[i].ads
  discount.value = matrix[i].discount
  counter.value = matrix[i].count
  category.value = matrix[i].category
  getTotal()
  create.innerHTML = "Update"
  mood = "update"
  temp = i
  scroll({
    top: 0,
    behavior: "smooth"
  })
}

//search
searchMood = "title";
var searchTitle = document.getElementById("sTitle")
var searchCategory = document.getElementById("sCategory")
var searchInput = document.getElementById("searchInput")
function search(id) {
  if (id == "searchTitle") {
    searchMood = "title"
  }
  else {
    searchMood = "category";
  }
  searchInput.placeholder = "search by " + searchMood;
  searchInput.focus()
  searchInput.value = ""
  showData()
}
//searchData
function searchData(value) {
  var table = "";
  if (searchMood == "title") {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].title.includes(value.toLowerCase())) {
        table += `
                 <tr>
                        <td>${i}</td>
                        <td>${matrix[i].title}</td>
                        <td>${matrix[i].price}</td>
                        <td>${matrix[i].tax}</td>
                        <td>${matrix[i].ads}</td>
                        <td>${matrix[i].discount}</td>
                        <td>${matrix[i].category}</td>           
                        <td><button onclick="update(${i})">update</button></td>
                        <td onclick="del(${i})"><button>delete</button></td>
                    </tr>
    `;
      }
    }

  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].category.includes(value.toLowerCase())) {
        table += `
                 <tr>
                        <td>${i}</td>
                        <td>${matrix[i].title}</td>
                        <td>${matrix[i].price}</td>
                        <td>${matrix[i].tax}</td>
                        <td>${matrix[i].ads}</td>
                        <td>${matrix[i].discount}</td>
                        <td>${matrix[i].category}</td>           
                        <td><button onclick="update(${i})">update</button></td>
                        <td onclick="del(${i})"><button>delete</button></td>
                    </tr>
    `;
      }
    }

  }
  document.getElementById("tbody").innerHTML = table;
}

