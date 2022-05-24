import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-gray-100 text-gray-700 shadow w-full'>
      <div className='container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' width={40} height={40} alt='logo' />
            <span className='ml-3 text-xl'>funny games</span>
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/blogg'>
            <a className='mx-5 cursor-pointer  hover:text-indigo-300'>
              /blogg
            </a>
          </Link>
          <Link href='/kontakt'>
            <a className='mx-5 cursor-pointer  hover:text-indigo-300'>
              /kontakt
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
