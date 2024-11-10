import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Syed Hashir Ali. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="https://github.com/hashirali94" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">
            GitHub
          </Link>
          <Link href="https://vercel.com/hashir-alis-projects-7df8d8df" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  )
}