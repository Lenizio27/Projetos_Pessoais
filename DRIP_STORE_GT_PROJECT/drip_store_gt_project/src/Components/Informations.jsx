const Informations = ({title,informations}) => {
    
    return ( 
        <>
            <div className="flex flex-column">
                <h5 className="text-cente">{title}</h5>
                <ul className="list-none flex flex-column gap-1 m-0 p-0">
                {informations.map((info, index) => (
                <li key={index} className="mb-2" >
                    <a href={info.link} className="no-underline" style={{color:'var(--surface-0)'}}>{info.text}</a>
                </li>
                         ))}
                </ul>
            </div>
        </>
     );
}
 
export default Informations;