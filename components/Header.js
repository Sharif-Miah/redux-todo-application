import Image from 'next/image';
import noteImage from '@/public/notes.png';
import tickImage from '@/public/double-tick.png';
import { CiCirclePlus } from 'react-icons/ci';
import plusImage from '../public/plus.png';
export default function Header() {
  return (
    <div>
      <form className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
        <Image
          src={noteImage}
          className='w-6 h-6'
          alt='Add todo'
        />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
        />
        <button
          type='submit'
          className={`appearance-none`}>
          <CiCirclePlus className='w-8 h-8' />
        </button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <Image
            className='w-4 h-4'
            src={tickImage}
            alt='Complete'
          />
          <span>Complete All Tasks</span>
        </li>
        <li className='cursor-pointer'>Clear completed</li>
      </ul>
    </div>
  );
}
