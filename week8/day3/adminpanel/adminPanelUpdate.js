async function getProducts() {
    const res = await fetch("http://localhost:3000/users");
    const data = res.json();
    return data;
  }
  
  const hash = window.location.hash.slice(1) 
   const img_url_admin = document.getElementById("img_url_admin");
  const name_admin = document.getElementById("name_admin");
  const job_admin = document.getElementById("job_admin");
  const btn_admin = document.querySelector(".btn_admin");
  
  img_url_admin.value = "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  function adminPanelAddUser(img, name, job) {
    img_url_admin.textContent = img;
    name_admin.textContent = name;
    job_admin.textContent = job;
  }
 
  
  async function adminUiGenerate() {
      const result = await getProducts();
      result.forEach((element) => {
        adminPanelAddUser(element.img_url, element.name, element.job);
      });
    }
  
  
  btn_admin.addEventListener("click", async function (id) {
    
  
    const res = await fetch("http://localhost:3000/users/"+id, {
      method: "put",
      body: JSON.stringify({
        img_url: img_url_admin.value,
        name: name_admin.value,
        job: job_admin.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await res.json();
    window.location.href = "./adminPanel.html"
    adminPanelAddUser(data.img_url, data.name, data.job);
  });
  adminUiGenerate();
  