import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, ArrowRight, MessageSquare, FileCheck, X, Puzzle, BarChart3 } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Запросы брокеров",
    title: "Мгновенно реагируйте на запросы партнёров",
    icon: ArrowRight,
    mockup: "broker",
  },
  {
    id: 2,
    category: "Согласование правил",
    title: "Автоматизируйте проверку правил страхования",
    icon: Plus,
    mockup: "approval",
  },
  {
    id: 3,
    category: "Мобильный доступ",
    title: "Управляйте продуктами из любой точки",
    icon: ArrowRight,
    mockup: "mobile",
  },
  {
    id: 4,
    category: "Клиентские заявки",
    title: "Превращайте запросы в страховые продукты",
    icon: ArrowRight,
    mockup: "asks",
  },
  {
    id: 5,
    category: "Интеграции",
    title: "50+ интеграций с системами СК",
    icon: ArrowRight,
    mockup: "integrations",
  },
  {
    id: 6,
    category: "Аналитика",
    title: "Данные для принятия тарифных решений",
    icon: ArrowRight,
    mockup: "analytics",
  },
  {
    id: 7,
    category: "Для разработчиков",
    title: "Создавайте модули через Альбатрос API",
    icon: ArrowRight,
    mockup: "api",
  },
]

function BrokerMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Брокер</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-500">broker@partner.ru</span>
      </div>
      <p className="text-sm text-zinc-300">
        Нужен расчёт тарифа КАСКО <span className="text-zinc-500">для...</span>
      </p>

      <div className="mt-2 flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
        <div className="w-5 h-5 bg-blue-700 rounded flex items-center justify-center">
          <span className="text-[10px] text-white">А</span>
        </div>
        <span className="text-sm text-zinc-300">Авто-Логистик</span>
        <span className="text-xs text-zinc-500">Новый запрос</span>
      </div>

      <div className="mt-1 flex items-center gap-2 bg-zinc-800/30 rounded-lg px-3 py-2">
        <div className="w-5 h-5 bg-yellow-500/20 rounded flex items-center justify-center">
          <span className="text-[10px] text-yellow-500">◆</span>
        </div>
        <span className="text-sm text-zinc-400">Флот 20 авто</span>
        <span className="text-xs text-zinc-500">корпоративный</span>
      </div>

      <div className="mt-1 flex items-center gap-2 px-3 py-2">
        <div className="w-4 h-4 rounded-full border border-zinc-600" />
        <span className="text-sm text-zinc-500">Срок подачи</span>
        <div className="ml-2 flex items-center gap-1 text-xs text-zinc-600">
          <span>Q2 2026</span>
        </div>
      </div>
    </div>
  )
}

function ApprovalMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs">
        <FileCheck className="w-3.5 h-3.5 text-zinc-500" />
        <span className="text-zinc-400">#РУ-2026</span>
        <span className="text-zinc-500">правила/каско-стандарт</span>
        <span className="text-blue-400/70">ред. 3...</span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">Актуарий</span>
          <span className="text-zinc-600">согласовал тарифную ставку</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">Юрист</span>
          <span className="text-zinc-600">проверил правила страхования</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">ЦБ РФ</span>
          <span className="text-zinc-600">проверка соответствия пройдена</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">Директор</span>
          <span className="text-zinc-600">утвердил продукт к запуску</span>
        </div>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-800 rounded-full" />
        <div className="mt-6 px-3">
          <div className="text-[10px] text-zinc-400 mb-2">Мои продукты</div>
          <div className="space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 bg-zinc-800/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AsksMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-2xl bg-zinc-800 flex items-center justify-center">
        <X className="w-12 h-12 text-zinc-400" strokeWidth={2.5} />
      </div>
    </div>
  )
}

function IntegrationsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
            <Puzzle className="w-5 h-5 text-zinc-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <BarChart3 className="w-16 h-16 text-blue-400/60" />
      </div>
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-zinc-800/50 rounded-lg px-4 py-2 border border-zinc-700/50">
        <span className="text-xs font-mono text-zinc-400">ALBATROS API</span>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "broker":
      return <BrokerMockup />
    case "approval":
      return <ApprovalMockup />
    case "mobile":
      return <MobileMockup />
    case "asks":
      return <AsksMockup />
    case "integrations":
      return <IntegrationsMockup />
    case "analytics":
      return <AnalyticsMockup />
    case "api":
      return <ApiMockup />
    default:
      return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Процессы и интеграции</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Работайте слаженно
              <br />
              со всеми системами СК
            </h2>
          </div>

          {/* Description */}
          <div className="lg:max-w-sm">
            <p className="text-zinc-400 leading-relaxed mb-6">
              Альбатрос интегрируется с АИС страховщика, CRM, системами урегулирования убытков и брокерскими платформами — без дублирования данных.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${scrollPosition} * (280px + 16px)))`,
            }}
          >
            {carouselCards.map((card) => (
              <div
                key={card.id}
                className="shrink-0 w-[280px] h-[320px] bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden cursor-pointer transition-colors flex flex-col"
              >
                {/* Card mockup */}
                <div className="flex-1 overflow-hidden">
                  <CardMockup type={card.mockup} />
                </div>

                {/* Card footer */}
                <div className="p-5 border-t border-zinc-800/50">
                  <div className="text-xs text-zinc-500 mb-1">{card.category}</div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-zinc-200 font-medium leading-tight flex-1 mr-3">{card.title}</h3>
                    <card.icon className="w-4 h-4 text-zinc-500 shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
