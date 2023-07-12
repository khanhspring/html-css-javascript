function selectGender(gender) {
  console.log(gender);
  const allButtons = document.getElementsByTagName("button");
  for (let btn of allButtons) {
    btn.classList.remove('selected');
  }
  const button = document.getElementById(gender);
  button.classList.add('selected');
  localStorage.setItem("gender_da_chon", gender);
}

function load() {
  const gender = localStorage.getItem("gender_da_chon");
  console.log(gender);

  const button = document.getElementById(gender);
  button.classList.add('selected');
}
// call API: https://reqres.in/api/users?page=1
// 
const hocSinh = ;
load();