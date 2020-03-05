
const Cuadro = (props) => (
    <div>
        <div className="main">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
            .main {
                font-family: 'Poppins', sans-serif;
                width: 60em;
                margin: 0 auto;
                text-align: left;
                box-sizing: border-box;
            }
            h1 {
                font-size: 50px;
                color: #4BC997;
                text-align: center;
            }
            p {
                text-align: center;
                padding: 0px 35px;
            }
            @media screen and (max-width: 978px) {
                .main {
                    width: auto;
                }
                p {
                    text-align: justify
                }
            }
        `}</style>
    </div>    
);

export default Cuadro;