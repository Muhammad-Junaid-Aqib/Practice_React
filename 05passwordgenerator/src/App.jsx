import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-500">
          <img src="/logo.svg" alt="Good Hand Logo" className="h-8" />
        </a>
        <div className="flex items-center">
          <div className="relative">
          <button className="absolute right-0 top-0 mt-2 mr-3">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search courses here"
              className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="hover:bg-blue-700 text-black font-bold py-2 px-4 border rounded-md ml-4 w-40">
            Login
          </button>
        </div>
      </div>
    </nav> */}
    <header>
  {/* <!-- Section: Split screen --> */}
  <section className="container mx-auto">
    {/* <!-- Grid --> */}
    <div className="grid grid-cols-3">
      {/* <!-- First column --> */}
      <div className="bg-red-500"> Muhammd </div>
      {/* <!-- First column --> */}

      {/* <!-- Second column --> */}
      <div className="bg-blue-500"> junaid </div>
      {/* <!-- Second column --> */}

      {/* <!-- Third column --> */}
      <div className="bg-green-500"> aqib</div>
      {/* <!-- Third column --> */}
    </div>
    {/* <!-- Grid --> */}
  </section>
  {/* <!-- Section: Split screen --> */}
</header>
    </>
  )
}

export default App
