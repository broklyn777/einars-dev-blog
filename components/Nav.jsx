import Link from 'next/link'

const Nav = () => {
  return (
    <nav className=" flex flex1 cursor-pointer p-3 space-x-5 ">
      <Link href="/" passHref>
        <h2 className="pointer">Ebenezer Don</h2>
      </Link>

      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">/bio</p>
      </Link>
      <Link href="/einar" passHref>
        <p className="ms-5 pointer lead my-auto">/einar</p>
      </Link>
    </nav>
  )
}

export default Nav


