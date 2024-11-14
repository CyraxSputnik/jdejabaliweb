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
    <div>
      <section className="grid w-full text-center md:grid-cols-2 relative
          md:flex justify-center pt-10 md:items-center md:text-left gap-64 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl md:text-5xl mb-7 text-gray-700">
            Descarga CFDI
            <br />
            Crea Reportes y su
            <br />
            Representación
            <br />
            Impresa
          </h1>
          <h2 className="text-base md:text-lg mb-2 text-gray-700 opacity-70">
            Una herramienta imprescindible
            <br />
            para el control de tu facturación e impuestos
          </h2>
          <Link
            href="https://drive.google.com/drive/folders/1lTDcWeaWyu2FGJ9QaUFUca9GgynNy63h?usp=sharing"
            className="max-sm:hidden mt-16 text-white bg-gradient-to-r
            from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-lg 
            px-5 py-2.5 text-center me-2" rel="noopener noreferrer" target="_blank">
            PRUÉBALO GRATIS
          </Link>
        </div>

        <div>
          <Image className="w-auto relative max-sm:hidden" height={500} width={500} src={logo} alt="Logo de J de Jabalí Softworks" />
        </div>

      </section>

      <section className="grid text-center grid-cols-1 gap-x-6 gap-y-8 
        sm:text-left
        sm:grid-cols-6 pt-28  ">

        <div className="col-start-1 sm:col-start-2 sm:col-span-2">
          <h2 className="text-blue-500 font-bold text-4xl">Productividad Inigualable</h2>

          <p className="mt-4">Facilidad de uso y flexibilidad</p>
        </div>

        <div className="col-start-1 sm:col-start-2 sm:col-span-2">
          <p>Guarda tus datos para que no tengas que ingresar de manera manual tu RFC y contraseña
            cada vez que ingreses al portal del SAT, ahora
            puedes autocompletar los campos, solo selecciona tu usuario con Alt + flechas y presiona Ctrl + Enter.
            Si tienes varios clientes, puedes importar sus datos de manera masiva con un libro de excel.
          </p>
          <Image className="mt-3" height={1368} width={2560} src={usuarios} alt="Captura de pantalla de la importación de usuarios" ></Image>
        </div>

        <div className="col-start-1 sm:col-start-4 sm:col-span-2">
          <p>Haz solicitudes al Web Service del SAT, y descarga hasta 200,000 CFDI de manera masiva.</p>
          <Image className="mt-3" height={1368} width={2560} src={descargaMasiva} alt="Captura de pantalla de la descarga masiva" ></Image>
        </div>

        <div className="col-start-1 sm:col-start-2 sm:col-span-2">
          <p>Si lo prefieres, descarga tus XML desde el navegador interno del programa, solo busca los CFDI
            del periodo que desees descargar, y presiona el botón de &quot;Descargar&quot; que se encuentra en
            la parte inferior derecha.</p>
          <Image className="mt-3" height={1368} width={2560} src={resumenDescarga} alt="Captura de pantalla del resumen de descarga" ></Image>
        </div>

        <div className="col-start-1 sm:col-start-4 sm:col-span-2">
          <p>Crea un reporte detallado de tus XML. Facturas de ingreso, egreso, pago, y nóminas. Pronto se añadirá
            soporte para más tipos de complementos.</p>
          <Image className="mt-3" height={1368} width={2560} src={reporte} alt="Captura de pantalla de la creación de reportes" ></Image>
        </div>

        <div className="col-start-1 sm:col-start-2 sm:col-span-2">
          <p>Crea la representación impresa de tus CFDI en PDF. Por defecto, los XML se descargan en la carpeta
            &quot;Descarga de CFDI&quot; en tu escritorio.
            Para crear los PDF, solo selecciona la carpeta de los XML del periodo que hayas descargado
            y presiona &quot;Generar&quot;.</p>
          <Image className="mt-3" height={1368} width={2560} src={representacionImpresa} alt="Captura de pantalla de la Representacion Impresa" ></Image>
        </div>

      </section>

    </div>
  );
}
