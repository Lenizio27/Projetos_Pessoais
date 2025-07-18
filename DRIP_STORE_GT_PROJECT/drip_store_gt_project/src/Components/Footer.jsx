import LogoFooter from "../../src/assets/Images/logo-footer.svg"
import LogoInsta from "../../src/assets/Images/logo_insta.png"
import LogoFace from "../../src/assets/Images/logo_facebook.png"
import LogoX from "../../src/assets/Images/logo_X.png"
import Informations from "./Informations"
const Footer = () => {

    {{/* Arrays titulos */}}

     const informacao=[
           {text:"Sobre Drip Store", link: ""},
           {text:"Segurança", link: ""},
           {text:"Wishlist", link: ""},
           {text:"Blog", link: ""},
           {text:"Trabalhe conosco", link: ""},
           {text:"Meus pedidos", link: ""},
       ]
       const categorias=[
           {text:"Camisetas", link: ""},
           {text:"Calças", link: ""},
           {text:"Bonés", link: ""},
           {text:"Headphones", link: ""},
           {text:"Tênis", link: ""}
       ]
       const contato=[
           {text:"Av.Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: ""},
           {text:"(85) 3051 3411", link: ""},
       ] 
    return ( 
        // estrutura footer
      <footer style={{backgroundColor: '#474747', color:'var(--surface-0)'}} className=' w-full m-0  flex flex-column shadow-1 '>
        
        <div className="w-12 flex align-items-center justify-content-center gap-6 m-auto" style={{maxWidth: '1200px', height: ''}}>
          
          <div id="redes-socias" className="mb-6 w-4">
              <img src={LogoFooter} alt="" style={{width: '244px', height: '44px'}} />
              <p className=""> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum maxime illo laudantium voluptas porro perferendis aut 
                </p>
              <div className="flex gap-3">
                  <img src={LogoFace} alt="" />
                  <img src={LogoInsta} alt="" />
                  <img src={LogoX} alt="" />
              </div>
          </div>
          <div id="card-infomacaoes" className="flex flex-row gap-6 w-8">
              <Informations
              title={"Informações"}
              informations={informacao}
              />
              <Informations 
              title={"Categorias"} 
              informations={categorias}
              />
              <Informations 
              title={"Contato"} 
              informations={contato}
              />
          </div>
        </div>
            <hr className="w-full"style={{maxWidth: '1200px', height: ''}}/>
            <p className="text-center " >@ 2025 Digital College</p>
      </footer>
     );
}
 
export default Footer;