import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function FirstPost () {
  return (
    <div>
      <Head>
        <title>Fist Post Page</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}

export default FirstPost
