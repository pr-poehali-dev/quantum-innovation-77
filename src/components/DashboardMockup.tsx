import type React from "react"
import { motion } from "framer-motion"
import {
  Inbox,
  CircleUser,
  Layers,
  FolderKanban,
  LayoutGrid,
  Users,
  ShieldCheck,
  Map,
  FileText,
  ChevronDown,
  ChevronRight,
  Bird,
  Search,
  Plus,
  Link2,
  MoreHorizontal,
  Sparkles,
  Settings,
  HelpCircle,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full bg-zinc-900/80 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Bird className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold text-sm">Альбатрос</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Поиск...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={Inbox} label="Входящие" badge={3} active />
          <NavItem icon={CircleUser} label="Мои продукты" />
        </div>

        {/* Workspace section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Рабочее пространство
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Layers} label="Линейки продуктов" hasSubmenu />
            <NavItem icon={FolderKanban} label="Продукты" hasSubmenu />
            <NavItem icon={LayoutGrid} label="Шаблоны" hasSubmenu />
            <NavItem icon={Users} label="Команда" hasSubmenu />
          </div>
        </div>

        {/* Favorites section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Избранное
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={ShieldCheck} label="КАСКО Стандарт" color="text-blue-400" />
            <NavItem icon={Map} label="Дорожная карта Q2" color="text-orange-400" />
            <NavItem icon={FileText} label="Правила страхования" color="text-emerald-400" />
          </div>
        </div>

        {/* Teams section */}
        <div className="mt-5 px-3 flex-1">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Направления
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Sparkles} label="Розничные продукты" hasSubmenu />
            <NavItem icon={Settings} label="Корпоративные" hasSubmenu />
          </div>
        </div>

        {/* Bottom */}
        <div className="p-3 border-t border-zinc-800/50">
          <NavItem icon={HelpCircle} label="Помощь" />
        </div>
      </motion.div>

      {/* Inbox List */}
      <motion.div
        className="w-[320px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Входящие задачи</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <InboxItem
            id="INS-135"
            title="Согласование тарифов КАСКО"
            subtitle="Актуарий назначил вам"
            time="2ч"
            avatar="https://i.pravatar.cc/32?img=1"
            status="in-progress"
            active
          />
          <InboxItem
            id="INS-156"
            title="ДМС Корпоративный"
            subtitle="Обновление продукта от аналитика"
            time="1д"
            avatar="https://i.pravatar.cc/32?img=2"
            status="todo"
            isProject
          />
          <InboxItem
            id="INS-159"
            title="Ошибка в расчёте премии"
            subtitle="SLA нарушен"
            time="2д"
            avatar="https://i.pravatar.cc/32?img=3"
            status="bug"
          />
          <InboxItem
            id="INS-498"
            title="Редизайн полиса ОСАГО..."
            subtitle="Менеджер упомянул вас"
            time="4ч"
            avatar="https://i.pravatar.cc/32?img=4"
            status="todo"
          />
          <InboxItem
            id="INS-160"
            title="Тест скоринга по новым правилам"
            subtitle="Вы просили напомнить"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=5"
            status="bug"
          />
          <InboxItem
            title="Запуск ВЗР Лайт"
            subtitle="Добавлен в линейку"
            avatar="https://i.pravatar.cc/32?img=6"
            status="done"
            isProject
          />
          <InboxItem
            id="MKT-122"
            title="Маркетинговые материалы"
            subtitle="Дизайнер отметил как Готово"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=7"
            status="done"
          />
          <InboxItem
            title="Обновление тарифной сетки"
            subtitle="Обновление от актуария"
            avatar="https://i.pravatar.cc/32?img=8"
            status="todo"
            isProject
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Розничные продукты</span>
            <span className="text-zinc-600">›</span>
            <span className="text-blue-400">КАСКО</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">INS-135</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <h2 className="text-white text-xl font-semibold mb-5">Согласование тарифов КАСКО</h2>

          {/* Code block */}
          <div className="bg-zinc-900/80 rounded-lg p-4 text-[11px] font-mono mb-5 border border-zinc-800/50">
            <div className="space-y-2">
              <div>
                <span className="text-zinc-500">Комментарий.</span>
                <span className="text-amber-300"> baseRate</span>
                <span className="text-zinc-400"> определён неверно. Должен учитывать </span>
                <span className="text-cyan-300">regionCoefficient</span>
                <span className="text-zinc-400"> и возраст ТС.</span>
              </div>
              <div className="mt-3 text-zinc-600">
                {/* Базовая ставка с учётом региональных коэффициентов */}
              </div>
              <div>
                <span className="text-purple-400">@Coefficient</span>
                <span className="text-zinc-400">(</span>
                <span className="text-orange-300">type</span>
                <span className="text-zinc-400"> = </span>
                <span className="text-green-400">"regional"</span>
                <span className="text-zinc-400">)</span>
              </div>
              <div>
                <span className="text-blue-400">private</span>
                <span className="text-zinc-400"> Float </span>
                <span className="text-white">regionFactor</span>
                <span className="text-zinc-400">;</span>
              </div>
            </div>
          </div>

          {/* Properties grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs mb-5">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 w-24">Статус</span>
              <span className="flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                В разработке
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 w-24">Приоритет</span>
              <span className="text-zinc-300">Высокий</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 w-24">Исполнитель</span>
              <div className="flex items-center gap-1.5">
                <img src="https://i.pravatar.cc/16?img=1" className="w-4 h-4 rounded-full" alt="avatar" />
                <span className="text-zinc-300">Алексей К.</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 w-24">Срок</span>
              <span className="text-zinc-300">30 апр 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 w-24">Линейка</span>
              <span className="text-zinc-300">Автострахование</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 w-24">Тип</span>
              <span className="text-zinc-300">Тарифный план</span>
            </div>
          </div>

          {/* Activity */}
          <div className="border-t border-zinc-800/50 pt-4">
            <div className="text-xs text-zinc-500 mb-3">Активность</div>
            <div className="space-y-3">
              {[
                { user: "Алексей К.", action: "изменил базовую ставку с 4.2% на 4.5%", time: "30 мин назад" },
                { user: "Мария С.", action: "добавила регион: Москва и МО", time: "1ч назад" },
                { user: "Система", action: "прошла автоматическую проверку регулятора", time: "2ч назад" },
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5">
                  <img
                    src={`https://i.pravatar.cc/20?img=${i + 10}`}
                    className="w-5 h-5 rounded-full shrink-0 mt-0.5"
                    alt="avatar"
                  />
                  <div className="text-xs">
                    <span className="text-zinc-300">{item.user}</span>
                    <span className="text-zinc-500"> {item.action}</span>
                    <div className="text-zinc-600 mt-0.5">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comment box */}
        <div className="p-4 border-t border-zinc-800/50 shrink-0">
          <div className="flex items-center gap-3 bg-zinc-900/50 rounded-lg px-4 py-2.5 border border-zinc-800">
            <img src="https://i.pravatar.cc/20?img=20" className="w-5 h-5 rounded-full shrink-0" alt="avatar" />
            <span className="text-zinc-600 text-xs flex-1">Оставить комментарий...</span>
            <Link2 className="w-3.5 h-3.5 text-zinc-600" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color = "text-zinc-400",
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
        active ? "bg-zinc-800/80 text-white" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
      }`}
    >
      <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? "text-white" : color}`} />
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="ml-auto bg-zinc-700 text-zinc-300 text-[10px] px-1.5 py-0.5 rounded-full">{badge}</span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600" />}
    </div>
  )
}

function InboxItem({
  id,
  title,
  subtitle,
  time,
  avatar,
  status,
  active,
  isProject,
}: {
  id?: string
  title: string
  subtitle: string
  time?: string
  avatar: string
  status: "in-progress" | "todo" | "bug" | "done"
  active?: boolean
  isProject?: boolean
}) {
  const statusColors = {
    "in-progress": "bg-blue-500",
    todo: "bg-zinc-500",
    bug: "bg-red-500",
    done: "bg-emerald-500",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/40" : "hover:bg-zinc-800/20"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${statusColors[status]}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-[10px] text-zinc-600">{id}</span>}
            {isProject && (
              <span className="text-[10px] bg-zinc-800 text-zinc-500 px-1.5 rounded">проект</span>
            )}
          </div>
          <div className="text-xs text-zinc-300 truncate">{title}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">{subtitle}</div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {time && <span className="text-[10px] text-zinc-600">{time}</span>}
          <img src={avatar} className="w-4 h-4 rounded-full" alt="avatar" />
        </div>
      </div>
    </div>
  )
}
