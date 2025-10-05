export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                            J de Jabalí
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Más tiempo viviendo la vida que viviendo en la oficina
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="text-center">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                            Contacto
                        </h4>
                        <div className="flex flex-col items-center gap-2">
                            <a
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                                href="mailto:josue.hernandez@jdejabali.com">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                josue.hernandez@jdejabali.com
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} J de Jabalí Softworks
                            <br />
                            <span className="text-xs">Todos los derechos reservados</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}