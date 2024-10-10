import { useStore } from '../store';
import { HiHome, HiUser, HiUsers } from 'react-icons/hi'; // Import icons from react-icons
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useStore();

  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{ width: isSidebarOpen ? '16rem' : '4rem' }} // Adjust width based on state
      className={`bg-gray-800 text-white h-screen overflow-hidden transition-all duration-300 shadow-lg`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className={`text-lg font-bold transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
          MyApp
        </h2>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <span className="text-xl">{isSidebarOpen ? '←' : '→'}</span> {/* Arrow icon for toggling */}
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-700 transition-colors duration-200">
            <Link to="/" className="flex items-center w-full">
              <HiHome className="text-xl" />
              {isSidebarOpen && <span className="ml-4">Home</span>}
            </Link>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 transition-colors duration-200">
            <Link to="/users" className="flex items-center w-full">
              <HiUser className="text-xl" />
              {isSidebarOpen && <span className="ml-4">Developers</span>}
            </Link>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 transition-colors duration-200">
            <Link to="/teams" className="flex items-center w-full">
              <HiUsers className="text-xl" />
              {isSidebarOpen && <span className="ml-4">Teams</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Move toggle button to the bottom when collapsed */}
      <div className={`absolute bottom-4 left-${isSidebarOpen ? '16' : '4'} transition-all duration-300`}>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <span className="text-xl">{isSidebarOpen ? '←' : '→'}</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
