import { ArrowUpRight, SparkIcon } from "@/components/icons";
import { HeroConsole } from "@/components/hero-console";
import { SiteHeader } from "@/components/site-header";
import { cases, processSteps, services } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#content">Перейти к содержанию</a>
      <SiteHeader />
      <main id="content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><SparkIcon /> Цифровая студия нового типа</p>
              <h1>Сайты, которые <span>не теряются</span> среди шаблонов.</h1>
              <p className="hero-lead">Соединяем стратегию, сильный визуальный язык и аккуратную разработку — от первого экрана до заявки.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://t.me/kodbuster" target="_blank" rel="noreferrer">
                  Обсудить проект <ArrowUpRight />
                </a>
                <a className="button button-ghost" href="#cases">Посмотреть кейсы</a>
              </div>
              <dl className="hero-facts">
                <div><dt>Фокус</dt><dd>Бизнес-результат</dd></div>
                <div><dt>Подход</dt><dd>Дизайн + код</dd></div>
                <div><dt>Контроль</dt><dd>Browser QA</dd></div>
              </dl>
            </div>
            <HeroConsole />
          </div>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-title">
          <div className="container manifesto-grid">
            <p className="section-code">[ ПРИНЦИП ]</p>
            <div>
              <h2 id="manifesto-title">Красиво — недостаточно.</h2>
              <p>Каждое решение должно объяснять продукт, укреплять доверие и вести человека к действию. Поэтому мы проектируем сайт как рабочий инструмент бизнеса, а не как набор модных эффектов.</p>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading">
              <p className="section-code">[ ЧТО ДЕЛАЕМ ]</p>
              <h2 id="services-title">От идеи до работающего релиза.</h2>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.index}>
                  <span className="service-index">{service.index}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ArrowUpRight className="service-icon" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cases section-pad" id="cases" aria-labelledby="cases-title">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <p className="section-code">[ ИЗБРАННЫЕ ПРОЕКТЫ ]</p>
                <h2 id="cases-title">Работа, которую можно открыть.</h2>
              </div>
              <p>Не макеты в вакууме, а реальные проекты и направления, с которыми мы работаем.</p>
            </div>
            <div className="case-grid">
              {cases.map((item, index) => (
                <a className={`case-card case-${item.tone}`} href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                  <span className="case-number">0{index + 1}</span>
                  <div className="case-shape" aria-hidden="true"><span>{item.title.slice(0, 1)}</span></div>
                  <div className="case-caption">
                    <div><span>{item.category}</span><h3>{item.title}</h3></div>
                    <ArrowUpRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-pad" id="process" aria-labelledby="process-title">
          <div className="container process-layout">
            <div className="process-intro">
              <p className="section-code">[ КАК РАБОТАЕМ ]</p>
              <h2 id="process-title">Понятный процесс без чёрного ящика.</h2>
              <p>На каждом этапе видно, что уже решено, что проверяем сейчас и какой результат должен появиться дальше.</p>
            </div>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="container contact-card">
            <div>
              <p className="section-code">[ СТАРТ ПРОЕКТА ]</p>
              <h2 id="contact-title">Есть задача?<br />Давайте разберём.</h2>
            </div>
            <div className="contact-action">
              <p>Напишите, что нужно запустить или переделать. Ответим по существу и предложим следующий шаг.</p>
              <a className="button button-dark" href="https://t.me/kodbuster" target="_blank" rel="noreferrer">
                Написать в Telegram <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">K</span><span>KODBUSTER</span></a>
          <p>Сайты с характером и системой.</p>
          <p>© {new Date().getFullYear()} KodBuster</p>
        </div>
      </footer>
    </>
  );
}
