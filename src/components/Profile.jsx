import { useLanguage } from "../context/LanguageContext";

function Profile() {
  const { data } = useLanguage();
  const {profile}=data;
  const {items}=profile.basic;

    return (
      <div className="text-left max-w-[80%] xl:max-w-6xl m-auto">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">{profile.title}</h2>
            <div className="flex flex-col gap-x-16 lg:flex-row">
                <div className="pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl font-medium">{profile.basic.title}</h3>
                    <div className="flex flex-col place-content-between">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-row gap-x-4 lg:gap-x-8 text-black-heading dark:text-white">
                                <p className="my-4 w-[150px] font-bold">{item.label}</p>
                                <p className="my-4 w-[200px] lg:w-[250px]">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-lg pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">{profile.about.title}</h3>
                     <p className="text-gray dark:text-white mb-4">{profile.about.desc}</p>
                </div>
            </div>
            <div className="h-[1px] bg-lilac mb-8 lg:mb-16"></div>
        </div>
    )
  }
  
  export default Profile;
  