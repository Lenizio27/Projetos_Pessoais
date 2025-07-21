const ProductCard = ({image,name,price,priceDiscount,category}) => {
    return ( 
         <div className="surface-0 border-round shadow-2 p-3 flex flex-column align-items-center text-center" style={{ width: '292px' }}>
      <div className="relative">
        <img
          src={image}
          alt={name}
          width={292}
          height={321}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
        {discountLabel && (
          <span
            className="text-xs font-bold absolute"
            style={{
              top: '10px',
              left: '10px',
              backgroundColor: '#D0FF4B',
              color: '#000',
              padding: '4px 8px',
              borderRadius: '999px',
            }}
          >
            {discountLabel}
          </span>
        )}
      </div>

      <div className="mt-3">
        <p className="text-sm text-500 mb-1">{category}</p>
        <p className="text-base text-900 font-medium mb-2">{name}</p>

        <div className="flex justify-content-center align-items-center gap-2">
          {priceDiscount ? (
            <>
              <span className="text-500 text-base line-through">R$ {price}</span>
              <span className="text-900 text-base font-bold">R$ {priceDiscount}</span>
            </>
          ) : (
            <span className="text-900 text-base font-bold">R$ {price}</span>
          )}
        </div>
      </div>
    </div>
     );
}
 
export default ProductCard;