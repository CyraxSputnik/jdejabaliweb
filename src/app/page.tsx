import Link from "next/link";
import logo from '../public/static/images/Jabalí_Softworks_Logo-removebg.png'
import Image from "next/image";

import descargaMasiva from '../public/static/images/JCFDI/WebService.png'
import resumenDescarga from '../public/static/images/JCFDI/ResumenDescarga.png'
import usuarios from '../public/static/images/JCFDI/Usuarios.png'
import reporte from '../public/static/images/JCFDI/Reporte.png'
import representacionImpresa from '../public/static/images/JCFDI/PDF.png'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100 leading-tight">
              Descarga CFDI
              <span className="block text-blue-600 dark:text-blue-400">Crea Reportes</span>
              <span className="block">y su Representación Impresa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Una herramienta imprescindible para el control de tu facturación e impuestos
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://drive.google.com/drive/folders/1lTDcWeaWyu2FGJ9QaUFUca9GgynNy63h?usp=sharing"
                className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                rel="noopener noreferrer"
                target="_blank">
                Pruébalo Gratis
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <Image
                className="relative w-full max-w-lg h-auto drop-shadow-2xl"
                height={500}
                width={500}
                src={logo}
                alt="Logo de J de Jabalí Softworks"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-4xl md:text-5xl mb-4">
              Productividad Inigualable
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Facilidad de uso y flexibilidad para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Gestión de Usuarios</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Guarda tus datos para que no tengas que ingresar de manera manual tu RFC y contraseña cada vez que ingreses al portal del SAT.
                  Autocompletado con Alt + flechas y Ctrl + Enter. Importa usuarios de manera masiva con Excel.
                </p>
              </div>
              <Image
                className="rounded-lg shadow-md w-full h-auto"
                height={1368}
                width={2560}
                src={usuarios}
                alt="Captura de pantalla de la importación de usuarios"
              />
            </div>

            {/* Feature 2 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Descarga Masiva</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Haz solicitudes al Web Service del SAT y descarga hasta 200,000 CFDI de manera masiva y eficiente.
                </p>
              </div>
              <Image
                className="rounded-lg shadow-md w-full h-auto"
                height={1368}
                width={2560}
                src={descargaMasiva}
                alt="Captura de pantalla de la descarga masiva"
              />
            </div>

            {/* Feature 3 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Navegador Integrado</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Descarga tus XML desde el navegador interno del programa. Busca los CFDI del periodo que desees y presiona "Descargar".
                </p>
              </div>
              <Image
                className="rounded-lg shadow-md w-full h-auto"
                height={1368}
                width={2560}
                src={resumenDescarga}
                alt="Captura de pantalla del resumen de descarga"
              />
            </div>

            {/* Feature 4 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Reportes Detallados</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Crea reportes detallados de tus XML: facturas de ingreso, egreso, pago y nóminas. Pronto se añadirá soporte para más complementos.
                </p>
              </div>
              <Image
                className="rounded-lg shadow-md w-full h-auto"
                height={1368}
                width={2560}
                src={reporte}
                alt="Captura de pantalla de la creación de reportes"
              />
            </div>

            {/* Feature 5 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1 lg:col-start-1">
              <div className="mb-6">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Representación Impresa</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Crea la representación impresa de tus CFDI en PDF. Los XML se descargan en la carpeta "Descarga de CFDI" en tu escritorio.
                  Solo selecciona la carpeta y presiona "Generar".
                </p>
              </div>
              <Image
                className="rounded-lg shadow-md w-full h-auto"
                height={1368}
                width={2560}
                src={representacionImpresa}
                alt="Captura de pantalla de la Representacion Impresa"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
