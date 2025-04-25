const budgetingImages = import.meta.glob('./graphicdesignimages/budgetingapp/*.svg', { eager: true });
const budgetingImagesList = Object.values(budgetingImages).map(module => module.default);

const shelvesImages = import.meta.glob('./graphicdesignimages/theshelves/*.svg', { eager: true });
const shelvesImagesList = Object.values(shelvesImages).map(module => module.default);

const portfolioImages = import.meta.glob('./graphicdesignimages/portfoliowebsite/*.svg', { eager: true });
const portfolioImagesList = Object.values(portfolioImages).map(module => module.default);

const designs = [
    {
        title: 'Portfolio Website 1.0',
        images: portfolioImagesList,
        alt: 'images of the portfolio website UI'
    },
    {
        title: 'The Shelves',
        images: shelvesImagesList,
        alt: 'images of the The Shelves UI'

    },
    {
        title: 'Budgeting App',
        images: budgetingImagesList,
        alt: 'images of the budgeting app UI'
    }
]

export default designs;