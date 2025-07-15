{/*imports site */}
import 'primeflex/primeflex.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon'; 
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/primereact.min.css'
import { Button } from 'primereact/button';
import miniCart from "../../src/assets/Images/mini-cart.svg"
import Logo from "./Logo";

{/* Estrutura Header*/}
const Header = () => {
    return ( 
        
        <div className=' pt-3  flex-direction: column shadow-1 '>
            <div className="w-12 flex align-items-center  justify-content-around  ">
                <Logo />
                <IconField>
                    <InputIcon 
                        className='pi pi-search'
                     />
                    <InputText
                        id='pesquisar'
                        type="text"
                        placeholder='pesquisar prduto...'
                        className='w-12'
                    />
                </IconField>
                <a href 
                    style={{color:"#474747",    textDecoration:"underline", textDecorationColor:"#474747"}} className='text-base'>Cadastra-se
                </a>
                <Button 
                    label="Submit" style={ {backgroundColor: '#C92071', border: 'none'}
                }/>
                <img src={miniCart} alt="" />

            </div>
            <nav className='p-1'>{/*Navegacao*/}
                <ul className='flex gap-3 list-none'>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Categorias</li>
                    <li>Meus Pedidos</li>
                </ul>
            </nav>
        </div >
     );
    }
 
export default Header;