import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";

import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFoundPage from "./components/404";

const Country = lazy(() => import("./pages/Country"));
const Home = lazy(() => import("./pages/Home"));

function App() {
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
    <div
      className={`App ${
        theme === "dark" ? "dark" : ""
      } transition-all ease-in-out duration-1000 bg min-w-full  min-h-screen h-full`}
    >
      <main className="bg-body-bg dark:bg-dark-body-bg min-w-full  min-h-screen h-full">
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
      </main>
    </div>
  );
}

export default App;
