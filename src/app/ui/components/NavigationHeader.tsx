import Link from "next/link";

export default function NavigationHeader() {
    return (
        <header className="dark:bg-gray-100 text-gray-100 sm:text-inherit sm:bg-inherit
                grid md:flex md:flex-row justify-center items-center text-center uppercase">
            <Link className="text-gray-800 md:absolute font-black m-5 left-14 text-base
                decoration-2 duration-150 hover:text-sky-500" href="/">
                J de Jabalí
            </Link>
            <nav className="mt-0 mb-2">
                <div id="menu-toggle" className="
                    block relative top-12 left-12 z-[1] select-none
                    md:top-0 md:left-0 md:z-0">

                    {/* <input type="checkbox" className="
                        block w-10 h-8 absolute -top-[7] -left-[5] 
                        cursor-pointer opacity-0 -z-[2] touch" />
                    <span className="block w-8 h-1 mb-1 relative rounded origin-[4_0] 
                        transition "></span>
                    <span></span>
                    <span></span> */}
                    <ul className="flex flex-col md:flex-row justify-between text-xs font-medium">
                        <Link className="m-5 dark:text-slate-800 transition ease-in-out duration-200 decoration-2 hover:text-sky-500" href="/solutions">Soluciones</Link>
                        <Link className="m-5 dark:text-slate-800 transition ease-in-out duration-200 decoration-2 hover:text-sky-500" href="/downloads">Descargas</Link>
                        <Link className="m-5 dark:text-slate-800 transition ease-in-out duration-200 decoration-2 hover:text-sky-500" href="/blog">Blog</Link>
                        <Link className="m-5 dark:text-slate-800 transition ease-in-out duration-200 decoration-2 hover:text-sky-500" href="/forum">Foro</Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}