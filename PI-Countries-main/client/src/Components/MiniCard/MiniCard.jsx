import styles from './MiniCard.module.css';
import { Link } from 'react-router-dom';


function MiniCard (props) {

    return (
        <div className={styles.Card}>
            <div className={styles.flag}>
                <img src={props.img} className={styles.flagOne} alt={props.name}/>
            </div>
            <div className={styles.informacion}>
                <div className={styles.infoArriba}>
                    <h2 className={styles.titulo}>{props.name}</h2>
                    <h3 className={styles.subtitulo}>{props.continent}</h3>
                </div>
                <div className={styles.infoAbajo}>
                    <div className={styles.detalles}>
                        <h4 className={styles.textoCard} >Población: {Number(props.pobl).toLocaleString()}</h4>
                        <Link className={styles.btnLink} to={`/detalles/${props.id}`}>
                            <button className={styles.btnDetalles}>Ver más...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniCard;