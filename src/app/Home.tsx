
import Link from "next/link";
import { AiFillDownCircle, AiFillDollarCircle, AiFillDatabase } from "react-icons/ai";
import Exito from "./exito/page";


export default function Home() {
  return (
    <div className="">

      {/* Quiénes Somos */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Quiénes Somos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Arquitectos Cloud Native</h3>
                    <p>Especialistas en Kubernetes, Terraform, microservicios y automatización masiva.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Ingenieros DevOps y SRE</h3>
                    <p>Pipelines CI/CD robustos con prácticas de observabilidad y seguridad.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Especialistas en IA y MLOps</h3>
                    <p>Integración de modelos predictivos y agentes automatizados.</p>
                </div>
            </div>
        </div>
    </section>

      {/* Nuestra Filosofía */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800">
                Nuestra Filosofía: <span className="block">Control, Propiedad y Excelencia</span>
            </h2>

                      <p className="mx-auto mb-24 !text-gray-500 lg:w-3/5 text-center">
                        A diferencia de los servicios gestionados tradicionales (MSP), 
                        CrackDevOps te garantiza control absoluto y autonomía sobre tu infraestructura. 
                        Nuestras soluciones se integran a tus procesos internos, 
                        evitando riesgos de externalización y asegurando una ventaja competitiva sostenible.
                      </p>
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform">
                    <div className="flex items-center mb-6">
                        <h3 className="text-2xl font-semibold">Ingeniería de Plataformas Cloud Native</h3>
                    </div>
                    <p className="text-gray-700">
                    Diseñamos arquitecturas basadas en Kubernetes, microservicios y Terraform. 
                    <br/>
                    Automatizamos procesos para facilitar operaciones desde el Día 0 hasta el Día 2.

                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform">
                    <div className="flex items-center mb-6">
                        <h3 className="text-2xl font-semibold">DevOps Avanzado, SRE y DevSecOps</h3>
                    </div>
                    <p className="text-gray-700">
                    Creamos pipelines CI/CD personalizados, establecemos métricas clave (SLI, SLO, SLA).
                    Practicamos resiliencia mediante &quot;Game Days&quot; y caos intencional.

                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform">
                    <div className="flex items-center mb-6">
                        <h3 className="text-2xl font-semibold">Automatización Inteligente con IA</h3>
                    </div>
                    <p className="text-gray-700">
                    Integración de modelos de Machine Learning para automatizar decisiones estratégicas.
                    MLOps: Gestión integral de modelos de machine learning.

                    </p>
                </div>
            </div>
        </div>
    </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Operaciones del Día 2: <span className="text-blue-gray-800">Ventajas Estratégicas</span></h2>
                    <p className="mx-auto mb-24 !text-gray-500 lg:w-3/5 text-center">
                    Las operaciones del Día 2 abarcan monitoreo continuo, gestión de incidentes, 
                    automatización de actualizaciones, optimización de costos (FinOps) 
                    y mantenimiento proactivo. Al asumir estas operaciones en lugar de externalizarlas, 
                    reduces riesgos operativos, optimizas recursos y garantizas la 
                    adaptabilidad de tu negocio frente a cambios futuros.    
                    </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-black text-white p-8 rounded-3xl hover:scale-105 transition-transform">
                    <div className="flex items-center mb-6">
                        <i className="fas fa-chart-line fa-2x mr-4 "></i>
                        <h3 className="text-2xl font-semibold">Optimización Continua</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <i className="fas fa-check  mr-2"></i>
                            Monitoreo 24/7 con alertas predictivas
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check  mr-2"></i>
                            Gestión proactiva de incidentes
                        </li>
                    </ul>
                </div>

                
                <div className="bg-white text-black p-8 rounded-3xl hover:scale-105 transition-transform border border-gray-200">
                    <div className="flex items-center mb-6">
                        <i className="fas fa-cogs fa-2x mr-4 text-blue-gray-800"></i>
                        <h3 className="text-2xl font-semibold">Automatización Inteligente</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <i className="fas fa-check text-blue-gray-800 mr-2"></i>
                            Actualizaciones automáticas sin downtime
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-blue-gray-800 mr-2"></i>
                            Escalabilidad automática basada en demanda
                        </li>
                    </ul>
                </div>

                
                <div className="bg-white text-black p-8 rounded-3xl hover:scale-105 transition-transform border border-gray-200">
                    <div className="flex items-center mb-6">
                        <i className="fas fa-dollar-sign fa-2x mr-4 text-blue-gray-800"></i>
                        <h3 className="text-2xl font-semibold">FinOps Avanzado</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <i className="fas fa-check text-blue-gray-800 mr-2"></i>
                            Análisis de costos en tiempo real
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-blue-gray-800 mr-2"></i>
                            Recomendaciones de optimización
                        </li>
                    </ul>
                </div>

               
                <div className="bg-black text-white p-8 rounded-3xl hover:scale-105 transition-transform">
                    <div className="flex items-center mb-6">
                        <i className="fas fa-shield-alt fa-2x mr-4 "></i>
                        <h3 className="text-2xl font-semibold">Seguridad Proactiva</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <i className="fas fa-check  mr-2"></i>
                            Detección automática de vulnerabilidades
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check  mr-2"></i>
                            Respuestas automáticas a amenazas
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800">
                Beneficios que <span className="block">Impulsan tu Éxito</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Beneficio 1 */}
                <div className="grid items-center text-center p-6 hover:-translate-y-2 transition-all">
                <AiFillDownCircle className="fa-4x text-red-600 text-center mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Reducción de deuda técnica</h3>
                    <p className="text-gray-600 mb-6">Eliminamos tecnologías obsoletas, facilitando la innovación constante</p>
                </div>

                {/* Beneficio 2 */}
                <div className="text-center p-6 hover:-translate-y-2 transition-all">
                    <i className="fas fa-clock fa-4x text-red-600 mb-6 drop-shadow-lg"></i>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Resultados Predecibles</h3>
                    <p className="text-gray-600 mb-6">Garantizamos entregas puntuales y dentro del presupuesto</p>
                </div>

                {/* Beneficio 3 */}
                <div className="text-center p-6 hover:-translate-y-2 transition-all">
                    <AiFillDollarCircle className='fa-4x text-red-600 mx-auto' />                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Reducción de Costos</h3>
                    <p className="text-gray-600 mb-6">Más rentable que construir internamente.</p>
                </div>
            </div>

            <div className="text-center mt-16">
                <Link href='/exito'   className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                    Ver casos de éxito <i className="fas fa-rocket ml-3"></i>
                </Link>
            </div>
        </div>
    </section>

    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                ¿Por qué elegir <span className="block tracking-widest">Crack<span className='text-red-600'>Devops</span>?</span>
            </h2>

            <div className="space-y-16">
                {/* Razones*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
                    <div className="order-2 md:order-1 text-center items-center">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800  items-centerr">
                        <AiFillDatabase className="mr-4 text-red-600 fa-headset fas" />
                            Autonomía y Control Total
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                        Tu infraestructura tecnológica es tu ventaja competitiva. </p>
                    </div>


                    <div className="order-1 md:order-2 text-center items-center">
                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 text-center items-center">
                            <i className="fas fa-headset text-red-600 mr-4"></i>
                            Soporte Continuo
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                        Acompañamiento prolongado para garantizar excelencia operativa.
                         </p>

                    </div>
                    </div>
                </div>


                {/* Razón 3 */}
                <div className="grid grid-cols-1 gap-8 text-center items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800 text-center items-center">
                            <i className="fas fa-chalkboard-teacher text-red-600 mr-4"></i>
                            Transferencia Efectiva de Conocimiento
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                        Formamos a tu equipo para operar con independencia y éxito sostenido                        </p>
                    </div>
 
                </div>
            </div>

            <div className="text-center mt-16">
                <Link href='/servicios' className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                    Saber mas<i className="fas fa-arrow-right ml-3"></i>
                </Link>
            </div>
        </div>
    </section>
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
            <div className="bg-black text-white rounded-3xl p-12 md:p-20 shadow-2xl text-center">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600 inline-block">
                    ¡Empieza tu Transformación Digital Ahora!
                </h2>
                <p className="text-lg text-gray-300 mb-10">
                    CrackDevOps te acompaña en cada etapa para convertir tu infraestructura tecnológica en una ventaja estratégica. 
                    ¡Contáctanos y potencia tu crecimiento empresarial!
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href='/contacto' className="bg-red-600 text-white px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg">
                        Contáctanos <i className="fas fa-arrow-right ml-3"></i>
                    </Link>

                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
