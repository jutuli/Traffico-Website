import Navbar from './Navbar';
import Button from './Button';

function Header() {
  return (
    <section className="flex justify-between px-10">
      <Navbar />
      <Button text="CONTACT US" />
    </section>
  );
}

export default Header;
