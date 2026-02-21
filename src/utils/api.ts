// API Configuration dan Mock Data
// Simulasi berbagai teknik rendering: SSG, SSR, CSR

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  poster: string;
  description: string;
  director: string;
  cast: string[];
  duration: number;
}

// Simulasi Static Site Generation (SSG)
// Data ini dimuat saat build time
export const getStaticMovies = (): Movie[] => {
  return [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      genre: "Drama",
      poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      director: "Frank Darabont",
      cast: ["Tim Robbins", "Morgan Freeman"],
      duration: 142
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      genre: "Action",
      poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      director: "Christopher Nolan",
      cast: ["Christian Bale", "Heath Ledger"],
      duration: 152
    },
    {
      id: 3,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Sci-Fi",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      duration: 148
    },
    {
      id: 4,
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      genre: "Crime",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      director: "Quentin Tarantino",
      cast: ["John Travolta", "Uma Thurman"],
      duration: 154
    },
    {
      id: 5,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      genre: "Sci-Fi",
      poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      director: "The Wachowskis",
      cast: ["Keanu Reeves", "Laurence Fishburne"],
      duration: 136
    },
    {
      id: 6,
      title: "Forrest Gump",
      year: 1994,
      rating: 8.8,
      genre: "Drama",
      poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
      director: "Robert Zemeckis",
      cast: ["Tom Hanks", "Robin Wright"],
      duration: 142
    },
    {
      id: 7,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      genre: "Sci-Fi",
      poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      director: "Christopher Nolan",
      cast: ["Matthew McConaughey", "Anne Hathaway"],
      duration: 169
    },
    {
      id: 8,
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
      genre: "Crime",
      poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      director: "Francis Ford Coppola",
      cast: ["Marlon Brando", "Al Pacino"],
      duration: 175
    }
  ];
};

// Simulasi Server Side Rendering (SSR)
// Data ini dimuat setiap kali halaman di-request
export const fetchMovieById = async (id: number): Promise<Movie | null> => {
  // Simulasi network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const movies = getStaticMovies();
  return movies.find(movie => movie.id === id) || null;
};

// Simulasi Client Side Rendering (CSR)
// Data ini dimuat di client setelah interaksi user
export const searchMovies = async (query: string, genre?: string): Promise<Movie[]> => {
  // Simulasi network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let movies = getStaticMovies();
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    movies = movies.filter(movie => 
      movie.title.toLowerCase().includes(lowerQuery) ||
      movie.description.toLowerCase().includes(lowerQuery) ||
      movie.director.toLowerCase().includes(lowerQuery)
    );
  }
  
  if (genre && genre !== 'All') {
    movies = movies.filter(movie => movie.genre === genre);
  }
  
  return movies;
};

// Get available genres
export const getGenres = (): string[] => {
  const movies = getStaticMovies();
  const genres = new Set(movies.map(m => m.genre));
  return ['All', ...Array.from(genres)];
};
