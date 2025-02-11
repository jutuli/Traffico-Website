import { navbar } from '@/data';
import Button from './Button';

function Navbar() {
  return (
    <div className="flex justify-between flex-1 items-center py-4 px-20 bg-amber-300 ">
      <div>
        <img src="src/assets/img/logo.svg" alt="Traffico Logo" />
      </div>
      <nav className="navbar">
        <ul className="flex gap-10 text-white font-bold text-lg">
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
