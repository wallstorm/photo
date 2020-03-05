import Link from "next/link";
import img from "./images/logo01.png";

const Header = () => (
    <div>
        <Link href="/contacto">
            <a>Contacto</a>
        </Link>
        <Link href="/servicios">
            <a>Servicios</a>
        </Link>
        <Link href="/about">
            <a>¿Quienes Somos?</a>
        </Link>
        <Link href="/">
            <a>Inicio</a>
        </Link>
        <div className="logo-wall">
            <Link href="/">
                <img src={img} width="230px" alt="logo" />
            </Link>
        </div>
        
        <style jsx>{`
            .logo-wall {
                margin-left: 55px;
                position: absolute;
            }
            
            a {
                color: black;
                text-decoration: none;
                padding: 20px 30px;
                font-size: 1.3em;
                float: right;
                margin-top:30px;
                transition: 0.5s;
            }
            a:hover {
                background:#E91E63;
                color:white;
                transition: 0.5s;
            }
            
            @media screen and (min-width: 480px) and (max-width: 950px) {
                .logo-wall {
                    text-align:center;
                    position: relative;
                    top: -200px;
                }
            }
            @media screen and (max-width: 480px) {
                .logo-wall {
                    text-align: center;
                    position: relative;
                    top:-200px;
                    margin-left: 0;
                }
            }
            @media screen and (min-width: 320px) and (max-width: 950px) {
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 100%;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
            @media screen and (width:394px){
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 335px;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
            @media screen and (width:360px){
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 301px;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
            @media screen and (width:411px){
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 353px;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
            @media screen and (width:320px){
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 260px;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
            @media screen and (width:375px){
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 318px;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
            @media screen and (width:414px){
                a {
                    position: relative;
                    top: 80px;
                    display: block;
                    width: 356px;
                    float:none;
                    text-align: center;
                    margin-top:0;
                    padding: 10px 20px;
                }
            }
        `}</style>
    </div>
);

export default Header;