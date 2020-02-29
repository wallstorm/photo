import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";
import content from "../../content";
import Footer from "../../components/Footer";


export default function Post() {
    const router = useRouter();
    const res = content.find(service => service.id === router.query.id);
    console.log("router.query:", router.query);
    console.log("router.query.id:", router.query.id);
    console.log("res:", res);
    return (
        <div>
            <Layout />      
            <div className="main-servi">
                <h1>{res.title}</h1>
                <p>{res.description}</p>
                <p>{res.price}</p>
            </div>
            <Footer />
            <style jsx>{`
                .main-servi {
                    width: 100%;
                    height: 30em;
                    background:#3498DB
                }
            `}</style>
        </div>
    );
}

Post.getInitialProps = async () => {
    return {};
  };