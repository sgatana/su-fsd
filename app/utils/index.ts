import { FileStore } from '../lib/actions';

export const getFormattedData = (data: string): FileStore[] => {
  const strArr = data?.split('\n');
  return strArr.map((file) => {
    const [createdAt, filename] = file?.split(';');
    return {
      createdAt,
      filename,
    };
  });
};

// find all numbers in the filename and pad them with leading zeros to make each number 10 digits long.
export function findAndConvertNumbers(filename: string) {
  return filename.replace(/\d+/g, (num) => num.padStart(10, '0'));
}


export const sortFiles = (files: FileStore[], sortCriteria: string) => {
  if (sortCriteria === 'createdAt') {
    return files.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else if (sortCriteria === 'filenameAsc') {
    return files.sort((a, b) => {
      const nameA = findAndConvertNumbers(a.filename);
      const nameB = findAndConvertNumbers(b.filename);
      return nameA.localeCompare(nameB);
    });
  } else if (sortCriteria === 'filenameDesc') {
    return files.sort((a, b) => {
      const nameA = findAndConvertNumbers(a.filename);
      const nameB = findAndConvertNumbers(b.filename);
      return nameB.localeCompare(nameA);
    });
  }
  return files;
};
