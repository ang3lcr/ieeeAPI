const { faker } = require('@faker-js/faker');
const db = require("../utils/database")
const { User, Chapter } = require("../models");
const initModels = require("../models/initModels");

initModels();



const chapters = [
    {
      name: "Computer Society",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/IEEE_Computer.png",
      images: "https://pbs.twimg.com/media/GDlGCt6WwAAnO0r?format=jpg&name=4096x4096,https://i.ytimg.com/vi/ByWOJUJgT_8/maxresdefault.jpghttps://i.ytimg.com/vi/ByWOJUJgT_8/maxresdefault.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png",
      description:"Sociedad líder en el mundo dedicada a la informática y la tecnología, en el Instituto Tecnológico de Morelia.",
      userId: 1,
      acronym: "CS"
    },
    {
      name: "Robotics & Automation Society",
      logo: "https://www.morelia.tecnm.mx/assets/capitulos/portada-ras.png",
      images: "https://www.ieee-ras.org/images/image/Slider_images/homepage/2024/IMG_0056.jpg,https://www.ieee-ras.org/images/eNewsPhotos/Paolo_Dario_homepage.png,https://www.ieee-ras.org/images/image/Slider_images/Pres_of_RAS_Past_Present__Future_-cropped.png",
      userId: 2,
      acronym: "RAS",
      description: "La IEEE Robotics and Automation Society es una sociedad profesional de IEEE que apoya el desarrollo y el intercambio de conocimiento científico en los campos de la robótica y la automatización, incluidas las cuestiones aplicadas y teóricas. Nuestro capitulo dentro del Instituto Tecnológico de Morelia, se dedica a participar en concursos de robótica e innovación, así como a impartir cursos para alumnos del instituto, que refuercen o brinden nuevas herramientas, necesarias para el campo de la robótica y automatización."
    },
    {
      name: "Engineering in Medicine & Biology Society",
      logo: "https://www.embs.org/wp-content/uploads/2023/02/ieee-embs-tag-tm-ko-logo2x.png",
      images: "https://www.embs.org/wp-content/uploads/2022/04/about-embs-woman-wearables.jpg,https://www.embs.org/wp-content/uploads/2022/04/about-embs-microchip.jpg,https://www.embs.org/wp-content/uploads/2022/04/about-embs-man-wearables.jpg",
      description:"La Engineering in Medicine & Biology Society (EMBS) de IEEE es la sociedad internacional de ingenieros biomédicos más grande del mundo. Los 12,000 miembros de la organización residen en unos 97 países alrededor del mundo. EMBS proporciona a sus miembros acceso a las personas, prácticas, información, ideas y opiniones que conforman uno de los campos de mayor crecimiento en ciencia.",
      userId: 3,
      acronym: "EMBS"
    },
    {
      name: "WOMEN IN ENGINEERING",
      logo: "https://wie.ieee.org/wp-content/uploads/ieee_women_in_engineering_wie-logo.png",
      images: "https://ieeekerala.org/wp-content/uploads/2021/09/38837069_2050542314956416_2093890775497572352_n.png",
      description:"El grupo de afinidad IEEE Women in Engineering es una red global de miembros y voluntarios de IEEE dedicados a promover a mujeres ingenieras y científicas, e inspirar a las niñas de todo el mundo a seguir sus intereses académicos en una carrera en ingeniería y ciencia.",
      userId: 4,
      acronym: "WIE"
    },
    {
      name: "Power & Energy Society",
      logo: "https://sites.utexas.edu/sec/files/2020/09/IEEE-PES-Logo-Web-No-Background-Jeffrey-Y-Liew.png",
      images: "https://ieee-pes.org/wp-content/uploads/2023/01/ieee-pes-homepage.jpg,https://pes-gridedge.org/wp-content/themes/gridedge/images/ieee_pes_logo_white.png",
      description:"La Power & Energy Society (PES) ofrece el foro más grande del mundo para compartir los últimos avances tecnológicos en la industria de la energía eléctrica, para desarrollar estándares que guían el desarrollo y la construcción de equipos y sistemas, y para educar a los miembros de la industria y al público en general. público. Los miembros de Power & Energy Society son líderes en este campo, y ellos, y sus empleadores, obtienen importantes beneficios de su participación en esta asociación única y excepcional.",
      userId: 5,
      acronym: "PES"
    },

]








db.sync({force: true}).then(() => {
    console.log('Seed syncronized');
        setTimeout(async () => {
            for (let index = 0; index < 10; index++){
            const user = {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                profileImg: faker.image.avatar(),
            }
            await User.create(user)
            }
             },100)
            setTimeout(() => {
                chapters.forEach(async chapter => {
                await Chapter.create(chapter)
                 });
            },500)
    
})
