export default function Navbar(props) {
  return (
    <div className="md:hidden">
      <button
        className="fixed focus:outline-none bottom-4 right-2 z-50 bg-logo bg-opacity-50 text-white rounded-full p-2"
        aria-label="Menu"
        onClick={props.onOpen}
      >
        <svg
          className="w-8 h-8"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}
