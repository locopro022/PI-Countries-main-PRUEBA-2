import styles from './Inicio.module.css';
import { Link } from 'react-router-dom';

function Inicio () {

    return (
        <div className={styles.contInicio}>
            <div className={styles.bloque}>
                
                <div className={styles.derecha}>
                    <h1 className={styles.titulo}>Country App</h1>
                    <p>Encuentra las mejores actividades en más de 200 países. Un mundo de opciones al alcanze de tu mano.</p>
                    <Link to = '/Home' className={styles.ingresar}>Ingresar</Link>
                </div>
            </div>
        </div>
    );
}

export default Inicio;