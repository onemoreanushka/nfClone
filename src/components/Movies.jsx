const Movies = [
    {
      id: 1,
      title: "Inception",
      slug: "inception",
      genre: "Sci-Fi",
      year: 2010,
      image: "https://filmfisher.com/wp-content/uploads/2014/03/inception_ver12_xlg-600x885.jpg",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      imdb_rating: 8.8,
      actor: "Leonardo DiCaprio",
      director: "Christopher Nolan",
      youtube_trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      slug: "interstellar",
      genre: "Adventure, Drama, Sci-Fi",
      year: 2014,
      image: "https://s4844.pcdn.co/wp-content/uploads/2014/11/interstellar-photos-pictures-stills1-scaled.jpg",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      imdb_rating: 8.6,
      actor: "Matthew McConaughey",
      director: "Christopher Nolan",
      youtube_trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      slug: "shawshank-redemption",
      genre: "Drama",
      year: 1994,
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imdb_rating: 9.3,
      actor: "Tim Robbins",
      director: "Frank Darabont",
      youtube_trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
    },
    {
      id: 4,
      title: "Fight Club",
      slug: "fight-club",
      genre: "Drama",
      year: 1999,
      image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      imdb_rating: 8.8,
      actor: "Edward Norton",
      director: "David Fincher",
      youtube_trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
    },
    {
      id: 5,
      title: "The Dark Knight",
      slug: "the-dark-knight",
      genre: "Action, Crime, Drama",
      year: 2008,
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imdb_rating: 9.0,
      actor: "Christian Bale",
      director: "Christopher Nolan",
      youtube_trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    {
      id: 6,
      title: "The Matrix",
      slug: "the-matrix",
      genre: "Action, Sci-Fi",
      year: 1999,
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      imdb_rating: 8.7,
      actor: "Keanu Reeves",
      director: "Lana Wachowski, Lilly Wachowski",
      youtube_trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },
    {
      id: 7,
      title: "Parasite",
      slug: "parasite",
      genre: "Thriller, Drama",
      year: 2019,
      image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      imdb_rating: 8.6,
      actor: "Song Kang-ho",
      director: "Bong Joon-ho",
      youtube_trailer: "https://www.youtube.com/watch?v=SEUXfv87Wpk"
    },
    {
      id: 8,
      title: "Forrest Gump",
      slug: "forrest-gump",
      genre: "Drama, Romance",
      year: 1994,
      image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      imdb_rating: 8.8,
      actor: "Tom Hanks",
      director: "Robert Zemeckis",
      youtube_trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
    },
    {
        id: 9,
        title: "La La Land",
        slug: "la-la-land",
        genre: "Romance, Musical",
        year: 2016,
        image: "https://resizing.flixster.com/zNPeoE45iOdRndAq0ezZPXb1dEY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12386480_p_v10_aj.jpg",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
        imdb_rating: 8.0,
        actor: "Ryan Gosling, Emma Stone",
        director: "Damien Chazelle",
        youtube_trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
      },
      {
        id: 10,
        title: "The Grand Budapest Hotel",
        slug: "grand-budapest-hotel",
        genre: "Comedy, Drama",
        year: 2014,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVriSmEnozpKajHMNm_33JQ7ZWF88lAACCaQ&s",
        description: "A concierge teams up with one of his employees to prove his innocence after he is framed for murder.",
        imdb_rating: 8.1,
        actor: "Ralph Fiennes, Tony Revolori",
        director: "Wes Anderson",
        youtube_trailer: "https://www.youtube.com/watch?v=1Fg5iWmQjwk"
      },
      {
        id: 11,
        title: "Portrait of a Lady on Fire",
        slug: "portrait-of-a-lady-on-fire",
        genre: "Drama, Romance",
        year: 2019,
        image: "https://m.media-amazon.com/images/M/MV5BZjJlYWJlYmMtNjMyMS00ZDgxLTlmNjAtOTJhMzBiZWM5N2VmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
        imdb_rating: 8.1,
        actor: "Noémie Merlant, Adèle Haenel",
        director: "Céline Sciamma",
        youtube_trailer: "https://www.youtube.com/watch?v=R-fQPTwma9o"
      },
      {
        id: 12,
        title: "Her",
        slug: "her",
        genre: "Drama, Romance, Sci-Fi",
        year: 2013,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBP7r0Q4wbG92TFdxkrvO7H6Fl3pnAua9jKvqq_rzPqJCBY35CS20jkMf8Fx0jq2AQ46c&usqp=CAU",
        description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        imdb_rating: 8.0,
        actor: "Joaquin Phoenix, Scarlett Johansson (voice)",
        director: "Spike Jonze",
        youtube_trailer: "https://youtu.be/dJTU48_yghs?feature=shared"
      }
  ];
  
  export default Movies;
  