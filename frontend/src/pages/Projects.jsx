import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load projects:', err)
        setError('Failed to load projects.')
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-gray-500">Loading projects...</p>
  if (error) return <p className="text-red-400">{error}</p>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className="border border-gray-800 bg-[#161616] rounded-xl p-6 hover:border-purple-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2 text-white">{project.name}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-sm bg-purple-950 text-purple-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noreferrer" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
