function GameCardSkeleton() {
    return (
      <div className="bg-card animate-pulse rounded p-4 h-[340px] flex flex-col justify-between">
        <div className="bg-secondary h-48 rounded mb-4" />
        <div className="h-4 bg-secondary rounded w-3/4 mb-2" />
        <div className="h-4 bg-secondary rounded w-1/2" />
      </div>
    )
  }
  
  export default GameCardSkeleton;
  