import { useEffect } from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen = (props: {
  started: boolean;
  setStarted: (started: boolean) => void;
}) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 800);
    }
  }, [progress, total, loaded, item, setStarted]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-all duration-1000 pointer-events-none
        flex flex-col items-center justify-center bg-white
        ${started ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
    >
      {/* Main Content Container */}
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo/Brand Section */}
        <div className="space-y-4 animate-fade-in-up">
          <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>

            {/* Rotating ring animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-white/30 animate-spin"></div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Saurav Lal Karn
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Software Engineer & Full Stack Developer
          </p>
        </div>

        {/* Progress Section */}
        <div
          className="space-y-4 w-full animate-slide-in-bottom"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
            <div
              className={`h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500 ease-out shadow-sm ${
                progress === 100 ? "animate-pulse" : ""
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div
          className="flex justify-center space-x-2 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-custom"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Status Text */}
        <div
          className="text-xs text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {progress < 100 && <span>Preparing your experience...</span>}
        </div>
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-5 animate-fade-in-up"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default LoadingScreen;
