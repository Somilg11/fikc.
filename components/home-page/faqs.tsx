import { Section, Container } from "@/components/craft";
import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What types of traffic data does the software analyze?",
    answer:
      "Our software analyzes vehicle counts, speeds, traffic signal data, and incidents from various sources such as cameras and IoT sensors.",
    link: "https://google.com",
  },
  {
    question: "How does AI improve traffic management?",
    answer:
      "AI optimizes traffic flow by adapting to real-time conditions and predicting future patterns, reducing congestion and improving safety.",
  },
  {
    question: "Is this solution customizable for different cities?",
    answer:
      "Yes, our software is fully customizable to fit the unique traffic patterns and needs of different urban environments.",
  },
  {
    question: "How long does it take to implement this system?",
    answer:
      "Implementation time varies based on city size and infrastructure, but most systems can be set up within weeks.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
