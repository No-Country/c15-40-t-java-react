'use client';

import { DeleteIcon, EditIcon, EyeIcon, SearchIcon } from '@/components/Icons';

import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
  useDisclosure
} from '@nextui-org/react';

import React, { useState } from 'react';

import useFetchData from '@/hooks/useFetchData';

const statusColorMap = {
  activo: 'success',
  pendiente: 'danger',
  'en revisión': 'warning'
};

export default function page () {
  const urlGetSchools = 'https://educ-ar-lgxy.onrender.com/api/institutions';

  const { data } = useFetchData(urlGetSchools);

  const ActionsCell = (school) => {
    const { institutionName, address } = school.school;

    const DetailsAction = () => {
      const { isOpen, onOpen, onOpenChange } = useDisclosure();

      return (
        <>
          <Tooltip content="Detalles">
            <Button
              disableRipple
              className="bg-transparent"
              onPress={onOpen}
              isIconOnly>
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Button>
          </Tooltip>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {institutionName}
                  </ModalHeader>
                  <ModalBody>
                    <h2>Correo electrónico: {address}</h2>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
    };

    const EditAction = () => {
      return (
        <Tooltip content="Editar escuela">
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            <EditIcon />
          </span>
        </Tooltip>
      );
    };

    const DeleteAction = () => {
      const { isOpen, onOpen, onOpenChange } = useDisclosure();

      const handleDelete = async () => {
        try {
          const response = await fetch(
            `https://educ-ar-lgxy.onrender.com/api/institutions/${school.school.id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Bearer:
                  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJTQVZFX09ORV9JTlNUSVRVVElPTiJ9LHsiYXV0aG9yaXR5IjoiUkVBRF9BTExfSU5TVElUVVRJT05TIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOSVNUUkFUT1IifV0sIm5hbWUiOiJ0ZXN0MzNAZ21haWwuY29tIiwic3ViIjoidGVzdDMzQGdtYWlsLmNvbSIsImlhdCI6MTcwMjk0NjE2OCwiZXhwIjoxNzAyOTUzMzY4fQ.edgjQ5pJ24MeaWrQBhw1caycclYIZSJrwTUQv6ISJbc',
                cors: 'no-cors'
              }
            }
          );

          if (!response.ok) {
            throw new Error('Error al eliminar la escuela');
          }

          onOpenChange();
        } catch (error) {
          console.error('Error al eliminar la escuela:', error);
        }
      };

      return (
        <>
          <Tooltip color="danger" content="Eliminar escuela">
            <Button
              disableRipple
              className="bg-transparent"
              onPress={onOpen}
              isIconOnly>
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Button>
          </Tooltip>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Eliminar escuela
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      ¿Está seguro de eliminar la escuela{' '}
                      <strong>{institutionName}</strong>?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="default" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button
                      color="danger"
                      onPress={() => {
                        onClose();
                        handleDelete();
                      }}
                      className="text-white">
                      Eliminar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
    };

    return (
      <div className="relative flex items-center gap-2">
        {DetailsAction()}
        {EditAction()}
        {DeleteAction()}
      </div>
    );
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');

  const filteredSchools = data
    ? data.filter((school) => {
      const nameQuery = school.institutionName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const statusQuery =
          filterStatus === 'todos' ? true : school.status === filterStatus;

      return nameQuery && statusQuery;
    })
    : [];

  const colorBtnFilterStatus = (status) => {
    switch (status) {
    case 'activo':
      return 'success';
    case 'pendiente':
      return 'danger';
    case 'en revisión':
      return 'warning';
    default:
      return 'default';
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold text-purple-500 my-12">
          Panel de administrador
        </h1>
      </header>
      <div>
        <div className="flex gap-4 mb-4 items-end">
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[44%] py-0',
              clearButton: 'text-warning'
            }}
            color="warning"
            variant="bordered"
            type="text"
            labelPlacement="outside"
            placeholder="Buscar escuela..."
            startContent={<SearchIcon />}
            onClear={() => setSearchTerm('')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown>
            <DropdownTrigger>
              <Button
                color={colorBtnFilterStatus(filterStatus)}
                variant="bordered"
                className="capitalize">
                Estado: {filterStatus}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Menu filtro por estados"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={[filterStatus]}>
              <DropdownItem
                key="todos"
                onClick={() => setFilterStatus('todos')}>
                Todos
              </DropdownItem>
              <DropdownItem
                key="activo"
                onClick={() => setFilterStatus('activo')}
                color="success">
                Activo
              </DropdownItem>
              <DropdownItem
                key="pendiente"
                onClick={() => setFilterStatus('pendiente')}
                color="danger">
                Pendiente
              </DropdownItem>
              <DropdownItem
                key="en revisión"
                onClick={() => setFilterStatus('en revisión')}
                color="warning">
                En revisión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Table
          classNames={{ table: 'min-h-[400px]' }}
          aria-label="Lista de colegios registrados">
          <TableHeader>
            <TableColumn>ESCUELA</TableColumn>
            <TableColumn>ESTADO</TableColumn>
            <TableColumn>ACCIONES</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredSchools.map((school) => (
              <TableRow key={school.id}>
                <TableCell>
                  <User
                    avatarProps={{
                      style: { display: 'none' }
                    }}
                    description={school.address}
                    name={school.institutionName}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    className="capitalize"
                    color={statusColorMap[school.status]}
                    size="sm"
                    variant="flat">
                    {school.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <ActionsCell school={school} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
