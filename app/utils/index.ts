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

const compareFiles = (fileA: FileStore, fileB: FileStore) => {
  const firstFile = findAndConvertNumbers(fileA.filename);
  const secondFile = findAndConvertNumbers(fileB.filename);
  return firstFile.localeCompare(secondFile);
};

export const sortFiles = (files: FileStore[], sortCriteria: string) => {
  if (sortCriteria === 'createdAt') {
    return files.sort(
      (fileA, fileB) =>
        new Date(fileA.createdAt).getTime() - new Date(fileB.createdAt).getTime()
    );
  } else if (['filenameAsc', 'filenameDesc'].includes(sortCriteria)) {
    return files.sort((fileA, fileB) => {
      const isOrderAsc = sortCriteria === 'filenameAsc';
      return isOrderAsc ? compareFiles(fileA, fileB) : compareFiles(fileB, fileA);
    });
  } else {
    return files;
  }
};
