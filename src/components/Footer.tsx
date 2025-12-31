import { Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Map */}
      <div className="h-64 md:h-80 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.374214764724!2d43.58073927657123!3d43.47366026402396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405a06a038de7b15%3A0xedb090523606097f!2sProspekt%20Kuliyeva%2C%2010%2C%20Nalchik%2C%20Kabardino-Balkarskaya%20Respublika%2C%20Russia%2C%20360030!5e0!3m2!1sen!2sde!4v1766994723514!5m2!1sen!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта офиса Ари Консалт - проспект Кулиева, 10, Нальчик"
        />
      </div>

      {/* Footer Content */}
      <div className="container-custom py-12 md:py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M20 2L4 38H16L20 28L24 38H36L20 2Z"
                  fill="hsl(213, 100%, 5%)"
                  stroke="hsl(43, 100%, 39%)"
                  strokeWidth="2"
                />
                <path d="M20 8L10 32H15L20 20L25 32H30L20 8Z" fill="hsl(43, 100%, 39%)" />
              </svg>
              <span className="text-xl font-serif font-bold text-accent">Ари Консалт</span>
            </a>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6">
              Комплексные бизнес-решения для вашего успеха. Бухгалтерия, 1С, защита интеллектуальной собственности и
              бережливое производство. Адаптируем ваш бизнес к 2026 году.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+79383100035"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (938) 310-00-35</span>
              </a>
              <a
                href="mailto:Ar.i.1c@yandex.ru"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Ar.i.1c@yandex.ru</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Кабардино-Балкарская Республика, г. Нальчик, проспект Кулиева, 10</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-accent mb-4">Навигация</h4>
            <nav className="space-y-2">
              {[
                { href: "#services", label: "Услуги" },
                { href: "#benefits", label: "Преимущества" },
                { href: "#process", label: "Этапы работы" },
                { href: "#offers", label: "Акции" },
                { href: "#contacts", label: "Контакты" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-accent mb-4">Информация</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div>ИНН: 0726018495</div>
              <div>ОГРН: 1170726004294</div>
              <button
                onClick={() => {
                  alert(
                    "Политика конфиденциальности: Мы защищаем ваши персональные данные в соответствии с законодательством РФ. Собранная информация используется исключительно для связи с вами и улучшения сервиса."
                  )
                }}
                className="block text-primary-foreground/70 hover:text-accent transition-colors underline"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => {
                  alert(
                    "Оферта: Данное предложение носит информационный характер. Условия и стоимость услуг согласовываются индивидуально. Подробности уточняйте у менеджера."
                  )
                }}
                className="block text-primary-foreground/70 hover:text-accent transition-colors underline"
              >
                Оферта
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © {currentYear} Ари Консалт. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

export default Footer
