const sections = [
  {
    id: 1,
    category: 'LADIES_DOUBLES'
  },
  {
    id: 2,
    category: 'MENS_DOUBLES'
  },
  {
    id: 3,
    category: 'MIXED_DOUBLES'
  },
  {
    id: 4,
    category: 'OPEN_DOUBLES'
  },
  {
    id: 5,
    category: 'OPEN_SINGLES'
  }
];

export const getSectionById = id => sections.find(section => section.id === id);
export const getSectionByCategory = category =>
  sections.find(section => section.category === category);
export const getAllSections = () => sections;
