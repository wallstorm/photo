import img from './logo01.png'
 
export default () => <div>
  <img src={img} width="230px" alt="logo" className="img-header"/>
  <style jsx>{`
    div {
        margin-left: 55px;
        position: absolute;
    }
    @media screen and (min-width: 480px) and (max-width: 950px) {
        div {
            text-align:center;
            position: relative;
            top: -200px;
        }
    }
    @media screen and (max-width: 480px) {
        div {
            text-align: center;
            position: relative;
            top:-200px;
            margin-left: 0;
        }
    }
  `}</style>
</div>