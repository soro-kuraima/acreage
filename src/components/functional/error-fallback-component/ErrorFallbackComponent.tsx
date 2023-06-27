type Props = {
  error?: Error;
};

export function ErrorFallbackComponent({ error }: Props) {
  return (
    <div className="w-screen">
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <button
        type="submit"
        onClick={() => {
          window.location.href = '/';
        }}>
        Click here to reload the app
      </button>
    </div>
  );
}
