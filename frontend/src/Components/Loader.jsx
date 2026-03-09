import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(timer); return 100; }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#080808] flex flex-col items-center justify-center z-50">

      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-10">
        <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle
            cx="18" cy="18" r="17"
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeDasharray="107"
            strokeDashoffset={107 - (107 * progress) / 100}
            strokeLinecap="round"
            style={{ transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset 0.1s linear" }}
          />
          <path d="M14 12.5L25 18L14 23.5V12.5Z" fill="#dc2626" />
        </svg>
        <span className="text-white font-bold text-2xl tracking-tight">
          Cine<span className="text-red-600">Vibe</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 rounded-full transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(220,38,38,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-gray-600 text-xs mt-3 tabular-nums">{progress}%</p>

    </div>
  );
};

export default Loader;