export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border-4 border-indigo-100 border-b-indigo-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
