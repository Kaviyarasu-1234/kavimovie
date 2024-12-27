const tamilMovieData = [
    { "Film": "Vikram", "Genre": "Action" },
    { "Film": "Master", "Genre": "Action" },
    { "Film": "Karnan", "Genre": "Drama" },
    { "Film": "Soorarai Pottru", "Genre": "Drama" },
    { "Film": "Kaithi", "Genre": "Action" },
    { "Film": "Mersal", "Genre": "Action" },
    { "Film": "Kabali", "Genre": "Action" },
    { "Film": "Thuppakki", "Genre": "Action" },
    { "Film": "Enthiran", "Genre": "Science Fiction" },
    { "Film": "Anniyan", "Genre": "Thriller" },
    { "Film": "Ghajini", "Genre": "Thriller" },
    { "Film": "Baahubali: The Beginning", "Genre": "Action" },
    { "Film": "Baahubali: The Conclusion", "Genre": "Action" },
    { "Film": "Rajini Murugan", "Genre": "Comedy" },
    { "Film": "Sivaji", "Genre": "Action" },
    { "Film": "Vedalam", "Genre": "Action" },
    { "Film": "Theri", "Genre": "Action" },
    { "Film": "Vada Chennai", "Genre": "Crime" },
    { "Film": "Nerkonda Paarvai", "Genre": "Drama" },
    { "Film": "Bairavaa", "Genre": "Action" },
    { "Film": "Vikram Vedha", "Genre": "Action" },
    { "Film": "Kajal", "Genre": "Romance" },
    { "Film": "Alai Payuthey", "Genre": "Romance" },
    { "Film": "Madharasapattinam", "Genre": "Romance" },
    { "Film": "Tanu Weds Manu", "Genre": "Romance" },
    { "Film": "Sundarapandian", "Genre": "Romance" },
    { "Film": "Kaatru Veliyidai", "Genre": "Romance" },
    { "Film": "Thirupaachi", "Genre": "Action" },
    { "Film": "Peranmai", "Genre": "Action" },
    { "Film": "Jilla", "Genre": "Action" },
    { "Film": "Kochadaiiyaan", "Genre": "Historical" },
    { "Film": "Sye Raa Narasimha Reddy", "Genre": "Historical" },
    { "Film": "Singam", "Genre": "Action" },
    { "Film": "Singam 2", "Genre": "Action" },
    { "Film": "Kumki", "Genre": "Drama" },
    { "Film": "Petta", "Genre": "Action" },
    { "Film": "Maanagaram", "Genre": "Thriller" },
    { "Film": "Billa", "Genre": "Action" },
    { "Film": "Sarkar", "Genre": "Action" },
    { "Film": "Mankatha", "Genre": "Thriller" },
    { "Film": "Vishwaroopam", "Genre": "Action" },
    { "Film": "Veeram", "Genre": "Action" },
    { "Film": "Kaala", "Genre": "Action" },
    { "Film": "Aramm", "Genre": "Drama" },
    { "Film": "Dhanush's Karnan", "Genre": "Drama" },
    { "Film": "Kalyana Samayal Saadham", "Genre": "Romance" },
    { "Film": "Naanum Rowdy Dhaan", "Genre": "Comedy" },
    { "Film": "Kuttram 23", "Genre": "Thriller" },
    { "Film": "Motta Shiva Ketta Shiva", "Genre": "Action" },
    { "Film": "Kumbalangi Nights", "Genre": "Drama" },
    { "Film": "Kochadaiiyaan", "Genre": "Action" },
    { "Film": "Vishwaroopam 2", "Genre": "Action" },
    { "Film": "Iru Mugan", "Genre": "Action" },
    { "Film": "Siddharth's The House Next Door", "Genre": "Horror" },
    { "Film": "Super Deluxe", "Genre": "Drama" },
    { "Film": "Kaathuvaakula Rendu Kaadhal", "Genre": "Romance" },
    { "Film": "Theeran Adhigaaram Ondru", "Genre": "Action" },
    { "Film": "Vaanam Kottattum", "Genre": "Drama" },
    { "Film": "Kumudham", "Genre": "Romance" },
    { "Film": "Vada Chennai", "Genre": "Crime" },
    { "Film": "Oru Kal Oru Kannadi", "Genre": "Romance" },
    { "Film": "Adhe Kangal", "Genre": "Thriller" },
    { "Film": "Raja Rani", "Genre": "Romance" },
    { "Film": "Enakku 20 Unakku 18", "Genre": "Comedy" },
    { "Film": "Kathi Sandai", "Genre": "Action" },
    { "Film": "Petromax", "Genre": "Horror" },
    { "Film": "Veeram", "Genre": "Action" },
    { "Film": "Thirunaal", "Genre": "Drama" },
    { "Film": "Kuttram 23", "Genre": "Thriller" }
];

const recommendButton = document.getElementById('recommendButton');
const genreSelect = document.getElementById('genre');
const movieList = document.getElementById('movie-list');

recommendButton.addEventListener('click', function() {
    const selectedGenre = genreSelect.value;
    const filteredMovies = tamilMovieData.filter(movie => movie.Genre === selectedGenre);

    // Clear previous recommendations
    movieList.innerHTML = '';

    // Display filtered movie recommendations
    filteredMovies.forEach(movie => {
        const listItem = document.createElement('li');
        
        // Create a link for each movie
        const movieLink = document.createElement('a');
        movieLink.href = `https://www.google.com/search?q=${encodeURIComponent(movie.Film)}`;
        movieLink.target = '_blank';
        movieLink.textContent = movie.Film;
        
        // Append the link to the list item
        listItem.appendChild(movieLink);
        movieList.appendChild(listItem);
    });
});
