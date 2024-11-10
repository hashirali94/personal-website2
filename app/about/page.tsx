export default function About() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">About Me</h1>
        <div className="space-y-4">
          <p>
            Hello! I'm Syed Hashir Ali, a passionate Full Stack Developer with over 5 years of experience in creating robust and scalable web applications. My expertise spans across JavaScript, TypeScript, Next.js, Python, and CSS, allowing me to build comprehensive solutions from front-end to back-end.
          </p>
          <p>
            I have a strong foundation in computer science, having graduated with a degree in Computer Engineering. This background, combined with my practical experience, enables me to approach problems with a unique perspective, blending theoretical knowledge with real-world application.
          </p>
          <p>
            In my career, I've had the opportunity to work on diverse projects, from e-commerce platforms to data visualization tools. I'm particularly passionate about creating intuitive user interfaces and optimizing backend performance. My goal is always to deliver high-quality, efficient code that not only meets but exceeds client expectations.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or mentoring aspiring developers. I believe in the power of community and continuous learning in the ever-evolving field of web development.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Connect with me:</h2>
            <div className="space-x-4">
              <a href="https://github.com/hashirali94" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
              <a href="https://vercel.com/hashir-alis-projects-7df8d8df" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vercel Projects</a>
            </div>
          </div>
        </div>
      </div>
    )
  }