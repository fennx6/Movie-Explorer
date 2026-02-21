import { Filter } from 'lucide-react';

interface FilterSectionProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export function FilterSection({ genres, selectedGenre, onGenreChange }: FilterSectionProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2 text-gray-700">
        <Filter className="w-5 h-5" />
        <span className="font-medium">Filter:</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedGenre === genre
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
