function isValidName(name) {
    // يسمح فقط بالحروف العربية والإنجليزية والمسافات
    var regex = /^[\u0600-\u06FF\s\u0020a-zA-Z]+$/;
    return regex.test(name);
}

function printUserName() {
    var userName = document.getElementById('name').value.trim();

    if (!isValidName(userName)) {
        alert("الرجاء إدخال اسم صالح يحتوي فقط على الحروف العربية والإنجليزية والمسافات.");
        return;
    }

    var selectedChoice = document.querySelector('input[name="choice"]:checked').value;

    // Determine the corresponding image URL based on the selected choice
    var imageURL;
    if (selectedChoice === '1') {
        imageURL = 'images/card.jpeg';
        var canvasWidth = 600;
        var canvasHeight = 500;
        var textXPercentage = 38; 
        var textYPercentage = 65; 
        var fontSize = '24px';
    } else if (selectedChoice === '2') {
        imageURL = 'images/card-2.jpg';
        var canvasWidth = 800;
        var canvasHeight = 600;
        var textXPercentage = 50; 
        var textYPercentage = 50; 
        var fontSize = '30px';
    } else if (selectedChoice === '3') {
        imageURL = 'images/card-3.jpg';
        var canvasWidth = 500;
        var canvasHeight = 400;
        var textXPercentage = 30; 
        var textYPercentage = 70; 
        var fontSize = '18px';
    }

    // إنشاء كائن صورة
    var img = new Image();
    // تمكين CORS للصورة للسماح بالتنزيل
    img.crossOrigin = 'anonymous';

    // دالة التابعة التي ستُشغل بعد تحميل الصورة
    img.onload = function () {
        // إنشاء عنصر كانفاس جديد
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth; // تحديد عرض الكانفاس
        canvas.height = canvasHeight; // تحديد ارتفاع الكانفاس

        // الحصول على سياق الرسم للكانفاس
        var ctx = canvas.getContext('2d');

        // رسم الصورة على الكانفاس
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // تعيين أنماط النص
        ctx.fillStyle = 'black';
        ctx.font = fontSize + ' Arial';

        // تحويل النسبة المئوية إلى قيم مطلقة
        var textX = (textXPercentage / 100) * canvasWidth; // حساب موقع النص الأفقي
        var textY = (textYPercentage / 100) * canvasHeight; // حساب موقع النص العمودي

        // رسم النص على الكانفاس
        ctx.fillText(userName, textX, textY);

        // Open a new window
        var newWindow = window.open('', '_blank');

        // Write the user's name and image to the new window
        var htmlContent = '<!DOCTYPE html>' +
            '<html lang="en">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<title>User Information</title>' +
            '<style>' +
            'body { font-family: Arial, sans-serif; text-align: center; background-color: #f2f2f2; }' +
            'img { max-width: 50%; height: auto; margin-top: 20px; border: 5px solid #ccc; border-radius: 10px; }' +
            'a.button { display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; }' +
            'a.button:hover { background-color: #45a049; }' +
            '</style>' +
            '</head>' +
            '<body>' +
            '<canvas id="greetingCanvas" style="display: none;"></canvas>' + // إضافة الكانفاس مخفيًا
            '<img src="' + canvas.toDataURL('image/jpeg') + '" alt="Selected card">' +
            '<br>' +
            '<a href="' + canvas.toDataURL('image/jpeg') + '" download="selected_card.jpg" class="button">تحميل الصورة</a>' +
            '<br>' +
            '<button onclick="window.history.back();" class="button">العودة</button>' + // زر الرجوع للصفحة السابقة
            '</body>' +
            '</html>';

        newWindow.document.write(htmlContent);
        newWindow.document.close(); // Close the document to prevent further writing

        // إزالة الكانفاس من الصفحة بعد استخدامه
        document.body.removeChild(canvas);
    };

    // تعيين مسار الصورة
    img.src = imageURL;
}
