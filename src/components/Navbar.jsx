import { Link } from "react-router-dom"

const links = [
  { name: "Home",
      ref: "/"
    },
    { name: "Profile",
      href: "/profile"
    }
]


const Navbar = () => {
  return (
    <div>
    {links.map(link => (
      <Link key={link.name} to={link.href}>{link.name}</Link>
    ))}
    </div>
  )
}

export default Navbar