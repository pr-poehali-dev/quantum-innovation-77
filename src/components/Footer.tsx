import Icon from "@/components/ui/icon"

export function Footer() {
  const footerLinks = {
    "Конструктор": ["Страховые продукты", "Тарифные планы", "Покрытия и риски", "Правила страхования", "Аналитика", "Безопасность", "Мобильный доступ"],
    "Компания": ["О нас", "Клиенты", "Карьера", "Новости", "Качество", "Бренд", "Лицензии"],
    "Партнёрам": ["Брокерам", "Агентам", "Банкам", "Маркетплейсам", "Программа партнёрства"],
    "Ресурсы": ["Документация API", "Статус системы", "Вебинары", "Сообщить об уязвимости", "GDPR", "Конфиденциальность", "Условия"],
    "Связаться": ["Контакты", "Сообщество", "Telegram", "LinkedIn", "YouTube"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Bird" className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold text-sm">Альбатрос</span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Конструктор страховых продуктов нового поколения
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 СК «Альбатрос». Все права защищены.</p>
          <p className="text-zinc-700 text-xs">Лицензия ЦБ РФ № С-ХXXX от 01.01.2020</p>
        </div>
      </div>
    </footer>
  )
}
