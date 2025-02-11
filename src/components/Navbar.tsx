import { navbar } from '@/data';

function Navbar() {
  return (
    <div className="flex  gap-130 flex-1 items-center py-4 ">
      <div>
        <img src="src/assets/img/logo.svg" alt="Traffico Logo" />
      </div>
      <nav className="navbar">
        <ul className="flex gap-20 text-white font-bold text-xl">
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
