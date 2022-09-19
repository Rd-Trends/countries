import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";

import Navbar from "./components/Navbar";
import NotFoundPage from "./components/404";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
const Country = lazy(() => import("./pages/country"));
const Home = lazy(() => import("./pages/home"));

const App = () => {
  const defaultTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Navbar switchTheme={switchTheme} theme={theme} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:country" element={<Country />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
