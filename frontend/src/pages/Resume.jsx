import { useEffect, useState } from 'react'

export default function Resume() {
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/api/resume`)
        .then(res => res.json())
        .then(data => {
          setResume(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Failed to load Resume:', err)
          setError('Failed to load projects.')
          setLoading(false)
        })
    }, [])

  if (loading) return <p className="text-gray-500">Loading resume...</p>
  if (error) return <p className="text-red-400">{error}</p>

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">Resume</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Experience</h2>
        <div className="space-y-6">
          {resume.experience.map((job) => (
            <div key={job.title + job.company}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-medium text-white">{job.title} — {job.company}</span>
                <span className="text-gray-500 text-sm shrink-0 ml-4">{job.period}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-gray-400 text-sm">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Education</h2>
        <div className="flex justify-between items-baseline">
          <span className="font-medium text-white">{resume.education.degree} — {resume.education.institution}</span>
          <span className="text-gray-500 text-sm shrink-0 ml-4">{resume.education.date}</span>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Skills</h2>
        <div className="space-y-2">
          {Object.entries(resume.skills).map(([category, items]) => (
            <div key={category} className="flex gap-2 flex-wrap items-baseline">
              <span className="font-medium text-sm text-gray-300 w-40 shrink-0">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="bg-purple-950 text-purple-300 px-2 py-0.5 rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Awards</h2>
        <div className="space-y-3">
          {resume.awards.map((award) => (
            <div key={award.title}>
              <p className="font-medium text-white">{award.title}</p>
              <p className="text-gray-400 text-sm mt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Activities</h2>
        {resume.activities.map((activity) => (
          <div key={activity.name}>
            <p className="font-medium text-white mb-1">{activity.name}</p>
            <ul className="list-disc list-outside ml-4 space-y-1">
              {activity.bullets.map((b, i) => (
                <li key={i} className="text-gray-400 text-sm">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
