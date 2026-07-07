import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="header">
      <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
        A-STAR
      </Link>
      <nav>
        <Link to="/#services">Услуги</Link>
        <Link to="/pricing">Цены</Link>
        <Link to="/#about">О нас</Link>
        <Link to="/#gallery">Работы</Link>
        <Link to="/#footer">Контакты</Link>
      </nav>
      <button className="btn-cta">Записаться</button>
    </header>
  );
}
