import Blog from "@/components/blog"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"


const page = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Blog/>
        <Footer/>
        </>
    )
}

export default page