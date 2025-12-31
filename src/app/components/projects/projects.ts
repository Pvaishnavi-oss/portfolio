import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Swaraj Pack Tech',
      description: 'A professional corporate website for Swaraj Pack Tech - a packaging solutions company. Built with modern web technologies featuring responsive design, product showcases, and company information.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      features: [
        'Responsive corporate design',
        'Product catalog showcase',
        'Contact form integration',
        'SEO optimized structure'
      ],
      icon: 'fas fa-box',
      link: 'https://www.swarajpacktech.in/',
      image: 'swaraj'
    },
    {
      title: 'Global Cyber Tech',
      description: 'A technology services company website featuring modern UI/UX design. Showcases IT services, cybersecurity solutions, and technology consulting offerings.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Node.js'],
      features: [
        'Modern animated UI',
        'Service portfolio display',
        'Client testimonials',
        'Contact & inquiry system'
      ],
      icon: 'fas fa-shield-alt',
      link: 'https://globalcybertech.vercel.app/',
      image: 'cyber'
    },
    {
      title: 'Layer Agri',
      description: 'An agricultural technology platform connecting farmers with modern farming solutions. Features crop management, market insights, and agricultural resources.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Vercel'],
      features: [
        'Agricultural resource hub',
        'Modern farming solutions',
        'Farmer connect platform',
        'Mobile responsive design'
      ],
      icon: 'fas fa-seedling',
      link: 'https://layeragri-2kws.vercel.app/',
      image: 'agri'
    },
    {
      title: 'Global Biotech',
      description: 'A biotechnology company website showcasing pharmaceutical and biotech solutions. Professional design with detailed company information and service offerings.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme', 'SEO'],
      features: [
        'Corporate branding design',
        'Service & product pages',
        'About us & team section',
        'Industry compliance ready'
      ],
      icon: 'fas fa-dna',
      link: 'https://globalbiotech.in/about-us/',
      image: 'biotech'
    },
    {
      title: 'Online Room And Mess Search',
      description: 'An Android application designed to help students and employees find quality homemade food (tiffin) services and accommodation at their doorstep at reasonable rates.',
      technologies: ['Android', 'Java', 'Firebase', 'MySQL', 'XML'],
      features: [
        'Search nearby services',
        'View menus and pricing',
        'Rate and review system',
        'Real-time availability'
      ],
      icon: 'fas fa-utensils',
      link: null,
      image: 'mess'
    },
    {
      title: 'Eulerian Bots',
      description: 'A cutting-edge robotics and IoT solutions company website showcasing autonomous systems for safety, monitoring, and automation including firefighting bots and flood monitoring.',
      technologies: ['React', 'Node.js', 'IoT', 'AI/ML', 'Cloud Dashboard'],
      features: [
        'AI-powered fire detection bot',
        'Real-time flood monitoring system',
        'Curve alert infrastructure',
        'Predictive analytics dashboard'
      ],
      icon: 'fas fa-robot',
      link: 'https://eulerianbots.com/',
      image: 'eulerian'
    }
  ];

  achievements = [
    {
      title: 'DevOps Engineer Certification',
      year: '2024',
      description: 'Completed comprehensive DevOps Engineer course covering CI/CD, containerization, and cloud infrastructure',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Third Prize - TechnoFest Project Competition',
      year: '2023',
      description: 'College level technology festival project competition',
      icon: 'fas fa-trophy'
    },
    {
      title: 'Third Prize - SRS Project Competition',
      year: '2023',
      description: 'Software Requirements Specification project competition',
      icon: 'fas fa-award'
    },
    {
      title: 'Participated - Avishkar Competition',
      year: '2022',
      description: 'College level innovation and research competition',
      icon: 'fas fa-lightbulb'
    }
  ];
}
