import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
    <div className="footerr">
        <div className="footer-content">
            <div className="footer-section about">
                <h1 className="logo-text">photo<span>assistence</span></h1>
                <p>Descripcion de la empresa, un poco mas de espacio para chamuyar. Corto y conciso para entender las cosas.</p>
                <div className="contact">
                    <span><FontAwesomeIcon icon={faMobileAlt} />&nbsp; 3518195169</span>
                    <span><FontAwesomeIcon icon={faEnvelopeSquare} />&nbsp; photoassistence@gmail.com</span>
                </div>
                <div className="socials">
                    <a href="http://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="http://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <Link href="/about"><li>Nosotros</li></Link>
                    <Link href="/servicios"><li>Servicios</li></Link>
                    <Link href="/contacto"><li>Contacto</li></Link>
                    <Link href="/terms"><li>Términos y condiciones</li></Link>
                </ul>

            </div>
            <div className="footer-section contact-form">
                <h2>¿Sos fotográfo?</h2>
                <p>Escribir una descripcion para los fotofrafos interesados
                    en trabajar con nosotros. Algo corto y directo.
                    Podria ser algo asi como los requisitos y un link que lleve directo
                    a la pagina correspondiente.
                </p>

            </div>
        </div>
        <div className="footer-bottom">
            &copy; photo-assistence.com | Designed by Wall Group
        </div>
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
                .footerr {
                    position: relative;
                    width: 100%;
                    flex-shrink: 0;
                    font-family: 'Open Sans', sans-serif;
                }
                
                .footerr .footer-content {
                    height: 320px;
                    background: #303036;
                    color: #d3d3d3;
                    display: flex;
                    flex: 1 0 auto;
                }
                
                .footerr .footer-content .footer-section {
                    flex: 1px;
                    padding: 25px;
                }
                
                .footerr .footer-content h1,
                .footerr .footer-content h2 {
                    color: white;
                }
                
                .footerr .footer-content .about h1 span {
                    color: rgb(219, 7, 112);
                }
                
                .footerr .footer-content .about .contact span {
                    display: block;
                    font-size: 1.1em;
                    margin-bottom: 8px;
                }
                
                .footerr .footer-content .about .socials a {
                    border: 1px solid gray;
                    width: 45px;
                    height: 35px;
                    padding-top: 5px;
                    margin-right: 5px;
                    text-align: center;
                    display: inline-block;
                    font-size: 1.3em;
                    border-radius: 5px;
                    transition: all .3s;
                }
                
                .footerr .footer-content .about .socials a:hover {
                    border: 1px solid white;
                    color: white;
                    transition: all .3s;
                }
                
                .footerr .footer-content .links h2,
                .footerr .footer-content .links ul{
                    margin-left: 50px;
                }
                
                .footerr .footer-content .links ul li {
                    margin-left: -10px;
                    text-decoration:none;
                    color: #d3d3d3;
                    display: block;
                    margin-bottom: 10px;
                    font-size: 1.em;
                    transition: all .3s;
                }
                
                .footerr .footer-content .links ul li:hover {
                    color: white;
                    margin-left: 15px;
                    transition: all .3s;
                }
                
                .footerr .footer-content .contact-form .contact-input {
                    background: #272727;
                    color: #bebdbd;
                    margin-bottom: 10px;
                    line-height: 1.5rem;
                    padding: .9rem 1.4rem;
                    border: none;
                }
                
                .footerr .footer-content .contact-form .contact-input:focus {
                    background: #1a1a1a;   
                }
                
                .btn-big {
                    padding: .7rem 1.3rem;
                    line-height: 1.3rem;
                    color: white;
                    border: 1px solid white;
                }
                
                .btn-big:hover {
                    color: rgb(82, 199, 253);
                    border: 1px solid rgb(82, 199, 253);
                }
                
                .footerr .footer-bottom {
                    background: #343a40;
                    color: #a09999;
                    height: 50px;
                    width: 100%;
                    text-align: center;
                    position: relative;
                    bottom: 0px;
                    left: 0px;
                    padding-top: 20px;
                }
                @media screen and (min-width: 320px) and (max-width: 520px){
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 70em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }

                    .about {
                        height: 19em;
                        position: relative;
                        left: 55px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:400px;
                        left: -235px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 756px;
                        left: -525px;
                        height: 22em;
                        width:240px;
                    }
                }
                @media screen and (min-width: 520px) and (max-width: 684px) {
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 40em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }

                    .about {
                        height: 19em;
                        position: relative;
                        left: -5px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:8px;
                        left: -25px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 336px;
                        left: -590px;
                        height: 22em;
                        width:240px;
                    }
                    
                }
                @media screen and (min-width: 685px) and (max-width: 1012px) {
                    .footerr .footer-content {
                        height: 31em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                }
                
                @media screen and (width:360px){
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 80em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }
                    .about {
                        height: 19em;
                        position: relative;
                        left: -5px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:400px;
                        left: -297px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 756px;
                        left: -590px;
                        height: 22em;
                        width:240px;
                    }
                    .footer-bottom {
                        position: relative;
                        top: 0px;
                    }
                }
                @media screen and (width:411px){
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 80em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }
                    .about {
                        height: 19em;
                        position: relative;
                        left: 54px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:400px;
                        left: -236px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 756px;
                        left: -525px;
                        height: 22em;
                        width:240px;
                    }
                    .footer-bottom {
                        position: relative;
                        top: 0px;
                    }
                }
                @media screen and (width:320px){
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 80em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }
                    .about {
                        height: 19em;
                        position: relative;
                        left: 5px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:400px;
                        left: -282px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 756px;
                        left: -567px;
                        height: 22em;
                        width:240px;
                    }
                    .footer-bottom {
                        position: relative;
                        top: 0px;
                    }
                }
                @media screen and (width:375px){
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 80em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }
                    .about {
                        height: 19em;
                        position: relative;
                        left: 35px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:400px;
                        left: -256px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 756px;
                        left: -545px;
                        height: 22em;
                        width:240px;
                    }
                    .footer-bottom {
                        position: relative;
                        top: 0px;
                    }
                }
                @media screen and (width:414px){
                    .footerr {
                        position: relative;
                        flex-shrink: 2;
                    }
                    
                    .footerr .footer-content {
                        height: 80em;
                        background: #303036;
                        color: #d3d3d3;
                        display: flex;
                        flex: 0 0 auto;
                    }
                    
                    .footerr .footer-content .footer-section {
                        flex: none;
                        padding: 25px;
                    }
                    .about {
                        height: 19em;
                        position: relative;
                        left: 54px;
                        width: 240px
                    }
                    .links {
                        position: relative;
                        top:400px;
                        left: -236px;
                        height:260px;
                        width:240px;
                    }
                    .footerr .footer-content .links h2,
                    .footerr .footer-content .links ul{
                        margin-left: 0px;
                    }
                    .contact-form {
                        position: relative;
                        top: 756px;
                        left: -525px;
                        height: 22em;
                        width:240px;
                    }
                    .footer-bottom {
                        position: relative;
                        top: 0px;
                    }
                }
        `}</style>
    </div>
);

export default Footer;