import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  Math = Math;
  Array = Array;
  mySkills = [
    {
      title: 'Frontend',
      icon: 'bi bi-window',
      bg: 'bg-success',
      skills: [
        { title: 'Angular', percentage: 75 },
        { title: 'React', percentage: 70 },
        { title: 'Bootstrap', percentage: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: 'bi bi-hdd-network',
      bg: 'bg-warning',
      skills: [
        { title: 'Node', percentage: 70 },
        { title: 'Express', percentage: 70 },
        { title: 'Prisma ORM', percentage: 80 },
      ],
    },
    {
      title: 'Database',
      icon: 'bi bi-database-check',
      bg: 'bg-info',
      skills: [
        { title: 'MySQL', percentage: 80 },
        { title: 'PostgreSQL', percentage: 70 },
        { title: 'Redis', percentage: 75 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: 'bi bi-cpu',
      bg: 'bg-danger',
      skills: [
        { title: 'AI Tools', percentage: 80 },
        { title: 'Prompt Engineering', percentage: 75 },
        { title: 'Gemini / OpenAI APIs', percentage: 85 },
      ],
    },
    {
      title: 'DevOps',
      icon: 'bi bi-diagram-3',
      bg: 'bg-primary',
      skills: [
        { title: 'Git & GitHub', percentage: 80 },
        { title: 'CI/CD Workflows', percentage: 55 },
        { title: 'Automation', percentage: 75 },
      ],
    },
    {
      title: 'Other Tools',
      icon: 'bi bi-tools',
      bg: 'bg-success bg-opacity-75',
      skills: [
        { title: 'Postman', percentage: 80 },
        { title: 'Figma', percentage: 70 },
        { title: 'VS Code', percentage: 85 },
      ],
    },
  ];
}
