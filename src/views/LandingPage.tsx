import Hero from "../components/Hero"
import Nav from '../components/Nav'
import MyBooks from '../components/Books'
import { books } from "../dummyData"
import OurServices from "../components/Services"

const LandingPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <OurServices/>
            <MyBooks bookData={books} />
        </div>
    )
}

export default LandingPage