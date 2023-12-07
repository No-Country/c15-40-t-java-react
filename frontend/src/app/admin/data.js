const columns = [
  { name: 'ESCUELA', uid: 'school' },
  { name: 'Estado', uid: 'status' },
  { name: 'Acciones', uid: 'actions' }
];

const users = [
  {
    id: 1,
    school: 'Tony Reichert',
    status: 'activo',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 2,
    school: 'Zoey Lang',
    status: 'pendiente',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 3,
    school: 'Jane Fisher',
    status: 'activo',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 4,
    school: 'William Howard',
    status: 'en revisión',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 5,
    school: 'Kristen Copper',
    status: 'activo',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  }
];

export { columns, users };
