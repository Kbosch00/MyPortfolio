import React, { useEffect, useState } from 'react'
import { data } from './images.js'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { AiFillGithub } from "react-icons/ai"

function ProjectCarousel() {
    const [slide, setSlide] = useState(0);
    const [hideDescription, setHideDescription] = useState(false);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const [showDescription, setShowDescription] = useState(false);
    const [rotate, setRotate] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
        setTimeout(() => {
            setHideDescription(!hideDescription)
        }, 200);
        setRotate(!rotate);
    };
    return (
        <div className='grid justify-center'>
            <div className=' bg-zinc-900 bg-opacity-40 p-4 rounded-lg transition-opacity duration-500 ease-in-out' x-data="{ show: true }">
                <span className='text-gray-300 text-xl tracking-wider font-bold font-alice'>Proyecto principal:</span>
                <div className={`carousel mx-auto mt-4 rounded-lg ${!showDescription ? 'transition-all duration-500 ease-in-out opacity-100' : 'transition-all duration-500 ease-in-out opacity-0 hidden'
                    }`}>
                    <button onClick={prevSlide}>
                        <SlArrowLeft className={`arrow arrow-left hover:scale-110 hover:text-violet-500 transition duration-300 ease-in-out sm:-translate-y-5 ssssm:-translate-y-2 sm:text-4xl ssssm:text-2xl lg:text-5xl ${!showDescription ? 'transition-all duration-500 ease-in-out opacity-100' : 'transition-all duration-500 ease-in-out opacity-0 hidden'
                            }`} />
                    </button>
                    {
                        data.map((item, idx) => {
                            return (
                                <img
                                    src={item.imgUrl}
                                    key={item.id}
                                    className={`rounded-lg 
                                    ssssm:object-scale-down' ${slide === idx ? "slide" : "slide slide-hidden"} ${!showDescription ? 'transition-all duration-500 ease-in-out opacity-100' : 'transition-all duration-500 ease-in-out opacity-0 hidden'
                                        }`
                                    }
                                />
                            );
                        })
                    }
                    <button onClick={nextSlide}>
                        <SlArrowRight
                            className={`arrow arrow-right hover:scale-110 hover:text-violet-500 transition duration-300 ease-in-out ssssm:-translate-y-2 sm:-translate-y-5  ssssm:text-2xl sm:text-4xl lg:text-5xl ${!showDescription ? 'transition-all duration-500 ease-in-out opacity-100' : 'transition-all duration-500 ease-in-out opacity-0 hidden'
                                }`}
                        />
                    </button>

                    <span className="indicators ">
                        {data.map((_, idx) => {
                            return (
                                <button
                                    key={idx}
                                    className={`ssssm:h-[0.6rem] ssssm:w-[0.6rem] ssm:h-[0.8rem] ssm:w-[0.8rem] lg:h-[1rem] lg:w-[1rem] ${slide === idx ? "indicator" : "indicator indicator-inactive"} ${!showDescription ? 'transition-all duration-500 ease-in-out opacity-100' : 'transition-all duration-500 ease-in-out opacity-0 hidden'
                                        }`
                                    }
                                    onClick={() => setSlide(idx)}
                                ></button>
                            );
                        })}
                    </span>

                </div>

                {showDescription ? <div className={`transition-all duration-800 ease-in-out ${hideDescription ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
                    <p className='text-gray-400 font-crimsonPro text-lg'>
                        <span className='text-xl text-gray-300 font-bold'>CashFlow Manager </span>
                        es una aplicación web que desarrollé usando Reactjs y Tailwind CSS, se conecta a una API creada con Django Rest Framework. Su principal funcionalidad es permitir a los usuarios gestionar eficazmente su dinero creando y administrando "bolsillos" financieros, asignando fondos a cada uno de ellos y realizando un seguimiento detallado de gastos y ahorros.
                        <br />
                        <span className='text-xl font-bold text-gray-300'>Características Principales:</span></p>
                    <ul className='list-disc px-6 pt-2 text-gray-400 font-crimsonPro text-lg'>
                        <li>
                            <span className='text-xl font-bold text-gray-300'>Gestión de Bolsillos:</span> Los usuarios pueden crear y nombrar múltiples "bolsillos" para organizar su dinero de manera efectiva.

                        </li>
                        <li>
                            <span className='text-xl font-bold text-gray-300'>Asignación de Fondos:</span> Permite a los usuarios asignar una cantidad de dinero a cada bolsillo, estableciendo presupuestos personalizados.
                        </li>
                        <li>
                            <span className='text-xl font-bold text-gray-300'>Registro de Gastos y Ahorros:</span> Los usuarios pueden crear, modificar, eliminar y actualizar sus gastos y ahorros, así como categorizarlos, lo que proporciona una visión clara de sus patrones de gasto.
                        </li>
                        <li>
                            <span className='text-xl font-bold text-gray-300'>Conexión con API Django:</span> La aplicación se integra con una API creada con Django Rest Framework para garantizar un almacenamiento seguro de datos y una experiencia de usuario fluida.
                        </li>
                    </ul>

                </div> : <></>}
                <div className='flex justify-center gap-2 mt-2'>
                    <a className='flex  mt-1 text-gray-300 ssssm:text-md sm:text-xl bg-violet-950 p-2 rounded-lg hover:bg-violet-700 transition duration-300 ease-in-out font-bold font-alice whitespace-nowrap' href='https://github.com/KevZG00/CashFlow-Manager.git' target='_blank' rel="noopener noreferrer">
                        <AiFillGithub className='text-gray-300 text-2xl mr-1 ' />Ver en GitHub
                    </a>
                    <button className='flex mt-1 text-gray-300 ssssm:text-md sm:text-xl bg-violet-950 p-2 rounded-lg hover:bg-violet-700 transition duration-300 ease-in-out font-bold font-alice whitespace-nowrap' onClick={toggleDescription}>{!showDescription ? "Leer descripción" : "Ver imágenes"}</button>
                </div>
            </div>
        </div >

    )
}

export default ProjectCarousel