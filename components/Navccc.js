// import Link from "next/link";


// const Navbar = () => {
//   return (
//     <nav className="flex items-center">
//       <Link href="/">Media3D</Link>
//       <ul className="">
//         <li className="">
//           <Link href="/products/design">DESIGN</Link>
//         </li>
//         <li className="">
//           <Link href="/products/development">DEVELOPMENT</Link>
//         </li>
//         <li className="">
//           <Link href="/products/production">PRODUCTION</Link>
//         </li>
//         <li className="">
//           <Link href="/products/photography">PHOTOGRAPHY</Link>
//         </li>
//         <li className="">
//           <Link href="/kontakt">KONTAKT</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import Image from 'next/image'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
  
<Link href="/">Media3D</Link>
      <ul className="cursor-pointer">
 <li></li>
 <li></li>
 <li></li>
 <li></li>
      </ul>
        
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
      
      </div>
    </header>
  )
}

export default Header