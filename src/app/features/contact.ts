import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly contactCards = [
    {
      emoji: '💬',
      title: 'WhatsApp Community',
      desc: 'The fastest way to connect. Get Sunday drive updates, locations, and chat with volunteers.',
      action: 'Join WhatsApp Group',
      href: 'https://wa.me/91XXXXXXXXXX',
      color: 'green',
      external: true,
    },
    {
      emoji: '📧',
      title: 'Email Us',
      desc: 'For partnerships, media inquiries, school/NGO collaborations, or any formal communication.',
      action: 'greenvrikshanagpur@gmail.com',
      href: 'mailto:greenvrikshanagpur@gmail.com',
      color: 'blue',
      external: false,
    },
    {
      emoji: '📸',
      title: 'Instagram',
      desc: 'Follow our drives, photos, and impact stories. Tag us in your green moments.',
      action: '@GreenVrikshaNagpur',
      href: '#',
      color: 'purple',
      external: true,
    },
  ];
}
