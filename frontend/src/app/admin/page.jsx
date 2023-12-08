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

import { schools } from './data';

const statusColorMap = {
  activo: 'success',
  pendiente: 'danger',
  'en revisión': 'warning'
};

export default function page () {
  const ActionsCell = ({ school }) => {
    const { name, email } = school;

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
                    {name}
                  </ModalHeader>
                  <ModalBody>
                    <h2>Correo electrónico: {email}</h2>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
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
                      <strong>{name}</strong>?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="default" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button
                      color="danger"
                      onPress={onClose}
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

  const filteredSchools = schools
    ? schools.filter((school) => {
      const nameQuery = school.name
        .toLowerCase()
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
                    description={school.email}
                    name={school.name}
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
