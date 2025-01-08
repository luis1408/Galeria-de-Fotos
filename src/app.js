function filterPhotos() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const photos = document.querySelectorAll('.photo');
    let hasResults = false;

    photos.forEach(photo => {
        const photoName = photo.getAttribute('data-name').toLowerCase();
        if (photoName.includes(searchValue)) {
            photo.style.display = '';
            hasResults = true;
        } else {
            photo.style.display = 'none';
        }
    });

    document.getElementById('no-results').style.display = hasResults ? 'none' : 'block';
}

document.getElementById('search-input').addEventListener('input', filterPhotos);