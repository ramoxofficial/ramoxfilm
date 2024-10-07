const adminEmail = "actramox@gmail.com";
const adminPassword = "13631363Amir";

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('فیلم آپلود شد!');
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this[0].value;
    const password = this[1].value;

    if (email === adminEmail && password === adminPassword) {
        alert('به پنل مدیریت وارد شدید!');
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert('ایمیل یا رمز عبور نادرست است.');
    }
    this.reset();
});

document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = this[0].value;
    const reason = this[1].value;
    
    const reportsList = document.getElementById('reportsList');
    reportsList.innerHTML += `<p>گزارش برای فیلم "${title}": ${reason}</p>`;
    
    alert('گزارش ارسال شد!');
    this.reset();
});
