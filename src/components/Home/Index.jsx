import Banner from './Banner'
import Models from './Models'
import Carousel from './Carousel'


const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    // const products = []
    // fetch(axios.get('products')
    //     .then(resp=>{
    //         this.products = resp
    //     })
    // )

export default function Index() {
    return (
        <div className="home-page container mx-auto">
        <Banner />
        <Models />
        <Carousel slides={ SLIDES } options={ OPTIONS } />
    </div>
    )
}
