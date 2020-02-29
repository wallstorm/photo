import Header from "./Header";

const layoutStyle = {
    border: "1px solid #DDD",
    width: "100%",
    height: "100px",
    background: "#ed008e"    
}

const Layout = props => (
    <div>
        <div id="main-header">
            <Header />
        </div>
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
            #main-header {
                width: 100%;
                height: 100px;
                font-family: 'Open Sans', sans-serif;
                margin-bottom: 15px;
                
            }
            
            @media screen and (min-width: 380px) and (max-width: 950px) {
                #main-header {
                    height: 271px;
                }
            }
            @media screen and (min-width:320px) and (max-width: 480px) {
                #main-header {
                    height: 271px;
                }
            }
    `}</style>
    </div>
);

export default Layout;