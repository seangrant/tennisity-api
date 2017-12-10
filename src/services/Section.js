const sections = [
  {
    id: 1,
    category: 'LADIES_DOUBLES',
    rankings: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 2,
    category: 'MENS_DOUBLES',
    rankings: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 3,
    category: 'MIXED_DOUBLES',
    rankings: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 4,
    category: 'OPEN_DOUBLES',
    rankings: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 5,
    category: 'OPEN_SINGLES',
    rankings: [1, 2, 3, 4, 5, 6]
  }
];

export const getSectionById = id => sections.find(section => section.id === id);
export const getSectionByCategory = category =>
  sections.find(section => section.category === category);
export const getAllSections = () => sections;
