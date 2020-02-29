import Layout from "../components/MyLayout";
import IndexPage from "./head";
import Footer from "../components/Footer";
import Card from "../components/card";
import cardDatos from "./card";

export default function Index() {
    const datos = cardDatos[0];
    const datos1 = cardDatos[1];
    const datos2 = cardDatos[2];
    return (
        <div>
            <IndexPage />
            <Layout />
            <Card 
                title={datos.title}
                subtitle={datos.subtitle}
                description={datos.description}
                price={datos.price}    
            />
            <Card 
                title={datos1.title}
                subtitle={datos1.subtitle}
                description={datos1.description}
                price={datos1.price}    
            />
            <Card 
                title={datos2.title}
                subtitle={datos2.subtitle}
                description={datos2.description}
                price={datos2.price}    
            />
            <Footer />
        </div>
    );
}