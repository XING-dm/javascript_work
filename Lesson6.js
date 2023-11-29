// 1 JS basic exercise

// 1. Нэр насаа хэвлэх

// let nom = {
//     names: "オドオチル",
//     age: 17
// }
// console.log("Намайг " + nom.names+ " гэдэг. Би " + nom.age + " настай.")

// 2. Дараах өгөгдөлүүдийг төрлөөр нь ялга:

// console.log("Hello",  String)
// console.log(true,  Boolean)
// console.log("Name",  String)
// console.log(33,  Number)
// console.log("90",  String)
// console.log(90+"77",  String)
// console.log( {name:'Anu', age:15}, Object)
// console.log(false,  Boolean)
// console.log(1655/5,  Number)
// console.log(["javascript", "html", "css"], Array)

// 3. Хувьсагчийн байрыг солих

// let x = 2
// let y = 6
// let z = 3
// console.log("x="+y)
// console.log("y="+z)
// console.log("z="+x)

// 4. Өгөгдсөн илэрхийллийн утгыг ол. A=B*C-D ( B, C, D утгийг гараас авна)

// let b = prompt("B= ");
// let c = prompt("C= ");
// let d = prompt("D= ");
// let A = b*c-d
// console.log("A="+A);

// 5. Гараас хоног, цаг өгсөн бол нийт цаг болохыг олдог тооны машин хийгээрэй


// let totalTime = 2 * 24 + 10

// console.log(totalTime);

// 6. Хэдэн онд хэдэн настай байхаа бодуулдаг нас боддог тооны машин хийгээрэй.

// let futureYear = 2040
// let bornYear = 1999
// let now = futureYear - bornYear

// console.log(now);

// 7. Төрсөн оноо оруулахад өнөөдрийг хүртэл хэдэн өдөр амьдарснаа тооцдог тооцоолуур хийгээрэй.

// let bornYear = 2003
// let bornMonth = 3
// let bornDay = 20 

// let all = {
//     year: 2023,
//     month: 12,
// }
// let year = (all.year - bornYear) * 365
// let month = (all.month - bornMonth) * 31

// let now = year + month + bornDay

// console.log(now);

// 8*. Тонгорогсон тоо: Өгөгдсөн 4 оронтой тооны тонгорогсон тоог ол. (parseInt, %-г ашиглана)


// let a = parseInt(1234 % 10)
// let b = parseInt(123.4 % 10)
// let c = parseInt(12.34 % 10)
// let d = parseInt(1.234 % 10)
// console.log(a,b,c,d);


// 1.2 JS if-else exercise

// 1. if-else ашиглан гараас өгсөн 2 тооны ихийг олж console-руу харуулна уу.

// let a = 96
// let b = 78

// if(a > b) {
//     console.log("а тоо их байна");
// } else {
//     console.log("b тоо их байна");
// }

// 2. x тоог тэгш эсвэл сондгойг эсэхийг шалгаж console-руу хэвлэнэ үү.

// let x = 57349

// if(x % 2 == 0){
//     console.log("тэгш");
// } else{
//     console.log("сондгой");
// }

// 3. Хэрэглэгч нууц үгээ мартсан тул шинээр сольж байгаа бөгөөд шинэ нууц үгээ давтан оруулж 2 нууц үг хоорондоо ижил бичсэн байна уу шалгаж баталгаажуулах хэрэгтэй.

// let newPass = 1234
// let conNewPass = 1234

// if(newPass == conNewPass){
//     console.log("Нууц үг амжилттай солигдлоо");
// } else {
//     console.log("Нууц үгээ зөв давтаж оруулаарай");
// }

// 4. point хувьсагчид 0-100 хооронд оноо өгөх бөгөөд тухайн оноо нь ямар дүн авсныг if-else ашиглан console-руу хэвлэ.

// let point = 90

// if (point > 90) {
//     console.log("A");
//   } else if (point <= 90 && point > 80 ) {
//     console.log("B");
//   } else if (point <= 80 && point > 70) {
//     console.log("C");
//   } else if (point <= 70 && point > 60) {
//     console.log("D");
//   } else if (point < 60) {
//     console.log("F");
//   } 

// 5. Гараас өгсөн x тооны утга дараах нөхцөл биелэж байх үед тохирох текст хэвлэнэ.

// let x = 18

// if (x % 5 == 0 && x % 3 == 0){
//     console.log("FizzBuzz");
// } else if (x % 3 == 0){
//     console.log("Fizz");
// } else if (x % 5 == 0){
//     console.log("Buzz");
// } else if (x % 5 != 0 && x % 3 != 0){
//     console.log("input");
// } else {
//     console.log("Not number");
// }

// 6. Замын цагдаагаас хурд хэтрүүлсэн эсэхийг шалгадаг програм зохиолгох хүсэлт ирлээ. Програмын шаардлага:

// let speed = 120
// let moreSpeed = speed - 80
// let point = moreSpeed / 5

// if (point => 5){
//     console.log(point+" onoo aldsan","erh hasagdsan");
// } else {
//     console.log(point +" onoo aldsan","erh hasagdaagui");
// }




