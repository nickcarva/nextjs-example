import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// eslint-disable-next-line react/prop-types
function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Nicolas, I&apos;m 17 and from Brazil. I&apos;m passionate about technology since my first experience with it.
          I&apos;ve been working as Fullstack Developer and Designer at <strong>Cyberg Tech Studio</strong>, which one I am also co-founder.
        </p>
        <p>
          <Link href="/posts/first-post">
            <a>My fist post &rarr;</a>
          </Link>
        </p>

        <p className={`${utilStyles.homeFooter} ${utilStyles.lightText}`}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home
