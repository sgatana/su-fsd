import { FileStore } from '../lib/actions';

function FileCard({ filename, createdAt }: FileStore) {
  return (
    <div
      className='flex flex-col px-6 py-4 border shadow-sm border-gray-300 col-span-1 rounded'
      key={filename}
    >
      <p>{filename}</p>
      <p>{createdAt as string}</p>
    </div>
  );
}
export default FileCard;
