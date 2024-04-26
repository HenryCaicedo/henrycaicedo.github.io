import rackity from './images/rackity.png';
import cr from './images/cr.png';
import wos from './images/wos.png';
import bungee from './images/bungee.png';

const projectsList = [
    {
        name: 'CodeRacers',
        description: 'Web app designed to teach elementary school students programming by allowing them to code the path of a virtual car.',
        tags: ['React', 'Phaser', 'Web'],
        img: cr, 
        url: 'https://github.com/HenryCaicedo/final-project'
    },
    {
        name: 'Rackity',
        description: "Inventory management app. Control and classification of the availability of items in the user's closet",
        tags: ['Flutter', 'UI/UX', 'Mobile'],
        img: rackity, 
        url: 'https://github.com/HenryCaicedo/rackity',
    },
    {
        name: 'Bungee Jumping Simulator',
        description: 'Physics-based simulator of the bungee jumping activity.',
        tags: ['Java', 'Simulator', 'Desktop'],
        img: bungee, 
        url: 'https://github.com/HenryCaicedo/BungeeJumpingSimulator',
    },
    {
        name: 'Women of Science',
       // description: "Educational game about the human \"computers\" during the early days of US space exploration.",
        description : "Educational game featuring Mary Jackson, Katherine Johnson, and Dorothy Vaughan as \"computers\" in early US space exploration.",
        tags: ['Java', 'Game', 'Desktop'],
        img: wos, 
        url: 'https://github.com/leovergaramarq/WomenOfScience',
    },
    {
        name: 'Proyecto 6',
        description: 'Este es un breve resumen del proyecto seis.',
        tags: ['HTML', 'CSS', 'Design'],
        img: 'https://via.placeholder.com/150', 
        url: 'https://github.com/Jony1754/Onlinegame',
    },
];

export default projectsList;
