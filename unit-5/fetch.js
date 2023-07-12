async function load() {
  const data = await fetch("https://reqres.in/api/users?page=1");
  const json = await data.json();
  const listHocSinh = json.data;
  console.log(listHocSinh);

  const bangHocSinh = document.getElementById("bangHocSinh");
  for (let i = 0; i < listHocSinh.length; i++) {

    const tr = document.createElement("tr");
    bangHocSinh.append(tr);

    const td1 = document.createElement("td");
    tr.append(td1);
    td1.innerText = listHocSinh[i].first_name + listHocSinh[i].last_name;

    const td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = listHocSinh[i].email;

    const td3 = document.createElement("td");
    tr.append(td3);

    const img = document.createElement("img");
    img.src = listHocSinh[i].avatar;
    td3.append(img);
  }
}

load();