let b1 = document.getElementById("b1");
let input = document.getElementById("name");
let h2 = document.getElementById("h2");
let img1 = document.getElementById("doImg");
let p=document.getElementById("p");
let rate= document.getElementById("rate");
const URL="https://http.cat/400.jpg";
const anime = async () => {

  let searchName = input.value;

  let response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchName)}`
  );
  let result = await response.json();
  try{
    h2.innerText = result.data[0].title;
  }catch(err){
    console.log(err);
    img1.src=URL;
  }
    img1.src = result.data[0].images.jpg.image_url;
    p.innerText="[Description]: " + result.data[0].background;
    rate.innerText="[Rating]: " + result.data[0].rating;
    h2.innerText = "Anime not found";
};

b1.addEventListener("click", anime);
      
