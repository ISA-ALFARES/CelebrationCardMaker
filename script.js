// تحقق مما إذا كان الاسم صالحًا
function isValidName(name) {
    var regex = /^[\u0600-\u06FF\s\u0020a-zA-Z]+$/; // يسمح فقط بالحروف العربية والإنجليزية والمسافات
    return regex.test(name);
}

// طباعة اسم المستخدم وعرضه على البطاقة
function printUserName() {
    var userName = document.getElementById('name').value.trim();

    if (!isValidName(userName)) {
        alert("الرجاء إدخال اسم صالح يحتوي فقط على الحروف العربية والإنجليزية والمسافات.");
        return;
    }

    var selectedChoice = document.querySelector('input[name="choice"]:checked').value;

    // إنشاء عنوان URL مع المعلمات
    var url = 'card-view.html?name=' + encodeURIComponent(userName) + '&choice=' + encodeURIComponent(selectedChoice);

    // فتح العنوان URL في نافذة جديدة
    window.open(url, '_blank');
}
