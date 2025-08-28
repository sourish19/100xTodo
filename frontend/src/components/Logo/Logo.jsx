const Logo = ({ height, width }) => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={width}
        height={height}
        role="img"
        aria-labelledby="logo"
      >
        <title id="title">100xTodo Icon</title>
        <desc id="desc">
          Premium modern rounded-square icon with a vibrant gradient and elegant
          floating checkmark
        </desc>

        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="checkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f0fdfa" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="24"
          ry="24"
          fill="url(#bgGrad)"
          filter="url(#shadow)"
        />

        <path
          d="M30 54 L45 68 L72 36"
          fill="none"
          stroke="url(#checkGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="ml-2">
        <h1 className="font-inter text-2xl font-semibold tracking-tight text-[#1a846d] drop-shadow-xl">
          100xTodo
        </h1>
      </div>
    </div>
  )
}

export default Logo
