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
        console.log(id)
        console.log(selectColor)
    }
    if ( product.id == null ) {
        return(
            <Loading />
        )
    }
    return (
        <div className="prodcust-section">
            {/* bradcrumbs */}
            <div className="mb-6">
                <nav aria-label="Breadcrumb">
                    <ol className="">
                        
                    </ol>
                </nav>
            </div>
            {/* product content */}
            <div className="grid grid-cols-2 gap-4">
                {/* iamge gallery */}
                <div className="px-3">
                        <img src={ image ? image : product.image } alt="" className="banner" />
                    <div className="gird">
                    </div>
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
                <div className="bg-gray-200 details">
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
                                <span key={ radio } className={ selectColor === radio ? '' : 'active'} onClick={ ()=>chooseColor(radio) } />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
