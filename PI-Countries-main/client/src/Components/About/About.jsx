import randomAlerts from './Frases';
import html from '../../Img/About/HTML5.png';
import css from '../../Img/About/CSS.png';
import react from '../../Img/About/React.png';
import redux from '../../Img/About/Redux.png';
import nodejs from '../../Img/About/nodeJS.png';
import express from '../../Img/About/Express.png';
import sequelize from '../../Img/About/Sequelize.png';
import postgresql from '../../Img/About/PostgreSQL.png';
import linkedIn from '../../Img/About/LinkedIn.png';
import github from '../../Img/About/Github.png';
import styles from './About.module.css';



function About () {


    return (
        <div className={styles.About}>
            <div className={styles.contPag}>
                <h1>Country App</h1>
                <p>Este es un proyecto de SoyHenry's bootcamp.</p>
                <p>Aqui puedes buscar informacion de diferentes paises del mundo.</p>
                <p>Puedes crear y buscar diferentes actividades turisticas para tus viajes.</p>
                <br></br>
                <p>Algunas caracteristicas de esta aplicacion son:</p>
                <p>-Obtener y filtrar informacion sobre los paises directo desde <a href='https://www.restcountries.com' target='_blank' rel='noreferrer' >RESTCOUNTRIES API</a>
                    , y almacenar esta informacion en una base de datos.
                </p>
                <p>-Lista completa de todos los paises en el HomePage.</p>
                <p>-Podras hacer busquedas por actividades turisticas, temporadas o continentes para planificar tus viajes.</p>
                <p>-Podras acceder al detalle con mas informacion sobre el pais seleccionado y sus actividades turisticas.</p>
                <p>-Podras crear nuevas actividades turisticas en uno o mas paises.</p>
            </div>
            <div className={styles.contTools}>
                <h2>Tools</h2>
                <div>
                    <div className={styles.tool}>
                        <img src={html} alt='HTML5'></img>
                        <span>HTML5</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={css} alt='CSS'></img>
                        <span>CSS</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={react} alt='REACT'></img>
                        <span>React</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={redux} alt='REDUX'></img>
                        <span>Redux</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={nodejs} alt='NODEJS'></img>
                        <span>NodeJS</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={express} alt='EXPRESS'></img>
                        <span>Express</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={sequelize} alt='SEQUELIZE'></img>
                        <span>Sequelize</span>
                    </div>
                    <div className={styles.tool}>
                        <img src={postgresql} alt='POSTGRESQL'></img>
                        <span>PostgreSQL</span>
                    </div>
                </div>
            </div>
            <div className={styles.contMe}>
                <h2>Sobre mi</h2>
                <p>Mi nombre es Exequiel Martino, tengo 30 años</p>
                <p>Vivo en la provincia de Tucuman, Argentina</p>
                <p>Me encantan vivir la vida con cada desafio que nos trae</p>
                <div className={styles.links}>
                    <div>
                        <a href='https://www.linkedin.com/in/exequielmartino022/' target='_blank' rel='noreferrer'>
                            <img src={linkedIn} alt='LinkedIn' />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/locopro022' target='_blank' rel='noreferrer'>
                            <img src={github} alt='Github' />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.extra}>
            <button className={styles.alertBtn} onClick={randomAlerts}>Click Me</button>
            <h4>'"Si piensas que vales lo que sabes, estás muy equivocado.
                 Tus conocimientos de hoy no tienen mucho valor más allá de un par de años.
                 Lo que vales es lo que puedes llegar a aprender, la facilidad con la que te adaptas a los cambios que esta profesión nos regala tan frecuentemente"    -- José M. Aguilar'</h4>
            </div>
        </div>
    );
}

export default About;