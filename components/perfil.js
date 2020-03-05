import Head from "next/head";

const Perfil = (props) => { 
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
                <link rel="stylesheet" href="../swiper.min.css"></link>
                <script src="../swiper.min.js"></script>
            </Head>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <style jsx>{`
            body {
                background: #fff;
                font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                font-size: 14px;
                color:#000;
                margin: 0;
                padding: 0;
              }
              .swiper-container {
                width: 100%;
                padding-top: 50px;
                padding-bottom: 50px;
              }
              .swiper-slide {
                background-position: center;
                background-size: cover;
                width: 300px;
                height: 300px;
          
              }
            `}</style>
        </div>  
    )
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
}
    
export default Perfil;