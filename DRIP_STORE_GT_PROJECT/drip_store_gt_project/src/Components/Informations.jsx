const Informations = ({title,informations}) => {
    
    return ( 
        <>
            <div className="flex flex-column">
                <p>{title}</p>
                <ul className="list-none flex flex-column gap-1 m-0 p-0">
                {informations.map((info, index) => (
                <li key={index} className="mb-2" >
                    <a href={info.link} className="no-underline" style={{color:'var(--surface-200)'}}>{info.text}</a>
                </li>
                         ))}
                </ul>
            </div>
        </>
     );
}
 
export default Informations;