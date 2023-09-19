import { IProject, Service, Skill } from "./structure/types";
import { BsUnity } from "react-icons/bs";
import { SiCsharp, SiPytorch, SiSmartthings, SiTensorflow } from "react-icons/si";
import { FcGlobe, FcReading, FcTemplate } from "react-icons/fc";
import { FaPython } from "react-icons/fa";
import { BiLogoCPlusPlus, BiLogoCss3, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

export const services: Service[] = [
  {
    Icon: SiSmartthings,
    title: "AI Development",
    about: "I can develop and apply various <strong class='text-blue-400'>AI (vision, natural language processing, voice) algorithms</strong>, and apply them to services."
  },
  {
    Icon: FcGlobe,
    title: "Frontend Development",
    about: "I can create a web page that the user requests, I'm thinking about how to create <strong class='text-blue-400'>a stable and optimized web page.</strong>"
  },
  {
    Icon: FcTemplate,
    title: "Interested in UI/UX",
    about: "I think, \"How can you deliver the end of everything well to others?\" <strong class='text-blue-400'>So I am studying UX/UI little by little.</strong>"
  },
  {
    Icon: FcReading,
    title: "A Passionate Person",
    about: "To make myself of today that is much better than yesterday, I never stop learning. <strong class='text-blue-400'>I learn everything passionately.</strong>"
  }
];

export const languages: Skill[] = [
  {
    Icon: FaPython,
    name: "Python",
    level: "84"
  },
  {
    Icon: BiLogoTypescript,
    name: "TypeScript",
    level: "75"
  },
  {
    Icon: BiLogoCPlusPlus,
    name: "C++",
    level: "53"
  },
  {
    Icon: SiCsharp,
    name: "C#",
    level: "67"
  },
  {
    Icon: AiFillHtml5,
    name: "HTML5",
    level: "67"
  },
  {
    Icon: BiLogoCss3,
    name: "CSS3",
    level: "64"
  }
];

export const tools: Skill[] = [
  {
    Icon: SiTensorflow,
    name: "Tensorflow",
    level: "83"
  },
  {
    Icon: SiPytorch,
    name: "Pytorch",
    level: "91"
  },
  {
    Icon: GiArtificialIntelligence,
    name: "Mxnet",
    level: "91"
  },
  {
    Icon: BiLogoReact,
    name: "React",
    level: "75"
  },
  {
    Icon: TbBrandNextjs,
    name: "Next.js",
    level: "75"
  },
  {
    Icon: BsUnity,
    name: "Unity",
    level: "47"
  }
];

export const projects: IProject[] = [
  {
    name: "DeepFocuser's Next.js Portfolio",
    description:
      "This page is the Web page created by DeepFocuser using Next.js and shows <strong class='text-red-500'>the results of operating self-made AI models on the web</strong> and also shows <strong class='text-blue-500'>DeepFocuser's career.</strong>",
    image_path: "/images/projects/web/portfolio.png",
    deployed_url: "https://deepfocuser.vercel.app/about",
    github_url: "https://github.com/DeepFocuser/nextjs-app",
    category: ["Web"],
    key_techs: [
      "React",
      "Typescript",
      "NextJS",
      "NodeJS",
      "SSR",
      "CSR",
      "Tailwind",
      "DaisyUI",
      "Framer Motion"
    ]
  },
  {
    name: "HumanMatting Project with OnnxRuntime Web",
    description:
      "It is a project that operates<strong class='text-red-500'> Human Matting Model(made by me)</strong> that separates people from the background on the web.",
    image_path: "/images/projects/ai/humanmatting.png",
    deployed_url: "https://deepfocuser.vercel.app/humanmattingbetter",
    github_url:
      "https://github.com/DeepFocuser/nextjs-app/tree/main/src/app/humanmattingbetter",
    category: ["AI"],
    key_techs: [
      "Human Matting",
      "Onnxruntime Web",
      "Pytorch",
      "Tensorflow JS",
      "Onnx",
      "React",
      "Typescript",
      "NextJS",
      "Tailwind",
      "DaisyUI"
    ]
  },
  {
    name: "Voice Activity Detection with OnnxRuntime Web",
    description:
      "It is a project to operate<strong class='text-red-500'> Silero Vad Model</strong> on the web that finds voice intervals in signals mixed with voice and noise.",
    image_path: "/images/projects/ai/vad.png",
    deployed_url: "https://deepfocuser.vercel.app/vad",
    github_url:
      "https://github.com/DeepFocuser/nextjs-app/tree/main/src/app/vad",
    category: ["AI"],
    key_techs: [
      "Face Detection",
      "Onnxruntime Web",
      "Pytorch",
      "Onnx",
      "Tensorflow JS",
      "Silero Vad",
      "React",
      "Typescript",
      "NextJS",
      "Tailwind",
      "DaisyUI",
      "Framer Motion"
    ]
  },
  {
    name: "Face Detection Project with OnnxRuntime Web",
    description:
      "It is a project to operate<strong class='text-red-500'> Face Detection Model(made by me)</strong> that extracts landmarks of the face area, eyes, nose, and mouth on the web.",
    image_path: "/images/projects/ai/facedetection.png",
    deployed_url: "https://deepfocuser.vercel.app/facedetection",
    github_url:
      "https://github.com/DeepFocuser/nextjs-app/tree/main/src/app/facedetection",
    category: ["AI"],
    key_techs: [
      "Face Detection",
      "Onnxruntime Web",
      "Pytorch",
      "Tensorflow JS",
      "Onnx",
      "React",
      "Typescript",
      "NextJS",
      "Tailwind",
      "DaisyUI"
    ]
  },
  {
    name: "Pose Detection Project with OnnxRuntime Web",
    description:
      "It is a project to operate<strong class='text-red-500'> Movenet2D Model</strong> on the web that estimates the posture of 17 keypoints of the web.",
    image_path: "/images/projects/ai/posedetection.png",
    deployed_url: "https://deepfocuser.vercel.app/posedetection",
    github_url:
      "https://github.com/DeepFocuser/nextjs-app/tree/main/src/app/posedetection",
    category: ["AI"],
    key_techs: [
      "Face Detection",
      "Onnxruntime Web",
      "Pytorch",
      "Tensorflow JS",
      "Onnx",
      "React",
      "Typescript",
      "NextJS",
      "Tailwind",
      "DaisyUI"
    ]
  },
  {
    name: "DL Code Implementation Project",
    description:
      "This is the result of implementing <strong class='text-red-500'>Classification, Segmentation, and Detection Algorithms</strong>, which can be considered the basis of deep learning, using the pytorch framework.",
    image_path: "/images/projects/ai/deeplearning.png",
    deployed_url: "https://github.com/DeepFocuser/PyTorch-Detector-alpha",
    github_url: "https://github.com/DeepFocuser/PyTorch-Detector-alpha",
    category: ["AI"],
    key_techs: [
      "Pytorch",
      "Classification",
      "Segmentation",
      "Object Detection",
      "Face Detection"
    ]
  },
  {
    name: "Transformer Implementation Project",
    description:
      "This is the result of <strong class='text-red-500'>implementing the Transformer Model</strong> that translates German into English.",
    image_path: "/images/projects/ai/transformer.png",
    deployed_url: "https://github.com/DeepFocuser/Pytorch-Transformer",
    github_url: "https://github.com/DeepFocuser/Pytorch-Transformer",
    category: ["AI"],
    key_techs: [
      "Pytorch",
      "Deep Learning",
      "Translator",
      "Transformer",
      "Natural Language Processing"
    ]
  },
  {
    name: "Torchserving Detection Project",
    description:
      "This is the result of <strong class='text-red-500'>servicing the Face Detection Model(made by me) with TorchServing</strong> and further <strong class='text-blue-500'>distributing it to the Kubernetes environment.</strong>",
    image_path: "/images/projects/ai/torchserving.png",
    deployed_url: "https://github.com/DeepFocuser/TorchServing",
    github_url: "https://github.com/DeepFocuser/TorchServing",
    category: ["AI"],
    key_techs: [
      "Pytorch",
      "AI Serving",
      "TorchServing",
      "Face Detection",
      "Docker",
      "Kubernetes",
      "Microk8s",
      "Helm"
    ]
  }
];
