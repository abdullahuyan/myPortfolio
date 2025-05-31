import { useLanguage } from "../context/LanguageContext";

function Hero() {
    const { data } = useLanguage();
    const {hero}=data;
    return (
      <div className="flex flex-col lg:flex-row gap-x-8 max-w-[80%] xl:max-w-6xl m-auto py-16 place-content-between">
            <div className="text-left">
                <p className="mb-8 text-dark-purple dark:text-dark-mode-name">————— {hero.name}</p>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">{hero.desc1}</h1>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">{hero.desc2}</h1>
                <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">{hero.desc3}</p>
                <nav className="flex flex-wrap place-content-evenly xl:place-content-between max-w-md mt-8">
                    <button
                        onClick=""
                        className={'text-white bg-navy-blue m-2 xl:m-0 h-14 px-4 lg:pl-4 w-32 xl:w-36 border border-navy-blue rounded-md dark:text-black-heading dark:bg-dark-mode-hire'}
                    >
                        {hero.hireMe}
                    </button>
                    <a href={hero.links.github} className={'text-navy-blue m-2 xl:m-0 pt-4 px-4 h-14 lg:pl-6 w-32 xl:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>Github</a>
                    <a href={hero.links.linkedin} className={'inline-flex text-navy-blue m-2 xl:m-0 pt-4 px-4 h-14 lg:pl-6 w-30 xl:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>Linkedin</a>
                </nav>
            </div>
            <img className="rounded-2xl mt-8 lg:mt-0 max-w-[476px] max-h-[375px]" src={hero.img} />
        </div>
    )
  }
  
  export default Hero;
  