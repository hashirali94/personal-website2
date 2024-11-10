import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Syed Hashir Ali</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-accent transition duration-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-accent transition duration-300">About</Link></li>
          <li><Link href="/projects" className="hover:text-accent transition duration-300">Projects</Link></li>
          <li><Link href="/skills" className="hover:text-accent transition duration-300">Skills</Link></li>
          <li><Link href="/contact" className="hover:text-accent transition duration-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}