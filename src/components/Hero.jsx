function Hero() {

    return (
      <div className="flex flex-col lg:flex-row gap-x-8 max-w-[80%] xl:max-w-6xl m-auto py-16 place-content-between">
            <div className="text-left">
                <p className="mb-8 text-dark-purple dark:text-dark-mode-name">————— name</p>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">h1</h1>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">h2</h1>
                <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">desc</p>
                <nav className="flex flex-wrap place-content-evenly xl:place-content-between max-w-md mt-8">
                    <button
                        onClick=""
                        className={'text-white bg-navy-blue m-2 xl:m-0 h-14 pt-3 px-4 lg:pl-4 w-32 xl:w-36 border border-navy-blue rounded-md dark:text-black-heading dark:bg-dark-mode-hire'}
                    >
                        hire me
                    </button>
                    <a href="gitlik" className={'text-navy-blue m-2 xl:m-0 pt-4 px-4 h-14 lg:pl-6 w-32 xl:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>github</a>
                    <a href="inlink" className={'inline-flex text-navy-blue m-2 xl:m-0 pt-4 px-4 h-14 lg:pl-6 w-30 xl:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>linkedin</a>
                </nav>
            </div>
            <img className="rounded-2xl mt-8 lg:mt-0 max-w-[476px] max-h-[375px]" src="./assets/heroimg.jpg" />
        </div>
    )
  }
  
  export default Hero;
  