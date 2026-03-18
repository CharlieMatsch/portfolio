function Home() {
  
  
  return ( 
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-8 py-16">
    
      {/* hero section */}
      <section className="flex flex-col items-center text-center gap-4 mb-12">
        {/* profile photo placeholder */}
        <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
          Photo
        </div>

        {/* name & title */}
        <h1 className="text-5xl font-bold text-white">Charlie Matsch</h1>
        <p className="text-xl text-blue-400">Computer Science Student @ Arizona State University</p>

        {/* about me */}
        <p className="text-gray-400 max-w-xl mt-2">
          I'm a software developer with a passion for building full-stack web applications & data-driven
          solutions. I enjoy learning new technologies quickly and applying them to solve real problems.
          Currently finishing my B.S. in Computer Science and actively seeking full-time opportunities.
        </p>
      </section>

      {/* open to work */}
      <section className="mb-12 text-center">
        <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
          Open to Work
        </span>
        <ul className="text-gray-400 mt-4 flex flex-col gap-1">
          <li>Software Engineer</li>
          <li>Junior Developer</li>
          <li>Data Science</li>
        </ul>
      </section>

      {/* links */}
      <section className="flex gap-6">
        <a href="https://github.com/CharlieMatsch"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-800 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
        >
          Github
        </a>
        
        <a href="https://www.linkedin.com/in/charles-matsch-b710bb208"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-800 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
        >
          LinkedIn
        </a>
        
        <a href="https://www.youtube.com/@accuratemrcool"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-800 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
        >
          YouTube
        </a>

      </section>

    </main>
  )
}

export default Home