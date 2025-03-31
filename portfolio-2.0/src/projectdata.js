import portfolio from './projectdataimages/PortfolioImage.png';
// import shelves from './projectdata/ShelvesImage.png';
import pokedex from './projectdataimages/PokeDexImage.png'
import cuphead from './projectdataimages/CupheadImage.png'
import esports from './projectdataimages/EsportsImage.png'
import NYIT from './projectdataimages/NYITImage.png'
import quiz from './projectdataimages/QuizImage.png'

const projects = [
    {
        title: 'Portfolio Website',
        description: 'Personal website to show off my web development skillset and projects.',
        image: portfolio,
        link: 'https://github.com/katie-andor/portfolio-website',
        alt: 'placeholderalt'
    },
    {
        title: 'The Shelves',
        description: 'The one-stop-shop for all your reading needs. The Shelves is a service that works with public libraries in order to make access to library books more convenient and accessible for all.',
        link: 'https://shelves-o7hn82av3-ayman-haques-projects.vercel.app/',
        alt: 'The homepage of the website The Shelves'
    },
    {
        title: 'Esports Research Website',
        description: 'Tasked with a redesign of the current website, while incorporating the same theme and provided media.',
        image: esports,
        link: 'https://esportsresearch.net/',
        alt: 'placeholderalt'
    },
    {
        title: 'Pokedex Completion Tracker',
        description: 'Generation 1 Pokedex Tracker to have on the side while playing, shows percentage progress to completion. Lists all 151 original Pokémon, but the user is also able to search for individual Pokémon. Also has a randomized fun facts page about Generation 1. Uses PHP, , SQL, and Bootstrap.',
        image: pokedex,
        link: 'https://github.com/katie-andor/pokedex-completion-tracker',
        alt: 'placeholderalt'
    },
    {
        title: 'Cuphead Website',
        description: 'Personal website created to present information about the video game Cuphead to its players or fans in a fun, digestible way that aligns with the aesthetic of the game itself.',
        image: cuphead,
        link: 'https://cupheadfanwiki.netlify.app/',
        alt: 'placeholderalt'
    },
    {
        title: 'NYIT Website',
        image: NYIT,
        description: 'Utilization of WordPress blocks to update page layout for the new school website and old NYIT web pages to new ones, while also updating them to the new design.',
        alt: 'placeholderalt'
    },
    {
        title: 'Quiz Website',
        description: 'Quiz website.',
        image: quiz,
        link: 'https://github.com/katie-andor/QuizProject',
        alt: 'placeholderalt'
    }
]

export default projects;