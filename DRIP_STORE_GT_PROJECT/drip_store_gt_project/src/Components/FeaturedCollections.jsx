import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import supremeImg from '../assets/Images/supreme_shirt.png';
import adidasImg from '../assets/Images/dark_nike.png';
import beatsImg from '../assets/Images/phone_dark.png';

import destaqueShirt from '../assets/Images/destaque_shirt.png';
import destaqueShoe from '../assets/Images/destaque_tenis.png';
import destaqueShort from '../assets/Images/destaque_short.png';
import destaqueHeadphone from '../assets/Images/destaque_headphone.png';

const featuredCollections = [
  {
    title: 'Novo drop Supreme',
    discount: '30% OFF',
    image: supremeImg,
  },
  {
    title: 'Coleção Adidas',
    discount: '35% OFF',
    image: adidasImg,
  },
  {
    title: 'Novo Beats Bass',
    discount: '30% OFF',
    image: beatsImg,
  },
];

const FeaturedCollections = () => {
  return (
    <> 
    <section className="py-6">
      <div className="text-left mb-4">
        <h3 className="text-2xl font-bold">Coleções em destaque</h3>
      </div>

      <div className="flex flex-wrap justify-content-center gap-4">
        {featuredCollections.map((item, index) => (
          <Card
            key={index}
            style={{
              width: '350px',
              backgroundColor: '#e6f0ff',
              padding: '1rem',
              borderRadius: '12px',
              textAlign: 'left',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <div className='flex'>
                <div>
                    <span
                      style={{
                        backgroundColor: '#d0ff92',
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                      }}
                    >
                      {item.discount}
                    </span>
                
                    <h2 className=" font-bol mb-3">{item.title}</h2>
                    <Button
                      label="Comprar"
                      className="p-button-sm p-button-rounded"
                      style={{ 
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius:'8px',
                        color:'#c92071'
                    }}
                    />
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: '120px',
                    objectFit: 'contain',
                    margin: '10px 0',
                  }}
                />
            </div>
          </Card>
          
        ))}
      </div>
    </section>
    <section className='w-full'>
        <div className='text-center'>
            <h3>Coleções em destaque</h3>
        </div>
        <div className='flex align-items-center w-full justify-content-center gap-4'>
            <div className='p-3 border-circle' style={{backgroundColor:'#F9F8FE'}}><img src={destaqueShirt} alt="" /></div>
            <div className='p-3 border-circle' style={{backgroundColor:'#F9F8FE'}}><img src={destaqueShort} alt="" /></div>
            <div className='p-3 border-circle' style={{backgroundColor:'#F9F8FE'}}><img src={destaqueShort} alt="" /></div>
            <div className='p-3 border-circle' style={{backgroundColor:'#F9F8FE'}}><img src={destaqueShoe} alt="" /></div>
            <div className='p-3 border-circle' style={{backgroundColor:'#F9F8FE'}}><img src={destaqueHeadphone} alt="" /></div>
        </div>
    </section>
    </>
  );
};

export default FeaturedCollections;
