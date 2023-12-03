import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import axios from "axios"
import Loading from "../../Common/Loading";
const array = [ 0, 1, 2, 3 ]
export default function Product() {
    let { id } = useParams();
    let [ image, setImage ] = useState('')
    let [ selectColor, setSelectColor ] = useState(0)
    let [ thumbnail, setThumbnail ] = useState(0)
    const [ product, setProduct ] = useState({})
    useEffect(() => {
        axios.get(`products/${ id }`)
        .then(resp=>{
            setProduct(resp.data)
        })
        .catch(err=>{
            alert(err)
        })
        // return () => {
        //     second
        // }
    }, [])
    function changeBanner(e, id){
        setImage(e.target.src)
        setThumbnail(id)
    }
    function chooseColor(id) {
        setSelectColor(id)
    }
    if ( product.id == null ) {
        return(
            <Loading />
        )
    }
    return (
        <div className="prodcust-section container mx-auto">
            {/* bradcrumbs */}
            <div className="mb-6">
                <nav aria-label="Breadcrumb">
                    <ol className="">
                        
                    </ol>
                </nav>
            </div>
            {/* product content */}
            <div className="gap-6 flex lg:flex-nowrap flex-wrap">
                {/* iamge gallery */}
                <div className="h-full lg:w-[35%] md:w-[100%]">
                    <img src={ image ? image : product.image } alt="" className="banner" />
                    <div className="grid grid-cols-4 gap-2 mt-6 border-t-2 pt-4 rounded-lg">
                        {
                            array.map(item =>
                            <div key={ item } className={ thumbnail === item ? "thumbnail active" : "thumbnail" } >
                                <img src={ `https://picsum.photos/500/300?${ item * 5 + 10 }` } alt="" onClick={ (event)=>changeBanner(event, item)} />
                            </div>
                            )
                        }
                    </div>
                </div>
                {/* details section */}
                <div className="bg-gray-200 details lg:w-[65%] md:w-[100%]">
                    <h1 className="text-4xl capitalize font-bold mb-3">{ product.title }</h1>
                    <h5>{ product.category }</h5>
                    <h2 className="text-2xl font-semibold">$ { product.price }</h2>
                    <div className="flex flex-row-reverse justify-end my-4 gap-2">
                        <i className="peer text-slate-400 peer-hover:text-yellow-500 hover:text-yellow-500 fa fa-star" /> 
                        <i className="peer text-indego-500 peer-hover:text-yellow-500 hover:text-yellow-500 fa fa-star" />
                        <i className="peer text-indego-500 peer-hover:text-yellow-500 hover:text-yellow-500 fa fa-star" />
                        <i className="peer text-indego-500 peer-hover:text-yellow-500 hover:text-yellow-500 fa fa-star" /> 
                        <i className="peer text-indego-500 peer-hover:text-yellow-500 hover:text-yellow-500 fa fa-star" /> 
                    </div> 
                    <p className="text-xl">
                        { product.description }
                    </p>
                    <div className="colors my-4">
                        <h5 className="text-base">Colors</h5>
                        {
                            array.slice(0, 3).map(radio=>
                                <span key={ radio } className={ selectColor === radio ? 'active' : ''} onClick={ ()=>chooseColor(radio) } />
                            )
                        }
                    </div>
                    <button className="bg-indigo-700 rounded-lg hover:bg-indigo-900 hover:text-white border-none lg:w-1/6 capitalize text-[18px]">add to bag</button>
                    <div className="more-details my-6">
                        <h5 className="capitalize font-semibold">forbic & care</h5>
                        <div className="justify-between align-top grid grid-cols-1 lg:grid-cols-2">
                            <ul>
                                <li>only the bset materials</li>
                                <li>ethically and locally made</li>
                                <li>pre-washed and pre-shrunk</li>
                                <li>machine wash  cold with simillar colors</li>
                            </ul>
                            <div className="columns-2 gap-4">
                                <div className="card text-center justify-center items-center flex flex-col gap-1 p-4 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                    <h6>international delivery</h6>
                                    <p className="text-gray-600">get your order in 2 years</p>
                                </div>
                                <div className="card text-center justify-center items-center flex flex-col gap-1 p-4 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 576 512"><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                                    <h6>international delivery</h6>
                                    <p className="text-gray-600">get your order in 2 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
