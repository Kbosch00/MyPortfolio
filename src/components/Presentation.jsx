import React, { useState } from 'react'
import { BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp, BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs"

function Presentation() {
    const [hidden, setHidden] = useState(false);

    const toggleContact = () => {
        setHidden(!hidden);
    };
    return (
        <div
            id='presentation-div'
            className='pb-52'
        >
            <div className='flex justify-center grid-cols-2 ssm:gap-x-4 sssm:gap-x-2 ssssm:gap-x-1 items-center md:mx-4'>
                <img src="src/assets/images/perfil_2.jpg" className='object-cover object-top bg-zinc-50 p-1 sssm:w-52 sssm:h-52 ssssm:w-44 ssssm:h-44 sm:w-60 sm:h-60 ssm:mt-4 sm:mt-6 ssssm:mt-6 rounded-full hover:bg-neutral-500 hover:scale-105 transition duration-300 ease-in-out '
                />
                <div className='sm:mt-8 ssssm:mt-2 ssssm:max-w-[8rem] sssm:max-w-[12rem] md:max-w-md'>
                    <span className='text-neutral-500 md:text-5xl ssssm:text-2xl sssm:text-4xl whitespace-nowrap font-alice font-bold'>Hola, soy <br className='' /></span>
                    <span className='text-neutral-500 md:text-5xl ssssm:text-2xl sssm:text-4xl whitespace-nowrap font-alice font-bold '>Kevin Bosch</span>
                    <h2 className='text-neutral-500 md:text-2xl tracking-wider ssssm:text-lg sssm:text-xl mt-1 font-alice font-semibold '>Trainee web developer</h2>
                </div>
                <div className={`fixed grid z-50  top-1/2 left-0 transform -translate-y-1/2 `}>
                    <div className={`bg-zinc-50 rounded-r-lg duration-300 ease-in-out ${hidden ? '-translate-x-full' : 'translate-x-0'}`}>
                        <ul className="font-medium p-2 grid gap-3">

                            <li>
                                <a href="https://www.linkedin.com/in/kevin-bosch-13306b262/" target="_blank" rel="noopener noreferrer"
                                    title='LinkedIn'>
                                    <BsLinkedin className={`text-3xl text-gray-400 hover:text-violet-700 hover:scale-110 transition duration-300 ease-in-out`} /></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/KevinBosch00" target="_blank" rel="noopener noreferrer" title='Facebook'>
                                    <BsFacebook className='text-3xl text-gray-400 hover:text-violet-700 hover:scale-110 transition duration-300 ease-in-out' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_kbosch_/" target="_blank" rel="noopener noreferrer" title='Instagram'>
                                    <BsInstagram className='text-3xl text-gray-400 hover:text-violet-700 hover:scale-110 transition duration-300 ease-in-out' />
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=3156737214" target="_blank" rel="noopener noreferrer" title='Whatsapp'>
                                    <BsWhatsapp className='text-3xl text-gray-400 hover:text-violet-700 hover:scale-110 transition duration-300 ease-in-out' />
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='bg-zinc-50 rounded-r-lg mt-1'>
                        <ul className='font-medium p-2 grid gap-3'>
                            <li>
                                <button onClick={toggleContact}>
                                    {hidden === false ? <BsArrowBarLeft className={`text-3xl text-gray-400 hover:text-violet-700 hover:scale-110 transition duration-300 ease-in-out`} /> : <BsArrowBarRight className={`text-3xl text-gray-400 hover:text-violet-700 hover:scale-110 transition duration-300 ease-in-out`} />}
                                </button>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className='ssssm:mx-2 sssm:mx-2 ssm:mx-auto ssssm:max-w-sm sssm:max-w-md sm:max-w-xl md:max-w-3xl text-center mt-4 p-4 font-alice border-x-4 border-neutral-400 rounded-3xl'><p className='text-neutral-500 font-DMSerifDisplay md:text-lg'>Como desarrollador, siempre me he sentido motivado por el aprendizaje de nuevas tecnologías y el perfeccionamiento de habilidades aprendidas. Mi pasión por la programación no se limita únicamente al desarrollo web, sino que se extiende a diversas áreas de la informática. Estoy en la búsqueda por mejorar profesionalmente y, con mi progreso, contribuir al campo de desarrollo de software.</p>
            </div>
        </div>

    )
}

export default Presentation