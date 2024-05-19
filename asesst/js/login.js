 // Hàm xử lý biểu mẫu Đăng ký
 document.getElementById('myformSignup').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn biểu mẫu gửi đi mặc định

    // Lấy giá trị từ các trường input
    var email = document.getElementById('Email_Signup').value;
    var username = document.getElementById('Username_Signup').value;
    var password = document.getElementById('Password_Signup').value;
    var repassword = document.getElementById('Repassword_Signup').value;

    // Kiểm tra xem các trường đã được nhập chưa
    if (email.trim() === '' || username.trim() === '' || password.trim() === '' || repassword.trim() === '') {
        showSuccess() // Hiển thị thông báo lỗi
    } else if (password !== repassword) {
        showSuccess() // Hiển thị thông báo lỗi nếu mật khẩu không khớp
    } else {
        // Gửi biểu mẫu nếu tất cả các trường đã được nhập
        this.submit();
    }
});

// Hàm xử lý biểu mẫu Đăng nhập
document.getElementById('myformSignin').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn biểu mẫu gửi đi mặc định

    // Lấy giá trị từ các trường input
    var Email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;

    // Kiểm tra xem tên đăng nhập và mật khẩu có được nhập không
    if (Email.trim() === '' || password.trim() === '') {
        showSuccess(); // Hiển thị thông báo lỗi
    } else {
        // Gửi biểu mẫu nếu tên đăng nhập và mật khẩu đã được nhập
        this.submit();
    }
});