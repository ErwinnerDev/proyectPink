import logo from './../assets/icon.svg';

export default function Home() {
  return (
    <>
    <header>
        <nav className="z-10 w-full absolute">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                    <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
                    <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                        <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
                                <img src={logo} alt="Trivify Logo" width="40" className='mt-2' />
                                <span className="text-2xl font-bold text-primary dark:text-white font-['Righteous']">Trivify</span>
                        </a>
                        
                        <div className="relative flex items-center lg:hidden max-h-10">
                            <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                            </label>
                        </div>
                    </div>
                    <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
                </div>
            </div>
        </nav>
    </header>

    <main className="space-y-40 mb-5">
        <div className="relative" id="home">
            
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">¡Desafía tu mente con <span className="text-primary dark:text-white">preguntas fascinantes</span> y <span className="text-primary dark:text-white">diversión</span>!</h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">¿Estás listo para poner a prueba tus conocimientos y competir contra jugadores de todo el mundo? ¡Entonces no busques más! Te damos la bienvenida a nuestro emocionante juego en línea de trivia multijugador, donde la diversión y el aprendizaje van de la mano.</p>
                        
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-base font-semibold text-white">
                                    Juega ahora 🥳
                                </span>
                            </a>
                        </div>

                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-center">
                                <h6 className="text-lg mb-5 font-semibold text-gray-700 dark:text-white">Desafía tu mente con preguntas fascinantes</h6>
                                <span className='p-3 text-xl rounded-full bg-purple-200'>🧠</span>
                                <p className="mt-2 text-gray-500 text-xs text-justify p-4">Sumérgete en un mundo lleno de preguntas intrigantes y curiosidades de todas las categorías imaginables.</p>
                            </div>
                            <div className="text-center">
                                <h6 className="text-lg mb-5 font-semibold text-gray-700 dark:text-white">Juega con amigos o haz  nuevos compañeros de equipo</h6>
                                <span className='p-3 text-xl rounded-full bg-purple-200'>👨‍👩‍👧‍👧</span>
                                <p className="mt-2 text-gray-500 text-xs text-justify p-4">El juego en línea de trivia multijugador te permite jugar con tus amigos y familiares en un emocionante modo de juego cooperativo.</p>
                            </div>
                            <div className="text-center">
                                <h6 className="text-lg mb-5 font-semibold text-gray-700 dark:text-white">Fácil de jugar, pero difícil de dominar</h6>
                                <span className='p-3 text-xl rounded-full bg-purple-200'>🧑🏽‍🏫</span>
                                <p className="mt-2 text-gray-500 text-xs text-justify p-4">Nuestro juego en línea de trivia multijugador es fácil de entender para todos, sin importar la edad o el nivel de conocimiento.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
