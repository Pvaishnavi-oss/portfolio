import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  programmingSkills = [
    { name: 'Java (JDBC, Servlet, JSP)', level: 85, icon: 'fab fa-java' },
    { name: 'Python', level: 70, icon: 'fab fa-python' },
    { name: 'Golang', level: 65, icon: 'fas fa-code' },
    { name: 'C/C++', level: 75, icon: 'fas fa-code' },
  ];

  webSkills = [
    { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
    { name: 'CSS3/SCSS', level: 85, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript/TypeScript', level: 85, icon: 'fab fa-js' },
    { name: 'Angular', level: 80, icon: 'fab fa-angular' },
    { name: 'React/Next.js', level: 75, icon: 'fab fa-react' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
  ];

  databaseSkills = [
    { name: 'MySQL', level: 85, icon: 'fas fa-database', color: '#4479A1' },
    { name: 'MongoDB', level: 80, icon: 'fas fa-leaf', color: '#47A248' },
    { name: 'PostgreSQL', level: 75, icon: 'fas fa-database', color: '#336791' },
    { name: 'SQL Server', level: 70, icon: 'fas fa-database', color: '#CC2927' },
    { name: 'Oracle', level: 65, icon: 'fas fa-database', color: '#F80000' },
    { name: 'Firebase', level: 75, icon: 'fas fa-fire', color: '#FFCA28' },
    { name: 'Redis', level: 60, icon: 'fas fa-bolt', color: '#DC382D' },
    { name: 'SQLite', level: 70, icon: 'fas fa-database', color: '#003B57' },
  ];

  cloudSkills = [
    { name: 'Microsoft Azure', icon: 'fab fa-microsoft', color: '#0078D4' },
    { name: 'Amazon Web Services (AWS)', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Google Cloud Platform', icon: 'fab fa-google', color: '#4285F4' },
    { name: 'Vercel', icon: 'fas fa-cloud', color: '#000000' },
  ];

  devopsSkills = [
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326CE5' },
    { name: 'Jenkins', icon: 'fab fa-jenkins', color: '#D24939' },
    { name: 'Terraform', icon: 'fas fa-cubes', color: '#7B42BC' },
    { name: 'Ansible', icon: 'fas fa-cog', color: '#EE0000' },
    { name: 'CI/CD Pipelines', icon: 'fas fa-code-branch', color: '#2ecc71' },
    { name: 'Git/GitHub', icon: 'fab fa-github', color: '#333' },
    { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
  ];

  otherSkills = [
    { name: 'UI/UX Design', icon: 'fas fa-palette' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Agile/Scrum', icon: 'fas fa-sync-alt' },
    { name: 'SDLC', icon: 'fas fa-project-diagram' },
    { name: 'REST APIs', icon: 'fas fa-plug' },
    { name: 'Microservices', icon: 'fas fa-cubes' },
  ];
}
