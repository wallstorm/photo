import img2 from './planeta.jpg';

const Team = (props) => (
    <div>
        <div className="container">
            <div className="card-wrapper">
                <div className="card">
                    <img src={img2} alt="card background" className="card-img" />
                    <img src={props.img} alt="profile image" className="profile-img" />
                    <h1>{props.name}</h1>
                    <p className="job-title">{props.role}</p>
                    <p className="about">{props.description}</p>
                </div>
            </div>
        </div>
        <style jsx>{`
        
        .card-wrapper {
            display: flex;
            align-items: center;
            align-content: center;
            flex-direction: column;
            width: 350px
        }
        .card {
            width: 17rem;
            background-color: #ebeef8;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 2rem 0;
            box-shadow: .5rem .5rem 3rem rgba(0, 0, 0, 0.2);
        }
        .card .card-img {
            width: 100%;
            height: 15rem;
            object-fit: cover;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
        }
        .profile-img {
            width: 6rem;
            height: 6rem;
            object-fit: cover;
            border-radius: 50%;
            margin-top: -5rem;
            z-index: 999;
            border: 1rem solid #ebeef8;
        }
        
        .job-title {
            color: #777;
            font-size: 1.5rem;
            font-weight: 300;
        }
        .about {
            font-size: 1.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            text-align: center;
            color: #333;
        }
        @media screen and (min-width: 700px) {
            .card {
                margin: 2rem;
                transition: transform .5s;
            }

            .card:hover {
                transform: scale(1.1);
            }
        }
        
    `}</style>
    </div>
);

export default Team;