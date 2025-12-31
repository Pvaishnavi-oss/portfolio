import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactInfo = {
    email: 'phapalevaishnavi11@gmail.com',
    phone: '+91 8767457545',
    location: 'Belapur Badgi, Tal Akole, Dist Ahmednagar, Pin 422602',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-phapale-865a9b228'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    const mailtoLink = `mailto:${this.contactInfo.email}?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;
    window.location.href = mailtoLink;
  }
}
