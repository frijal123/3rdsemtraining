import React from 'react'

export default function Footer() {
  return (
    <footer style={{textAlign: 'center', padding: '20px 0'}}>
      <small>© {new Date().getFullYear()} Frijal — Built with React</small>
    </footer>
  )
}
