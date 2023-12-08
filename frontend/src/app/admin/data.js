const schools = [
  {
    id: 1,
    name: 'Tony Reichert',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 2,
    name: 'Zoey Lang',
    status: 'pendiente',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 3,
    name: 'Jane Fisher',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 4,
    name: 'William Howard',
    status: 'en revisión',
    // avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 5,
    name: 'Kristen Copper',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  },
  {
    id: 6,
    name: 'Tony Reichert',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 7,
    name: 'Zoey Lang',
    status: 'pendiente',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 8,
    name: 'Jane Fisher',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 9,
    name: 'William Howard',
    status: 'en revisión',
    // avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 10,
    name: 'Kristen Copper',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  },
  {
    id: 11,
    name: 'Tony Reichert',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 12,
    name: 'Zoey Lang',
    status: 'pendiente',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 13,
    name: 'Jane Fisher',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 14,
    name: 'William Howard',
    status: 'en revisión',
    // avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 15,
    name: 'Kristen Copper',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  },
  {
    id: 16,
    name: 'Tony Reichert',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 17,
    name: 'Zoey Lang',
    status: 'pendiente',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 18,
    name: 'Jane Fisher',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 19,
    name: 'William Howard',
    status: 'en revisión',
    // avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 20,
    name: 'Kristen Copper',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  },
  {
    id: 21,
    name: 'Tony Reichert',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 22,
    name: 'Zoey Lang',
    status: 'pendiente',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 23,
    name: 'Jane Fisher',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 24,
    name: 'William Howard',
    status: 'en revisión',
    // avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 25,
    name: 'Kristen Copper',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  },
  {
    id: 26,
    name: 'Tony Reichert',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 27,
    name: 'Zoey Lang',
    status: 'pendiente',
    // avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 28,
    name: 'Jane Fisher',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 29,
    name: 'William Howard',
    status: 'en revisión',
    // avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 30,
    name: 'Kristen Copper',
    status: 'activo',
    // avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  }
];

export { schools };
