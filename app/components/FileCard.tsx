import { FileStore } from '../lib/actions';

function FileCard({ filename, createdAt }: FileStore) {
  return (
    <div
      className='col-span-1 flex flex-col rounded border border-gray-300 px-6 py-4 shadow-sm'
      key={filename}
    >
      <p>{filename}</p>
      <p>{createdAt as string}</p>
    </div>
  );
}
export default FileCard;
