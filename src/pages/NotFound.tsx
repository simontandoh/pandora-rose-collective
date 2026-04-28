const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md border border-border bg-card p-8 text-center">
        <p className="label-accent mb-4">404</p>
        <h1 className="mb-4 font-serif text-4xl font-medium">Page not found</h1>
        <p className="mb-8 text-muted-foreground">
          This route is not part of the current Pandora Rose site.
        </p>
        <a href="/" className="btn-secondary">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
