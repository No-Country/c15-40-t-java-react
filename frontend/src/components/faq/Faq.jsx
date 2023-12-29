import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Faq () {
  return (
    <Accordion selectionMode="multiple" className='w-1/2 m-auto bg-white border rounded-3xl p-4 shadow-xl'>
      <AccordionItem key="1" aria-label="Accordion 1" title="¿Para cuáles provincias está dirigida nuestra página de buscador de establecimientos? ">
        <p>
      Por el momento podrás realizar búsquedas  y comparaciones de los colegios registrados en nuestra pagina ubicados en la provincia de Córdoba.  Más adelante nos estaremos expandiendo para que puedas buscar colegios en otras Localidades.
        </p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="¿Debo iniciar sesión  para poder realizar una búsqueda o comparación? ">
        <p>
      No debes iniciar sesión para ver la información que proporcionamos. Los inicios de sesión son exclusivamente para las instituciones registradas en la página.
        </p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Es segura la información que proporciona esta página?">
        <p>
      ¡Podes estar tranquilo!. Verificamos minuciosamente toda la información que cada institución nos proporciona para poder mostrarte detalle a detalle lo que cada una ofrece.
        </p>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="¿Debo pagar para registrar mi institución?">
        <p>
      No, este es un sitio totalmente gratuito para las instituciones que deseen registrarse  y para los tutores de familia que quieran buscar y comparar establecimientos educativos.
        </p>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="¿Puedo registrar mi institución si todavía tengo el código único de establecimiento (CUE) en trámite?">
        <p>
      No, por cuestiones de seguridad nuestro equipo valida la información que esté declarada legalmente, por lo que es indispensable que la institución ya cuente con un código de establecimiento para poder realizar el registro en nuestra página.
        </p>
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="¿Puedo registrar mi institución si está ubicada fuera de la provincia de córdoba?">
        <p>
        Por el momento solo estamos registrando escuelas que pertenezcan a la provincia de Córdoba, poco a poco iremos incorporando instituciones de otras localidades.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
