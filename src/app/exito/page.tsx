export default function Exito() {
    return (
        <>
            {/* Hero Section */}
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 inline-block">
                Nuestros Casos de Éxito
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Descubre cómo hemos transformado negocios con soluciones innovadoras y resultados tangibles.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                    Ver Todos los Casos <i className="fas fa-arrow-right ml-3"></i>
                </button>
                <button className="bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all border border-gray-300">
                    Contáctanos para un Caso Personalizado <i className="fas fa-envelope ml-3"></i>
                </button>
            </div>
        </div>
    </section>

{/* Sección de Casos de Éxito */}
    <section className="bg-gray-50 py-20 px-20">
        <div className="container mx-auto px-4">
            <div className="space-y-12">
                {/* Caso 1: Migración y Modernización */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img 
                            src="https://source.unsplash.com/600x400/?migration,technology" 
                            alt="Migración y Modernización" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-sync-alt text-red-600 mr-4"></i>
                            Migración y Modernización de Infraestructura
                        </h3>
                        <p className="text-gray-600">
                            Optimizamos la migración y modernización de infraestructuras en adquisiciones empresariales, garantizando escalabilidad y rendimiento.
                        </p>
                    </div>
                </div>

                {/* Caso 2: Reducción de Deuda Técnica */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-code-branch text-blue-600 mr-4"></i>
                            Reducción de Deuda Técnica
                        </h3>
                        <p className="text-gray-600">
                            Implementamos automatización avanzada para reducir la deuda técnica en sistemas legados, mejorando la eficiencia operativa.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img 
                            src="https://source.unsplash.com/600x400/?automation,legacy-systems" 
                            alt="Reducción de Deuda Técnica" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                </div>

                {/* Caso 3: Optimización y Reducción de Costos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img 
                            src="https://source.unsplash.com/600x400/?ci-cd,pipeline" 
                            alt="Optimización y Reducción de Costos" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-chart-line text-green-600 mr-4"></i>
                            Optimización y Reducción de Costos
                        </h3>
                        <p className="text-gray-600">
                            Integración de CI/CD y prácticas de observabilidad para optimizar procesos y reducir costos significativamente.
                        </p>
                    </div>
                </div>

                {/* Caso 4: Inteligencia Artificial */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-brain text-purple-600 mr-4"></i>
                            Implementación de Inteligencia Artificial
                        </h3>
                        <p className="text-gray-600">
                            Desarrollamos soluciones de IA para mejorar la competitividad empresarial mediante modelos predictivos y automatización inteligente.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img 
                            src="https://source.unsplash.com/600x400/?artificial-intelligence,machine-learning" 
                            alt="Inteligencia Artificial" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className=" py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                Casos de Uso Frecuentes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Caso de Uso 1: Fusiones y Adquisiciones */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                        <i className="fas fa-building fa-2x text-white"></i>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Fusiones y Adquisiciones</h3>
                        <p className="text-gray-600">
                            Empresas en procesos de fusiones y adquisiciones que requieren migraciones eficientes y modernización tecnológica.
                        </p>
                    </div>
                </div>

                {/* Caso de Uso 2: Cargas Técnicas Acumuladas */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                        <i className="fas fa-weight-hanging fa-2x text-white"></i>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Cargas Técnicas Acumuladas</h3>
                        <p className="text-gray-600">
                            Organizaciones que enfrentan desafíos por deuda técnica acumulada y necesitan optimización estratégica.
                        </p>
                    </div>
                </div>

                {/* Caso de Uso 3: Transformación Digital Profunda */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                        <i className="fas fa-digital-tachograph fa-2x text-white"></i>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Transformación Digital Profunda</h3>
                        <p className="text-gray-600">
                            Negocios en proceso de transformación digital que buscan integrar tecnologías avanzadas como IA y DevOps.
                        </p>
                    </div>
                </div>

                {/* Caso de Uso 4: Escalabilidad y Optimización */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                        <i className="fas fa-chart-line fa-2x text-white"></i>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Escalabilidad y Optimización</h3>
                        <p className="text-gray-600">
                            Organizaciones que buscan escalar operaciones y reducir costos mediante automatización e innovación tecnológica.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}