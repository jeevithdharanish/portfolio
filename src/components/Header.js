import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header = ({ darkMode, setDarkMode }) => {
  const router = useRouter();

  return (
    <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
      <h1 
        className="font-burtons text-3xl cursor-pointer bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent transition-transform hover:scale-105"
        onClick={() => router.push('/')}
      >
        Jeevithdharanish
      </h1>

      <ul className="flex items-center">
        <li className="cursor-pointer">
          {darkMode ? (
            <FaSun 
              onClick={() => setDarkMode(!darkMode)} 
              className="text-2xl hover:text-teal-500 transition duration-300" 
            />
          ) : (
            <FaMoon 
              onClick={() => setDarkMode(!darkMode)} 
              className="text-2xl hover:text-teal-500 transition duration-300" 
            />
          )}
        </li>

        <li>
          <Link 
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 transition-transform hover:scale-105"
            href={router.pathname === '/resume' ? '/' : '/resume'}
          >
            {router.pathname === '/resume' ? 'Back to Home' : 'Resume'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
