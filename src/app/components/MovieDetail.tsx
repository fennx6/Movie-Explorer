import { X, Star, Calendar, Clock, User, Users } from 'lucide-react';
import { Movie } from '../../utils/api';

interface MovieDetailProps {
  movie: Movie;
  onClose: () => void;
}

export function MovieDetail({ movie, onClose }: MovieDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-5 h-5" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>{movie.duration} min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              {movie.genre}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Sinopsis</h3>
            <p className="text-gray-700 leading-relaxed">{movie.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold">Director</h3>
              </div>
              <p className="text-gray-700">{movie.director}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold">Cast</h3>
              </div>
              <p className="text-gray-700">{movie.cast.join(', ')}</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button
              onClick={onClose}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
