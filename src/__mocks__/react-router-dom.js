import React from "react";

// Simple mock tanpa depend ke module asli
const BrowserRouter = ({ children }) => (
  <div data-testid="mock-browser-router">{children}</div>
);
const Routes = ({ children }) => (
  <div data-testid="mock-routes">{children}</div>
);
const Route = ({ element }) => element || null;
const Link = ({ children, to, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

module.exports = {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/" }),
  useParams: () => ({}),
};
