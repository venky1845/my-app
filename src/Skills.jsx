import React, { useReducer, useEffect } from 'react'

const skillsData = {
  Languages: [
    { name: 'JavaScript', level: 85 },
    { name: 'C++',        level: 80 },
    { name: 'Java',       level: 70 },
    { name: 'SQL',        level: 75 },
    { name: 'OOP',        level: 85 },
  ],
  Frontend: [
    { name: 'React.js',          level: 80 },
    { name: 'HTML / CSS',        level: 85 },
    { name: 'Responsive Design', level: 80 },
  ],
  Backend: [
    { name: 'Node.js',      level: 78 },
    { name: 'REST APIs',    level: 80 },
    { name: 'SDLC / Agile', level: 75 },
  ],
  DevOps: [
    { name: 'Docker',          level: 72 },
    { name: 'Kubernetes',      level: 60 },
    { name: 'Jenkins / CI-CD', level: 65 },
    { name: 'Ansible',         level: 60 },
    { name: 'Terraform',       level: 58 },
  ],
  Cloud: [
    { name: 'AWS', level: 68 },
  ],
  Tools: [
    { name: 'Git',   level: 88 },
    { name: 'Linux', level: 72 },
  ],
}

const tabs = Object.keys(skillsData)

const certs = [
  { title: 'DevOps',               issuer: 'Udemy',              icon: '🛠️', desc: 'CI/CD, Docker, Kubernetes, Terraform, Cloud Deployment' },
  { title: 'Software Development', issuer: '[24]7.ai Internship', icon: '🏢', desc: 'JavaScript, Node.js, API Integration, SDLC, Agile'      },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TAB':  return { tab: action.payload, animated: false }
    case 'ANIMATE':     return { ...state, animated: true }
    default:            return state
  }
}

function SkillBar({ name, level, animated }) {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: animated ? `${level}%` : '0%' }}></div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [state, dispatch] = useReducer(reducer, { tab: 'Languages', animated: false })

  useEffect(() => {
    const t = setTimeout(() => dispatch({ type: 'ANIMATE' }), 100)
    return () => clearTimeout(t)
  }, [state.tab])

  return (
    <section className="page">
      <div className="page-header">
        <h2 className="page-title"><span className="num">02.</span> Skills</h2>
        <div className="header-line"></div>
      </div>

      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab ${state.tab === tab ? 'tab-active' : ''}`}
            onClick={() => dispatch({ type: 'CHANGE_TAB', payload: tab })}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skill-list">
        {skillsData[state.tab].map(skill => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} animated={state.animated} />
        ))}
      </div>

      <h3 className="cert-title">📜 Certifications</h3>
      <div className="cert-grid">
        {certs.map(cert => (
          <div key={cert.title} className="cert-card">
            <span className="cert-icon">{cert.icon}</span>
            <div>
              <h4 className="cert-name">{cert.title}</h4>
              <span className="cert-issuer">{cert.issuer}</span>
              <p className="cert-desc">{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}