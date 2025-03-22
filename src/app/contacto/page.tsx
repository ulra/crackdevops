export default function Contacto() {
    return (
        <>
            <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 inline-block">
                ¿Por Qué Elegir <span className="block">CrackDevOps?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Transforma tu negocio con soluciones predecibles, ágiles y respaldadas por inteligencia artificial.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                    Contáctanos Ahora <i className="fas fa-arrow-right ml-3"></i>
                </button>
                <button className="bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all border border-gray-300">
                    Descubre Más <i className="fas fa-info-circle ml-3"></i>
                </button>
            </div>
        </div>
    </section>

    {/* Sección de Diferenciadores */}
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="space-y-12">
                {/* Diferenciador 1: Resultados Garantizados */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-check-double fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Resultados Garantizados</h3>
                        <p className="text-gray-600">
                            Soluciones predecibles, implementadas a tiempo y dentro del presupuesto.
                        </p>
                    </div>
                </div>

                {/* Diferenciador 2: Menor Costo */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-dollar-sign fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Menor Costo, Mayor Calidad</h3>
                        <p className="text-gray-600">
                            Mejor calidad y menor tiempo de ejecución que desarrollarlo internamente.
                        </p>
                    </div>
                </div>

                {/* Diferenciador 3: Metodologías Ágiles e IA */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-brain fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Metodologías Ágiles y DevOps Avanzadas</h3>
                        <p className="text-gray-600">
                            Integración de inteligencia artificial para una ventaja competitiva real.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Llamado a la Acción */}
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                ¿Listo para transformar tu organización con DevOps, Cloud Native e IA?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
                Contáctanos ahora mismo y descubre cómo CrackDevOps puede convertir tu infraestructura tecnológica en tu mejor ventaja competitiva.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-6 rounded-full hover:scale-105 transition-all shadow-lg">
                Contáctanos Ahora <i className="fas fa-envelope ml-3"></i>
            </button>
        </div>
    </section>
        </>
    )
}