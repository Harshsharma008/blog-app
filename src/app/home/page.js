import Blog from "@/components/blog"
import CardCarousel from "@/components/dynamic_card"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Statics from "@/components/statics"


const page = () => {
    const cardData = [
        {
            image: "https://dummyimage.com/720x400",
            category: "CATEGORY",
            title: "The Catalyzer",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            views: "1.2K",
            comments: 6,
        },
        {
            image: "https://dummyimage.com/720x400",
            category: "CATEGORY",
            title: "The Innovator",
            description: "Viral gochujang ramps flannel narwhal, bespoke paleo celiac flexitarian everyday carry.",
            views: "950",
            comments: 8,
        },
        {
            image: "https://dummyimage.com/720x400",
            category: "CATEGORY",
            title: "The Disruptor",
            description: "Palo santo vexillologist pitchfork selvage yuccie pickled 90's kogi heirloom tousled.",
            views: "870",
            comments: 12,
        }, {
            image: "https://dummyimage.com/720x400",
            category: "CATEGORY",
            title: "The Catalyzer",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            views: "1.2K",
            comments: 6,
        },
        {
            image: "https://dummyimage.com/720x400",
            category: "CATEGORY",
            title: "The Innovator",
            description: "Viral gochujang ramps flannel narwhal, bespoke paleo celiac flexitarian everyday carry.",
            views: "950",
            comments: 8,
        },
        {
            image: "https://dummyimage.com/720x400",
            category: "CATEGORY",
            title: "The Disruptor",
            description: "Palo santo vexillologist pitchfork selvage yuccie pickled 90's kogi heirloom tousled.",
            views: "870",
            comments: 12,
        },
    ];

    return (
        <>
            <Navbar />
            <Hero />
            <Statics />
            <Blog />
            <CardCarousel cardData={cardData} />
            <Footer />
        </>
    )
}

export default page