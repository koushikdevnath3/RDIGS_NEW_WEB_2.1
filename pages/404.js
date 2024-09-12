import React from 'react'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a>Go back to homepage</a>
      </Link>
    </div>
  )
}

export default Custom404
