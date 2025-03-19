
import MenuLateral from "./MenuLateral"
import Tarjeta from "./Tarjeta"



export const PanelControl = () => {
    return (
        <section className="panel-control">
    
          <MenuLateral/>
    
          <div className="panel-control-contenido">
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
          </div>
    
          
    
        </section>
      )
}

export default PanelControl
