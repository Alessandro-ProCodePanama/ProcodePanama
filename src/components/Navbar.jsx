function Navbar() {
  return (
    <div>
      <nav>
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 md:px-10 md:pt-8 md:pb-8">
          <div className="flex items-center justify-center bg-gray-800 rounded-full h-10 w-24 md:h-14 md:w-36">
            <img src="/src/assets/procode.png" className="h-8 p-1 md:h-8" alt="ProCode Logo" />
          </div>
          <div className="flex md:order-2 space-x-2">
            <a className="flex px-4 items-center justify-center text-dark bg-white font-medium rounded-full md:text-sm py-2.5 text-center text-xs h-10 w-24 md:h-14 md:w-32">
              Contactanos
            </a>
            <button id="triggerEl onToggle onExpand"data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center w-10 h-10 md:w-16 md:h-18 justify-center text-sm text-gray-500 rounded-lg md:hidden md:h-18 hover:bg-gray-100" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="hidden md:w-2/5 md:flex md:flex-wrap md:justify-center md: md:rounded-full bg-gray-800 md:h-14" id="navbar-sticky">
            <ul className="flex flex-wrap items-center justify-between w-full font-medium md:flex-row px-10">
              <li>
                <a href="#" className="block"></a>
              </li>
              <li>
                <a href="#" className="block">Nosotros</a>
              </li>
              <li>
                <a href="#" className="block">Servicio 1</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar