import { Button } from 'primereact/button';
import jordanImg from '../assets/Images/yellow_nike.png';


const SpecialOffer = () => {
    return ( 
        <>
        <section
      className="flex justify-content-center align-items-center py-6"
      style={{ backgroundColor: '', borderRadius: '20px', margin: '0 1rem' }}
    >
        <div className="w-6 flex justify-content-center">
          <img
            src={jordanImg}
            alt="Air Jordan"
            style={{ height: '300px', objectFit: 'contain' }}
          />
        </div>
      <div className="flex flex-wrap justify-content-around align-items-center w-full" style={{ maxWidth: '1200px' }}>
        {/* Texto */}
        <div className="w-6">
          <p className="text-sm font-bold" style={{color:'#C92071'}}>Oferta especial</p>
          <h3 className="text-2xl font-bold mb-2">Air Jordan edição de colecionador</h3>
          <p className="mb-4" style={{ maxWidth: '90%' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Button label="Ver Ofertas" className="p-button-sm" style={{ backgroundColor: '#C92071', border: 'none' }} />
        </div>

        {/* Imagem */}
      </div>
    </section>
        </>
     );
}
 
export default SpecialOffer;