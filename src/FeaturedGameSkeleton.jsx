function FeaturedGameSkeleton() {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 border border-glow p-6 rounded-lg bg-card animate-pulse">
        {/* Bild-placeholder */}
        <div className="w-full md:w-64 h-80 bg-purple-700 rounded" />
  
        {/* Text-placeholder */}
        <div className="flex-1 space-y-4">
          <div className="h-6 bg-secondary rounded w-1/2" />
          <div className="h-4 bg-secondary rounded w-full" />
          <div className="h-4 bg-secondary rounded w-3/4" />
          <div className="h-10 bg-secondary rounded w-32" />
        </div>
      </div>
    )
  }
  
  export default FeaturedGameSkeleton;
  