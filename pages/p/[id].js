import { useRouter } from "next/router";
import IndexPage from '../../components/head';

import SingleService from "../../components/SingleService";
import Layout from "../../components/MyLayout";
import Footer from "../../components/Footer";

import { data } from "../../components/images";

export default function Service() {
    const router = useRouter();
    const res = data.find(service => service.id === router.query.id);
    console.log("res:", res);
    console.log("data:", data);

    return(
        <div>
            <IndexPage title={res.title} />
            <Layout />
            <SingleService
                title={res.title}
                description={res.description}
                price={res.price}
                img1={res.img.img1}
                img2={res.img.img2}
                img3={res.img.img3}
            />
            <Footer />
        </div>
    )
};

Service.getInitialProps = async () => {
    return {};
};

