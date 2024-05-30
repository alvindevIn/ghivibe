const menu = document.getElementById('menu');
const boxSlide = document.getElementById('boxSlide')
let isMenu = false
if (isMenu == false) {
    boxSlide.classList.toggle('show');
    isMenu = true;
} else {
    boxSlide.classList.toggle('hidden');
    isMenu = false;
}










fetch('ghibli.json')
    .then(response => response.json())
    .then(data => {
        const films = data.films;
        const filmsDiv = document.getElementById('films');
        films.forEach(film => {
            const filmDiv = document.createElement('div');
            filmDiv.className = 'card';
            filmDiv.innerHTML = `
                <img src="${film.poster}" alt="${film.title}">
                <h2>${film.title}</h2>
                <p>${film.description}</p>
                <p><strong>Director:</strong> ${film.director}</p>
                <p><strong>Producer:</strong> ${film.producer}</p>
                <p><strong>Release Date:</strong> ${film.release_date}</p>
                <p><strong>RT Score:</strong> ${film.rt_score}</p>
                <p><strong>People:</strong></p>
                <select>
                    ${film.people.map(person => `
                        <option value="${person.name}">${person.name}</option>
                    `).join('')}
                </select>
                <div id="selectedPerson"></div>
            `;
            filmsDiv.appendChild(filmDiv);
        });

        // Tambahkan logika untuk form pencarian
        const searchForm = document.getElementById('searchForm');
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput.value.toLowerCase();
            const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchTerm));
            filmsDiv.innerHTML = '';
            filteredFilms.forEach(film => {
                const filmDiv = document.createElement('div');
                filmDiv.className = 'card';
                filmDiv.innerHTML = `
                    <img src="${film.poster}" alt="${film.title}">
                    <h2>${film.title}</h2>
                    <p>${film.description}</p>
                    <p><strong>Director:</strong> ${film.director}</p>
                    <p><strong>Producer:</strong> ${film.producer}</p>
                    <p><strong>Release Date:</strong> ${film.release_date}</p>
                    <p><strong>RT Score:</strong> ${film.rt_score}</p>
                    <p><strong>People:</strong></p>
                    <ul>
                        ${film.people.map(person => `
                            <li>
                                <p><strong>Name:</strong> ${person.name}</p>
                                <p><strong>Gender:</strong> ${person.gender}</p>
                                <p><strong>Age:</strong> ${person.age}</p>
                                <p><strong>Eye Color:</strong> ${person.eye_color}</p>
                                <p><strong>Hair Color:</strong> ${person.hair_color}</p>
                                <p><strong>Specie:</strong> ${person.specie}</p>
                            </li>
                        `).join('')}
                    </ul>
                `;
                filmsDiv.appendChild(filmDiv);
            });
        });

        // Tambahkan logika untuk input pencarian
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchTerm));
            filmsDiv.innerHTML = '';
            filteredFilms.forEach(film => {
                const filmDiv = document.createElement('div');
                filmDiv.className = 'card';
                filmDiv.innerHTML = `
                    <img src="${film.poster}" alt="${film.title}">
                    <h2>${film.title}</h2>
                    <p>${film.description}</p>
                    <p><strong>Director:</strong> ${film.director}</p>
                    <p><strong>Producer:</strong> ${film.producer}</p>
                    <p><strong>Release Date:</strong> ${film.release_date}</p>
                    <p><strong>RT Score:</strong> ${film.rt_score}</p>
                    <p><strong>People:</strong></p>
                    <ul>
                        ${film.people.map(person => `
                            <li>
                                <p><strong>Name:</strong> ${person.name}</p>
                                <p><strong>Gender:</strong> ${person.gender}</p>
                                <p><strong>Age:</strong> ${person.age}</p>
                                <p><strong>Eye Color:</strong> ${person.eye_color}</p>
                                <p><strong>Hair Color:</strong> ${person.hair_color}</p>
                                <p><strong>Specie:</strong> ${person.specie}</p>
                            </li>
                        `).join('')}
                        </ul>
                        `;
                        filmsDiv.appendChild(filmDiv);
                    });
                });
            })
            .catch(error => console.error('Error:', error));