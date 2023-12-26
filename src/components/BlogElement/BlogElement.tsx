import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

type Props = {
    blog: Meta
}

export default function BlogElement({blog}: Props) {
    const {id, title, date} = blog;

    const formattedDate = getFormattedDate(date);
    
    return (
        <li className='mt-4 text-2xl'>
            <Link href={`/blogs/${id}`} className='underline hover:text-black/70'>
                {title}
            </Link>
            <br />
            <p className='text-sm mt-1'>{formattedDate}</p>
        </li>
    )
}

