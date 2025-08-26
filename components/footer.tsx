import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-3 border-top mt-4">
      <small className="d-block mb-2">
        © Divyam Sharma, 21515263, 10 August 2025
      </small>
      <div>
        <a
          href="https://github.com/D-Sharma-Melb"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-dark"
        >
          <i className="bi bi-github" style={{ fontSize: "1.5rem", color: "#bac1c9ff" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/divyamsharmamelb/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-dark"
        >
          <i className="bi bi-linkedin" style={{ fontSize: "1.5rem", color: "#0e6dcdff" }}></i>
        </a>
      </div>
    </footer>
  )
}