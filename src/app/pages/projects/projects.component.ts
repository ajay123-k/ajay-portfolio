import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Bootstrap Component Generator',
      icon: 'bi-brush',
      description:
        'An AI-driven tool that transforms natural language prompts into responsive Bootstrap UI components instantly.',
      techStack: 'Angular,Node,Express,MySQl,Gemini',
    },
    {
      title: 'Node API Generator',
      icon: 'bi-cpu',
      description:
        'Automatically generates full REST APIs with controllers, routes, and models using Node.js, Express, and Prisma.',
      techStack: 'Angular,Node,Express,MySQl,Gemini',
    },
    {
      title: 'Natural Language to SQL',
      icon: 'bi-database',
      description:
        'Converts human language queries into optimized SQL for MySQL databases, with optional mock data and schema.',
      techStack: 'Angular,Node,Express,MySQl,Gemini',
    },
    {
      title: 'ProMailAI',
      icon: 'bi-envelope-at',
      description:
        'An AI-powered email writing platform using Gemini AI. Features include guest/user usage limits, admin dashboards, dynamic plans, and editable AI prompts — all wrapped in a modern Angular + Bootstrap UI.',
      techStack: 'Angular,Node,Express,MySQl,Gemini',
    },
    {
      title: 'MERN URL Shortener',
      icon: 'bi-link-45deg',
      description:
        'A full-featured URL shortening platform with authentication, analytics, QR generation, and password-protected links. Includes a user dashboard, detailed URL management, and secure JWT-based access control.',
      techStack: 'React,Node,Express,MySQl',
    },
    {
      title: 'MERN Image Gallery',
      icon: 'bi-image',
      description:
        'A full-stack image gallery built with React, Node.js, and Prisma. Features include JWT auth, secure image uploads with Multer, and paginated viewing, downloading, copying, and deletion of images.',
      techStack: 'React,Node,Express,MySQl',
    },
  ];
}
