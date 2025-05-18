
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-200" />
        <span>Loading...</span>
      </div>
    </div>
  );
}