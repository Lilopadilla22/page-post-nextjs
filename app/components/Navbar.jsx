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
        <ul>
            {sections.map(({label, route}) => (
                <li key={route}> 
                    <Link href={route}> 
                    {label} 
                    </Link> 
                </li>
            ))}
        </ul>
        </nav>
    </header>
  )
}