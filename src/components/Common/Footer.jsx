
export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-desc">
            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" className="logo" />
            <p className="text-sm text-gray-dark">
                Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="social-medias">
                <i className="fa fa-facebook" />
                <i className="fa fa-instagram" />
                <i className="fa fa-twitter" />
                <i className="fa fa-github" />
                <i className="fa fa-youtube" />
            </div>
        </div>
        <div className="columns-8"></div>
    </div>
  )
}
