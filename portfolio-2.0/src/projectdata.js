import portfolio from './projectdataimages/PortfolioImage.png';
import shelves from './projectdataimages/Shelves.png';
import pokedex from './projectdataimages/PokeDexImage.png';
import cuphead from './projectdataimages/CupheadImage.png';
import esports from './projectdataimages/EsportsImage.png';
import NYIT from './projectdataimages/NYITImage.png';
import budget from './projectdataimages/Budget.png';

const projects = [
    {
        title: 'Portfolio Website 1.0',
        description: 'Version one of my personal website to show off my web development skillset and projects.',
        image: portfolio,
        link: 'https://github.com/katie-andor/portfolio-website',
        alt: `The Windows XP themed landing page of Katie's old portfolio website.`,
        tools: ['React.js', 'HTML', 'Tailwind', 'CSS']
    },
    {
        title: 'The Shelves',
        description: 'The one-stop-shop for all your reading needs. The Shelves is a service that works with public libraries in order to make access to library books more convenient and accessible for all.',
        image: shelves,
        link: 'https://shelves-o7hn82av3-ayman-haques-projects.vercel.app/',
        alt: 'The homepage of the website The Shelves',
        tools: ['React.js', 'Tailwind', 'Node.js', 'Next.js']
    },
    {
        title: 'Budget App',
        description: 'A web app that helps users budget, track income and expenses, and manage monthly payements/subscriptions.',
        image: budget,
        link: 'https://github.com/katie-andor/finance-web-app',
        alt: 'The budget creation page of a budgeting web app.',
        tools: ['React.js', 'Tailwind', 'Firebase', 'Chart.js']
    },
    {
        title: 'Esports Research Website',
        description: 'Provided The Esports Research Network with an overhaul of their websites themeing, design, and layout, while staying consistent with their brand image.',
        image: esports,
        link: 'https://esportsresearch.net/',
        alt: 'The home page of The Esports Research Networok website.',
        tools: ['WordPress', 'SEO']
    },
    {
        title: 'Pokedex Completion Tracker',
        description: 'Generation 1 Pokedex Tracker to have on the side while playing, shows percentage progress to completion. The user is also able to search for individual Pokémon to mark them off. Also has a randomized fun facts page about Generation 1.',
        image: pokedex,
        link: 'https://github.com/katie-andor/pokedex-completion-tracker',
        alt: 'The home page of the Pokedex completion tracker.',
        tools: ['HTML', 'PHP', 'MySQL', 'Bootstrap']
    },
    {
        title: 'Cuphead Website',
        description: 'Personal website created to present information about the video game Cuphead to its players or fans in a fun, digestible way that aligns with the aesthetic of the game itself.',
        image: cuphead,
        link: 'https://cupheadfanwiki.netlify.app/',
        alt: 'Landing page of a fan made Cuphead website.',
        tools: ['React.js', 'HTML', 'Tailwind']
    },
    {
        title: 'NYIT Website',
        image: NYIT,
        description: 'Utilization of WordPress blocks to update page layout for the new school website and old NYIT web pages to new ones, while also updating them to the new design.',
        alt: `The landing page of the New York Institute of Technology's website.`,
        tools: ['WordPress', 'SEO']
    }
]

export default projects;