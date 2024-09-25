import Blog from "@/components/blog"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Statics from "@/components/statics"


const page = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Statics/>
        <Blog/>
        <Footer/>
        </>
    )
}

export default page