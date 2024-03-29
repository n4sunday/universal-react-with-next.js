import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Error from './_error'
import Layout from '../components/Layout'

class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/n4sunday')
        const statusCode = res.status > 200 ? res.status : false
        const data = await res.json()

        return { user: data, statusCode}
    }

    render() {
        const { user, statusCode } = this.props
        if(statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                About
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Me" height="200px" />
            </Layout>
        )
    }
}

export default About;