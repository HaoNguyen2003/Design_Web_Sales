document.addEventListener("DOMContentLoaded", function() {
    var close_coat = document.getElementById('close-cart');
    var none_pageCoat = document.getElementById('container');
    var view_order = document.getElementById('view_order');
    const Page_coat = document.getElementById('Page-coat');

    view_order.addEventListener('click', function() {
        Page_coat.style.display = 'flex';
    });

    close_coat.addEventListener('click', function() {
        Page_coat.style.display = 'none';
    });
});

//-----------///
function toast(
    title="",
    Message="",
    type="info",
    duration=1000)
    {
        const main=document.getElementById('toast');
        if(main)
        {
            const toast=document.createElement('div');
            setTimeout(function () {
             main.removeChild(toast);
             }, duration + 1000);
            toast.onclick=function(e){
                if(e.target.closest('.toast__close')){
                    main.removeChild(toast);
                }
            }
            const icons={
                success:'fa-check-circle',
                warning:'fa-exclamation-circle',
                infor:'fa-info-circle',
                error:'fa-exclamation-triangle',
            };
            const icon=icons[type]
            const delay = (duration / 1000).toFixed(2);
            toast.classList.add('toast1',`toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
            toast.innerHTML=`<div class="toast__icon">
            <i class="fa ${icon}" aria-hidden="true"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__body__title">${title}</h3>
            <div class="toast__body__msg">
                ${Message}
            </div>
        </div>
        <div class="toast__close">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>`;
        main.appendChild(toast);
        }
    }
    function showSuccess(){
        toast(
        "Success",
        "Please Input Your Information",
        "success",
        5000);
    }
    function showWarning(){
        toast(
        "Success",
        "Please Input Your Information",
        "warning",
        5000)
    }
    function showinfor(){
        toast(
        "Success",
        "Please Input Your Information",
        "infor",
        5000)
    }
    function showErroe(){
        toast(
        "Success",
        "Please Input Your Information",
        "error",
        5000)
    }
    function incrementValue(inputId) {
        var inputElement = document.getElementById(inputId);
        var value = parseInt(inputElement.value, 10);
        inputElement.value = isNaN(value) ? 1 : value + 1;
        console.log("Incremented value:", inputElement.value);
    }

    function decrementValue(inputId) {
        var inputElement = document.getElementById(inputId);
        var value = parseInt(inputElement.value, 10);
        inputElement.value = isNaN(value) || value <= 1 ? 1 : value - 1;
        console.log("Decremented value:", inputElement.value);
    }