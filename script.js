function printUserName() {
    var userName = document.getElementById('name').value;
    var selectedChoice = document.querySelector('input[name="choice"]:checked').value;

    // Determine the corresponding image URL based on the selected choice
    var imageURL;
    if (selectedChoice === '1') {
        imageURL = 'images/card.jpeg';
        var canvasWidth = 600;
        var canvasHeight = 500;
        var textX = 278;
        var textY = 323;
        var fontSize = '26px';
    } else if (selectedChoice === '2') {
        imageURL = 'images/card-2.jpg';
        var canvasWidth = 800;
        var canvasHeight = 600;
        var textX = 400;
        var textY = 450;
        var fontSize = '30px';
    } else if (selectedChoice === '3') {
        imageURL = 'images/card-3.jpg';
        var canvasWidth = 500;
        var canvasHeight = 400;
        var textX = 150;
        var textY = 200;
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
