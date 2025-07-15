import LogoFooter from "../../src/assets/Images/logo-footer.svg"
import LogoInsta from "../../src/assets/Images/logo_insta.png"
import LogoFace from "../../src/assets/Images/logo_facebook.png"
import LogoX from "../../src/assets/Images/logo_X.png"
const Footer = () => {
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
    const Contato=[
        {text:"Av.Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: ""},
        {text:"(85) 3051 3411", link: ""},
    ]
   
   
    return ( 
      <footer style={{backgroundColor: '#474747'}}>
        <div>
            <img src={LogoFooter} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum maxime illo laudantium voluptas porro perferendis aut laboriosam nulla hic cumque quas tempore accusantium rem totam corrupti asperiores, eos veritatis iure.</p>
            <div>
                <img src={LogoFace} alt="" />
                <img src={LogoInsta} alt="" />
                <img src={LogoX} alt="" />
            </div>
        </div>
        <div>
            
        </div>
        <hr />
        <p className="text-center">@ 2025 Digital College</p>
      </footer>
     );
}
 
export default Footer;