import Link from "next/link";
import "../public/main.scss"

const SingleService = (props) => { 
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main-servi">
                            <h1>{props.title}</h1>
                            <p className="text-edit">{props.description}</p>
                        </div>
                        <Link href="/contacto">
                            <p className="text-edit-1">Consulte el precio por este servicio aquí</p>
                        </Link>
                    </div>
                    <div className="col-12 mb-2">
                        <div id="principal-carousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#principal-carousel" data-slid-to="0" className="active"></li>
                                <li data-target="#principal-carousel" data-slid-to="1" ></li>
                                <li data-target="#principal-carousel" data-slid-to="2" ></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={props.img1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={props.img2} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={props.img3} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#principal-carousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#principal-carousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
    
export default SingleService;