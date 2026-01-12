const ACCESS_KEY = "Cr7seqYerVJZicdsp7spbT-kXSSIMgL1ryZ3g2lmPFQ";

function searchImages() {
  const query = document.getElementById("searchInput").value;
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${ACCESS_KEY}`)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.urls.small;
        gallery.appendChild(img);
      });
    });
} 