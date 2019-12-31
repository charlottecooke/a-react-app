import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built, involving JS and core web dev concepts',
        link: 'https://github.com/some-random-example',
        image: project1
    },
    {
        id: 2,
        title: 'My API',
        description: 'A REST API that I built from scratch with GET and POST requests',
        link: 'https://github.com/some-other-random-example',
        image: project2
    },
    {
        id: 3,
        title: 'C++ Final Project',
        description: 'My unique final project for my university C++ course.',
        link: 'https://github.com/I-should-really-collect-example-work-together',
        image: project3
    }
];

export default PROJECTS;