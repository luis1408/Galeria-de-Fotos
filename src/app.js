const photos = [
    { name: "Cachorro Brincalhão", url: "./imagens/cachorro_brincalhão.jpg" },
    { name: "Cachorro na Praia", url: "./imagens/cachorro_na_praia.jpg" },
    { name: "Cachorro Pequeno", url: "./imagens/cachorro_pequeno.jpg" },
    { name: "Cachorros com Bola na Boca", url: "./imagens/cachorro_com_bola_na_boca.jpg" },
    { name: "Briga de Filhotes", url: "./imagens/briga_de_filhotes.jpg" },
    { name: "Gato de Toquinha", url: "./imagens/gato_de_toquinha.jpg" },
    { name: "Gato Deitado", url: "./imagens/gato_deitado.jpg" },
    { name: "Gato Lambendo Remédio", url: "./imagens/gato_lambendo_remedio.jpg" },
    { name: "Gato no Balaio", url: "./imagens/gato_no_balaio.jpg" },
    { name: "Gato Travesso", url: "./imagens/gato_travesso.jpg" }
];

const photoGallery = document.getElementById("photo-gallery");
const noResults = document.getElementById("no-results");
const searchInput = document.getElementById("search-input");

function displayPhotos(filteredPhotos) {
    photoGallery.innerHTML = "";
    if (filteredPhotos.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
        filteredPhotos.forEach(photo => {
            const photoDiv = document.createElement("div");
            photoDiv.classList.add("photo");
            photoDiv.setAttribute("data-name", photo.name);

            photoDiv.innerHTML = `
                <img src="${photo.url}" alt="${photo.name}">
                <p class="photo-name">${photo.name}</p>
            `;
            photoGallery.appendChild(photoDiv);
        });
    }
}

function filterPhotos() {
    const query = searchInput.value.trim().toLowerCase();
    const filteredPhotos = photos.filter(photo =>
        photo.name.toLowerCase().includes(query)
    );
    displayPhotos(filteredPhotos);
}

displayPhotos(photos);

searchInput.addEventListener("input", filterPhotos);
