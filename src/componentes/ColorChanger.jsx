import { CuadradoColores } from "./CuadradoColores"
import { colores } from "../utis/data"
export const ColorChanger = () => {
    return(
        <div>
            <h1>PREGUNTA 1</h1>
            <div className="cuadrado">
            </div>
            <div >
                
                <h1>PREGUNTA 2</h1> 
                <div className="contenedorColores">

              
                {
                    colores.map((colores)=>(
                        <CuadradoColores
                        key={colores.nombre}
                        {...colores}/>
                    ))
                }
                 </div>
            </div>
        </div>
        
        
        
    )
}

