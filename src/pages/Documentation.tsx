import React from "react";
import Container from "../components/container/Container"
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import SVGIcon from "../components/icon/SVGIcon";

function Render() {

    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <div className="content mt-6">
            <section className="section section-scroll">
                <h1 className="title letterize is-1 mt-6">{ t('documentation') }</h1>
                <p className="subtitle mt-3">
                    Here you will find all the provided documentation to make this application.
                </p>
            </section>

            <section className="section">
                <h2 className="title letterize is-3">Inspiración</h2>
                <p className="subtitle mt-3">
                TalkToMe nació a partir de una idea que surgió espontáneamente: la posibilidad de convertir texto en audio de manera sencilla y accesible. Me pareció fascinante la idea de crear una herramienta versátil que permitiera a cualquier usuario escuchar texto escrito con facilidad, ya fuera por comodidad, accesibilidad o simplemente por entretenimiento.
                </p>
                <p className="subtitle mt-3">
                Con esta idea en mente, decidí investigar sobre las tecnologías disponibles para lograrlo. Fue entonces cuando descubrí que JavaScript cuenta con una API nativa conocida como <b>SpeechSynthesis API</b>, la cual permite la conversión de texto a voz sin necesidad de herramientas externas.
                </p>
                <p className="subtitle mt-3">
                Mediante mi investigación, me di cuenta de que esta API contenía un repertorio de propiedades que permitían ajustar aspectos como la velocidad, el tono y el volumen de la voz, además de ofrecer compatibilidad con diferentes voces e idiomas.
                </p>
            </section>

            <section className="section">
                <h2 className="title letterize is-3">Tecnologías utilizadas</h2>
                <p className="subtitle mt-3 mb-5">
                Para desarrollar <b>TalkToMe</b>, opté por utilizar un conjunto de tecnologías modernas que me permitieran construir una aplicación eficiente, escalable y con una interfaz atractiva. A continuación, detallo cada una de ellas y su papel dentro del proyecto.
                </p>

                {/* React section */}
                <div className="subtitle mt-6">
                    <div className="mb-0 is-flex icon-text-gap is-align-items-center">
                        <SVGIcon iconInfo={
                            <svg width={"35px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                                </g>
                            </svg>
                        }></SVGIcon>
                        <div className="title is-4">React - La base del proyecto</div>
                    </div>
                    <div className="subtitle">
                        Para la construcción de la interfaz y la gestión de estados, decidí utilizar React, una de las bibliotecas más populares para el desarrollo de aplicaciones web. Su enfoque basado en componentes me permitió estructurar la aplicación de manera modular y reutilizable, facilitando el mantenimiento y la escalabilidad del proyecto.
                    </div>
                    <div className="subtitle">
                        <div>
                            Algunas ventajas que React aportó al desarrollo fueron:
                        </div>
                        <ul className="mt-3">
                            <li>Reactividad y Virtual DOM, lo que optimiza el rendimiento de la aplicación.</li>
                            <li>Componentes reutilizables, que simplificaron la organización del código.</li>
                            <li>Hooks como <code>useState</code> y <code>useEffect</code>, que facilitaron la gestión del estado y efectos secundarios.</li>
                        </ul>
                    </div>
                </div>


                {/* Bulma CSS section */}
                <div className="subtitle mt-6">
                    <div className="mb-0 is-flex icon-text-gap is-align-items-center">
                        <SVGIcon iconInfo={
                            <svg width={"35px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                                </g>
                            </svg>
                        }></SVGIcon>
                        <div className="title is-4">Bulma CSS - Estilos modernos y minimalistas</div>
                    </div>
                    <div className="subtitle">
                        Para diseñar una interfaz atractiva sin necesidad de escribir CSS desde cero, opté por Bulma CSS, un framework ligero basado en Flexbox que ofrece una estructura modular y fácil de usar.
                    </div>
                    <div className="subtitle">
                        Gracias a Bulma, pude crear una UI responsiva y limpia de manera rápida, utilizando su sistema de grillas, botones, formularios y tipografías predefinidas. Además, su diseño minimalista y sin dependencias de JavaScript me permitió mantener un código ligero y eficiente.
                    </div>
                </div>


                {/* SASS section */}
                <div className="subtitle mt-6">
                    <div className="mb-0 is-flex icon-text-gap is-align-items-center">
                        <SVGIcon iconInfo={
                            <svg width={"35px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                                </g>
                            </svg>
                        }></SVGIcon>
                        <div className="title is-4">SASS - Preprocesador CSS para mayor flexibilidad</div>
                    </div>
                    <div className="subtitle">
                        Para mejorar la organización y mantenimiento de los estilos, utilicé SASS (Syntactically Awesome Stylesheets), un preprocesador CSS que extiende las capacidades de CSS estándar, permitiéndome escribir código más limpio y reutilizable.
                    </div>
                    <div className="subtitle">
                        Además, gracias a SASS, pude configurar algunas variables de Bulma CSS, lo que me permitió personalizar la paleta de colores y adaptar ciertos estilos del framework a las necesidades de la aplicación sin modificar directamente los archivos originales.
                    </div>
                </div>


                {/* GSAP section */}
                <div className="subtitle mt-6">
                    <div className="mb-0 is-flex icon-text-gap is-align-items-center">
                        <SVGIcon iconInfo={
                            <svg width={"35px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                                </g>
                            </svg>
                        }></SVGIcon>
                        <div className="title is-4">GSAP - Animaciones fluidas y dinámicas</div>
                    </div>
                    <div className="subtitle">
                        <div>
                            Para mejorar la experiencia del usuario, implementé GSAP (GreenSock Animation Platform), una de las librerías más potentes para la creación de animaciones en la web. Con GSAP, logré transiciones suaves en la interfaz, como:
                        </div>
                        <ul className="mt-3">
                            <li>Aparición progresiva de elementos al cargar la página.</li>
                            <li>Animaciones en botones y componentes interactivos para mejorar la usabilidad.</li>
                            <li>Efectos de desplazamiento (scroll animations), agregando dinamismo a la navegación.</li>
                        </ul>
                        <div>
                            GSAP me permitió personalizar cada animación con precisión, ofreciendo una experiencia visual más atractiva sin sacrificar rendimiento.
                        </div>
                    </div>
                </div>

                
                {/* TypeScript section */}
                <div className="subtitle mt-6">
                    <div className="mb-0 is-flex icon-text-gap is-align-items-center">
                        <SVGIcon iconInfo={
                            <svg width={"35px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                                </g>
                            </svg>
                        }></SVGIcon>
                        <div className="title is-4">TypeScript - Código más seguro y escalable</div>
                    </div>
                    <div className="subtitle">
                        <div>
                            Para mejorar la mantenibilidad del código, obté por TypeScript en lugar de JavaScript puro. Esta elección me permitió:
                        </div>
                        <ul className="mt-3">
                            <li>Tener tipado estático, reduciendo errores en tiempo de desarrollo.</li>
                            <li>Mejor autocompletado y documentación del código, facilitando la lectura y depuración.</li>
                            <li>Mayor escalabilidad, permitiéndome estructurar mejor los datos y las funciones.</li>
                        </ul>
                        <div>
                            TypeScript fue clave para escribir un código más robusto y evitar errores comunes que suelen surgir en JavaScript, especialmente en aplicaciones más complejas.
                        </div>
                    </div>
                </div>


                {/* i18next section */}
                <div className="subtitle mt-6">
                    <div className="mb-0 is-flex icon-text-gap is-align-items-center">
                        <SVGIcon iconInfo={
                            <svg width={"35px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                                </g>
                            </svg>
                        }></SVGIcon>
                        <div className="title is-4">I18next - Internalización</div>
                    </div>
                    <div className="subtitle">
                        <div>
                            Para hacer que TalkToMe sea accesible a usuarios de diferentes idiomas, implementé i18next, una potente librería de internalización muy conocida. Gracias a ella, pude:
                        </div>
                        <ul className="mt-3">
                            <li>Traducir dinámicamente la interfaz de usuario sin necesidad de recargar la página.</li>
                            <li>Manejar múltiples idiomas de manera eficiente con archivos JSON centralizados.</li>
                            <li>Integrar detección automática del idioma según las preferencias del navegador del usuario.</li>
                        </ul>
                        <div>
                            Esta herramienta fue fundamental para expandir el alcance de la aplicación y hacerla más inclusiva para una audiencia global.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="is-flex title is-3 icon-text-gap is-align-items-center">
                
                    <SVGIcon iconInfo={
                        <svg width={"45px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                            </g>
                        </svg>
                    }></SVGIcon>
                    
                    <div>Repositorio y código fuente</div>
                </div>
                <div className="subtitle">
                    <div className="mt-3">
                        Este proyecto es de <b>Código Abierto</b>, por lo que su código está disponible públicamente en <b>GitHub</b>. Si quieres explorar cómo está construido, probarlo localmente o incluso contribuir con mejoras, puedes encontrarlo <a className="is-underlined" target="_blank" href="https://github.com/Biel-Taberner/TalkToMe">aquí</a>.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="is-flex title is-3 icon-text-gap is-align-items-center">
                <SVGIcon iconInfo={
                        <svg width={"45px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                            </g>
                        </svg>
                    }></SVGIcon>
                    
                    <div>Notas del autor</div>
                </div>
                <div className="subtitle">
                    <div className="mt-3">
                    Este proyecto ha sido realizado con mucha pasión y dedicación, ya que me ha permitido poner en práctica mis conocimientos y aprender nuevas tecnologías. Una de las finalidades de este proyecto ha sido dar a conocer la API de SpeechSynthesis, una herramienta nativa de los navegadores que permite la conversión de texto a voz de manera sencilla y eficiente.
                    </div>
                    <div className="mt-3">
                    Durante el desarrollo, me enfrenté a varios desafíos, desde la integración de la API con React hasta la optimización de la experiencia del usuario mediante GSAP y estilos personalizados con Bulma CSS. Sin embargo, cada obstáculo representó una oportunidad de aprendizaje, lo que hizo que el proceso fuera aún más enriquecedor.
                    </div>
                    <div className="mt-3">
                    Me ha gustado realizar este proyecto, ya que soy un apasionado por el conocimiento y el constante aprendizaje diario. Explorar nuevas tecnologías y combinarlas de manera creativa para construir algo funcional y útil ha sido una experiencia increíble.
                    </div>
                    <div className="mt-3">
                    Espero que esta aplicación sea una herramienta útil para quienes quieran experimentar con la síntesis de voz en sus aplicaciones y que sirva como inspiración para gente interesada en este campo o en el vasto mundo de la programación.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="is-flex title is-3 icon-text-gap is-align-items-center">
                    <SVGIcon iconInfo={
                        <svg width={"45px"} height={"45px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path strokeWidth={1.5} stroke="black" style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                            </g>
                        </svg>
                    }></SVGIcon>
                    
                    <div>Contacto y redes sociales</div>
                </div>
                <div className="subtitle">
                    <div className="mt-3">
                        Estaría encantado de recibir la opinión y el feedback en las diferentes redes sociales que podréis encontrar a continuación o enviando un e-mail a <a href="mailto:tabernerbiel@gmail.com" className="is-underlined">tabernerbiel@gmail.com</a>.
                    </div>
                </div>
                <div className="is-flex" style={{ "columnGap": "20px" }}>
                    <div>
                        <img className="image is-32x32" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="instagram"/>
                    </div>
                    <div>
                        <img className="image is-32x32" src="https://files.softicons.com/download/social-media-icons/flat-gradient-social-icons-by-guilherme-lima/png/512x512/Linkedin.png" alt="linkedin"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function Documentation() {
    return (<Container children={<Render/>}></Container>)
}