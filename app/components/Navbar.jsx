import Image from "next/image"
import Link from "next/link"

const sections = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Post',
      route: '/posts'
    },
    {
      label: 'About',
      route: '/about'
    }
  ]

export function Navbar() {
  return (
    <header>
        <nav className="flex flex-wrap sm:flex-nowrap justify-around mt-6 ">
          <div>
            <Link href='/'>
              <Image 
                src={'/posti-logo1.png'} 
                alt="NewPost"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="max-sm:mt-5 max-sm:ml-6">
            <ul className="flex flex-row justify-around">
              {sections.map(({label, route}) => (
                  <li key={route}> 
                      <Link href={route} className="text-sm hover:font-bold mx-6" > 
                      {label} 
                      </Link> 
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="border-solid border-2 border-sky-500 bg-sky-500 w-36 h-12 rounded text-white max-sm:hidden ">
              Get in touch
            </button>
          </div>
        </nav>
    </header>
  )
}