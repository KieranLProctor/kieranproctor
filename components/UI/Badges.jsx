const Basic = ({ text, colour }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
      {text}
    </span>
  );
};

const Dot = ({ text, colour }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
      <svg
        className="-ml-0.5 mr-1.5 h-2 w-2 text-purple-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="3" />
      </svg>
      {text}
    </span>
  );
};

const Rounded = ({ text, colour }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
      {text}
    </span>
  );
};

const RoundedDot = ({ text, colour }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
      <svg
        className="mr-1.5 h-2 w-2 text-purple-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="3" />
      </svg>
      {text}
    </span>
  );
};

const Remove = ({ text, colour }) => {
  return (
    <span className="inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
      {text}
      <button
        type="button"
        class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:outline-none focus:bg-purple-500 focus:text-white"
      >
        <span className="sr-only">Remove {text} option</span>
        <svg
          className="w-2 h-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path
            stroke-linecap="round"
            stroke-width="1.5"
            d="M1 1l6 6m0-6L1 7"
          />
        </svg>
      </button>
    </span>
  );
};

export { Basic, Dot, Rounded, RoundedDot, Remove };
