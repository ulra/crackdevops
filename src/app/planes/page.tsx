export default function Planes(){
    return(
        <>
                <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 inline-block">
                Nuestros Planes y Productos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Detalla productos atractivos con diferentes niveles de complejidad y valor agregado
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                    Ver Todos los Planes <i className="fas fa-arrow-right ml-3"></i>
                </button>
                <button className="bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all border border-gray-300">
                    Contáctanos para Personalizar <i className="fas fa-envelope ml-3"></i>
                </button>
            </div>
        </div>
    </section>

    <section className="bg-white py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Producto 1: Bootcamp DevOps e IA */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Bootcamp DevOps e IA</h3>
                    <p className="text-gray-600 mb-6">
                        Ideal para equipos técnicos que deseen profundizar en integración DevOps e IA. Acceso a plantillas, workshops y documentación avanzada.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
                        Saber más <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>

                {/* Producto 2: Jumpstart Kubernetes y Microservicios */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Jumpstart Kubernetes y Microservicios</h3>
                    <p className="text-gray-600 mb-6">
                        Despliegue rápido de plataformas Kubernetes preconfiguradas. Optimización de operaciones del Día 1 y Día 2 desde el inicio.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
                        Saber más <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>

                {/* Producto 3: Enterprise Digital Transformation Accelerator */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Enterprise Digital Transformation Accelerator</h3>
                    <p className="text-gray-600 mb-6">
                        Personalización completa de la arquitectura según necesidades avanzadas (SOC2, PCI, HIPAA). Alta integración, seguridad reforzada y soporte especializado continuo.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
                        Saber más <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}