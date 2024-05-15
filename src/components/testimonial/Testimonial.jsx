

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Más de 10 años nos avalan en lo que hacemos</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' ><span className=' text-blue-500'> Empresas </span> que confian en nosotros</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/C8d3R8N/Jesica-Rychter.jpg" />
                                <p className="leading-relaxed">Responsable de comunicación y contenidos de JG Comunicación.

Lic. en Cs. de la Comunicación (UBA) y periodista (TEA). Me he desempeñado en distintas consultoras de prensa, trabajando con clientes como PUMA, Johnson & Johnson, UNTREF y Chungo, entre otras. También fui responsable de contenidos en emBlue Email Marketing y redactora externa en Perfil y Clarín Pymes. Trabajé como Analista de Comunicación en el Colegio primario..</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Jesica Rychter</h2>
                                <p className="text-gray-500">Comunicación y Contenidos</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/wyrZy62/fotojonathan.png" />
                                <p className="leading-relaxed">Diseñador Multimedial (Da Vinci). Trabajo desde hace más de 15 años como Responsable de Marketing Digital de unidades de educación superior. Actualmente me desempeño desde hace un año y ocho meses, como responsable de Alianzas en el Grupo Crónica, en unidades digitales como Club Crónica y Cronishop, mis tareas son las de atraer y mantener nuevas marcas, para implementar nuevas audiencias y experiencias a los usuarios de las comunidades. A su vez, soy  Coordinador de Contenidos Digitales, de 4D Producciones y analizo las métricas de sus 14 sitios web. Durante cinco años gestioné las redes sociales de la multinacional Laboratorios Ysonut Argentina. Además, en el 2019 fui convocado como profesor de la materia Data Analytics en el instituto ISEC. Junto a mi equipo logramos traducir las demandas de los clientes en soluciones digitales a la altura de las empresas mas competitivas del mercado, con novedades tanto tecnologicas como las ultimas implementaciones del mercado, logrando asi competitividad. </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Jonathan Gleiser</h2>
                                <p className="text-gray-500">CO</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/GnnvWmP/PHOTO-2024-04-25-07-21-54.jpg" />
                                <p className="leading-relaxed">Soy jr. developer de la empresa. Si bien estoy dando mis primeros pasos, el compromiso con las dificultades que se nos presentan dia a dia, es lo que nos distinguen de la competencia, maximizando nuestras habilidades para estar un paso mas adelante de los problemas.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Najun Matias</h2>
                                <p className="text-gray-500">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
