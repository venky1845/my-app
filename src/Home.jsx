import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function useTypewriter(words, speed = 100) {
  const [text, setText]           = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, charIndex + 1))
        if (charIndex + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1200)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setText(word.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setWordIndex(w => (w + 1) % words.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex, words, speed])

  return text
}

export default function Home() {
  const roles = ['Software Engineer', 'React Developer', 'Node.js Developer', 'Full Stack Dev']
  const typedRole = useTypewriter(roles)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={`home ${show ? 'home-show' : ''}`}>
      <div className="home-left">
        <p className="home-hello">Hi, I'm</p>
        <h1 className="home-name">
          Sai Venkatesh <br />
          <span className="home-name-accent">Gogineni</span>
        </h1>
        <p className="home-role">
          <span className="role-arrow">&gt; </span>
          {typedRole}
          <span className="cursor">|</span>
        </p>
        <p className="home-bio">
          Computer Science graduate building full-stack applications with JavaScript, React and Node.js.
          Currently working at <strong>Stackly</strong>, passionate about clean code and great products.
        </p>
        <div className="home-btns">
          <Link to="/projects" className="btn-primary">View My Work</Link>
          <Link to="/contact"  className="btn-secondary">Contact Me</Link>
        </div>
        <div className="home-links">
          <a href="mailto:saivenkatesh607@gmail.com" className="social-btn">📧 Email</a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"  target="_blank" rel="noreferrer" className="social-btn">🔗 LinkedIn</a>
          <a href="https://leetcode.com/u/sai_0123456/"  target="_blank" rel="noreferrer" className="social-btn">💻 LeetCode</a>
        </div>
      </div>
    </section>
  )
}