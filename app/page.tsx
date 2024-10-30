import FileList from './components/FileList';
import { FileStore, getFiles } from './lib/actions';
import { getFormattedData } from './utils';

export default async function Home() {
  const files = await getFiles();
  const data: FileStore[] = getFormattedData(files);
  
  return (
    <div className='h-screen w-screen'>
      <main className='w-full max-w-5xl mx-auto h-full p-2'>
       <FileList files={data} />
      </main>
    </div>
  );
}
