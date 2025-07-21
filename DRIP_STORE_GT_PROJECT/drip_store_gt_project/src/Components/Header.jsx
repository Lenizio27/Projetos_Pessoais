{/*imports site */}
import 'primeflex/primeflex.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon'; 
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/primereact.min.css'
import { Button } from 'primereact/button';
import miniCart from "../../src/assets/Images/mini-cart.svg"
import Logo from "./Logo";
import { Link, NavLink } from 'react-router-dom';

{/* Estrutura Header*/}
const Header = () => {
    return ( 
            <header className='py-3 flex flex-column shadow-1  justify-content-center  align-items-center'>
            
                        <div style={{maxWidth: '1200px', minWidth:""}} className='col-5 md:col-12'>
                            <div  className="w-full flex align-items-center  justify-content-between ">
                                <Logo className='mr-3'/>
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
                                    label="Entrar" style={ {backgroundColor: '#C92071', border: 'none'}
                                }/>
                                <img src={miniCart} alt="" />
                            </div>
                            <div className="w-12" style={{ maxWidth: '1200px' }}>
                                <nav className='p-3'>{/*Navegacao*/}
                                    <ul className='flex gap-3 list-none'>
                                        <li><NavLink to={"/"} className="no-underline hover:underline active:underline" >Home</NavLink></li>
                                        <li><NavLink to={"/productListingPage"} className="no-underline hover:underline active:underline" >Produtos</NavLink></li>
                                        <li><NavLink to={""} className="no-underline hover:underline active:underline" >Categorias</NavLink></li>
                                        <li><NavLink to={""} className="no-underline hover:underline active:underline" >Meus Pedidos</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                   
                
            </header >
       
     );
    }
 
export default Header;