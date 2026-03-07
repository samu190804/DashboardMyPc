import { useState } from 'react'

function Navbar(): React.JSX.Element {
  const [pcName] = useState(window.electron.process.versions)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = [
    { name: 'Core Metrics', icon: '📊', href: '#core-metrics' },
    { name: 'Networking', icon: '🌐', href: '#networking' },
    { name: 'Disk Health', icon: '💾', href: '#disk-health' },
    { name: 'Other Dashboards', icon: '📈', href: '#other-dashboards' },
    { name: 'Task Manager Lite', icon: '⚡', href: '#task-manager-lite' }
  ]

  return (
    <header className="flex flex-col px-4 md:px-8 py-3 md:py-4 bg-linear-to-r from-[#1a1a2e] to-[#16213e] border-b-2 border-[#0f3460] shadow-lg w-full shrink-0">
      {/* Primera fila: Logo y botón hamburguesa */}
      <div className="flex justify-between items-center">
        {/* Logo / Identidad */}
        <section className="flex items-center gap-2 md:gap-4">
          <div
            className="text-2xl md:text-4xl"
            style={{ filter: 'drop-shadow(0 0 10px rgba(100, 149, 237, 0.5))' }}
          >
            🖥️
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-bold m-0 bg-linear-to-r from-[#6495ed] to-[#00d4ff] bg-clip-text text-transparent">
              DashboardMyPc
            </h2>
            <h3 className="text-xs md:text-sm text-[#64b5f6] font-medium m-0 opacity-90">
              {pcName?.electron || 'Cargando equipo...'}
            </h3>
          </div>
        </section>

        {/* Botón Hamburguesa - Visible solo en móvil */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-[#64b5f6] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación Principal - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex list-none m-0 p-0 gap-2">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2.5 no-underline text-gray-400 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-[rgba(100,149,237,0.15)] hover:text-[#64b5f6]"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menú Móvil - Aparece arriba del botón, desplaza el contenido */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a2e] shadow-lg z-50 mt-4 -mb-2">
          <ul className="flex flex-col list-none m-0 p-4 gap-2">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 no-underline text-gray-400 rounded-lg font-medium text-base transition-all duration-200 hover:bg-[rgba(100,149,237,0.15)] hover:text-[#64b5f6]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
