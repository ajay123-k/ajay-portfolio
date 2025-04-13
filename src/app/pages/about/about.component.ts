import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutSections = [
    {
      icon: 'bi-window-stack',
      title: 'Frontend',
      description:
        'Building pixel-perfect, accessible UIs using Angular,React, Bootstrap, and advanced TypeScript design patterns.',
    },
    {
      icon: 'bi-server',
      title: 'Backend',
      description:
        'Engineering robust, secure REST APIs with Node.js, Express, Prisma, and scalable DB design.',
    },
    {
      icon: 'bi-diagram-3',
      title: 'Database',
      description:
        'Designing efficient schemas using Prisma ORM and SQL — optimized for performance and clarity.',
    },
    {
      icon: 'bi-robot',
      title: 'AI',
      description:
        'Integrating AI capabilities using Gemini, OpenAI, and other models to enhance user productivity and generate code or UI intelligently.',
    },
    {
      icon: 'bi-tools',
      title: 'DevOps',
      description:
        'Managing source control with Git & GitHub, testing APIs with Postman, and using modern tools to streamline development workflows.',
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Automation',
      description:
        'Automating repetitive tasks and web scraping using Puppeteer, while building custom dev tools and efficient developer workflows.',
    },
  ];
}
