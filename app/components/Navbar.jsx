import Link from "next/link"


const sections = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'About',
      route: '/about'
    }
    ,
    {
      label: 'Posts',
      route: '/posts'
    }
  ]

export function Navbar() {
  return (
    <header>
        <nav>
        <ul className="flex flex-row justify-around border-dotted border-2 border-sky-500 m-6 p-2 rounded-md">
            {sections.map(({label, route}) => (
                <li key={route}> 
                    <Link href={route} className="hover:underline" > 
                    {label} 
                    </Link> 
                </li>
            ))}
        </ul>
        </nav>
    </header>
  )
}