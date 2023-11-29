// 2 JS if exercise

// 1. age хувьсагчинд prompt ашиглан насыг нь аваад:

// let number = prompt("Nasaa oruulna uu: ")
// if(number<16)
//     alert("ta Cu gees goimon avch bolohgui bn");
// else
//     alert("ta CU gees goimon avch bolno");

// 2. Login хэсэгт хэрэглэгч шинээр нууц үгээ солихдоо давтан оруулах бөгөөд энэхүү 2 нууц үг хоорондоо ижил байна уу шалгана.

// let negdugeer = prompt("ta nuuts ugee oruulj ogno uu: ");
// let negdugeerbat = prompt("batatgah nuuts ug: ");
// if(negdugeer != 0)
//     if(negdugeer == negdugeerbat)
//         alert("nuuts ug taarlaa");
//     else
//         alert("hoyr code taarahgui bn");
// else
//     alert("Hoyulaa hooson baina dahin shalgana uu");

// 3. Доорхи схемийн дагуу үйлчлүүлэгчийн ямар хоол идмээр байгааг мэдэн захиалга авдаг рестораны програм зохионо. Сонголтуудийг тоогоор илэрхийлэн javascript prompt ашиглан хэрэглэгчээс авна.

// let Choice = prompt("sholteai ustai hool ideh uu: 1. tiim  2.ugui");

// if(Choice == 1){
//     husel = prompt("tsai avah uu: 1. tiim  2.ugui");
//     if(husel == 1){
//         S = prompt("bansgtai yu: 1.tiim 2. ugui");
//         if(S == 1)
//             alert("banshtai tsai");
//         if(S == 2)
//             alert("budaatai tsai");
//     }
//     if(husel == 2){
//         Songolt = prompt("yutai shol ideh ve: 1.guril 2.puntuuz 3.goimon 4.bansh 5.mah 6.nogootoi");
//         if(Songolt == 1)
//             alert("lavsha");
//         if(Songolt == 2)
//             alert("huitsai");
//         if(Songolt == 3)
//             alert("goimontoi shol");
//         if(Songolt == 4)
//             alert("banshtai shol");
//         if(Songolt == 5)
//             alert("har shol");
//         if(Songolt == 6)
//             alert("nogootoi shol");
//     }
// }
// if (Choice == 2){
//     m = prompt("mah in tatsan uuu: 1.tiim 2.ugui");
//     if(m == 1){
//         g = prompt("Guriltai yu budaatai yu: 1.tiim, 2.ugui");
//         if(g == 1){
//             y = prompt("yaj bolgoson be: 1.sharsan 2.jignesen");
//             if(y == 1){
//                 hoo = prompt("hoolgogch hiih uu ");
//                 if(hoo == 1){
//                     alert("piroshki");
//                 }
//                 if(hoo == 2){
//                     alert("huushuur");
//                 }
//             }
//             if(y == 2){
//                 hoos = prompt("hoolgogch hiih uu ");
//                 if(hoos == 1){
//                     alert("mantuun buuz");
//                 }
//                 if(hoos == 2){
//                     alert("buuz");
//                 }
//             }
//         }
//         if(g == 2){
//             o = promp("ondogtei yu: 1.tiim 2.no")
//             if(o ==1){
//                 alert("ondogtei bishtegs");
//             }
//             if(o ==2){
//                 alert("teptels");
//             }
//         }
//     }
//     if(m == 2){
//         yu = prompt("yutai holih ve: 1.guril 2.ondog 3.budaa 4.nogoo");
//         if(yu == 1)
//             alert("tsuivan");
//         if(yu == 2)
//             alert("ondogtei huurga");
//         if(yu == 3){
//             hii = prompt("hoorond in holih uu: 1.tiim 2.no");
//             if(hii ==1){
//                 alert("budaatai huurga");
//             }
//             if(hii ==2){
//                 alert("guliash");
//             }
//         }
//         if(yu == 4)
//             alert("nogootoi huurga");
//     }
// }

// 4. n гэсэн хувьсагчинд prompt ашиглан 4 оронтой тоо авч:

// let n = prompt("toogoo oruulna uu: ");
// let four_huvaadag = false;
     
// if (n % 2 == 0) {
//    let lastTwoDigits = parseInt(n.substr(-2));
//    four_huvaadag = lastTwoDigits % 4 == 0;
//    console.log("tegsh too");
// } else {
//     console.log("sondgoi too");
// }
// three = n % 3 == 0;

// if (four_huvaadag) {
//    console.log(n + " 4 huvaagddag too");
// } else {
//    console.log(n + " 4 huvaagddaggui too");
// }
// if (three) {
//    console.log(" 3 huvaagddag too");
// } else {
//    console.log(" 3 huvaagddaggui too");
// }

// 2.1 JS loop exercise

// 1. prompt ашиглан хэрэглэгчээс n хувьсагчийн утгийг авч console-руу n удаа "Codely №1" гэж дараах байдлаар хэвлэн харуулаарай.

// let too = prompt("ta toogoo oruulna uu: ");
// for (let i = 1; i < too; i++) {
//     console.log("Codely", i);
// }

// 2. prompt ашиглан хэрэглэгчээс n хувьсагчийн утгийг авч console-руу n-ээс эхлэн 1 хүртэл тоонуудыг дараах байдлаар хэвлэн харуулаарай

// let too = prompt("ta toogoo oruulna uu: ");
// for (let i = too; i > 0; i--) {
//     console.log(i);
// }

// 3. prompt ашиглан хэрэглэгчээс n гэсэн тоог авч n хүртэлх тооны нийлбэрийг олж alert ашиглан харуулаарай

// let too = prompt("ta toogoo oruulna uu: ");
// let niit = 0
// for (let i = 0; i <= too; i++) {
//     niit += i
// }
// console.log(niit);

// 4. prompt ашиглан хэрэглэгчээс n гэсэн тоог авч n хүртэлх ТЭГШ тооны нийлбэрийг олж alert ашиглан харуулаарай

// let too = prompt("ta toogoo oruulna uu: ");
// let niit = 0

// for (let i = 1; i < too; i++) {
//     if (i % 2 == 0){
//         niit += i
//     }
// }
// console.log(niit);

// 5. prompt ашиглан хэрэглэгчээс n гэсэн тоог авч n хүртэлх 3 эсвэл 5 -д хуваагддаг тооны нийлбэр олж alert ашиглах харуулаарай.

// let too = prompt("ta toogoo orudulna uu: ");
// let niit = 1

// for (let i = 0; i < too; i++) {
//     if (i % 3== 0){
//         niit += i
//     }
//     if (i % 5){
//         niit += i
//     }
// }
// alert(niit);

// 2.3 JS loop 2 exercise

// 1. For давталт ашиглан n тоо хүртэлх тоог console -руу хэвлэнэ. Гэхдээ 3-т хуваагддаг тоог хэвлэхгүй алгасана хэрэгтэй.

let n = prompt("ta toogoo oruulna uu: ");
for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i % 3 == 0){
        break;
    } else{
        continue;
    }
}