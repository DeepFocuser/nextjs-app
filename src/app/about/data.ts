import {IProject, Service, Skill} from './structure/types';
import {BsUnity} from 'react-icons/bs';
import {SiCsharp, SiPytorch, SiSmartthings, SiTensorflow,} from 'react-icons/si';
import {FcGlobe, FcReading, FcTemplate} from 'react-icons/fc';
import {FaPython} from 'react-icons/fa';
import {BiLogoCPlusPlus, BiLogoCss3, BiLogoReact, BiLogoTypescript,} from 'react-icons/bi';
import {AiFillHtml5} from 'react-icons/ai';
import {TbBrandNextjs} from 'react-icons/tb';
import {GiArtificialIntelligence} from 'react-icons/gi';

export const services: Service[] = [
    {
        Icon: SiSmartthings,
        title: 'AI Development',
        about: "I can develop and apply various <strong class='text-blue-400'>AI (vision, natural language processing, voice) algorithms</strong>, and apply them to services.",
    },
    {
        Icon: FcGlobe,
        title: 'Frontend Development',
        about: "I can create a web page that the user requests, I'm thinking about how to create <strong class='text-blue-400'>a stable and optimized web page.</strong>",
    },
    {
        Icon: FcTemplate,
        title: 'Interested in UI/UX',
        about: 'I think, "How can you deliver the end of everything well to others?" <strong class=\'text-blue-400\'>So I am studying UX/UI little by little.</strong>',
    },
    {
        Icon: FcReading,
        title: 'A Passionate Person',
        about: "To make tomorrow's me better than today's me, I never stop learning. <strong class='text-blue-400'>I learn everything passionately.</strong>",
    },
];

export const languages: Skill[] = [
    {
        Icon: FaPython,
        name: 'Python',
        level: '81',
    },
    {
        Icon: BiLogoTypescript,
        name: 'TypeScript',
        level: '71',
    },
    {
        Icon: BiLogoCPlusPlus,
        name: 'C++',
        level: '51',
    },
    {
        Icon: SiCsharp,
        name: 'C#',
        level: '65',
    },
    {
        Icon: AiFillHtml5,
        name: 'HTML5',
        level: '65',
    },
    {
        Icon: BiLogoCss3,
        name: 'CSS3',
        level: '61',
    },
];

export const tools: Skill[] = [
    {
        Icon: SiTensorflow,
        name: 'Tensorflow',
        level: '81',
    },
    {
        Icon: SiPytorch,
        name: 'Pytorch',
        level: '91',
    },
    {
        Icon: GiArtificialIntelligence,
        name: 'Mxnet',
        level: '91',
    },
    {
        Icon: BiLogoReact,
        name: 'React',
        level: '71',
    },
    {
        Icon: TbBrandNextjs,
        name: 'Next.js',
        level: '71',
    },
    {
        Icon: BsUnity,
        name: 'Unity',
        level: '41',
    },
];

export const projects: IProject[] = [
    {
        name: "DeepFocuser's Next.js Portfolio",
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows  <strong class='text-red-500'>the results of operating self-made AI models on the web</strong> and also shows <strong class='text-blue-500'>DeepFocuser's career.</strong>",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['NextJS'],
        key_techs: [
            'AI',
            'Vision',
            'Sound',
            'React',
            'NextJS',
            'DaisyUI',
            'Framer Motion',
            'Onnxruntime web',
        ],
    },
    {
        name: 'POWER JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    },
    {
        name: 'Dummy JG',
        description:
            "This page is the first page created by DeepFocuser using Next.js and shows the results of operating self-made AI models on the web and also shows DeepFocuser's career.",
        image_path: '/images/projects/portfolio.png',
        deployed_url: 'https://deepfocuser.vercel.app/',
        github_url: 'https://github.com/DeepFocuser/nextjs-app',
        category: ['AI'],
        key_techs: [
            'React',
            'NextJS',
            'DaisyUI',
            'Onnxruntime web',
            'AI',
            'Framer Motion',
            'Computer Vision',
            'go',
        ],
    }
];
