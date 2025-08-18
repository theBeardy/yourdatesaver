function NavBar(){

    const navBar = "flex justify-between bg-gray-500"
    const anchorNav = "mx-auto bg-gray-400 p-2 hover:bg-teal-400 w-full text-center"
    
    return <div>
        <header>
          <nav className={navBar}>
            <a className={anchorNav} href="">Home</a>
            <a className={anchorNav} href="">RSVP</a>
            <a className={anchorNav} href="">Gallery</a>
            <a className={anchorNav} href="">FAQs</a>
          </nav>
        </header>
    </div>
}

export default NavBar;