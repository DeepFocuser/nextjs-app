import {IProject, Service, Skill} from './structure/types';
import {BsUnity} from 'react-icons/bs';
import {SiCsharp, SiPytorch, SiSmartthings, SiTensorflow} from 'react-icons/si';
import {FcGlobe, FcReading, FcTemplate} from 'react-icons/fc';
import {FaPython} from "react-icons/fa";
import {BiLogoCPlusPlus, BiLogoCss3, BiLogoReact, BiLogoTypescript} from "react-icons/bi";
import {AiFillHtml5} from "react-icons/ai";
import {TbBrandNextjs} from "react-icons/tb";
import {GiArtificialIntelligence} from "react-icons/gi";

export const services: Service[] = [{
    Icon: SiSmartthings,
    title: 'AI Development',
    about: "I can develop and apply various <strong class='text-blue-400'>AI (vision, natural language processing, voice) algorithms</strong>, and apply them to services.",
}, {
    Icon: FcGlobe,
    title: 'Frontend Development',
    about: "I can create a web page that the user requests, I'm thinking about how to create <strong class='text-blue-400'>a stable and optimized web page.</strong>",
}, {
    Icon: FcTemplate,
    title: 'Interested in UI/UX',
    about: 'I think, "How can you deliver the end of everything well to others?" <strong class=\'text-blue-400\'>So I am studying UX/UI little by little.</strong>',
}, {
    Icon: FcReading,
    title: 'A Passionate Person',
    about: "To make tomorrow's me better than today's me, I never stop learning. <strong class='text-blue-400'>I learn everything passionately.</strong>",
},];

export const languages: Skill[] = [{
    Icon: FaPython, name: 'Python', level: '81',
}, {
    Icon: BiLogoTypescript, name: 'TypeScript', level: '71',
}, {
    Icon: BiLogoCPlusPlus, name: 'C++', level: '51',
}, {
    Icon: SiCsharp, name: 'C#', level: '65',
}, {
    Icon: AiFillHtml5, name: 'HTML5', level: '65',
}, {
    Icon: BiLogoCss3, name: 'CSS3', level: '61',
},];

export const tools: Skill[] = [{
    Icon: SiTensorflow, name: 'Tensorflow', level: '81',
}, {
    Icon: SiPytorch, name: 'Pytorch', level: '91',
}, {
    Icon: GiArtificialIntelligence, name: 'Mxnet', level: '91',
}, {
    Icon: BiLogoReact, name: 'React', level: '71',
}, {
    Icon: TbBrandNextjs, name: 'Next.js', level: '71',
}, {
    Icon: BsUnity, name: 'Unity', level: '41',
}];

export const projects: IProject[] = [{
    name: 'COVID Tracker',
    description: 'This app shows a statistical view about corona virus over the world',
    image_path: '/images/covid.jpg',
    deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['react'],
    key_techs: ['React', 'Chart.js', 'Material UI'],
}, {
    name: 'Algorithm Visualizer',
    image_path: '/images/algoVisual.png',
    deployed_url: 'https://visual-algorithm.web.app/',
    github_url: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['react'],
    description: 'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    key_techs: ['React', 'firebase', 'Framer Motion'],
},

    {
        name: 'Dev Talks',
        image_path: '/images/dev.jpg',
        deployed_url: 'https://dev-talks.herokuapp.com/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['node', 'mongo', 'react'],
        description: 'Social Media app for developers who can share project,create posts,etc...',
        key_techs: ['React', 'Redux', 'Node', 'Express', 'Mongo', 'REST API', 'Bootstrap',],
    },

    {
        name: 'Realtime Chat App',
        image_path: '/images/chatapp.jpg',
        deployed_url: 'https://sumit-chat.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
        category: ['node', 'react'],
        description: 'Basic Realtime Chat App where one can create a room can talk to each other',
        key_techs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
    },

    {
        name: 'Tweeter Clone',
        image_path: '/images/tweetme.jpg',
        deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
        github_url: 'https://github.com/Dey-Sumit/tweetme',
        category: ['django', 'react'],
        description: 'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
        key_techs: ['React', 'Django', 'Django REST API'],
    },

    {
        name: 'Color Classification using tf.js',
        image_path: '/images/color.jpg',
        deployed_url: '!#',
        github_url: 'https://github.com/Dey-Sumit/color-classification',
        category: ['express'],
        description: 'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
        key_techs: ['Express', 'TensorFlow.js', 'Vanilla js'],
    }, {
        name: 'YouTube using YouTube ',
        image_path: '/images/youtubeClone.png',
        deployed_url: 'https://not-utube.web.app/',
        github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
        category: ['express'],
        description: 'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: ['React', 'Redux', 'Firebase Auth', 'YouTube API', 'Sass', 'Bootstrap',],
    }, {
        name: 'Football App',
        image_path: '/images/football.png',
        deployed_url: 'https://o-my-goal.web.app/',
        github_url: 'https://github.com/Dey-Sumit/football-app',
        category: ['react'],
        description: 'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
        key_techs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap',],
    },];
