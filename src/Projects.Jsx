import React, { useState, useCallback } from 'react'

const projects = [
  {
    title:      'AdLab Portal',
    category:   'Professional',
    tags:       ['JavaScript', 'React', 'UI/UX'],
    desc:       'Ad Portal for advertisement and campaign creation at [24]7.ai. Built UI enhancements for improved usability and responsive design across devices.',
    icon:       '📢',
    points:     ['Campaign Creation Module', 'Responsive Design', 'Cross-functional Team'],
    color:      '#6c63ff',
  },
  {
    title:      'Emart App',
    category:   'Personal',
    tags:       ['Docker', 'Docker Compose', 'E-commerce'],
    desc:       'E-commerce platform containerized with Docker Compose. Runs consistently across development and production environments.',
    icon:       '🛒',
    points:     ['Docker Compose Setup', 'Multi-service Architecture', 'Dev to Prod Consistency'],
    color:      '#43b89c',
  },
  {
    title:      'Cancer Prediction System',
    category:   'Academic',
    tags:       ['Python', 'TensorFlow', 'CNN'],
    desc:       'Cancer detection system using deep learning. Analyzes medical images for early diagnosis using CNN models with high accuracy.',
    icon:       '🔬',
    points:     ['TensorFlow + OpenCV', 'CNN Architecture', 'High Accuracy Detection'],
    color:      '#e84393',
  },
  {
    title:      'Medical Leaf Identification',
    category:   'Academic',
    tags:       ['Python', 'CNN', 'Image Processing'],
    desc:       'ML system that classifies plant leaves to detect diseases using CNNs. Analyzes color, texture and shape features.',
    icon:       '🌿',
    points:     ['Google Colab Training', 'Image Processing', 'Multi-class Classification'],
    color:      '#27ae60',
  },
]

const filters = ['All', 'Professional', 'Academic', 'Personal']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const handleFilter = useCallback((f) => setActiveFilter(f), [])

  const shown = projects.filter(p => activeFilter === 'All' || p.category === activeFilter)

  return (
    <section className="page">
      <div className="page-header">
        <h2 className="page-title"><span className="num">03.</span> Projects</h2>
        <div className="header-line"></div>
      </div>

      <div className="filter-row">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'filter-active' : ''}`}
            onClick={() => handleFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {shown.map(proj => (
          <div key={proj.title} className="project-card" style={{ '--top': proj.color }}>
            <div className="project-top">
              <span className="project-icon">{proj.icon}</span>
              <span className="project-cat">{proj.category}</span>
            </div>
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <ul className="project-points">
              {proj.points.map(pt => (
                <li key={pt}><span className="arrow">▹</span> {pt}</li>
              ))}
            </ul>
            <div className="project-tags">
              {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}