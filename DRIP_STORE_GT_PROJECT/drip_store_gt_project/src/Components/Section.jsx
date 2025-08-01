import { Button } from 'primereact/button';
import redNike from '../../src/assets/Images/red_nike.png'
import FeaturedCollections from './FeaturedCollections';
import TendingProducts from './TendingProducts';
import SpecialOffer from './SpecialOffer';

import ProductCard from './ProductCard';

const Section = ({title}) => {
    return ( 
        <>

        {/* Melhores ofertas personalizadas*/}

            <section className='flex align-items-center flex-row justify-content-center'>
                <div className="w-full flex align-items-center  justify-content-around mx-6" style={{maxWidth: '1200px'}}>
                    <div className='w-6'>
                        <h1>{title}</h1>
                        <p>Melhores ofertas personalizadas</p>
                        <h1>Queima de stoque Nike</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo quia doloribus tempore voluptas aut alias beatae perferendis ipsum omnis, quibusdam voluptatibus veritatis, assumenda reiciendis dolorem dolores dignissimos? Molestias, hic.</h5>
                        <Button
                            label="Ver Ofertas" style={ {backgroundColor: '#C92071', border: 'none'}
                        }/>
                    </div>

                    <div className='w-6'>
                        <img src={redNike} alt="" className='-rotate-45 w-full' />
                    </div>
                </div>
            </section>

            {/* Colecoes em destaque */}

            <section className='flex align-items-center flex-row justify-content-center'>
                
            </section>

            {/* Produtos em alta */}

            <section>

            </section>

            {/* Ofertas Especiais */}
        </>
     );
}
 
export default Section;