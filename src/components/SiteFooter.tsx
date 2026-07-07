export default function SiteFooter() {
  return (
    <footer id="footer">
      <div>
        <div className="footer-logo">A-STAR</div>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Детейлинг студия для тех, кто любит своё авто. Полировка, керамика, химчистка и оклейка плёнкой с гарантией.
        </p>
      </div>
      <div className="footer-links">
        <h4>Услуги</h4>
        <ul>
          <li>
            <a href="/#services" style={{ color: "inherit", textDecoration: "none" }}>
              Полировка кузова
            </a>
          </li>
          <li>
            <a href="/#services" style={{ color: "inherit", textDecoration: "none" }}>
              Керамическое покрытие
            </a>
          </li>
          <li>
            <a href="/#services" style={{ color: "inherit", textDecoration: "none" }}>
              Химчистка салона
            </a>
          </li>
          <li>
            <a href="/#services" style={{ color: "inherit", textDecoration: "none" }}>
              Оклейка плёнкой
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <h4>Часы работы</h4>
        <ul>
          <li>Пн-Пт: 09:00 - 21:00</li>
          <li>Сб: 10:00 - 20:00</li>
          <li>Вс: 10:00 - 18:00</li>
          <li>Запись по телефону</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span>2026 A-STAR</span>
        <span>ЗАЩИТА И БЛЕСК</span>
        <span>IG / TG / VK</span>
      </div>
    </footer>
  );
}
