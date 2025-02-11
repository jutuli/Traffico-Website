import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FaqElementProps = {
  question: string;
  answer: string;
  value: string;
};

function FaqElement({ question, answer, value }: FaqElementProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-xl bg-white px-4 items-center h-20 align-text-top">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-lg  bg-[#FCDBD1] pr-4 items-center px-2 pt-2 pb-6 rounded-b-lg">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FaqElement;
