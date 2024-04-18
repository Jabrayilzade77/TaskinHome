async function getProducts() {
  const res = await fetch("http://localhost:3000/users");
  const data = res.json();
  return data;
}

const container = document.querySelector(".container");

function createCard(img_url, ad, is ) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("p");
  const job = document.createElement("p");
  const main_p = document.createElement("div")

  img.src = img_url
  name.textContent = ad
  job.textContent = is

  img.classList.add("img_css")
  name.classList.add("name")
  job.classList.add("name")
  card.classList.add("card")

  main_p.style.paddingLeft = "10px"

  main_p.append(name,job)
  card.append(img,main_p)
  container.appendChild(card)
}

async function uiGenerate() {
    const allProducts = await getProducts()
    allProducts.forEach(element => {
        createCard(element.img_url,element.name,element.job)
    });
    
}

uiGenerate()