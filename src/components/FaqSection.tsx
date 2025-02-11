import FaqAccordion from './FaqAccordion';

function FaqSection() {
  return (
    <section className="pt-80 mx-50 relative">
      <img
        className="absolute right-0 -z-10"
        src="src/assets/img/faq-bg.png"
        alt="FAQ Background"
      />
      <img
        className="absolute top-110 right-40 -z-1"
        src="src/assets/img/faq-guy.png"
        alt="Man with a Question"
      />
      <h2 className="z-1 text-3xl font-bold text-[#EE4D47] mt-40 mb-10">FAQ</h2>
      <h3 className="font-serif text-6xl w-1/2 leading-20">
        Questions and Answers on Professional Traffic Permits:
      </h3>
      <FaqAccordion />
    </section>
  );
}

export default FaqSection;
