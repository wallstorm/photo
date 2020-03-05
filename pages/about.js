import HeadTitle from "../components/head-title";
import Layout from "../components/MyLayout";
import Footer from "../components/Footer";
import Team from "../components/cardTeam"
import Cuadro from "../components/aboutUS";

import Perfil from "../components/perfil";

import dataCuadro from "../data/cuadro.json";
import data from "../data/team.json";

import dario from './img/dario.jpg';
import lisa from './img/lisa.jpg';


export default function About() {
    const perfil = data[0];
    const perfil1 = data[1];

    const cuadro = dataCuadro[0];

    return (
        <div>
            <HeadTitle title="Nosotros" />
            <Layout />
            <Cuadro
                title={cuadro.title}
                text={cuadro.text}
            />
            <h1 className="heading">Nuestro Equipo</h1>
            <div className="team">
                <Team
                    img={dario}
                    name={perfil.name}
                    role={perfil.role}
                    description={perfil.description}
                />
                <Team
                    img={lisa}
                    name={perfil1.name}
                    role={perfil1.role}
                    description={perfil1.description}
                />
            </div>
            <Perfil />
            <Footer />
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
                .heading {
                    text-transform: uppercase;
                    font-size: 3.5rem;
                    letter-spacing: 3px;
                    margin-right: -3px;
                    margin-bottom: 3rem;
                    text-align: center;
                    color: #333;
                    position: relative;
                    margin-top: 40px;
                    font-family: 'Poppins', sans-serif;
                }
                .heading:after {
                    content: "";
                    width: 10rem;
                    height: .8rem;
                    background-color: #45e19f;
                    position: absolute;
                    bottom: -2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 2rem;
                }
                h1 {
                    font-size: 2.5rem;
                    color: #333;
                    margin: 1.5rem 0;
                }
                .team {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                @media screen and (max-width: 560px) {
                    .heading {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
}