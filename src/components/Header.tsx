import Navbar from './Navbar';
import Button from './Button';

function Header() {
  return (
    <section className="flex justify-between gap-45 items-center px-20">
      <Navbar />
      <Button text="CONTACT US" />
    </section>
  );
}

export default Header;
