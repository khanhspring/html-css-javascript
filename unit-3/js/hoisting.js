"use strict";
const thuong1 = tinhThuongChoNhomNhanVien(50, 40);
console.log(thuong1);
function x(p1, x, y, p1) {};
console.log(hoVaTen);

let truongHoc = "ĐH BK";
console.log(truongHoc);

function tinhThuongChoNhomNhanVien(agePerson1, agePerson2) {
  const tuoiTB = tinhTuoiTrungBinh(agePerson1, agePerson2);
  const thuong = tinhThuong(tuoiTB);
  return thuong;
}

function tinhTuoiTrungBinh(agePerson1, agePerson2) {
  const tuoiTB = (agePerson1 + agePerson2) / 2;
  return tuoiTB;
}

// lương thưởng: 10000000
// tuoi trung bình > 50 => HS thưởng 1.5
// tuoi trung bình <= 50 => HS thưởng 1
function tinhThuong(tuoiTB) {
  if (tuoiTB > 50) {
    return 10000000 * 1.5;
  }
  return 10000000 * 1;
}

var hoVaTen = "123123";
console.log(hoVaTen);