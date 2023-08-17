import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiAxios } from 'react-icons/si';
import { SiThemoviedatabase } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

export default function Footer() {
    return (
        <div className='footer border-slate-500 text-center mt-20'>
            <p className='mb-2'>Under MIT Licence</p>
            <div className='flex justify-center items-center gap-2'>
                <FaReact className='text-xl text-blue-400' />
                <TbBrandNextjs className='text-xl text-slate-200' />
                <SiTailwindcss className='text-xl text-blue-400' />
                <SiTypescript className='text-xl text-blue-400' />
                <SiAxios className='text-xl text-white' />
                <SiThemoviedatabase className='text-xl text-green-400' />
            </div>
            <p className='text-sm mt-1'>&lt; Developed using Next.js, Tailwind CSS, TypeScript, Axios and TMDB API /&gt;</p>
        </div>
    )
}