type ExperienciaType = {
    tipo: 'educacion'|'trabajo',
    title: string,
    text: string,
    fecha: string
}

export const experiencia:  ExperienciaType[] = [
    {
        tipo: 'educacion',
        title: 'Educación Técnica',
        text: 'Técnico en Computación e Informática, egresado del Instituto Cibertec.',
        fecha: 'Enero 2017 - Diciembre 2021'
    },
    {
        tipo: "trabajo",
        title: "Practicante Web en IB Group",
        text: "Desarrollé proyectos prácticos utilizando el lenguaje de programación PHP y la base de datos MySQL, además de gestionar el CPanel para la administración y despliegue de aplicaciones.",
        fecha: "Febrero 2021 - Septiembre 2021"
    },
    {
        tipo: "trabajo",
        title: "Soporte Técnico en Tech Support",
        text: "Brindé soporte técnico a diversos clientes, tanto empresas como personas naturales, realizando tareas como configuración de dispositivos móviles, instalación de sistemas operativos Windows y aplicaciones, además de mantenimiento preventivo y correctivo de equipos de escritorio y laptops.",
        fecha: "Septiembre 2021 - Abril 2022"
    },
    {
        tipo: "trabajo",
        title: "Analista de Sistemas Internos en Lucky",
        text: "Desarrollo módulos para el sistema ERP de la empresa, utilizando Angular para el front-end, .NET Core para el back-end y SQL Server como motor de base de datos. Creo soluciones efectivas que optimizan la experiencia de los usuarios.",
        fecha: "Mayo 2022 - Hasta la fecha"
    },
    {
        tipo: "educacion",
        title: "Educación Universitaria",
        text: "Actualmente estoy convalidando la carrera de Ingeniería de Sistemas en la Universidad UPC.",
        fecha: "Septiembre 2023 - Hasta la fecha"
    }
]

export const habilidades: { name: string, description: string }[] = [
    {
        name: 'html5',
        description: "Html5"
    },
    {
        name: 'css3',
        description: "Css3"
    },
    {
        name: 'javascript',
        description: "JavaScript"
    },
    {
        name: 'angular',
        description: "Angular"
    },
    {
        name: 'laravel',
        description: "Laravel"
    },
    {
        name: 'dotnetcore',
        description: ".Net Core"
    },
    {
        name: 'typescript',
        description: "TypeScript"
    },
    {
        name: 'react',
        description: "React Js"
    },
    {
        name: 'next-js',
        description: "Next Js"
    },
    {
        name: 'bootstrap',
        description: "Bootstrap"
    },
    {
        name: 'tailwindcss',
        description: "Tailwindcss"
    },
    {
        name: 'sqlserver',
        description: "SQL Server"
    },
    {
        name: 'mysql',
        description: "MySQL"
    },
    {
        name: 'github',
        description: "GutHub"
    },
    {
        name: 'docker',
        description: "Docker"
    }
]