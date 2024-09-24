export let renderProduct = (products) => {
  let contentHTML = "";
  products.forEach((item) => {
    contentHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><img src="${item.img}" alt="${item.name}" width="90"></td>
            <td>${item.desc}</td>
            <td>
                <button class=" btn1 btn-update" onclick="editProduct(${item.id})">Edit</button>
                <button class=" btn1 btn-delete" onclick="deleteProduct(${item.id})">Delete</button>
            </td>
        </tr>`;
  });
  document.getElementById("tbodyPhone").innerHTML = contentHTML;
};
// Click Modal
document.addEventListener("DOMContentLoaded", function () {
  var addPhoneBtn = document.getElementById("addPhoneBtn");
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));

  addPhoneBtn.addEventListener("click", function () {
    myModal.show();
  });
});

// Gan Thong Tin

export let information = (product) => {
  document.getElementById("phoneName").value = product.name;
  document.getElementById("phonePrice").value = product.price;
  document.getElementById("phoneScreen").value = product.screen;
  document.getElementById("phoneBackCamera").value = product.backCamera;
  document.getElementById("phoneFrontCamera").value = product.frontCamera;
  document.getElementById("phoneImg").value = product.img;
  document.getElementById("phoneDesc").value = product.desc;
  document.getElementById("phoneType").value = product.type;
};

// Lay Thong Tin Tu Form
export let getInformation = () => {
  let name = document.getElementById("phoneName").value;
  let price = document.getElementById("phonePrice").value;
  let screen = document.getElementById("phoneScreen").value;
  let backCamera = document.getElementById("phoneBackCamera").value;
  let frontCamera = document.getElementById("phoneFrontCamera").value;
  let img = document.getElementById("phoneImg").value;
  let desc = document.getElementById("phoneDesc").value;
  let type = document.getElementById("phoneType").value;

  var product = {
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
  };
  return product;
};
