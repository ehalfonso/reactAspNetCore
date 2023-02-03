import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const App = () => {
    const [empleado, setEmpleado] = useState([])

    const consumirApi = async () => {
        const response = await fetch("api/empleado/ObtenerEmpleado");
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setEmpleado(data)
        }
    }
    useEffect(() => {
        consumirApi()
    },[])
    return(
        <div className="container">
            <h5>Tabla de empleado</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        empleado.map((item) =>(

                            <tr key={item.id }>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.correo}</td>
                            </tr>))}
                </tbody>
            </table>
        </div>
        )
}
export default App