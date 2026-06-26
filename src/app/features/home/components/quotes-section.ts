import { Component } from '@angular/core';

export interface Quote {
  devanagari: string;
  fullDevanagari?: string;
  transliteration?: string;
  translation: string;
  author: string;
  source: string;
  lang: string;
  color: string;
  accent: string;
}

@Component({
  selector: 'app-quotes-section',
  imports: [],
  templateUrl: './quotes-section.html',
  styleUrl: './quotes-section.scss',
})
export class QuotesSection {
  readonly featured: Quote = {
    devanagari: 'वृक्षवल्ली आम्हा सोयरी वनचरे',
    fullDevanagari: 'वृक्षवल्ली आम्हा सोयरी वनचरे ।\nपक्षी सुस्वरें आळविती ॥',
    transliteration: 'Vrikshavalli Amha Soyari Vanchare',
    translation: '"Trees and vines are our kin, the forest creatures our companions. The birds call out in sweet voices."',
    author: 'संत तुकाराम',
    source: 'Sant Tukaram — Abhang',
    lang: 'मराठी',
    color: '#1a2e1a',
    accent: '#4ADE80',
  };

  readonly quotes: Quote[] = [
    {
      devanagari: 'वृक्षो रक्षति रक्षितः',
      translation: '"The tree protects the one who protects it."',
      author: 'Sanskrit Subhashita',
      source: 'संस्कृत सुभाषित',
      lang: 'संस्कृत',
      color: '#1e3a5f',
      accent: '#60A5FA',
    },
    {
      devanagari: 'माता भूमिः पुत्रोऽहं पृथिव्याः',
      translation: '"Earth is my mother, and I am her son."',
      author: 'Atharva Veda',
      source: 'अथर्ववेद • भूमि सूक्त',
      lang: 'संस्कृत',
      color: '#2d1b00',
      accent: '#FB923C',
    },
    {
      devanagari: 'झाड लावा, झाड जगवा',
      translation: '"Plant a tree, nurture a tree."',
      author: 'Marathi Proverb',
      source: 'मराठी म्हण',
      lang: 'मराठी',
      color: '#1a2e1a',
      accent: '#34D399',
    },
  ];
}
