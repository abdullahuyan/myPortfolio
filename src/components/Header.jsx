import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { toggleLanguage, data } = useLanguage();
  
  const {header} = data;
  
  return (
    <header className='flex flex-col max-w-[80%] xl:max-w-6xl m-auto justify-between'>
        <div className='flex items-center space-x-2 ml-auto my-8'>
            <div
                className='relative w-10 h-5 flex items-center cursor-pointer transition-colors duration-300 rounded-full bg-toggle-purple dark:bg-toggle-gray'
                onClick={toggleTheme}
            >
                <div
                    className='w-4 h-6 cursor-pointer transition-transform duration-300 transform'
                    style={{ transform: isDarkMode ? 'translateX(30%)' : 'translateX(125%)' }}
                >
                    {isDarkMode ?  '🌙':'☀️'}
                </div>
            </div>

            <span className='dark:text-light-mode text-gray-dark font-medium tracking-wider'>
                {isDarkMode ? header.lightMode : header.darkMode}
            </span>

            <span className="text-gray-dark">|</span>

            <a href="#" onClick={toggleLanguage} className='dark:text-lilac text-toggle-purple font-medium tracking-wider'>
                {header.language}
            </a>
        </div>

        <div className='flex items-center'>
            <div
                className='h-10 w-10 rounded-full flex items-center justify-center bg-logo-lilac dark:bg-toggle-purple mr-auto'
            >
                <span className='dark:text-dark-logo-font text-logo-purple transform rotate-45'>A</span>
            </div>
            <nav className="flex items-center space-x-2 lg:space-x-16 ml-auto">
                <a href="#"  className='text-gray'>{header.skills}</a>
                <a href="#"  className='text-gray'>{header.projects}</a>
                <a href="#" className='text-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:bg-white'>{header.hireMe}</a>
            </nav>
        </div>
    </header>
)
}