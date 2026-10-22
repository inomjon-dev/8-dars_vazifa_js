// // 1-masala. Foydalanuvchi profilini to‘g‘rilash
// // Profil ma’lumotlarini tozalang, kerakli 
// // formatga keltiring va tekshiruvdan o‘tkazing.
// // Vazifalar:
// // 1. Ism va familiyadagi ortiqcha bo‘sh joylarni olib tashlang; birinchi harfni katta, qolganlarini kichik qiling.
// // 2. Emailni tozalang va kichik harflarga o‘tkazing.
// // 3. Username ni tozalang va kichik harflarga o‘tkazing.
// // 4. Emailda @ borligini va .com bilan tugashini tekshiring.
// // 5. Username kamida 5 ta belgidan iborat ekanini tekshiring.
// // 6. Barcha shartlar bajarilsa muvaffaqiyat xabarini, aks holda xatolik xabarini chiqaring.
// // 7. Qo‘shimcha: qaysi maydon noto‘g‘ri ekanini alohida ko‘rsating


// // let user = {
// // firstName: " InoMJoN ",
// // lastName: " AbDURAsuLov ",
// // emaile: " INomJON@GMAIL.COM ",
// // username: " InOmJon_dev "
// // };

// // user.firstName = user.firstName.trim()[0].toUpperCase()+user.firstName.trim().slice(1).toLocaleLowerCase();
// // console.log("Ism:",user.firstName);
 
// // user.lastName = user.lastName.trim()[0].toUpperCase()+user.lastName.trim().slice(1).toLocaleLowerCase();
// // console.log("Familiya:",user.lastName);

// // user.emaile = user.emaile.trim().toLowerCase();
// // console.log("Email:",user.emaile);


// // user.username = user.username.trim().toLowerCase();
// // console.log("Username:",user.username);

// // let xato = 0;

// // if( !user.emaile.includes("@") && !user.emaile  .includes(".com")){
// //     xato++;
// //     console.log("Holat: xatolik mavjud");
// // }

// // if( !user.username.length>=5){
// //     console.log("5 ta belgidan kam");
// //     xato++;
// // }

// // if(xato==0){
// //     console.log("Holat: muvofaqiyatli ro'yhatdan o'tdi");
// // }
// // else {
// //     console.log("Holat: xatolik mavjud");   
// // }

// //===========================================================================
// // 2-masala. Ro‘yxatdan o‘tish formasini tekshirish
// // Yangi foydalanuvchining ma’lumotlarini kerakli formatga keltiring va talablarni tekshiring.
// // Vazifalar:
// // 1. name ni tozalab, faqat birinchi harfini katta qiling.
// // 2. Emailni tozalab kichik harflarga o‘tkazing; @ mavjudligini va .com bilan tugashini tekshiring.
// // 3. Telefon raqamidagi bosh va oxirgi bo‘sh joylarni olib tashlang. +998 bilan boshlanishini tekshiring.
// // 4. Parolni tozalang va uzunligi kamida 8 belgi ekanini tekshiring.
// // 5. Barcha shartlar bajarilsa, ro‘yxatdan o‘tishga ruxsat bering; aks holda xatolikni ko‘rsating.
// // 6. Qo‘shimcha: har bir maydon tekshiruvi natijasini alohida chiqaring.

// // let user = {
// // name: " InoMjon ",
// // email: " INOMJON@GMAIL.COM ",
// // phone: " +998 90 757 03 28 ",
// // password: " Inomjon_2007 "
// // };

// // user.name = user.name.trim()[0].toUpperCase()+user.name.trim().slice(1).toLocaleLowerCase();
// // console.log("Ism:",user.name);

// // user.email = user.email.trim().toLocaleLowerCase

// // user.phone = user.phone.trim();

// // user.password = user.password.trim().length;



// // //tekshirish.

// // let count = 0;
// // if(!user.email.includes("@")||!user.email.includes(".com")){
// //     count++;
// //     console.log("Email: Xato!");
// // }
// // else {
// //     console.log("Email:",user.email);
// // }

// // if(!user.phone.startsWith("+998")){
// //     count++;
// //     console.log("Telefon: Xato !");
// // }
// // else{
// //     console.log("Telefon:",user.phone);
// // }

// // if(user.password.length<8 ){
// //     count++;
// //     console.log("Parol uzunligi: 8ta belgidan kam.");
// // }
// // else{
// //     console.log("Parol uzunligi: ",user.password);
// // }

// // if(count == 0) {
// //     console.log("Holat: ma’lumotlar qabul qilindi");
// // }
// // else{
// //     console.log("Holat: ma’lumotlar qabul qilinmadi");
// // }

// //=======================================================================================
// // 3-masala. Mahsulot tavsifini tekshirish
// // Mahsulot nomi va kategoriyasini formatlang, tavsif hamda kodni tekshiring.
// // Vazifalar:
// // 1. Mahsulot nomini tozalang; birinchi harfini katta, qolganlarini kichik qiling.
// // 2. category ni tozalab, barcha harflarini katta qiling.
// // 3. description ni tozalang va uzunligi kamida 20 belgi ekanini tekshiring.
// // 4. code ni tozalang va WH- bilan boshlanishini tekshiring.
// // 5. description ichida bluetooth so‘zi borligini katta-kichik harflarga bog‘liq bo‘lmagan holda tekshiring.
// // 6. Tekshiruv natijasiga ko‘ra ma’lumotlar to‘liq yoki to‘liq emasligini chiqaring

// // let product = {
// // name: " wIRELESS HEADPHONES ",
// // category: " ELECTRONICS ",
// // description: " Bluetooth headphones with noise cancellation ",
// // code: " WH-2026 "
// // };

// // product.name = product.name.trim()[0].toUpperCase() + product.name.trim().slice(1).toLowerCase();
// // console.log(product.name);


// // product.category= product.category.trim().toUpperCase();
// // console.log("Kategoriya: ", product.category);


// // product.description = product.description.trim();

// // product.code = product.code.trim();


// //tekshirish.

// // let count = 0;

// // if( product.description.length<20){
// //     count++;
// //     console.log("description: 20 ta belgidan kam.");
// // }

// // if( product.code.startsWith("WH-")){
// //     console.log("Kod: ",product.code);
// // }
// // else {
// //     count++;
// //     console.log("Kod: xato");
// // }

// // if( !product.description.toLowerCase.includes("bluetooth")){
// //     count++;
// //     console.log("Description: Xato!");
// // }

// // if( count== 0){
// //     console.log("Holat: tekshiruvdan o‘tdi");
// // }
// // else {
// //     console.log("Holat: tekshiruvdan o‘tmadi");
// // }

// //====================================================================================
// // 4-masala. Xabar matnini qayta ishlash Foydalanuvchi murojaatini 
// // tozalang va uning talabga mosligini tekshiring.
// // Vazifalar:
// // 1. sender ni tozalang va ism formatiga keltiring.
// // 2. subject ni tozalab, kichik harflarga o‘tkazing.
// // 3. text ni tozalang; uzunligi kamida 20 belgi ekanini tekshiring.
// // 4. text ichida payment so‘zi borligini katta-kichik harflarga bog‘liq bo‘lmagan holda aniqlang.
// // 5. Emailni tozalang, kichik harflarga o‘tkazing va @ belgisi borligini tekshiring.
// // 6. Barcha shartlar bajarilsa murojaat qabul qilinganini, aks holda xatolik borligini chiqaring.

// let message = {
// sender: " InoMJon ",
// subject: " PAYMENT ISSUE ",
// text: " I cannot complete my payment. Please help! ",
// email: " INomJON@gMAIL.COM "
// }

// message.sender = message.sender.trim()[0].toUpperCase() + message.sender.trim().slice(1).toLocaleLowerCase();
// console.log("Yuboruvchi: ",message.sender);

// product.subject = product.subject.trim().toLocaleLowerCase();
// console.log("Mavzu: ",product.subject);

// product.text = product.text.trim();

// product.email = product.email.trim().toLocaleLowerCase();

// //tekshirish.

// let count = 0;

// if( product.text.length < 20 ){
//     count ++;
//     console.log("Text: Xato!");
// }

// if( !product.text.toLocaleLowerCase().includes("payment")){
//     count ++;
// }

// if(!product.email.includes("@")  ){
//     count ++;
//     console.log("Email: ",product.email);
// }
// else {
//     console.log("Email: Xato !");
// }

// if(count==0){
//     console.log("Holat: murojaat qabul qilindi");
// }
// else {
//     console.log("Holat: murojaat qabul qilinmadi");
// }