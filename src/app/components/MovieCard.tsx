import { Star, Clock } from 'lucide-react';
import { Movie } from '../../utils/api';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-sm font-semibold">{movie.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{movie.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
            {movie.genre}
          </span>
          <span>{movie.year}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{movie.duration} min</span>
        </div>
      </div>
    </div>
  );
}
