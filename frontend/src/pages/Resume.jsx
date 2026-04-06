const experience = [
  {
    title: 'Software Development Engineer',
    company: 'Kongsberg',
    period: 'September 2025 – Present',
    bullets: [
      'Created adaptors to integrate chemical sensors and radios in embedded applications using C++ 17.',
      'Conducted formal verification of hundreds of backend requirements for Factory Acceptance Testing (FAT) of self-propelled howitzer systems.',
      'Maintained 95%+ test coverage across embedded application suite using Boost Test; debugged with gdb.',
      'Developed embedded applications using DDS (Data Distribution Service) for real-time, event-driven data distribution across distributed systems.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Lockheed Martin',
    period: 'January 2024 – September 2025',
    bullets: [
      'Operated as Scrum Master for a team of 9 engineers, establishing processes that improved traceability between sprint goals and post-sprint delivery outcomes.',
      'Led the development of Angular micro frontends with embedded data analytics reports.',
      'Designed, architected and led implementation of production features such as a File Management System for handling file uploads using TypeScript and NestJS.',
      'Developed and deployed text-to-speech and speech-to-text models using Python and FastAPI, used in production by hundreds of pilots.',
      'Researched, trained and deployed ML time series forecasting models that automated production scheduling, reducing manual effort by several hours per week and improving forecast accuracy from 30% to 80%.',
      'Contributed to CI/CD pipelines and GitLab workflows in a Linux development environment.',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Fusion5',
    period: 'July 2023 – January 2024',
    bullets: [
      'Researched and developed proof of concept AI/ML models for business applications including churn prediction, evaluating feasibility for client deployment.',
      'Led development and integration of ~30 business intelligence reports used across 50+ clients.',
      'Drafted technical documents detailing research related to business needs in the industry.',
      'Utilized SQL Server to investigate and maintain data required for reporting needs.',
    ],
  },
  {
    title: 'Academic Researcher',
    company: 'University of South Australia',
    period: 'May 2023 – September 2023',
    bullets: [
      'Developed a React web application for university course creation, integrating with the ChatGPT API via AWS Lambda.',
      'Developed an LLM-powered course creation tool projected by the Pro Vice Chancellor to deliver 10% cost savings (~$3M over 5 years) through university-wide automation.',
      'Researched LLM capacity to grade assignments and establish connections to course outcomes.',
    ],
  },
]

const skills = {
  Languages: ['Python', 'C++', 'SQL', 'TypeScript'],
  'Frameworks/Libraries': ['Angular', 'React', 'NestJS', 'FastAPI', 'QML'],
  Tools: ['Git', 'GitLab', 'Docker', 'Kubernetes', 'Boost Test', 'gdb', 'SQL Server'],
  Environments: ['Linux'],
  'Cloud/DevOps': ['AWS Lambda'],
}

const awards = [
  {
    title: 'Committee Choice Award – Adelaide MedTech Hackathon',
    description: 'Led a team to design and present a hospital waste reduction solution, selected by the judging committee from all competing entries.',
  },
  {
    title: 'Winner – Accenture Tech Bootcamp',
    description: 'Built a cloud migration impact estimation solution using AWS Lambda, winning the overall competition.',
  },
]

export default function Resume() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">Resume</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Experience</h2>
        <div className="space-y-6">
          {experience.map((job) => (
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
          <span className="font-medium text-white">Bachelor of Computer Science, Artificial Intelligence — University of Adelaide</span>
          <span className="text-gray-500 text-sm shrink-0 ml-4">Completed July 2023</span>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Skills</h2>
        <div className="space-y-2">
          {Object.entries(skills).map(([category, items]) => (
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
          {awards.map((award) => (
            <div key={award.title}>
              <p className="font-medium text-white">{award.title}</p>
              <p className="text-gray-400 text-sm mt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-1 text-purple-400">Activities</h2>
        <div>
          <p className="font-medium text-white mb-1">Ice Hockey</p>
          <ul className="list-disc list-outside ml-4 space-y-1">
            <li className="text-gray-400 text-sm">Led the Adelaide Avalanche to the first male South Australia state team championship in 5 years, selected as assistant captain.</li>
            <li className="text-gray-400 text-sm">Trained young players, fostering a passion for the sport and teaching commitment to working within a team.</li>
            <li className="text-gray-400 text-sm">Volunteered as Assistant Coach for a junior team, developing a collaborative and productive team environment.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
