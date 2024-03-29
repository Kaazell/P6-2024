import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import s from "./style.module.css";

export function App() {
  return (
    <div>
      <div className={s.container}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
