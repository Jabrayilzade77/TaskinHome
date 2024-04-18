async function getProducts() {
  const res = await fetch("http://localhost:3000/users");
  const data = res.json();
  return data;
}

const tbody = document.getElementById("tbody");
function adminPanelCreateCard(id, img, name, job) {

  const tr_main = document.createElement("tr");
  const id_td = document.createElement("td");
  const img_td = document.createElement("img");
  const name_td = document.createElement("td");
  const job_td = document.createElement("td");
  const update_td = document.createElement("td");
  const delete_td = document.createElement("td");
  const update_btn1 = document.createElement("button");
  const delete_btn1 = document.createElement("button");
  const a = document.createElement("a");


  id_td.textContent = id;
  img_td.src = img;
  name_td.textContent = name;
  job_td.textContent = job;
  a.textContent = "update";
  a.href= "./adminPanelUpdate.html#"+id
  delete_btn1.textContent = "delete";

  a.style.textDecoration="none"
  a.style.color="white"
  delete_btn1.style.color="white"

  img_td.classList.add("adminPanel_img");
  tr_main.classList.add("tr_main");

  update_btn1.appendChild(a)
  update_td.appendChild(update_btn1)
  delete_td.appendChild(delete_btn1)
  tr_main.append(id_td, img_td, name_td, job_td, update_td, delete_td);
  tbody.appendChild(tr_main);

  
  delete_btn1.addEventListener("click",async function () {
    const res = await fetch("http://localhost:3000/users/"+id, {
        method: "delete",
        body:JSON.stringify(),
        headers: {
            "Content-Type": "application/json",
          }
    })
    update_btn1.addEventListener("click",async function () {
      const res = await fetch("http://localhost:3000/users/"+id,{
        method: "put",
        body:stringify(),
        headers: {
          "Content-Type": "application/json",
        }
      })
    })
    
  const data = await res.json();

    
})
}


async function adminPanelUiGenerate() {
  const result = await getProducts();
  result.forEach((x) => {
    adminPanelCreateCard(
      x.id,
      x.img_url,
      x.name,
      x.job,
      x.update_btn1,
      x.delete_btn1
    );
  });
}

adminPanelUiGenerate();
