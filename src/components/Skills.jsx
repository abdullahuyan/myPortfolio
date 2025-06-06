import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { data } = useLanguage();
  const {skills}=data;
    return (
      <div className="text-left max-w-[80%] xl:max-w-6xl m-auto place-content-between">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">{skills.title}</h2>
            <div className="flex flex-col gap-x-4 lg:gap-x-8 lg:flex-row">
                {skills.items.map((skill, index) => (
                    <div key={index} className="pb-8 lg:pb-16">
                        <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">{skill.name}</h3>
                        <p className="text-gray dark:text-white">{skill.desc}</p>
                    </div>
                ))}
            </div>
            <div className="h-[1px] bg-lilac mb-8 lg:mb-16"></div>
        </div>
    )
  }
  
  export default Skills;
  