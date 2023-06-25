import { BrowserRouter } from "react-router-dom";
import { AppRoutes as Routes } from "./Routes";
import { Toaster } from "react-hot-toast";
import { GlobalContextWrapper } from "./context/GlobalContextWrapper";
import "./App.css";

const App = () => {
  return (
    <GlobalContextWrapper>
      <header>
        <h1><a href="/">Anime DB</a></h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </main>
      <footer></footer>
      <Toaster />
    </GlobalContextWrapper>
  );
};

export { App };
