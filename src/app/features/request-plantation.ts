import { Component } from '@angular/core';

@Component({
  selector: 'app-request-plantation',
  imports: [],
  templateUrl: './request-plantation.html',
  styleUrl: './request-plantation.scss',
})
export class RequestPlantation {
  readonly areaTypes = [
    { emoji: '🏫', label: 'Schools / Colleges' },
    { emoji: '🏘️', label: 'Residential Colonies' },
    { emoji: '🏥', label: 'Hospitals / Clinics' },
    { emoji: '🛣️', label: 'Roadside / Public Areas' },
    { emoji: '🌾', label: 'Villages / Rural Areas' },
    { emoji: '🏭', label: 'Industrial Areas' },
  ];
}
