import portfolio from "../images/graphicdesignimages/displayedprojects/01.svg";
import shelves from "../images/graphicdesignimages/displayedprojects/02.svg";
import budgeting from '../images/graphicdesignimages/displayedprojects/10.svg';

const budgetingImages = import.meta.glob('../images/graphicdesignimages/budgetingapp/*.svg', { eager: true });
const budgetingImagesList = Object.values(budgetingImages).map(module => module.default);

const shelvesImages = import.meta.glob('../images/graphicdesignimages/theshelves/*.svg', { eager: true });
const shelvesImagesList = Object.values(shelvesImages).map(module => module.default);

const portfolioImages = import.meta.glob('../images/graphicdesignimages/portfoliowebsite/*.svg', { eager: true });
const portfolioImagesList = Object.values(portfolioImages).map(module => module.default);

const gdprojects = [
  {
    title: "Portfolio Website 1.0",
    image: portfolio,
    allImages: portfolioImagesList,
    alt: 'Home page of the portfolio 1.0 website',
    allAlt: 'images of the portfolio website UI'
  },
  {
    title: "The Shelves",
    image: shelves,
    allImages: shelvesImagesList,
    alt: 'The browse page of The Shelves website',
    allAlt: 'images of the The Shelves UI'
  },
  {
    title: "Budgeting App",
    image: budgeting,
    allImages: budgetingImagesList,
    alt: 'Notifications page of the budgeting app',
    allAlt: 'images of the budgeting app UI'
  },
];

export default gdprojects;
