const AnimatedSVG = () => {
  return (
    <div className="flex items-center justify-center w-full bg-red-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 200"
        className="w-64 h-64 text-red-500"
      >
        <g>
          <path fill="currentColor" d="M10,10 C20,20, 40,20, 50,10"></path>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVG;
