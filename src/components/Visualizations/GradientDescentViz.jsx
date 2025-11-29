import React, { useState, useEffect, useRef } from 'react';

const GradientDescentViz = () => {
  // State
  const [learningRate, setLearningRate] = useState(0.1);
  const [currentX, setCurrentX] = useState(-8); // Start at x = -8
  const [history, setHistory] = useState([-8]);
  const [isRunning, setIsRunning] = useState(false);
  const [iteration, setIteration] = useState(0);

  // Constants for visualization
  const width = 600;
  const height = 400;
  const xMin = -10;
  const xMax = 10;
  const yMin = -10;
  const yMax = 100;

  // Math functions
  const f = (x) => x * x; // Cost function (Parabola)
  const df = (x) => 2 * x; // Gradient (Derivative)

  // Coordinate mapping
  const mapX = (x) => ((x - xMin) / (xMax - xMin)) * width;
  const mapY = (y) => height - ((y - yMin) / (yMax - yMin)) * height;

  // Generate path for the curve
  const generateCurvePath = () => {
    let path = `M ${mapX(xMin)} ${mapY(f(xMin))}`;
    for (let x = xMin; x <= xMax; x += 0.1) {
      path += ` L ${mapX(x)} ${mapY(f(x))}`;
    }
    return path;
  };

  // Step function
  const step = () => {
    setCurrentX((prevX) => {
      const gradient = df(prevX);
      const nextX = prevX - learningRate * gradient;
      
      // Stop if we diverge too far to prevent UI glitches
      if (Math.abs(nextX) > 12) {
        setIsRunning(false);
        return prevX;
      }

      setHistory((prev) => [...prev, nextX]);
      setIteration((prev) => prev + 1);
      return nextX;
    });
  };

  // Auto-run effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        step();
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRunning, learningRate]);

  // Reset function
  const reset = () => {
    setCurrentX(-8);
    setHistory([-8]);
    setIteration(0);
    setIsRunning(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Gradient Descent Visualizer
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Visualize how a machine learning model minimizes loss. The curve represents the Cost Function (Error). 
          The ball tries to find the bottom (Minimum Error) by following the gradient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Controls Panel */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Learning Rate (α): <span className="text-blue-600 font-bold">{learningRate}</span>
            </label>
            <input
              type="range"
              min="0.01"
              max="1.1"
              step="0.01"
              value={learningRate}
              onChange={(e) => setLearningRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
            />
            <p className="text-xs text-gray-500 mt-2">
              <span className="font-semibold">Tip:</span> Try high values (0.9+) to see it overshoot!
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Iteration:</span>
              <span className="font-mono font-bold dark:text-white">{iteration}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Current X (Weight):</span>
              <span className="font-mono font-bold dark:text-white">{currentX.toFixed(4)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Gradient (Slope):</span>
              <span className="font-mono font-bold dark:text-white">{df(currentX).toFixed(4)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Cost (Loss):</span>
              <span className="font-mono font-bold text-red-500">{f(currentX).toFixed(4)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isRunning
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isRunning ? 'Pause' : 'Auto Run'}
            </button>
            <button
              onClick={step}
              disabled={isRunning}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Step Once
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="md:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden relative">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
            {/* Grid Lines */}
            <line x1="0" y1={mapY(0)} x2={width} y2={mapY(0)} stroke="#e5e7eb" strokeWidth="2" />
            <line x1={mapX(0)} y1="0" x2={mapX(0)} y2={height} stroke="#e5e7eb" strokeWidth="2" />

            {/* The Cost Function Curve */}
            <path
              d={generateCurvePath()}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* History Points (Ghost trails) */}
            {history.map((x, i) => (
              <circle
                key={i}
                cx={mapX(x)}
                cy={mapY(f(x))}
                r="4"
                fill="rgba(156, 163, 175, 0.5)"
              />
            ))}

            {/* Current Position Ball */}
            <circle
              cx={mapX(currentX)}
              cy={mapY(f(currentX))}
              r="8"
              fill="#ef4444"
              stroke="white"
              strokeWidth="2"
              className="transition-all duration-300 ease-out"
            />

            {/* Tangent Line (Gradient Visual) */}
            <line
              x1={mapX(currentX - 1)}
              y1={mapY(f(currentX) - df(currentX))}
              x2={mapX(currentX + 1)}
              y2={mapY(f(currentX) + df(currentX))}
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="4"
            />
          </svg>
          
          <div className="absolute top-2 right-2 bg-white/80 dark:bg-black/50 p-2 rounded text-xs text-gray-500">
            f(x) = x²
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientDescentViz;
