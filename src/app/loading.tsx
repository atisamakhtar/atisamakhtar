export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}
