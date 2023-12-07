export const colegios = [
  {
    label: "Colegio1",
    value: "Colegio1",
    description: "Colegio1 es el mejor",
  },
  {
    label: "Colegio2",
    value: "Colegio2",
    description: "Colegio2 es el mejor",
  },
  {
    label: "Colegio3",
    value: "Colegio3",
    description: "Colegio3 es el mejor",
  },
  {
    label: "Colegio4",
    value: "Colegio4",
    description: "Colegio4 es el mejor",
  },
];

export const colegioDetail = [
  {
    id: "Colegio1",
    pre_inscription_id: 1, // Referencia al documento en Pre_Inscription
    gestion: "public",
    institutionName: "Lopa Colegio",
    address: "Lopa Lopa",
    city: "Montevideo",
    phones: [],
    cue: "cue",
    web: "google.com.ar",
    educationLevels: [
      {
        name: "kindergarten",
        fee: { min: 20000, max: 25000 },
        inscriptionDate: "30/05/1989",
        shifts: [
          { name: "turno mañana", schedule: { from: 8, to: 12 } },
          { name: "turno tarde", schedule: { from: 13, to: 17 } },
        ],
      },
      {
        name: "highschool",
        fee: { min: 30000, max: 45000 },
        inscriptionDate: "30/05/1989",
        shifts: [
          { name: "turno mañana", schedule: { from: 8, to: 12 } },
          { name: "turno tarde", schedule: { from: 13, to: 17 } },
        ],
        orientations: ["Economics", "Arts", "Chemistry"],
      },
    ],
    talleres: ["Voley", "Ajedrez"],
    bilingual: false,
    comedor: false,
    religion: ["Catolico", "Judio"],
    uniforme: false,
    genere: "Género",
    condicionesEdilicias: "Condiciones Edilicias",
    calefaccion: false,
  },
  {
    id: "Colegio2",
    pre_inscription_id: 2, // Referencia al documento en Pre_Inscription
    web: "google.com.ar",
    gestion: "public",
    institutionName: "Ilis",
    address: "Ilis Ilis 55",
    city: "Montevideo",
    phones: [],
    cue: "cue",
    educationLevels: [
      {
        name: "kindergarten",
        fee: { min: 20000, max: 25000 },
        inscriptionDate: "15/06/1955",
        shifts: [
          { name: "turno mañana", schedule: { from: 8, to: 12 } },
          { name: "turno tarde", schedule: { from: 13, to: 17 } },
        ],
      },
      {
        name: "highschool",
        fee: { min: 30000, max: 45000 },
        inscriptionDate: "30/05/1989",
        shifts: [
          { name: "turno mañana", schedule: { from: 8, to: 12 } },
          { name: "turno tarde", schedule: { from: 13, to: 17 } },
        ],
        orientations: ["Economics", "Arts", "Chemistry"],
      },
    ],
    talleres: ["Voley", "Ajedrez"],
    bilingual: true,
    comedor: true,
    religion: ["Catolico", "Judio"],
    uniforme: true,
    genere: "Género",
    condicionesEdilicias: "Condiciones Edilicias",
    calefaccion: true,
  },
  {
    id: "Colegio3",
    pre_inscription_id: 2, // Referencia al documento en Pre_Inscription
    web: "google.com.ar",
    gestion: "public",
    institutionName: "Colegio Ingles",
    address: "Ilis Ilis 55",
    city: "Buenos Aires",
    phones: [],
    cue: "cue",
    educationLevels: [
      {
        name: "kindergarten",
        fee: { min: 20000, max: 25000 },
        inscriptionDate: "15/06/1955",
        shifts: [
          { name: "turno mañana", schedule: { from: 8, to: 12 } },
          { name: "turno tarde", schedule: { from: 13, to: 17 } },
        ],
      },
    ],
    talleres: ["Voley", "Ajedrez", "Fútbol", "Atletismo"],
    bilingual: true,
    comedor: true,
    religion: ["Catolico", "Judio"],
    uniforme: true,
    genere: "Género",
    condicionesEdilicias: "Condiciones Edilicias",
    calefaccion: true,
  },
  {
    id: "Colegio4",
    pre_inscription_id: 2, // Referencia al documento en Pre_Inscription
    web: "google.com.ar",
    gestion: "public",
    institutionName: "Colegio Frances",
    address: "Maria Mieres 2565",
    city: "Cordoba",
    phones: [],
    cue: "cue",
    educationLevels: [
      {
        name: "highschool",
        fee: { min: 30000, max: 45000 },
        inscriptionDate: "30/05/1989",
        shifts: [
          { name: "turno mañana", schedule: { from: 8, to: 12 } },
          { name: "turno tarde", schedule: { from: 13, to: 17 } },
        ],
        orientations: ["Economics", "Arts", "Chemistry"],
      },
    ],
    talleres: [],
    bilingual: true,
    comedor: true,
    religion: ["Catolico", "Judio"],
    uniforme: true,
    genere: "Género",
    condicionesEdilicias: "Condiciones Edilicias",
    calefaccion: true,
  },
];
