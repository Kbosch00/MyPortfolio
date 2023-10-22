import React from 'react'
import { BiLogoDjango, BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { DiCss3, DiHtml5, DiPostgresql } from 'react-icons/di'
import { SiMicrosoftsqlserver } from 'react-icons/si'

function Timeline() {
    return (
        <>
            <div className='bg-gradient-to-b from-[#0A0A0A] to-black h-20'></div>
            <div className='divTimeline flex justify-center gap-4 py-4 ssssm:mx-4 mmd:mx-0'>
                <div className="max-w-2xl bg-zinc-900 bg-opacity-40 pt-2 px-4 rounded-lg">
                    <span className='text-gray-300 text-xl tracking-wider font-bold font-alice'>Educación:</span>
                    <ol className="relative border-l border-gray-200 dark:border-violet-800 mt-2">
                        <li className="mmd:mb-10 sssm:mb-28  ssssm:mb-14 sm:mb-36 ml-4">
                            <div
                                className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-violet-900 dark:bg-violet-700">
                            </div>
                            <time className="mb-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500 font-crimsonPro">Abril 2023</time>
                            <h3 className="text-xl font-semibold text-zinc-300  font-crimsonPro">Centro Colombiano de Estudios Profesionales (FCECEP)</h3>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 font-crimsonPro">Tecnología en Desarrollo de Sistemas Informáticos</p>
                        </li>
                        <li className="mmd:mb-10 sssm:mb-28  ssssm:mb-14 sm:mb-36 ml-4">
                            <div
                                className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-violet-900 dark:bg-violet-700">
                            </div>
                            <time className="mb-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500 font-crimsonPro">Diciembre 2019</time>
                            <h3 className="text-xl font-semibold text-zinc-300  font-crimsonPro">Institución Educativa Rodrigo Lloreda Caicedo</h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 font-crimsonPro">Bachiller Técnico Especialidad en Documentación y Registro de Operaciones Contables</p>
                        </li>
                        <li className="mb-4 ml-4">
                            <div
                                className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-violet-900 dark:bg-violet-700">
                            </div>
                            <time className="mb-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500 font-crimsonPro">Noviembre 2019</time>
                            <h3 className="text-xl font-semibold text-zinc-300 font-crimsonPro">Sena</h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 font-crimsonPro">Técnico en Contabilización de Operaciones Comerciales y Financieras</p>
                        </li>
                    </ol>
                </div>
                <div className='max-w-2xl  bg-zinc-900 bg-opacity-40 py-2 px-4 rounded-lg'>
                    <span className='text-gray-300 text-xl tracking-wider font-bold font-alice'>Tecnologías:</span>
                    <div className='cursor-default grid ssssm:grid-cols-1 mmd:grid-cols-2 ssssm:gap-y-16 sssm:gap-12 ssm:gap-10 sm:gap-8 mmd:gap-6 justify-around mt-2 sm:py-2 mmd:py-0'>

                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoJavascript")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoJavascript")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}
                        ><BiLogoJavascript id='LogoJavascript' className='text-gray-300 text-3xl' />
                            <span className='text-gray-300 px-1 pt-1 font-medium'>Javascript</span>
                        </div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoReact")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoReact")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><BiLogoReact id='LogoReact' className='text-gray-300 text-3xl' /><span className='text-gray-300 font-medium px-1 pt-1'>React</span></div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoDjango")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoDjango")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><BiLogoDjango id='LogoDjango' className='text-gray-300 text-3xl' /><span className='text-gray-300 font-medium px-1 pt-1'>Django</span></div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoPython")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoPython")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><BiLogoPython id='LogoPython' className='text-gray-300 text-3xl' />
                            <span className='text-gray-300 font-medium px-1 pt-1'>Python</span></div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoTailwind")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoTailwind")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><BiLogoTailwindCss id='LogoTailwind' className='text-gray-300 text-3xl' /><span className='text-gray-300 font-medium px-1 pt-1'>Tailwind</span></div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoHtml")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoHtml")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><DiHtml5 id='LogoHtml' className='text-gray-300 text-3xl' /><span className='text-gray-300 font-medium px-1 pt-1'>HTML</span>
                        </div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoCss")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoCss")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><DiCss3 id='LogoCss' className='text-gray-300 text-3xl' /><span className='text-gray-300 font-medium px-1 pt-1'>CSS</span></div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoPostgresql")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoPostgresql")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><DiPostgresql id='LogoPostgresql' className='text-gray-300 text-3xl'
                            /><span className='text-gray-300 font-medium px-1 pt-1'>PostgreSQL</span></div>
                        <div className='flex bg-zinc-900 bg-opacity-50 p-1 rounded-lg hover:scale-110 transition duration-150'
                            onMouseEnter={() => {
                                const LogoJavascript = document.getElementById("LogoSqlServer")
                                LogoJavascript.classList.remove("text-gray-300")
                                LogoJavascript.classList.add("text-violet-700")
                            }}
                            onMouseLeave={() => {
                                const LogoJavascript = document.getElementById("LogoSqlServer")
                                LogoJavascript.classList.add("text-gray-300")
                                LogoJavascript.classList.remove("text-violet-700")
                            }}><SiMicrosoftsqlserver id='LogoSqlServer' className='text-gray-300 text-3xl' /><span className='text-gray-300 font-medium px-1 pt-1'>SQLServer</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline