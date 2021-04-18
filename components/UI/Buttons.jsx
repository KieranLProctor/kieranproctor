const Primary = ({ text }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      {text}
    </button>
  );
};

const Secondary = ({ text }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 text-base font-medium text-purple-700 bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      {text}
    </button>
  );
};

const White = ({ text }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {text}
    </button>
  );
};

const Round = ({ text }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-5 py-2 text-base font-medium text-white bg-purple-600 border border-transparent rounded-full shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      {text}
    </button>
  );
};

const Circular = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center p-2 text-white bg-purple-600 border border-transparent rounded-full shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
};

export { Primary, Secondary, White, Round, Circular };
