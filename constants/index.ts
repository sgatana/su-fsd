export type SortOption = {
    value: string;
    label: string;
}

export const fileSortOptions = [
  {
    value: 'createdAt',
    label: 'Sort by Created At (Ascending)',
  },
  {
    value: 'filenameAsc',
    label: 'Sort by Filename (Ascending)',
  },
  {
    value: 'filenameDesc',
    label: 'Sort by Filename (Descending)',
  },
];
