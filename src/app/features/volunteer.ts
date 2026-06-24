import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  imports: [],
  templateUrl: './volunteer.html',
  styleUrl: './volunteer.scss',
})
export class Volunteer {
  readonly benefits = [
    { emoji: '🌳', text: 'Plant native trees across Nagpur every Sunday' },
    { emoji: '🤝', text: 'Connect with a passionate eco-community' },
    { emoji: '📸', text: 'Document your impact and share stories' },
    { emoji: '🎓', text: 'Learn about native species and ecology' },
    { emoji: '📍', text: 'Explore new areas of urban & rural Nagpur' },
    { emoji: '💚', text: 'Leave a lasting green legacy for future generations' },
  ];
}
