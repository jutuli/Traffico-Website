import Button from './Button';
import Header from './Header';

function Hero() {
  return (
    <section className="flex flex-col items-start">
      <Header />
      <img
        className="h-screen absolute -top-1 -z-10 "
        src="src/assets/img/hero-bg.png"
        alt="Background Image"
      />
      <img
        className="absolute -bottom-40"
        src="src/assets/img/lorry.png"
        alt="Lorry"
      />
      <div className="flex flex-col items-start justify-start mx-60">
        <h1 className="text-white text-8xl w-1/2 justify-self-center mt-40 mb-10">
          Your awesome traffic permit consultant.
        </h1>
        <Button
          text="GET STARTED"
          icon="src/assets/img/white-arrow-right.png"
        />
      </div>
    </section>
  );
}

export default Hero;
