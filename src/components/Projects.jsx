function Projects() {

  const projects =  {
    "title": "Projeler",
    "items": [
        {
            "title": "Workintech",
            "image": "",
            "description": "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal düzeyde kurulum gerektiren bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur, NPM paketi olarak sunulmaktadır ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılmaktadır.",
            "technologies": [
                "react",
                "redux",
                "axios"
            ],
            "github": "Github",
            "githubLink": "",
            "viewSiteLabel": "Siteyi Görüntüleyin",
            "viewSiteLink": ""
            
        },
        {
            "title": "Random Jokes",
            "image": "",
            "description": "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal düzeyde kurulum gerektiren bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur, NPM paketi olarak sunulmaktadır ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılmaktadır.",
            "technologies": [
                "react",
                "redux",
                "axios"
            ],
            "github": "Github",
            "githubLink": "",
            "viewSiteLabel": "Siteyi Görüntüleyin",
            "viewSiteLink": ""
        },
        {
            "title": "Journey",
            "image": "",
            "description": "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal düzeyde kurulum gerektiren bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur, NPM paketi olarak sunulmaktadır ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılmaktadır.",
            "technologies": [
                "react",
                "redux",
                "axios"
            ],
            "github": "Github",
            "githubLink": "",
            "viewSiteLabel": "Siteyi Görüntüleyin",
            "viewSiteLink": ""
        }
    ]
};

const {title, items} = projects;

    return (
      <div id="projects" className="text-left max-w-[80%] xl:max-w-6xl m-auto place-content-between">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-8">{title}</h2>
            <div className="flex flex-col gap-x-4 lg:gap-x-8 lg:flex-row place-content-between">
                {items?.map((project, index) => (
                    <div key={index} className="pb-8 lg:pb-16">
                        <img src={`./${project.image}`} alt={project.title} />
                        <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl my-4 font-medium">{project.title}</h3>
                        <p className="my-4 max-w-72 text-gray dark:text-white">{project.description}</p>
                        <div className="my-8">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>{tech}</span>
                            ))}
                        </div>
                        <div className="flex place-content-between underline">
                            <a className="text-navy-blue dark:text-dark-mode-hire" href={project.githubLink}>{project.github}</a>
                            <a className="text-navy-blue dark:text-dark-mode-hire" href={project.viewSiteLink}>{project.viewSiteLabel}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }
  
  export default Projects;
  