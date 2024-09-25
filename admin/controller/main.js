import {
  getInformation,
  information,
  renderProduct,
} from "../services/adminService.js";

const BASE_URl = "https://66ee0a8e380821644cde9c44.mockapi.io/product";
let editedID;

let fetchProduct = () => {
  axios({
    url: BASE_URl,
    method: "GET",
  })
    .then(function (res) {
      console.log("🚀 ~ res:", res);
      renderProduct(res.data);
    })
    .catch(function (err) {
      console.log("🚀 ~ Lỗi:", err);
    });
};
fetchProduct();

// Delete
window.deleteProduct = (id) => {
  axios({
    url: `${BASE_URl}/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      fetchProduct();
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};

// Fix
window.editProduct = (id) => {
  editedID = id;
  axios({
    url: `${BASE_URl}/${id}`,
    method: "GET",
  })
    .then(function (res) {
      $("#myModal").modal("show");
      information(res.data);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};
// Update
window.updateProducts = () => {
  var product = getInformation();
  axios({
    url: `${BASE_URl}/${editedID}`,
    method: "PUT",
    data: product,
  })
    .then(function (res) {
      fetchProduct();
      $("#myModal").modal("hide");
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};
// Add
window.addProducts = () => {
  var product = getInformation();
  axios({
    url: BASE_URl,
    method: "POST",
    data: product,
  })
    .then(function (res) {
      fetchProduct();
      $("#myModal").modal("hide");
      information({
        name: "",
        price: "",
        screen: "",
        backCamera: "",
        frontCamera: "",
        img: "",
        desc: "",
        type: "",
      });
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
};
