const tuoiTB = 100;
const tuoiCaoNhat = 1000;

function tinhTuoiTrungBinh(agePerson1, agePerson2) {
  const tuoiTB = (agePerson1 + agePerson2) / 2;
  console.log(tuoiTB);
  console.log(tuoiCaoNhat);
  return tuoiTB;
}

console.log(tuoiTB);
tinhTuoiTrungBinh(10, 20);