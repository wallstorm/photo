import img1 from './images/camere.jpg';
import Link from "next/link";

const Card = (props) => (
    <div>
        <div className="containerr" style={{border: props.estilo.border, boxShadow: props.estilo.box}}>
            <div className="imgBx" data-before-content={props.title} style={{border: props.estilo1}}>
                <img src={img1} />
            </div>
            <div className="details">
                <div className="content">
                    <h2>{props.title}<br /><span>{props.subtitle}</span></h2>
                    <p>{props.description}</p>
                    <Link href="/servicios"><p className="link">Clic aquí para ver los eventos</p></Link>
                    <h3>{props.price}</h3>
                    <div className="btn"><Link href="/contacto"><button>Contáctanos Ahora</button></Link></div>
                </div>
            </div>
        </div>
        
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
            
            .containerr {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width:900px;
                height: 600px;
                background: #fff;
                margin:0px auto;
                margin-bottom: 30px;
                font-family: 'Poppins', sans-serif;
                border-radius: 0px 15px 15px 0px;
            }
            
            .imgBx {
                position: relative;
                display:flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
                box-sizing: border-box;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-end;
            }
            .imgBx img {
                width: 100%;
            }
            .containerr .imgBx:before {
                content: attr(data-before-content);
                position: absolute;
                top: 70px;
                left: 20px;
                color: #000;
                opacity: 0.2;
                font-size: 7em;
                font-weight: 800;
                align-content: center
            }
            .containerr .details {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
                box-sizing: border-box;
                padding: 40px
            }
            .containerr .details h2 {
                margin: 0;
                padding: 0;
                font-size: 2.5em;
                line-height: 0.8em;
                color: #444;
            }
            .containerr .details h2 span {
                font-size: 0.4em;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #999
            }
            .link {
                text-decoration: underline;
                cursor: pointer
            }
            .containerr .details p {
                max-width: 85%;
                margin-left: 15%;
                color: #333;
                font-size: 15px;
                white-space: pre-wrap;
                white-space: -moz-pre-wrap;
                white-space: -o-pre-wrap;
            }
            .containerr .details h3 {
                margin: 0;
                padding: 0;
                font-size: 2em;
                color: #a2a2a2;
                text-align: center;
            }
            .containerr .details button {
                background: #006dbc;
                color: #fff;
                border: none;
                box-shadow: none;
                outline: none;
                padding: 15px 20px;
                margin-top: -1px;
                font-size: 16px;
                letter-spacing: 1px;
                font-weight: 600;
                border-radius: 40px;
                margin-left: auto;
                margin-right: auto;
                cursor: pointer;
            }
            .btn {
                text-align: center;
                margin-top: 2px;
            }
            @media (max-width: 1080px) {
                .containerr {
                    height: auto;
                    width: auto;
                }
                .containerr .imgBx {
                    width: auto;
                }
                .containerr .imgBx:before {
                    position: absolute;
                    top: 120px;
                }
                .containerr .imgBx img {
                    left: initial;
                }
                .details {
                    width: 100% !important;
                    height: auto;
                    padding: 20px
                }
                .containerr .details p {
                    max-width: 100%;
                    margin-left: 0;
                }
                .containerr .details h3 {
                    font-size: 1.5em;
                }
                .containerr .imgBx:before {
                    margin:0px;
                    font-size: 5em;
                    width: 100%;
                    text-align: center;
                }
            }
        `}</style>
</div>
    
);

export default Card;