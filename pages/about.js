import Layout from "../components/MyLayout";
import Footer from "../components/Footer";
import Team from "../components/cardTeam"
import data from "./team.json";
import dario from './dario.jpg';
import lisa from './lisa.jpg';

export default function About() {
    const perfil = data[0];
    const perfil1 = data[1];
    return (
        <div>
            <Layout />
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
            <Footer />
            <style jsx>{`
                .heading {
                    text-transform: uppercase;
                    font-size: 3.5rem;
                    letter-spacing: 3px;
                    margin-right: -3px;
                    margin-bottom: 3rem;
                    text-align: center;
                    color: #333;
                    position: relative;
                    margin-top: 40px
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