import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry, we could not find that page.</p>
      <Link to="/" className="button">Back to Home</Link>
    </div>
  );
}

export default NotFound;
