import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-[#0d0d0d] px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <span className="font-semibold text-lg text-white">Jared Siemens</span>
        <div className="flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-purple-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-purple-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-purple-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
