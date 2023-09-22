
const footerUl = [
    {
        header:'Our Company',
        el:[
            { text:'about us', link:'#' },
            { text:'Our Products', link:'#' },
            { text:'In the press', link:'#' },
            { text:'Reviews', link:'#' },
            { text:'Prices', link:'#' },
            { text:'Videos', link:'#' }
        ]
    },
    {
        header:'Shop',
        el:[
            { text:'Wall Art', link:'#' },
            { text:'Home Decor', link:'#' },
            { text:'Tote Bags & Zip Pouches', link:'#' },
            { text:'Phone Cases & Tech Accessories', link:'#' },
            { text:'Beach', link:'#' },
            { text:'Apparel', link:'#' },
            { text:'T-Shirts', link:'#' },
            { text:'Tote Bags', link:'#' },
            { text:'Coffee Mugs', link:'#' },
            { text:'Round Beach Towels', link:'#' },
            { text:'Yoga Mats', link:'#' },
            { text:'Puzzels', link:'#' },
            { text:'Canvas Prints', link:'#' },
            { text:'Tapestries', link:'#' },
            { text:'AI Print-On-Demand', link:'#' },
        ]
    },
    {
        header:'Contact',
        el:[
            { text:'Contact Us', link:'#' },
            { text:'FAQ', link:'#' },
            { text:'Retuen Policy', link:'#' },
            { text:'Returns', link:'#' },
            { text:'Terms of Use', link:'#' },
            { text:'Privacy Policy', link:'#' },
        ]
    },
    {
        header:'Contact',
        el:[
            { text:'Contact Us', link:'#' },
            { text:'FAQ', link:'#' },
            { text:'Retuen Policy', link:'#' },
            { text:'Returns', link:'#' },
            { text:'Terms of Use', link:'#' },
            { text:'Privacy Policy', link:'#' },
        ]
    },
    {
        header:'Contact',
        el:[
            { text:'Contact Us', link:'#' },
            { text:'FAQ', link:'#' },
            { text:'Retuen Policy', link:'#' },
            { text:'Returns', link:'#' },
            { text:'Terms of Use', link:'#' },
            { text:'Privacy Policy', link:'#' },
        ]
    }
];

export default function Footer() {
    return (
        <div className="footer">
                { footerUl.map((ul, i) =>(
                <ul className="columns-auto" key={ i }>
                    <h3 className="head">{ ul.header }</h3>
                    { ul.el.map((li, j)=>
                        <li key={ j }>
                            <a href={ li.link }>
                                { li.text }
                            </a>
                        </li>
                    )}
                </ul>
                ))}
                <div className="copyright columns-12">
                    <p> Copyright <span>&COPY;</span></p>
                </div>
        </div>
    )
}
