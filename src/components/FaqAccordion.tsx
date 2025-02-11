import { Accordion } from '@/components/ui/accordion';
import FaqElement from './FaqElement';
import { faqContent } from '@/data';

export function FaqAccordion() {
  // FAQ-Content in 2 Columns aufteilen
  const midIndex = Math.ceil(faqContent.length / 2);
  const column1 = faqContent.slice(0, midIndex);
  const column2 = faqContent.slice(midIndex);

  return (
    <div className="grid grid-cols-2 gap-6 w-2/3 mt-50">
      {/* Linke Spalte */}
      <Accordion type="single" collapsible className="flex flex-col gap-2">
        {column1.map((item) => (
          <FaqElement
            key={item.id}
            value={item.id.toString()}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </Accordion>

      {/* Rechte Spalte */}
      <Accordion type="single" collapsible className="flex flex-col gap-2">
        {column2.map((item) => (
          <FaqElement
            key={item.id}
            value={item.id.toString()}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
