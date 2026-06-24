import { Component } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title';

@Component({
  selector: 'app-coverage-section',
  imports: [SectionTitle],
  templateUrl: './coverage-section.html',
  styleUrl: './coverage-section.scss',
})
export class CoverageSection {
  readonly urban = [
    'Dharampeth', 'Sitabuldi', 'Sadar', 'Trimurti Nagar', 'Mankapur',
    'Pratap Nagar', 'Beltarodi', 'Hingna Road', 'Wardha Road', 'Amravati Road',
  ];
  readonly rural = [
    'Kamptee', 'Bhandara Road', 'Parseoni', 'Ramtek', 'Kalmeshwar',
    'Katol', 'Narkhed', 'Savner', 'Butibori', 'Kuhi',
  ];
}
