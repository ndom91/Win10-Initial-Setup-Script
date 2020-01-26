import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/layout/index'
import Router from 'next/router'

class Wrapper extends React.Component {
  static async getInitialProps ({ res, req, query }) {

  }

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <Layout>
        <div>

        </div>
        <style jsx>{`

        `}
        </style>
      </Layout>
    )
  }
}

export default Wrapper
