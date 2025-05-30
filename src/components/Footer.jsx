function Footer() {
  const contacts = {
    title:"Send me a message!",
    desc:"Got a question or proposal, or just want to say hello? Go ahead.",
    email:"uyanabdullah0@gmail.com",
    socials:{personalBlog:"", github:"", linkedin:""}
  };

    return (
      <footer id="footer" className="bg-gray-light dark:bg-dark-footer-bg w-full">
      <div className="max-w-[80%] xl:max-w-6xl m-auto py-16">
        <h2 className={"font-bold text-black-heading dark:text-bluish-gray text-left text-4xl max-w-md"}>{contacts.title}</h2>
        <div className="flex flex-col lg:flex-row pt-16 pb-8">
          <a className="text-mail-red dark:text-lilac text-left mb-16 lg:mb-0 mr-auto" href={`mailto:${contacts.email}`}>👉 <span className="underline">{contacts.email}</span></a>
          <nav className="flex items-center space-x-4 lg:space-x-8 ml-auto">
            <a href={contacts.socials.personalBlog} className='text-black-heading dark:text-dark-mode-hire'>Personal Blog</a>
            <a href={contacts.socials.github} className='text-green dark:text-dark-mode-green'>Github</a>
            <a href={contacts.socials.linkedin} className='text-linkedin-blue dark:dark-mode-linkedin'>Linkedin</a>
          </nav>
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer;
  