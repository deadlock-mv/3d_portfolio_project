import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">MV</p>
            </NavLink>
            <nav className="flex text-lg gap-10 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ?
                    'text-blue-500' : 'text-black hover:border-blue-500 hover:rounded hover:bg-orange-300 hover:border-solid hover:border-1'}
                >
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ?
                    'text-blue-500' : 'text-black hover:border-blue-500 hover:rounded hover:bg-orange-300 hover:border-solid hover:border-1'}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar