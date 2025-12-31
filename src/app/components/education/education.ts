import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University Institute',
      university: 'Savitribai Phule Pune University',
      year: '2023 - 2025',
      percentage: '80%',
      grade: 'Distinction',
      icon: 'fas fa-user-graduate',
      specialization: 'Cloud Computing',
      highlights: ['Azure Cloud Services', 'Amazon Web Services (AWS)', 'Cloud Architecture', 'DevOps Practices']
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sangamner Nagarpalika Arts, D.J. Malpani Commerce and B.N. Sarada Science College',
      university: 'Savitribai Phule Pune University',
      year: '2020 - 2023',
      percentage: '88.27%',
      grade: 'Distinction',
      icon: 'fas fa-graduation-cap',
      details: [
        { year: 'TY BCA (2022-23)', percentage: '88.27%', grade: 'Distinction' },
        { year: 'SY BCA (2021-22)', percentage: '81.55%', grade: 'Distinction' },
        { year: 'FY BCA (2020-21)', percentage: '79.50%', grade: 'Distinction' }
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Dnyanmandir Jr. College, Ale',
      university: 'Maharashtra State Board',
      year: '2019 - 2020',
      percentage: '54%',
      grade: 'Second Class',
      icon: 'fas fa-school'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Shri. Ramdas Highschool, Belapur',
      university: 'Maharashtra State Board',
      year: '2017 - 2018',
      percentage: '74.15%',
      grade: 'Distinction',
      icon: 'fas fa-book-open'
    }
  ];

  certifications = [
    {
      title: 'DevOps Engineer',
      provider: 'Professional Certification',
      year: '2024',
      icon: 'fas fa-cogs',
      skills: ['CI/CD Pipelines', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible']
    },
    {
      title: 'Cloud Computing Specialization',
      provider: 'MCA Specialization',
      year: '2024',
      icon: 'fas fa-cloud',
      skills: ['Microsoft Azure', 'AWS', 'Cloud Architecture', 'Serverless Computing']
    }
  ];
}
