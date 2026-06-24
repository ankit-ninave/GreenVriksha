import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.isMenuOpen.set(false);
    }
  }

  readonly navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/drives', label: 'Sunday Drives', exact: false },
    { path: '/volunteer', label: 'Volunteer', exact: false },
    { path: '/donate', label: 'Donate', exact: false },
    { path: '/request-plantation', label: 'Request Plantation', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
}