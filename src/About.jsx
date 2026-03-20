import React, { useState, useEffect } from 'react'

const journey = [
  { year: '2019',           title: '10th Class',         org: 'R.V.N.Z.P.H.S Ravinuthala', desc: 'Scored CGPA 9.8/10.',                                                                                     icon: '🏫' },
  { year: '2019 – 2021',    title: 'Pre-University',     org: 'IIIT Srikakulam',            desc: 'Completed with CGPA 8.84/10.',                                                                             icon: '📚' },
  { year: '2021 – 2025',    title: 'B.Tech CSE',         org: 'IIIT Srikakulam',            desc: 'Bachelor of Technology in Computer Science & Engineering. CGPA 8.0/10.',                                  icon: '🎓' },
  { year: 'Jul – Dec 2025', title: 'SWE Intern',         org: '[24]7.ai, Bengaluru',        desc: 'Built Ad Portal UI features, improved user experience, worked in Agile teams.',                            icon: '💼' },
  { year: 'Jan 2026 – Now', title: 'Software Developer', org: 'Stackly, Hyderabad',         desc: 'Contributing to UI enhancements and responsive features with cross-functional teams.',                    icon: '🚀' },
]

export default function About() {
  const [visible, setVisible] = useState([])

  useEffect(() => {
    journey.forEach((_, i) => {
      setTimeout(() => setVisible(prev => [...prev, i]), i * 180)
    })
  }, [])

  return (
    <section className="page">
      <div className="page-header">
        <h2 className="page-title"><span className="num">01.</span> About Me</h2>
        <div className="header-line"></div>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <div className="avatar">SV</div>
          <p className="about-para">
            I'm a Computer Science graduate from <strong>IIIT Srikakulam</strong> who enjoys building
            real-world software. I love working on full-stack apps — from clean UIs to backend APIs.
          </p>
          <p className="about-para">
            Currently at <strong>Stackly, Hyderabad</strong>. I enjoy solving problems on LeetCode
            and exploring DevOps tools in my free time.
          </p>
          <div className="badges">
            <span className="badge">📍 Hyderabad, India</span>
            <span className="badge">🎓 CS Graduate 2025</span>
            <span className="badge">💻 Full Stack Dev</span>
            <span className="badge">☁️ AWS Enthusiast</span>
          </div>
        </div>

        <div className="about-right">
          <h3 className="journey-title">My Journey</h3>
          {journey.map((item, i) => (
            <div key={i} className={`journey-item ${visible.includes(i) ? 'journey-show' : ''}`}>
              <div className="journey-icon">{item.icon}</div>
              <div>
                <span className="journey-year">{item.year}</span>
                <h4 className="journey-heading">{item.title}</h4>
                <span className="journey-org">{item.org}</span>
                <p className="journey-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}