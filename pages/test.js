import React, { Component } from 'react'
import Head from 'next/head'

class TestPage extends Component {
  static async getInitialProps ({ query }) {
    console.log(query)
    console.log(query.id.split('--')[1])
    return query
  }
  render () {
    return (
      <div>
        <Head>
          <title>Test Pages</title>
        </Head>

        <div className='hero'>
          <h1 className='title'>Welcome to Test Pages Next.js!</h1>
          <p className='description'>
            This is a test pages
          </p>
        </div>
      </div>
    )
  }
}

export default TestPage
