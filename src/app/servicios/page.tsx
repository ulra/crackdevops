import Image from "next/image";
import IA from '../../../public/image/IA.png'
import Devops from '../../../public/image/DEvops.png'
import CloudNative from '../../../public/image/cloudNative.png'
import Link from "next/link";

export default function Servicios () {
    return (
        <div>
                <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 inline-block">
                Transforma tu Infraestructura con CrackDevOps
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Desde la implementación de arquitecturas Cloud Native hasta la integración de Inteligencia Artificial, te acompañamos en cada paso para potenciar tu negocio.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <Link href='/contacto' className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                    Contáctanos <i className="fas fa-arrow-right ml-3"></i>
                </Link>
                <Link href='/exito' className="bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all border border-gray-300">
                    Ver Casos de Éxito <i className="fas fa-trophy ml-3"></i>
                </Link>
            </div>
        </div>
    </section>

   
        {/* Seccion nuestros servicios */}

        <section className="bg-gray-50 px-20 pb-10">
        <div className="container mx-auto px-4">
            <h2 className="pt-12 text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 px-20">
                Nuestros Servicios
            </h2>

            <div className="space-y-16">
                {/* Servicio 1: Ingeniería de Plataformas y Cloud Native */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image
                            width={400} height={400}
                            src="/image/CloudNative.png"
                            alt="Ingeniería de Plataformas y Cloud Native" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-cloud fa-lg text-red-600 mr-4"></i>
                            Ingeniería de Plataformas y Cloud Native
                        </h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-2">
                            <li>Diseño e implementación de arquitecturas basadas en Kubernetes (EKS, GKE, AKS) y microservicios.</li>
                            <li>Infraestructura como Código (Terraform, Ansible).</li>
                            <li>Automatización de operaciones Día 0, Día 1 y Día 2.</li>
                        </ul>
                    </div>
                </div>

                {/* Servicio 2: Consultoría DevOps, SRE y DevSecOps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-cogs fa-lg text-red-600 mr-4"></i>
                            Consultoría DevOps, SRE y DevSecOps
                        </h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-2">
                            <li>Creación de pipelines CI/CD avanzados.</li>
                            <li>Establecimiento y monitoreo de métricas de rendimiento y disponibilidad (SLA, SLO, SLI).</li>
                            <li>Seguridad y compliance integrados (DevSecOps).</li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image
                            width={400} height={400}
                            src="/image/DEvops.png"
                            alt="Consultoría DevOps, SRE y DevSecOps" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                </div>

                {/* Servicio 3: Servicios Avanzados de IA y MLOps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image
                            width={400} height={400}
                            src="/image/IA.png"
                            alt="Servicios Avanzados de IA y MLOps" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-brain fa-lg text-red-600 mr-4"></i>
                            Servicios Avanzados de IA y MLOps
                        </h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-2">
                            <li>Implementación de agentes automatizados y modelos predictivos.</li>
                            <li>Automatización inteligente de flujos de trabajo.</li>
                            <li>Gestión del ciclo completo de modelos de Machine Learning.</li>
                        </ul>
                    </div>
                </div>

                {/* Servicio 4: Transformación Digital y Modernización de Legado */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                            <i className="fas fa-sync-alt fa-lg text-red-600 mr-4"></i>
                            Transformación Digital y Modernización de Legado
                        </h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-2">
                            <li>Migración de sistemas heredados a plataformas modernas basadas en microservicios y contenedores.</li>
                            <li>Reducción significativa de la deuda técnica.</li>
                            <li>Automatización y optimización de operaciones del Día 2.</li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image 
                            width={400} height={400}
                            src="/image/Contenedores.png" 
                            alt="Transformación Digital y Modernización de Legado" 
                            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform p-4 justify-end"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
 {/* Sección de Cómo lo Hacemos */}
    <section className=" py-20 px-20">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">
            ¿Cómo lo Hacemos?
            </h2>

            <div className="space-y-12">
                {/* Proceso 1: Análisis Estratégico Inicial */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-search fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Análisis Estratégico Inicial</h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-1">
                            <li>Diagnóstico profundo de tu infraestructura y procesos actuales.</li>
                            <li>Roadmap personalizado alineado a tus objetivos de negocio.</li>
                        </ul>
                    </div>
                </div>

                {/* Proceso 2: Diseño Personalizado e Implementación */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-pencil-ruler fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Diseño Personalizado e Implementación</h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-1">
                            <li>Selección personalizada de tecnologías (Terraform, Kubernetes, Ansible, IA frameworks, etc.).</li>
                            <li>Despliegue de arquitectura usando prácticas de Infrastructure as Code (IaC).</li>
                        </ul>
                    </div>
                </div>

                {/* Proceso 3: Integración Agile y DevOps */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-project-diagram fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Integración Agile y DevOps</h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-1">
                            <li>Implementación incremental usando metodologías ágiles (Scrum/Kanban).</li>
                            <li>Despliegue continuo y aseguramiento de calidad (CI/CD).</li>
                        </ul>
                    </div>
                </div>

                {/* Proceso 4: Soporte de Día 2 y Transferencia de Conocimiento */}
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-headset fa-lg"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Soporte de Día 2 y Transferencia de Conocimiento</h3>
                        <ul className="list-disc ml-6 text-gray-600 space-y-1">
                            <li>Monitoreo y gestión proactiva.</li>
                            <li>Formación avanzada continua para el desarrollo de capacidades internas.</li>
                            <li>Optimización constante a través del análisis de métricas y feedback.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}