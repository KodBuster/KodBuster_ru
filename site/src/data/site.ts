export const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contact" },
] as const;

export const services = [
  {
    index: "01",
    title: "Лендинги",
    text: "Одна сильная страница с понятным предложением, аргументами и маршрутом до заявки.",
  },
  {
    index: "02",
    title: "Корпоративные сайты",
    text: "Масштабируемая структура для услуг, кейсов, контента и дальнейшего развития бизнеса.",
  },
  {
    index: "03",
    title: "Интерактив и 3D",
    text: "Motion и WebGL там, где они усиливают продукт, а не просто увеличивают загрузку.",
  },
] as const;

export const cases = [
  { title: "Rampa", category: "Веб-проект", href: "https://rampadel.ru/", tone: "acid" },
  { title: "Synonym", category: "Jewelry / e-commerce", href: "https://synonym-jewelry.ru/", tone: "ice" },
  { title: "Шародую", category: "Сервис / каталог", href: "https://sharoduwi.ru/", tone: "signal" },
  { title: "Funshar", category: "События / продажи", href: "https://funshar.ru/", tone: "ember" },
] as const;

export const processSteps = [
  { number: "1", title: "Разбираем задачу", text: "Цель, аудитория, предложение, ограничения и критерии результата." },
  { number: "2", title: "Создаём направление", text: "Структура, прототип, тексты и одна цельная визуальная система." },
  { number: "3", title: "Собираем и проверяем", text: "Адаптив, интерактивы, скорость, SEO и реальные браузерные сценарии." },
  { number: "4", title: "Запускаем", text: "Чистая сборка, аналитика, инструкции и понятный путь дальнейших обновлений." },
] as const;
