export default function Header() {
  return (
    <header id="header" className=" max-w-[75rem] mx-auto my-0">
      <div className="header ">
        <ul className="nav_list">
          <li className="nav_item">
            <a href="#hero" className="nav_item-link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="#About" className="nav_item-link">
              About
            </a>
          </li>
          <li className="nav_item">
            <a href="#label-experiences" className="nav_item-link">
              Experiences
            </a>
          </li>
          <li className="nav_item">
            <a href="#label-projects" className="nav_item-link">
              Projects
            </a>
          </li>
          <li className="nav_item">
            <a href="#label-skills" className="nav_item-link">
              skills
            </a>
          </li>
          <li className="nav_item">
            <a href="#label-contact" className="nav_item-link">
              Contact
            </a>
          </li>
          <div className="hamburger"></div>
        </ul>
      </div>
    </header>
  );
}
