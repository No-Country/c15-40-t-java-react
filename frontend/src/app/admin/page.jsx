'use client';

import { DeleteIcon, EditIcon, EyeIcon, SearchIcon } from '@/components/Icons';
import { Chip, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from '@nextui-org/react';
import React, { useCallback } from 'react';

import { columns, users } from './data';

const statusColorMap = {
  activo: 'success',
  pendiente: 'danger',
  'en revisión': 'warning'
};

export default function page () {
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
    case 'school':
      return (
        <User
          avatarProps={{ radius: 'lg', src: user.avatar }}
          description={user.email}
          name={cellValue}
        >
          {user.email}
        </User>
      );
    case 'status':
      return (
        <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
          {cellValue}
        </Chip>
      );
    case 'actions':
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Detalles">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content="Editar escuela">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Eliminar escuela">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
    }
  }, []);

  return (
    <section className='max-w-7xl mx-auto'>
      <header>
        <h1 className='text-2xl font-bold text-purple-500 my-10'>Panel del administrador</h1>
      </header>
      <div>
        <Input classNames={{ base: 'mb-4' }} color='warning' variant='bordered' type='search' label='Buscar escuela' startContent={<SearchIcon />} />
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
