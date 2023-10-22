import React from 'react'
import Layout from '../layouts/Layout'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Astronaut from '../components/Astronaut'

function Home() {
    return (
        <Layout>
            <Presentation />
            <Timeline />
            <Projects />
            <Astronaut />
        </Layout>
    )
}

export default Home