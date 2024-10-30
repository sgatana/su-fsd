'use client';

import { Fragment, useMemo, useState } from 'react';
import { FileStore } from '../lib/actions';
import SortField from './SortField';
import { sortFiles } from '../utils';
import { fileSortOptions } from '@/constants';
import FileCard from './FileCard';

export default function FileList({ files }: { files: FileStore[] }) {
  const [sortCriteria, setSortCriteria] = useState('');

  const sortedData = useMemo(() => {
    return sortFiles(files, sortCriteria);
  }, [sortCriteria, files]);

  return (
    <>
      <div className='w-full h-40  flex justify-center items-center'>
        <SortField
          sortCriteria={sortCriteria}
          onHandleSort={setSortCriteria}
          options={fileSortOptions}
        />
      </div>
      <div className='grid grid-cols-3 gap-2 w-full'>
        {sortedData?.map(({ filename, createdAt }) => {
          return (
            <Fragment key={filename}>
              <FileCard filename={filename} createdAt={createdAt} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
