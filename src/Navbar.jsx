import './Navbar.css'

function Icon({ children }) {
  return (
    <svg
      className="fb-bottom-nav__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="fb-bottom-nav" aria-label="Navegación (estilo Facebook)">
      <button
        type="button"
        className="fb-bottom-nav__item fb-bottom-nav__item--active"
        aria-label="Inicio"
      >
        <Icon>
          <path
            fill="currentColor"
            d="M12 3 3 10v11a1 1 0 0 0 1 1h6v-7h4v7h6a1 1 0 0 0 1-1V10l-9-7Z"
          />
        </Icon>
      </button>

      <button type="button" className="fb-bottom-nav__item" aria-label="Videos">
        <Icon>
          <path
            fill="currentColor"
            d="M5 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm5 3.5 6 3.5-6 3.5v-7Z"
          />
        </Icon>
      </button>

      <button
        type="button"
        className="fb-bottom-nav__item"
        aria-label="Marketplace"
      >
        <Icon>
          <path
            fill="currentColor"
            d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2l-1.5 3H5.5L4 9V7Zm2 6h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7Zm2 2v5h8v-5H8Z"
          />
        </Icon>
      </button>

      <button type="button" className="fb-bottom-nav__item" aria-label="Grupos">
        <Icon>
          <path
            fill="currentColor"
            d="M8.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm7 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM2 20.5C2 17.5 5.2 15 8.5 15S15 17.5 15 20.5V22H2v-1.5Zm13.3-.3c.2-1.9-.7-3.7-2.1-5.1 2.6.3 5.8 2.2 5.8 5.1V22h-3.7v-1.8Z"
          />
        </Icon>
      </button>

      <button
        type="button"
        className="fb-bottom-nav__item"
        aria-label="Notificaciones"
      >
        <Icon>
          <path
            fill="currentColor"
            d="M12 22a2.5 2.5 0 0 0 2.4-2H9.6A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5-6.7V3a2 2 0 1 0-4 0v1.3A7 7 0 0 0 5 11v5l-2 2v1h20v-1l-2-2Z"
          />
        </Icon>
      </button>

      <button type="button" className="fb-bottom-nav__item" aria-label="Menú">
        <Icon>
          <path
            fill="currentColor"
            d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5 1.5 1.5 0 0 1 18.5 8h-13A1.5 1.5 0 0 1 4 6.5Zm0 5.5A1.5 1.5 0 0 1 5.5 10.5h13A1.5 1.5 0 0 1 20 12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 12Zm0 5.5A1.5 1.5 0 0 1 5.5 16h13A1.5 1.5 0 0 1 20 17.5 1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5Z"
          />
        </Icon>
      </button>
    </nav>
  )
}

export default Navbar

