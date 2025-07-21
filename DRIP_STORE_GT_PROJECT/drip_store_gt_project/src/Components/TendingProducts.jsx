import { Card } from 'primereact/card';

const products = [
  {
    name: 'K-Swiss V8 - Masculino',
    image: '/src/assets/Images/red_nike.png',
    oldPrice: '$200',
    newPrice: '$100',
    discount: '50% OFF'
  },
  // Adicione mais produtos conforme desejar
];


const TendingProducts = () => {
    return ( 
        <>
            <section className="py-6 w-full align-items-center">
                <div className="text-left mb-4">
                    <h3 className="text-2xl font-bold">Produtos em alta</h3>
                </div>
                    <div className='flex flex-wrap gap-3 align-items-center justify-content-center'>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            className=''
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                        <div className="flex justify-content-center gap-4">
                            {products.map((item, index) => (
                        <Card
                            key={index}
                            className="p-2"
                            style={{ width: '200px', textAlign: 'center' }}
                        >
                            <div className="text-xs text-pink-500 font-bold">{item.discount}</div>
                            <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: '140px', objectFit: 'contain', marginBottom: '10px' }}
                            />
                            <h4 className="text-base font-medium">{item.name}</h4>
                            <p>
                            <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{item.oldPrice}</span>
                            <span className="text-pink-500 font-bold">{item.newPrice}</span>
                            </p>
                        </Card>
                        ))}
                        </div>
                       
                    </div>
            </section>
        </>
     );
}
 
export default TendingProducts;