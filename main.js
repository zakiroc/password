
document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

  
    if (username === '123456' && password === '78900') {
     alert('Вход выполнен успешно!')
    } else {
       alert('Введите заново!')
    }
});








