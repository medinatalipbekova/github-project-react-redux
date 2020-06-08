import React from 'react'
import { Route } from 'react-router-dom'
import Head from './head'
import Main from './main'
import RepoList from './repoList'
import Readme from './readme'
import Header from './header'
import Footer from './footer'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Route exact path="/" component={() => <Main />} />
      <div className="container page-wrap mx-auto pt-16">
        <Route exact path="/:userName" component={() => <RepoList />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Readme />} />
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
