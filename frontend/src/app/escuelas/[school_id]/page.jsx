'use client';

import {
  ClockIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  WebIcon
} from '@/components/Icons';

import useFetchData from '@/hooks/useFetchData';

import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link as LinkUI,
  Tab,
  Tabs
} from '@nextui-org/react';

import { Londrina_Solid } from 'next/font/google';

import { useRouter } from 'next/navigation';

const Londrina_Solid_Font_Black = Londrina_Solid({
  subsets: ['latin'],
  display: 'swap',
  weight: '900'
});

export default function Page (props) {
  const router = useRouter();
  const school_id = props.params.school_id;
  const urlGetSchools = `https://educ-ar-lgxy.onrender.com/api/institutions/${school_id}`;

  const { data, error } = useFetchData(urlGetSchools);

  if (error === 'No se encontraron datos') {
    router.push('/404');
  }

  if (data) {
    const {
      institutionName,
      images,
      address,
      administration,
      bilingual,
      canteen,
      city,
      cue,
      educationLevels,
      educationalApproach,
      educationalWorkshops,
      genere,
      // id,
      logo,
      phones,
      religion,
      schoolUniform,
      web
    } = data;

    return (
      <section className="max-w-7xl mx-auto">
        <header>
          {institutionName && (
            <h1
              className={`${Londrina_Solid_Font_Black.className} text-4xl uppercase tracking-wider`}>
              {institutionName}
            </h1>
          )}
        </header>
        <div className="w-full flex items-center gap-10 flex-wrap my-6">
          {city && (
            <>
              <div className="flex items-center gap-4">
                <LocationIcon className="w-6 fill-warning" />
                <p className="capitalize">{city}</p>
              </div>
            </>
          )}
          {address && (
            <div className="flex items-center gap-4">
              <EmailIcon className="w-6 fill-warning" />
              <LinkUI
                color="foreground"
                underline="always"
                href={`mailto:${address}`}
                target="_blank"
                rel="noopener noreferrer">
                {address}
              </LinkUI>
            </div>
          )}
          {phones && (
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 fill-warning" />
              <p>{phones[0]}</p>
            </div>
          )}
          {web && (
            <div className="flex items-center gap-4">
              <WebIcon className="w-6 fill-warning" />
              <LinkUI
                color="foreground"
                underline="always"
                href={web}
                target="_blank"
                rel="noopener noreferrer">
                {web}
              </LinkUI>
            </div>
          )}
        </div>
        {images && (
          <img className="object-cover w-full max-h-96" src={images[0]} />
        )}
        {logo && (
          <Avatar
            size="lg"
            radius="sm"
            classNames={{ base: 'relative -top-7 left-4 z-10' }}
            src={logo}
          />
        )}
        <Card radius="sm" classNames={{ base: 'my-6' }}>
          <CardHeader>
            <h2 className="text-2xl font-extrabold">Datos principales</h2>
          </CardHeader>
          <CardBody>
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">Bilingue: </h3>
                <p className="inline">{bilingual ? 'Si' : 'No'}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">Comedor: </h3>
                <p className="inline">{canteen ? 'Si' : 'No'}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">CUE: </h3>
                <p className="inline">{cue}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">Uniforme escolar: </h3>
                <p className="inline">{schoolUniform ? 'Si' : 'No'}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">Tipo de institución: </h3>
                <p className="inline">{administration}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">Enfoque educativo: </h3>
                <p className="inline">{educationalApproach}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                <h3 className="font-bold inline">Género: </h3>
                <p className="inline">{genere}</p>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                {religion && (
                  <>
                    <h3 className="font-bold inline">
                      {religion.length > 1 ? 'Religiones: ' : 'Religión: '}
                    </h3>
                    <div className="inline-flex gap-2">
                      {religion.map((religion) => {
                        return (
                          <Chip
                            key={religion}
                            radius="sm"
                            color="default"
                            size="small">
                            <p className="inline">{religion}</p>
                          </Chip>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              <div className="bg-neutral-200 p-2 rounded-md w-max">
                {educationalApproach && (
                  <>
                    <h3 className="font-bold inline">
                      {educationalApproach.length > 1
                        ? 'Talleres educativos: '
                        : 'Taller educativo: '}
                    </h3>
                    <div className="inline-flex gap-2">
                      {educationalWorkshops.map((workshop) => {
                        return (
                          <Chip
                            key={workshop}
                            radius="sm"
                            color="default"
                            size="small">
                            <p className="inline">{workshop}</p>
                          </Chip>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
        <Tabs
          size="lg"
          color="warning"
          radius="none"
          classNames={{
            base: 'justify-center w-full',
            tabList: 'w-full',
            tabContent: 'text-warning font-bold'
          }}>
          {educationLevels
            ? educationLevels.map((levelObject) => {
              const { level, fee, inscriptionMonth, orientations, shifts } =
                levelObject;
              return (
                <Tab key={level} title={`NIVEL ${level}`}>
                  <div className="flex flex-col gap-4">
                    {fee && (
                      <article>
                        <h3 className="font-bold uppercase text-xs text-warning mb-2">
                          cuotas mensuales :
                        </h3>
                        <div className="flex gap-3 items-center">
                          <div className="bg-neutral-200 p-2 rounded-md w-max">
                            <h4 className="font-bold inline">Cuota mínima: </h4>
                            <p className="inline">{fee.min}</p>
                          </div>
                          <div className="bg-neutral-200 p-2 rounded-md w-max">
                            <h4 className="font-bold inline">Cuota máxima: </h4>
                            <p className="inline">{fee.max}</p>
                          </div>
                        </div>
                      </article>
                    )}
                    {inscriptionMonth && (
                      <article>
                        <h3 className="font-bold uppercase text-xs text-warning mb-2">
                          Mes de inscripciones:
                        </h3>
                        <div>
                          <h4>{inscriptionMonth}</h4>
                        </div>
                      </article>
                    )}
                    {orientations.length >= 1 && (
                      <article>
                        <h3 className="font-bold uppercase text-xs text-warning mb-2">
                          Orientaciones:
                        </h3>
                        <div className="flex gap-3 flex-wrap">
                          {orientations.map((orientation) => {
                            return (
                              <Chip
                                key={orientation}
                                radius="sm"
                                color="default"
                                size="small">
                                <p className="inline">{orientation}</p>
                              </Chip>
                            );
                          })}
                        </div>
                      </article>
                    )}
                    {shifts && (
                      <article>
                        <h3 className="font-bold uppercase text-xs text-warning mb-2">
                          Turnos:
                        </h3>
                        <div className="flex flex-wrap items-start">
                          {shifts.map((shift) => {
                            const { type, schedule } = shift;
                            return (
                              <div key={type}>
                                {(schedule.min !== 'No tiene' ||
                                  schedule.max !== 'No tiene') && (
                                  <div className="bg-neutral-200 p-2 rounded-md w-max mr-3">
                                    <h4 className='font-bold uppercase text-xs mb-2'>{type}</h4>
                                    {schedule && (
                                      <div className="flex items-center">
                                        <ClockIcon className="w-5" />
                                        <strong>{schedule.min}</strong>
                                        <span className="mx-1">-</span>
                                        <strong>{schedule.max}</strong>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </article>
                    )}
                  </div>
                </Tab>
              );
            })
            : null}
        </Tabs>
      </section>
    );
  }

  return null;
}
