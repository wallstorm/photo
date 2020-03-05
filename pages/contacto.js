import HeadTitle from "../components/head-title";
import Layout from "../components/MyLayout";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

export default function Contacto() {
    return (
        <div>
            <HeadTitle title="Contactos" />
            <Layout />
            <div className="main">
                <div className="cardBox">
                    <div className="card">
                        <div className="card-front">
                            <div className="content">
                                <h3>photoassistence</h3>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="content">
                                <div className="logo">
                                    <h3 className="image">photo<span>assistence</span></h3>
                                    <h2>Micaela Yupatti</h2>
                                </div>
                                <ul>
                                    <li>
                                        <span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                                        <span>+54 351 2177261</span>
                                    </li>
                                    <li>
                                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                        <span>photo_assistence@gmail.com</span>
                                    </li>
                                    <li>
                                        <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                        <span>Córdoba, Argentina</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
                .main {
                    background: #4CC794;
                    height:500px;
                    font-family: 'Muli', sans-serif;
                }
                .cardBox {
                    position: relative;
                    top: 50%;
                    left: 50%;
                    width: 525px;
                    transform: translate(-50%, -50%);
                    perspective: 1000px;
                }
                .cardBox .card {
                    position: relative;
                    width: 525px;
                    height: 300px;
                    background: #262626;
                    transform-style: preserve-3d;
                    transition: 1s ease;
                }
                .cardBox .card .card-front,
                .cardBox .card .card-back {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                }
                .cardBox .card .card-front {
                    display: flex;
                    font-size: 40px;
                    justify-content: center;
                    align-items: center;
                    background: white;
                    color: #fff;
                    overflow: hidden;
                    border:10px solid #FFE9F2;
                }
                .cardBox .card .card-front img {
                    width: 250px;
                    height: 250px;
                }
                .cardBox .card .card-front h3 {
                    margin: 20px 0 0;
                    padding: 0;
                    font-size: 16px;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    color: #262626;
                }
                .cardBox .card .card-front {
                    text-align: center;
                }
                .cardBox .card .card-back {
                    background: #fff;
                    color: #262626;
                }
                .cardBox .card .card-back .content {
                    position: relative;
                    width: 100%;
                    height: 100%
                }
                .cardBox .card .card-back .content .logo {
                    padding: 40px 40px 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .cardBox .card .card-back .content .logo .image {
                    width: 120px;
                    height: 50px;
                    padding-right: 30px;
                    border-right: 1px solid #262626;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .cardBox .card .card-back .content .logo h3 span {
                    color: rgb(219, 7, 112);
                }
                .cardBox .card .card-back .content .logo h2 {
                    margin: 0px;
                    padding: 0px;
                    padding-left: 20px;
                    text-transform: uppercase;
                }
                .cardBox .card .card-back .content ul {
                    position: absolute;
                    width: 100%;
                    height: 150px;
                    bottom: 0;
                    left: 0;
                    margin: 0;
                    padding: 20px 40px;
                    box-sizing: border-box;
                    background: #262626;
                    border-top: 10px solid rgb(219, 7, 112);
                }
                .cardBox .card .card-back .content ul li {
                    list-style: none;
                    color: #fff;
                    padding: 6px 0;
                    font-size: 16px;
                    text-transform: none;
                }
                .cardBox .card .card-back .content ul li span:nth-child(1) {
                    width: 20px;
                    display: inline-block;
                }
                .cardBox:hover .card {
                    transform: rotateY(180deg);
                }
                .cardBox .card .card-back {
                    transform: rotateY(180deg);
                }
                @media screen and (max-width: 550px) {
                    .cardBox {
                        width: auto;
                    }
                    .cardBox .card {
                        width: auto;
                    }
                    .cardBox .card .card-back .content ul li {
                        list-style: none;
                        color: #fff;
                        padding: 6px 0;
                        font-size: 16px;
                        text-transform: none;
                    }
                }
            `}</style>
        </div>
    );
}