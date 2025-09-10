import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            GitHub Pages
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            React + Tailwind
          </h1>
          <p className="mt-2 text-gray-500">
            A basic GitHub Pages site built with React and Tailwind CSS.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Count is {count}
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Edit <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
