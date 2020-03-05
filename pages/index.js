import Layout from "../components/MyLayout";
import IndexPage from "../components/head";
import Footer from "../components/Footer";
import Card from "../components/card";
import cardDatos from "../data/card";

const style1 = {
    box: "10px 0px 1px #006dbc",
    border: "1px solid #006dbc"
};
const style2 = {
    box: "10px 0px 1px #5882FA",
    border: "1px solid #5882FA"
};
const style3 = {
    box: "10px 0px 1px #58ACFA",
    border: "1px solid #58ACFA"
};
export default function Index() {
    const datos = cardDatos[0];
    const datos1 = cardDatos[1];
    const datos2 = cardDatos[2];
    
    return (
        <div>
            <IndexPage title="photo assistence" />
            <Layout />
            <Card 
                title={datos.title}
                subtitle={datos.subtitle}
                description={datos.description}
                price={datos.price}
                estilo={style1} 
                estilo1="5px solid #006dbc" 
            />
            <Card 
                title={datos1.title}
                subtitle={datos1.subtitle}
                description={datos1.description}
                estilo={style2} 
                estilo1="5px solid #5882FA"
            />
            <Card 
                title={datos2.title}
                subtitle={datos2.subtitle}
                description={datos2.description}
                estilo={style3}   
                estilo1="5px solid #58ACFA"    
            />
            <Footer />
        </div>
    );
}