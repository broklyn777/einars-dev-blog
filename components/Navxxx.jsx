import Link from 'next/link'

const Nav = () => {
  return (
   <>
   
   <div>
    <ul>
      <Link href="/" passHref>
        <h2 className="pointer">Ebenezer Don</h2>
      </Link>

      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">Kontakt</p>
      </Link>
      <Link href="/einar" passHref>
        <p className="ms-5 pointer lead my-auto">/einar</p>
      </Link>
    </ul>
    </div>
    </>
  )
}

export default Nav
