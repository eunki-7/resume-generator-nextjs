import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Pytube',
      descriptions: [
        {
          content:
            'Contributed to pytube, a lightweight, dependency-free Python library and CLI tool for downloading YouTube videos',
        },
        { content: 'Contributor' },
        {
          content: 'https://github.com/pytube/pytube',
          href: 'https://github.com/pytube/pytube',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/pytube/pytube.svg?style=popout',
        },
      ],
    },
    {
      title: 'Amazon-Bedrock-Hand-On-Lab',
      descriptions: [
        {
          content:
            'Contributed to SageMaker Example Notebooks, showcasing how to build, train, and deploy machine learning models using Amazon SageMaker',
        },
        { content: 'Contributor' },
        {
          content: 'https://github.com/son-kjun/bedrock-workshop',
          href: 'https://github.com/son-kjun/bedrock-workshop',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/aws/amazon-sagemaker-examples?style=popout',
        },
      ],
    },
    {
      title: 'Amazon-sagemaker-examples',
      descriptions: [
        {
          content:
            'Contributed to example notebooks demonstrating how to build, train, and deploy machine learning models using Amazon SageMaker',
        },
        { content: 'Contributor' },
        {
          content: 'https://github.com/aws/amazon-sagemaker-examples',
          href: 'https://github.com/aws/amazon-sagemaker-examples',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/aws/amazon-sagemaker-examples?style=popout',
        },
      ],
    },
    {
      title: 'LLM-RDMA-MLOps-Lab',
      descriptions: [
        {
          content:
            'A hands-on blueprint for enterprise-grade distributed LLM training and serving operations, featuring performance, scalability, and observability best practices.',
        },
        { content: 'Contributor' },
        {
          content: 'https://github.com/eunki-7/llm-rdma-mlops-lab',
          href: 'https://github.com/eunki-7/llm-rdma-mlops-lab',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/eunki-7/llm-rdma-mlops-lab.svg?style=popout',
        },
      ],
    },
    {
      title: 'GPU RDMA Communication Lab-10× A100',
      descriptions: [
        {
          content:
            'A deep-dive, hands-on lab that isolates multi-GPU, multi-node communication for HPC/AI workloads—now scaled to 10× NVIDIA A100.',
        },
        { content: 'Contributor' },
        {
          content: 'https://github.com/eunki-7/exa-comm-a100',
          href: 'https://github.com/eunki-7/exa-comm-a100',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/eunki-7/exa-comm-a100.svg?style=popout',
        },
      ],
    },
    {
      title: 'Music2Sheet-MLOps Version',
      descriptions: [
        {
          content:
            'Architected and led development of an enterprise-grade AI pipeline converting music audio to sheet music using Hugging Face pretrained models, FastAPI inference service, and fully automated CI/CD (Docker + GitHub Actions).',
        },
        { content: 'Owner' },
        {
          content: 'https://github.com/eunki-7/music2sheet-mlops',
          href: 'https://github.com/eunki-7/music2sheet-mlops',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/eunki-7/music2sheet-mlops.svg?style=popout',
        },
      ],
    },
    {
      title: 'MCP Auto-Router Chatbot-MLOps Version',
      descriptions: [
        {
          content:
            'Enterprise-grade chatbot with AWS ECS deployment, SageMaker fine-tuning, CI/CD automation, and monitoring stack (Prometheus + Grafana).',
        },
        { content: 'Owner' },
        {
          content: 'https://github.com/eunki-7/mcp-auto-router-chatbot-mlops',
          href: 'https://github.com/eunki-7/mcp-auto-router-chatbot-mlops',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/eunki-7/mcp-auto-router-chatbot-mlops.svg?style=popout',
        },
      ],
    },
    {
      title: 'Lightweight PDF RAG Chatbot',
      descriptions: [
        {
          content:
            'A lightweight PDF-based RAG chatbot with fallback model inference, built using HuggingFace Transformers and Gradio.',
        },
        { content: 'Owner' },
        {
          content: 'https://github.com/eunki-7/lightweight-pdf-rag-chatbot-portfolio',
          href: 'https://github.com/eunki-7/lightweight-pdf-rag-chatbot-portfolio',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/eunki-7/lightweight-pdf-rag-chatbot-portfolio.svg?style=popout',
        },
      ],
    },
    {
      title: 'MCP Auto Router Chatbot',
      descriptions: [
        {
          content:
            'A multi-model routing chatbot that automatically selects the best model based on query type, demonstrating MCP-style AI model orchestration.',
        },
        { content: 'Owner' },
        {
          content: 'https://github.com/eunki-7/mcp-auto-router-chatbot-portfolio',
          href: 'https://github.com/eunki-7/mcp-auto-router-chatbot-portfolio',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/eunki-7/mcp-auto-router-chatbot-portfolio.svg?style=popout',
        },
      ],
    },
    {
      title: 'Echo FLAN2SQL (Voice-to-SQL AI)',
      descriptions: [
        {
          content:
            'A voice-driven SQL generator using Wav2Vec2 for speech-to-text and FLAN-T5 for SQL translation, delivering instant query results from mock databases.',
        },
        { content: 'Owner' },
        {
          content: 'https://github.com/eunki-7/wav2vec-flan-sql-portfolio',
          href: 'https://github.com/eunki-7/wav2vec-flan-sql-portfolio',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/eunki-7/wav2vec-flan-sql-portfolio.svg?style=popout',
        },
      ],
    },
    {
      title: 'Certifications',
      descriptions: [
        {
          content: 'AWS Certified Machine Learning - Specialty',
        },
        {
          content: 'CKA (Certified Kubernetes Administrator)',
        },
        {
          content: 'CKAD (Certified Kubernetes Application Developer)',
        },
        {
          content: 'Google TensorFlow Certificate (2–5 Years)',
        },
        {
          content: 'AWS Certified Cloud Practitioner',
        },
        {
          content: 'Oracle Certified Java Programmer (OCJP)',
        },
        {
          content: '정보처리기사',
        },
        {
          content: '데이터아키텍처준전문가 (DAsP)',
        },
        {
          content: 'SQL개발자 (SQLD)',
        },
        {
          content: '리눅스마스터 2급',
        },
        {
          content: '컴퓨터활용능력 1급',
        },
        {
          content: '멀티미디어콘텐츠제작전문가',
        },
        {
          content: '사무자동화산업기사',
        },
        {
          content: 'MOS Excel 2007 Expert',
        },
        {
          content: '인터넷정보검색사 1급',
        },
        {
          content: '워드프로세서 1급',
        },
        {
          content: '정보기기운용기능사',
        },
        {
          content: '무선인터넷관리사',
        },
        {
          content: '컴퓨터운용사',
        },
        {
          content: '웹디자인기능사',
        },
        {
          content: 'GTQ 포토샵 1급 외',
        },
      ],
    },
    // {
    //   title: 'NestJS',
    //   descriptions: [
    //     {
    //       content: 'A progressive Node.js framework',
    //     },
    //     {
    //       content:
    //         'for building efficient, scalable, and enterprise-grade server-side applications',
    //     },
    //     {
    //       content: 'Contributor',
    //     },
    //     {
    //       content: 'https://github.com/nestjs/nest',
    //       href: 'https://github.com/nestjs/nest',
    //     },
    //     {
    //       content: 'Monthly Download: ',
    //       postImage: 'https://img.shields.io/npm/dm/@nestjs/core.svg',
    //     },
    //     {
    //       content: 'Github Stars: ',
    //       postImage: 'https://img.shields.io/github/stars/nestjs/nest.svg?style=popout',
    //     },
    //   ],
    // },
  ],
};

export default openSource;
