const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.modal');   
// THẺ LOGIN Ở HOME
const btnLogIn = $(".js-btn-login");
const btnLogIn1 = $(".js-btn-login1");
// LABEL TRỞ LẠI Ở FORM ĐĂNG KÝ TRONG MODAL
const backLogIn = $('.js-back-login')
// ID FORM REGISTER
const register = $('#js-register');
// ID FORM LOGIN
const logIn = $('#js-login');
// THẺ REGISTER Ở HOME
const btnRegister = $('.js-btn-register');
const btnRegister1 = $('.js-btn-register1');
// LABEL TRỞ LẠI FORM ĐĂNG NHẬP TRONG MODAL
const backRegister = $('.js-back-register');
// LABEL LOGIN FORM ĐĂNG KÝ TRONG MODAL ĐỂ CHUYỂN SANG FORM ĐĂNG NHẬP
const fowardLogin = $('.js-foward-login');
// LABEL REGISTER FORM ĐĂNG NHẬP TRONG MODAL ĐỂ CHUYỂN SANG FORM ĐĂNG KÝ
const fowardRegister = $('.js-foward-register');
// BUTTON REGISTER Ở FORM ĐĂNG KÝ TRONG MODAL
const registerF8 = $('.js-register-F8')
// BUTTON LOGIN Ở FORM ĐĂNG NHẬP TRONG MODAL
const loginF8 = $('.js-login-F8')
// THẺ LOGOUT TRONG LIST USER
const btnUserLogout = $('js-user-logout');
const btnUserLogout1 = $('js-user-logout1');
// THẺ CHỨA TÊN USER VÀ AVATA
const navbarUser = $('.header__navbar-user');
const navbarUser1 = $('.header__navbar-user1');
// HIỂN THỊ FORM LOGIN TRONG MODAL - KẾT HỢP VỚI KHI BẤM NÚT LABEL QUA ĐĂNG NHẬP Ở FORM ĐĂNG KÝ THÌ FORM ĐĂNG KÝ SẼ ẨN
function showFormLogIn(){
    modal.classList.add('logIn');
    logIn.style.display = "block";
    register.style.display = "none";
}
// ẨN FORM LOGIN
function hideFromLogin(){
    modal.classList.remove('logIn');
}
// HIỂN THỊ FORM REGISTER TRONG MODAL - KẾT HỢP VỚI KHI BẤM NÚT LABEL QUA ĐĂNG KÝ Ở FORM ĐĂNG NHẬP THÌ FORM ĐĂNG NHẬP SẼ ẨN
function showFormRegister(){
    modal.classList.add('logIn');
    logIn.style.display = "none";
    register.style.display = "block";
}
// ẨN FORM REGISTER
function hideFormRegister(){
    modal.classList.remove('logIn');
}
// BẮT SỰ KIỆN CLICK Ở THẺ ĐĂNG KÝ Ở HOME
btnRegister.addEventListener('click',showFormRegister);
btnRegister1.addEventListener('click',showFormRegister);
// BẮT SỰ KIỆN CLICK Ở NÚT TRỞ LẠI Ở MODAL FORM ĐĂNG KÝ
backRegister.addEventListener('click',hideFormRegister);
// BẮT SỰ KIỆN CLICK Ở THẺ ĐĂNG NHẬP Ở HOME
btnLogIn.addEventListener('click',showFormLogIn);
btnLogIn1.addEventListener('click',showFormLogIn);
// BẮT SỰ KIỆN CLICK Ở NÚT TRỞ LẠI Ở MODAL FORM ĐĂNG NHẬP
backLogIn.addEventListener('click', hideFromLogin);
// BẮT SỰ KIỆN CLICK Ở LABEL ĐĂNG NHẬP Ở MODAL FORM ĐĂNG KÝ
fowardLogin.addEventListener('click',showFormLogIn);
// BẮT SỰ KIỆN CLICK Ở LABEL ĐĂNG KÝ Ở MODAL FORM ĐĂNG NHẬP
fowardRegister.addEventListener('click',showFormRegister);
// BẮT SỰ KIỆN CLICK BUTTON ĐĂNG KÝ Ở MODAL FORM ĐĂNG KÝ
registerF8.addEventListener('click',function(){
    Swal.fire("Sorry!", "Tính Năng Này Chưa Có", "error");
})
// BẮT SỰ KIỆN CLICK BUTTON ĐĂNG NHẬP Ở MODAL FORM ĐĂNG NHẬP
loginF8.addEventListener('click',function(){
    showListUser();
    btnRegister.classList.add('log-res-hide');
    btnLogIn.classList.add('log-res-hide');
    btnRegister1.classList.add('log-res-hide');
    btnLogIn1.classList.add('log-res-hide');
    hideFormRegister();
    Swal.fire("Welcome, Minh Châu","Chào mừng bạn trở lại Shop","success");
})
// HÀM ẨN LABEL CHỨA TÊN USER VÀ AVATA USER
function hideListUser(){
    navbarUser.classList.remove('open-user');
    navbarUser1.classList.remove('open-user');
    //Swal.fire("Thank You","Hẹn bạn vào một ngày gần nhất nhé","success");
}
// HÀM HIỆN LABEL CHỨA TÊN USER VÀ AVATA USER
function showListUser(){
    navbarUser.classList.add('open-user');
    navbarUser1.classList.add('open-user');
}
const day = new Date();
$('.year').innerHTML = day.getFullYear();

// BẮT SỰ KIỆN BẤM THẺ LOGOUT TRONG LIST USER
btnUserLogout.addEventListener('click', hideListUser);
btnUserLogout1.addEventListener('click', hideListUser);
