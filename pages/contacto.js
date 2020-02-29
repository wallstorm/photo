import Layout from "../components/MyLayout";
import Footer from "../components/Footer";

export default function Contacto() {
    return (
        <div>
            <Layout />
            <div className="contact">
                <h1>CONTACTO</h1>
                <div className="contenedor">
                    <div className="tarjeta">
                        <h3>Aquí encontraras la forma de contactarnos ! </h3>
                    </div>
                </div>
            </div>
            <Footer />
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
                .contact {
                    margin: 0px;
                    height: 30em;
                    background: #E91E63;
                    font-family: 'Open Sans', sans-serif;
                }
                h1 {
                    color: white;
                    text-align: center;
                }
                .contenedor {
                    width: 90%;
                    max-width: 700px;
                    margin: auto;
                    height: 20em;
                    display: flex;
                    align-items:center;
                    background: white;
                    border-radius: 15px;
                }
            `}</style>
        </div>
    );
}