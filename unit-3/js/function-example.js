
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

function tinhThuongChoNhomNhanVien(agePerson1, agePerson2) {
  const tuoiTB = tinhTuoiTrungBinh(agePerson1, agePerson2);
  const thuong = tinhThuong(tuoiTB);
  return thuong;
}

const thuong1 = tinhThuongChoNhomNhanVien(50, 40);
console.log(thuong1);

const thuong2 = tinhThuongChoNhomNhanVien(50, 60);
console.log(thuong2);

const tinhThuongChoNhomNhanVien2 = (agePerson1, agePerson2) => {
  const tuoiTB = tinhTuoiTrungBinh(agePerson1, agePerson2);
  const thuong = tinhThuong(tuoiTB);
  return thuong;
};

// function
function tenFunction(a, b, c) {
  return a + b + c;
}

// arrow function
const tenArrowFunction1 = (a, b, c) => {
  return a + b + c;
}

const tenArrowFunction2 = (a, b, c) => a + b + c;