import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЕЗ ЦАРАПИН,
              <br />
              ТОЛЬКО <span>БЛЕСК</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">Современная детейлинг студия. Полировка, химчистка, керамика и оклейка плёнкой — вернём Вашему автомобилю заводской блеск и защитим на годы.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Записаться на детейлинг
              </button>
              <Link to="/pricing" className="btn-cta" style={{ background: "white" }}>Узнать цены</Link>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/bucket/a2211419-11d3-4f58-b32a-2697ac69e607.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="sticker">
              ГАРАНТИЯ
              <br />
              КАЧЕСТВА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЗЕРКАЛО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЛЕСК
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПОЛИРОВКА КУЗОВА * ХИМЧИСТКА САЛОНА * КЕРАМИЧЕСКОЕ ПОКРЫТИЕ * ОКЛЕЙКА ПЛЁНКОЙ * ЗАЩИТА НА ГОДЫ *
            ПОЛИРОВКА КУЗОВА * ХИМЧИСТКА САЛОНА * КЕРАМИЧЕСКОЕ ПОКРЫТИЕ * ОКЛЕЙКА ПЛЁНКОЙ * ЗАЩИТА НА ГОДЫ
          </div>
        </div>

        <section className="section-padding" id="services">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="/pricing"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все цены
            </a>
          </div>

          <div className="menu-grid">
            {/* Услуга 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/bucket/7510bff0-f779-4506-994d-d5ffc8d828e5.PNG"
                alt="Керамическое покрытие"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Керамическое покрытие </h3>
                  <span className="price text-orange-600">от 18 000 </span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Многослойное керамическое покрытие. Защита от царапин, грязи и УФ на 2-3 года.
                </p>
              </div>
            </div>

            {/* Услуга 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Блеск
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/ba23d173-5bdb-4578-8716-bade84733db1.jpg"
                alt="Полировка кузова"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Полировка кузова</h3>
                  <span className="price">от 9 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Уберём вихры и царапины, вернём заводской глубокий блеск.</p>
              </div>
            </div>

            {/* Услуга 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Чистота
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/bucket/d3784629-0208-4f57-bc68-57f047f83221.PNG"
                alt="Химчистка салона"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Химчистка салона</h3>
                  <span className="price">от 6 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Глубокая чистка сидений, потолка и пластика. Салон как новый — без запахов и пятен.
                </p>
              </div>
            </div>

            {/* Услуга 4 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)", color: "white" }}>
                Уход
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/9e103d20-c0a0-4340-84d7-ff3b5133de73.jpg"
                alt="Детейлинг мойка"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Детейлинг мойка</h3>
                  <span className="price">от 6 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Бережная ручная мойка с бесконтактной пеной, чернение резины и полировка стёкол.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe" id="about">
          <div>
            <h2 className="vibe-title">РАБОТАЕМ РУКАМИ И ДУШОЙ.</h2>
            <p className="vibe-text text-[#ffffff] font-medium">Мы работаем только на результат. Каждый автомобиль проходит через руки мастера с большим опытом. Профессиональная химия, современное оборудование и внимание к каждой детали — от дисков до подстаканников, вот наш подход! 
И да, отдаём машину только когда сами в восторге от результата 😎</p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>Подробнее</button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/4cc7add0-0ab6-403d-8916-91e01360c7e3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding" id="gallery">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАШИ РАБОТЫ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/ba23d173-5bdb-4578-8716-bade84733db1.jpg"
                alt="Работа 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/f0fb08b4-3e83-478b-a7c4-ebe4496f9db8.jpg"
                alt="Работа 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/4cc7add0-0ab6-403d-8916-91e01360c7e3.jpg"
                alt="Работа 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/3b4fd30c-8c16-4f13-8d49-66e73a9fc3a1/files/ba23d173-5bdb-4578-8716-bade84733db1.jpg"
                alt="Работа 4"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}