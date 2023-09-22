
export default function Banner() {
  return (
    <div className="content">
        <div className="flex flex-wrap justify-between">
            <div className="text-center lg:w-4/12 md:w-8/12">
                <h2>free ai image</h2>
                <h1>generator</h1>
                <button className="btn">get started</button>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe laboriosam laudantium, eligendi, at placeat corporis exercitationem hic non maxime deserunt iusto, libero porro ex nam. Facilis perspiciatis tempore nulla veniam.</p>
            </div>
            <div className="lg:w-2/12 md:w-4/12 img">
                <img src="https://picsum.photos/1920/1080" alt="" className="object-fill img1" />
            </div>
            <div className="lg:w-4/12 md:w-6/12 h-full lg:my-0 md:mx-0 sm:my-6 img">
                <img src="https://picsum.photos/1920/1080" alt="" className="object-fill img2" />
            </div>
            <div className="lg:w-2/12 md:w-4/12 lg:m-0 md:m-6 img">
                <img src="https://picsum.photos/1920/1080" alt="" className="object-fill img3" />
            </div>
        </div>
    </div>
  )
}
