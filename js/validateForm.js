var formElement = document.querySelector("#form-login");

var nameInput = formElement.querySelector("#name");
var passInput = formElement.querySelector("#mk");
var passAgainInput = formElement.querySelector("#mkagain");
var emailInput = formElement.querySelector("#email");
var sdtInput = formElement.querySelector("#sdt");
var diachiInput = formElement.querySelector("#dc");

nameInput.addEventListener("blur", function(e) {
    
    var reg = /(^[A-Z]+)\s/;
    if(reg.test(e.target.value)) {
        nameInput.parentElement.querySelector(".err").innerHTML = "";
    } else {
        nameInput.parentElement.querySelector(".err").innerHTML = "Chữ cái đầu tiên phải in hoa";
    }

})

passInput.addEventListener("blur", function(e) {
    var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if(reg.test(e.target.value)) {
        passInput.parentElement.querySelector(".err").innerHTML = "";
    } else {
        passInput.parentElement.querySelector(".err").innerHTML = "Mật khẩu phải dài 6 kí tự gồm chữ và số";
    }
})


passAgainInput.addEventListener("blur", function(e) {

    console.log(e.target.value);
    console.log(passInput.value);

    if(e.target.value === passInput.value) {
        passAgainInput.parentElement.querySelector(".err").innerHTML = "";
    } else {
        passAgainInput.parentElement.querySelector(".err").innerHTML = "Nhập sai mật khẩu";
    }
})

emailInput.addEventListener("blur", function(e) {
    var reg = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/

    if(reg.test(e.target.value)) {
        emailInput.parentElement.querySelector(".err").innerHTML = "";
    } else {
        emailInput.parentElement.querySelector(".err").innerHTML = "Tên email phải có trên 5 kí tự đằng sau @ ";
    }
})

sdtInput.addEventListener("blur", function(e) {
    var reg = /((09|03|07|08|05)+([0-9]{8})\b)/;

    if(reg.test(e.target.value)) {
        sdtInput.parentElement.querySelector(".err").innerHTML = "";
    } else {
        sdtInput.parentElement.querySelector(".err").innerHTML = "Số điện thoại gồm 10 chữ số";
    }
})


