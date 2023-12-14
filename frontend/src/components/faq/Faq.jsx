import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Faq () {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <Accordion selectionMode="multiple" className='w-1/2 m-auto bg-white border rounded-3xl p-4 shadow-xl'>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="Accordion 6">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
