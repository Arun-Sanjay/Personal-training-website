export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full"
        preserveAspectRatio="none"
        style={{ height: "40px" }}
      >
        <path
          d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z"
          fill="white"
          fillOpacity="0.02"
        />
        <path
          d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.06"
        />
      </svg>
    </div>
  );
}

export function DiagonalDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full"
        preserveAspectRatio="none"
        style={{ height: "30px" }}
      >
        <path
          d="M0 40L1440 0V40H0Z"
          fill="white"
          fillOpacity="0.015"
        />
        <line
          x1="0" y1="40" x2="1440" y2="0"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.05"
        />
      </svg>
    </div>
  );
}
