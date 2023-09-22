import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Common/Loading";
import { Link } from "react-router-dom";

// import { useParams } from "react-router-dom";
export default function App() {
    
    // const { slug } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('products')
        .then(resp=>{
            let temp = []
            for (let i = 0; i < resp.data.length; i++) {
                const product = resp.data[i];
                temp.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    rating: product.rating.rate,
                    count: product.rating.count
                })
            }
            setProducts(temp)
            // console.log((temp))
        })
        .catch(err=>{
            console.log(err)
        })
    }, []);

    // function pushCard(slug){
    //     axios.get(`products/${ slug }`)
    //     .then(resp=>{
    //         console.log(resp)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }

    if (products.length < 1) {
        return (
            <Loading />
        )
    }
    return (
        <div className="w-full container mx-auto py-12">
            <div className="text-4xl flex items-center">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="mx-3">
                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
                </svg>
            </div>
            <div className="row justify-stretch grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                { products.map(product =>
                    <Link className="col p-4 rounded-lg border-2 border-white hover:border-gray-dark relative" key={ product.id }
                    to={{ pathname:`/products/${product.id}`}}>
                        <div className="card h-full">
                            <div className="card-title flex justify-between items-start">
                                <img src={ product.image } alt="" />
                                <div>
                                    <strong className="w-3/5">{ product.title.substring(0,30)+"..."}</strong>
                                    <span className="flex items-center">
                                        { product.rating }
                                        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="card-text my-auto">
                                { (product.description).substring(0, 120)+"..." }
                                <div className="mt-4 flex justify-between w-full">
                                    <span>price: ${ product.price }</span>
                                    <span>count: { product.count }</span>
                                </div>
                            </div>
                            <div className="card-actions flex mt-auto">
                                <button>More Details</button>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}