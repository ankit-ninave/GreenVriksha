import { Component } from '@angular/core';
import { HeroSection } from './home/components/hero-section';
import { StatsSection } from './home/components/stats-section';
import { WhatWeDoSection } from './home/components/what-we-do-section';
import { SundayDriveSection } from './home/components/sunday-drive-section';
import { ContributeSection } from './home/components/contribute-section';
import { HowItWorksSection } from './home/components/how-it-works-section';
import { CoverageSection } from './home/components/coverage-section';
import { GalleryPreviewSection } from './home/components/gallery-preview-section';
import { VolunteerCtaSection } from './home/components/volunteer-cta-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    StatsSection,
    WhatWeDoSection,
    SundayDriveSection,
    ContributeSection,
    HowItWorksSection,
    CoverageSection,
    GalleryPreviewSection,
    VolunteerCtaSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
