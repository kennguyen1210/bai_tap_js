//bai 2
// let input = confirm("ban co phai hoc vien Rikkei academy hay khong?");
// console.log(input);
// if (input) {
//   let studentId = prompt("nhap ma sinh vien :");
//   let studentName = prompt("nhap ten sinh vien");
//   console.log(
//     "ma sinh vien la: " + studentId + " ten sinh vien la: " + studentName
//   );
// } else {
//   alert("chuong trinh ket thuc");
// }

//bai 3
//khai bao bien
// let admin, name;
// //nhap gia tri bien name tu ban phim
// name = prompt("nhap gia tri cho bien name");
// console.log(name);
// //gan gia tri cho bien name cho admin
// admin = name;
// //thong bao gia tri bien admin
// console.log("gia tri cua admin la : " + admin);
// alert("gia tri cua admin la " + admin);

//bai 4
// nhap nam sinh
// let brithYear = Number(prompt("hay nhap nam sinh"));
// // tinh tuoi hien tai
// let age = 2023 - brithYear;
// // dua ra tuoi hien tai
// alert("tuoi hien tai la : " + age);

// bai 5
// nhap du lieu
// let rate = Number(prompt("nhap he so luong "));
// let basicSalary = Number(prompt("nhap luong co ban"));
// let commission = Number(prompt("nhap ty le hoa hong"));
// //tinh luonh
// let basic = (rate + commission) * basicSalary;
// //in ra luong
// alert("luong cua nhan vien do la : " + basic);

// bai 6
// nhap thong tin sinh vien
// let studentId = prompt("nhap ma sinh vien");
// let studentName = prompt("nhap ten sinh vien");
// let studentAge = prompt("nhap tuoi sinh vien");
// let htmlPoint = Number(prompt("nhap diem html"));
// let cssPoint = Number(prompt("nhap diem css"));
// let jsPoint = Number(prompt("nhap diem javascript"));
// //tinh diem trung binh
// let average = (htmlPoint + cssPoint + jsPoint) / 3;
// //in thong tin ra document
// document.write(
//   "ma sinh vien :" +
//     studentId +
//     "\nten sinh vien :" +
//     studentName +
//     "\ntuoi :" +
//     studentAge +
//     "\ndiem trung binh :" +
//     average
// );

//bai 7
// nhap su lieu
// let chieuDai = Number(prompt("Nhap chieu dai :"));
// let chieuRong = Number(prompt("Nhap chieu rong :"));
// // tinh dien tch va chu vi
// let chuVi = (chieuDai + chieuRong) * 2;
// let dienTich = chieuDai * chieuRong;
// // dua ra ket qua
// console.log("chu vi la : " + chuVi + " ;" + " dien tich la : " + dienTich);

//bai 8
// nhap ban kinh hinh tron
// let r = Number(prompt("Nhap ban kinh hinh tron :"));
// // tinh dien tich va chu vi hinh tron
// let chuVi = r * 2 * Math.PI;
// let dienTich = Math.PI * r * r;
// // dua ra ket qua
// console.log("chu vi la : " + chuVi + " ;" + " dien tich la : " + dienTich);

//bai 13
// // nhap vao 1 so bat ky
// let num = Number(prompt("nhap so bat ky :"));
// // in ra so du trong phep chia 3

// let result = num % 3;
// result == 0
//   ? console.log("0")
//   : result == 1
//   ? console.log("1")
//   : console.log("2");
