import { useState, useEffect } from 'react';
import { Film, Info } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { MovieDetail } from './components/MovieDetail';
import { SearchBar } from './components/SearchBar';
import { FilterSection } from './components/FilterSection';
import { LoadingSpinner } from './components/LoadingSpinner';
import { getStaticMovies, fetchMovieById, searchMovies, getGenres, Movie } from '../utils/api';

function App() {
  // STATE MANAGEMENT (Client Side Rendering - CSR)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // STATIC SITE GENERATION (SSG) - Data dimuat saat komponen pertama kali mount
  const staticMovies = getStaticMovies();
  const genres = getGenres();

  // Initial load - simulasi SSG
  useEffect(() => {
    setDisplayedMovies(staticMovies);
  }, []);

  // CLIENT SIDE RENDERING (CSR) - Search dan filter dengan useState
  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      try {
        const results = await searchMovies(searchQuery, selectedGenre);
        setDisplayedMovies(results);
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [searchQuery, selectedGenre]);

  // SERVER SIDE RENDERING (SSR) - Data detail dimuat saat user klik film
  const handleMovieClick = async (movieId: number) => {
    setIsDetailLoading(true);
    try {
      const movie = await fetchMovieById(movieId);
      if (movie) {
        setSelectedMovie(movie);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Film className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Movie Explorer</h1>
                <p className="text-sm text-gray-600">Discover amazing movies</p>
              </div>
            </div>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
            >
              <Info className="w-5 h-5" />
              <span className="hidden sm:inline">Rendering Info</span>
            </button>
          </div>

          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={handleClearSearch}
          />
        </div>
      </header>

      {/* Info Panel */}
      {showInfo && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-bold mb-3">Teknik Rendering yang Diterapkan:</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">🔄 SSG (Static Site Generation)</h3>
                <p className="text-sm text-white/90">
                  Data film awal dimuat saat aplikasi pertama kali dibuka. Data sudah tersedia secara statis.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">⚡ SSR (Server Side Rendering)</h3>
                <p className="text-sm text-white/90">
                  Detail film dimuat secara dinamis saat Anda mengklik film. Simulasi fetch data dari server.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">🎯 CSR (Client Side Rendering)</h3>
                <p className="text-sm text-white/90">
                  Search dan filter menggunakan state management (useState) untuk interaksi real-time di client.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <FilterSection
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            {loading ? (
              <span>Searching...</span>
            ) : (
              <span>
                Found <span className="font-semibold text-indigo-600">{displayedMovies.length}</span> movies
                {searchQuery && (
                  <span> matching "{searchQuery}"</span>
                )}
                {selectedGenre !== 'All' && (
                  <span> in {selectedGenre}</span>
                )}
              </span>
            )}
          </p>
        </div>

        {/* Movies Grid */}
        {loading ? (
          <LoadingSpinner />
        ) : displayedMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Film className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No movies found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {/* Movie Detail Modal - SSR Simulation */}
      {isDetailLoading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8">
            <LoadingSpinner />
            <p className="text-center mt-4 text-gray-600">Loading movie details...</p>
          </div>
        </div>
      )}

      {selectedMovie && !isDetailLoading && (
        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Built with <span className="text-red-500">♥</span> using React + TypeScript + Tailwind CSS
            </p>
            <p className="text-sm">
              Demonstrating SSG, SSR, and CSR rendering techniques with dynamic API data
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
