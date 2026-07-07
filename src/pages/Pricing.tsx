import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface PriceRow {
  name: string;
  sedan: string;
  crossover: string;
}

interface PriceGroup {
  title: string;
  rows: PriceRow[];
}

const priceGroups: PriceGroup[] = [
  {
    title: "Полировка кузова",
    rows: [
      { name: "Экспресс-полировка (1 этап)", sedan: "6 000 ₽", crossover: "8 000 ₽" },
      { name: "Полная полировка (3 этапа)", sedan: "18 000 ₽", crossover: "24 000 ₽" },
      { name: "Полировка фар", sedan: "2 500 ₽", crossover: "2 500 ₽" },
    ],
  },
  {
    title: "Керамическое покрытие",
    rows: [
      { name: "Керамика 9H (1 слой)", sedan: "18 000 ₽", crossover: "24 000 ₽" },
      { name: "Керамика 9H (3 слоя)", sedan: "28 000 ₽", crossover: "36 000 ₽" },
      { name: "Керамика для дисков", sedan: "5 000 ₽", crossover: "6 000 ₽" },
    ],
  },
  {
    title: "Химчистка салона",
    rows: [
      { name: "Экспресс-химчистка", sedan: "6 500 ₽", crossover: "8 500 ₽" },
      { name: "Полная химчистка", sedan: "12 000 ₽", crossover: "16 000 ₽" },
      { name: "Чистка багажника", sedan: "2 000 ₽", crossover: "2 500 ₽" },
    ],
  },
  {
    title: "Оклейка плёнкой",
    rows: [
      { name: "Антигравийная плёнка (полная)", sedan: "85 000 ₽", crossover: "110 000 ₽" },
      { name: "Антигравийная плёнка (частичная)", sedan: "25 000 ₽", crossover: "32 000 ₽" },
      { name: "Тонировка стёкол", sedan: "7 000 ₽", crossover: "9 000 ₽" },
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <div className="grain-overlay" />

      <SiteHeader />

      <main>
        <section className="section-padding">
          <h1 className="section-title" style={{ marginBottom: "20px" }}>
            ЦЕНЫ
          </h1>
          <p className="text-base md:text-lg mb-8 md:mb-10" style={{ color: "#555" }}>
            Полный прайс-лист на все услуги детейлинг-студии A-STAR. Итоговая стоимость зависит от состояния и марки автомобиля.
          </p>

          {priceGroups.map((group) => (
            <div key={group.title} className="price-group">
              <h2 className="price-group-title">{group.title}</h2>
              <div className="price-table">
                <div className="price-row price-row-head">
                  <span>Услуга</span>
                  <span>Легковой</span>
                  <span>Кроссовер</span>
                </div>
                {group.rows.map((row) => (
                  <div className="price-row" key={row.name}>
                    <span>{row.name}</span>
                    <span className="price-value">{row.sedan}</span>
                    <span className="price-value">{row.crossover}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
