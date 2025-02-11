import { navbar } from '@/data';

function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-20 bg-amber-300 ">
      <div>
        <img src="src/assets/img/logo.svg" alt="Traffico Logo" />
      </div>
      <nav className="navbar">
        <ul className="flex gap-4 text-white">
          {navbar.map((navbarElement) => (
            <li key={navbarElement.name}>
              <a href={navbarElement.link}>{navbarElement.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
