import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-teal">404</p>
      <h1 className="mt-2 text-2xl font-bold text-navy">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-secondary">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="mt-6">
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}
