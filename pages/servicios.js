import IndexPage from '../components/head';
import Link from "next/link";
import Layout from "../components/MyLayout";

import Footer from "../components/Footer";

import foto00 from './img/rojo.jpg';
import foto03 from './img/space.jpg';
import foto04 from './img/tesla.jpg';
import foto05 from './img/cara.jpg';

const img = (id) => {
    if(id === "buzos") {
        return <div><img src={foto00} width="330px" height="220" alt="logo" /></div>
    }
    if(id === "book") {
        return <div><img src={foto03} width="330px" height="220" alt="logo" /></div>
    }
    if(id === "colacion") {
        return <div><img src={foto04} width="330px" height="220" alt="logo" /></div>
    }
    if(id === "cena") {
        return <div><img src={foto05} width="330px" height="220" alt="logo" /></div>
    } else {
        return
    }
}

const title = (id) => {
    if (id === "buzos") {
        return  <div><div>{img(id)}</div>
                <h1 className="title">Presentación de buzos</h1>
                <p>Descipcion acerca de este servicio de fotografía. Algo generalizado, atrapante y sensacional.</p>
                <style jsx>{`.title {
                    text-align: center;
                    font-size: 30px;
                    color: #6a6a6a;
                    margin-top:20px;
                }
                p {
                    padding: 0 1rem;
                    font-size: 16px;
                    font-weight: 300;
                    color: #6a6a6a;
                    text-align: justify
                }
                
                `}</style></div>
    }
    if (id === "book") {
        return <div><div>
        {img(id)}</div>
        <h1 className="title">Book día libre</h1>
        <p>Descipcion acerca de este servicio de fotografía. Algo generalizado, atrapante y sensacional.</p>
        <style jsx>{`.title {
            text-align: center;
            font-size: 30px;
            color: #6a6a6a;
            margin-top:20px;
        }
        p {
            padding: 0 1rem;
            font-size: 16px;
            font-weight: 300;
            color: #6a6a6a;
            text-align: justify
        }`}</style></div>
    }
    if (id === "colacion") {
        return <div><div>{img(id)}</div>
        <h1 className="title">Book colación</h1>
        <p>Descipcion acerca de este servicio de fotografía. Algo generalizado, atrapante y sensacional.</p>
        <style jsx>{`.title {
            text-align: center;
            font-size: 30px;
            color: #6a6a6a;
            margin-top:20px;
        }
        p {
            padding: 0 1rem;
            font-size: 16px;
            font-weight: 300;
            color: #6a6a6a;
            text-align: justify
        }`}</style></div>
            
    }
    if (id === "cena") {
        return <div><div>{img(id)}</div>
        <h1 className="title">Cena de egresados</h1>
        <p>Descipcion acerca de este servicio de fotografía. Algo generalizado, atrapante y sensacional.</p>
        <style jsx>{`.title {
            text-align: center;
            font-size: 30px;
            color: #6a6a6a;
            margin-top:20px;
        }
        p {
            padding: 0 1rem;
            font-size: 16px;
            font-weight: 300;
            color: #6a6a6a;
            text-align: justify
        }`}</style></div>
            
    }
}

const PostLink = props => (
    <div>
        <div className="card">
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{title(props.id)}</a>
            </Link>
        </div>
        <style jsx>{`
            .card {
                width: 330px;
                height: 430px;
                border-radius: 8px;
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
                overflow: hidden;
                margin: 20px;
                text-align: center;
                transition: all 0.25s;
                background: white;
            }
            .card:hover {
                transform: translateY(-15px);
                box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
            }
            a {
                text-decoration: none;
            }
            @media screen and (min-width: 320px) and (max-width: 895px){
                .card {
                    width: 290px;
                }
            }
        `}</style>
    </div>
    
);

export default function Servicios() {
    return (
        <div>
            <IndexPage title="Servicios" />
            <Layout />
            <div className="main-servicio">
                <h1>SERVICIOS</h1>
                <div className="row">
                    <PostLink id="buzos" />
                    <PostLink id="book" />
                    <PostLink id="colacion" />
                    <PostLink id="cena" />
                </div>
            </div>
            <Footer />
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
                .main-servicio {
                    font-family: 'Open Sans', sans-serif;
                    background: #4BBAC9;
                    
                }
                .row {
                    width: 75%;
                    margin-left: 162px;
                    background: rgb(231, 244, 253);
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                h1 {
                    text-align: center;
                    color: white
                }
                @media screen and (width:360px){
                    .row {
                        margin-left:43px
                    }
                }
                @media screen and (width:411px){
                    .row {
                        margin-left:49px
                    }
                }
                @media screen and (width:375px){
                    .row {
                        margin-left:45px
                    }
                }
                @media screen and (width:414px){
                    .row {
                        margin-left:50px
                    }
                }
                
                @media screen and (min-width: 320px) and (max-width: 895px){
                    .row {
                        margin-left: auto;
                        margin-right: auto;
                        background: #C9FFDA;
                    }
                }
            `}</style>
        </div>
    );
}