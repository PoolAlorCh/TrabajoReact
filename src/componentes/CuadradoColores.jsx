export const CuadradoColores = (props) => {
    console.log("props",props)
    return (
     <div className="cuadradoColores">
      <img src={`/img/${props.imagen}`} alt="" />
         <div>
             <h1>{props.nombre}</h1>
             <p>{props.numero}</p>
            
         </div>
     </div>
     
 
    )
 }