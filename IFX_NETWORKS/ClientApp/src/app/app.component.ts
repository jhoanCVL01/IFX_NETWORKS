import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  isAuthenticated = false;
  PageLoaded = false;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      // Redirige al login si no está autenticado
      if (!this.isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });


  }
  initDOM(): void {
    const config = (window as any).config || { config: {} };

    // Variables de configuración
    const navbarTopShape = config.config.phoenixNavbarTopShape;
    const navbarPosition = config.config.phoenixNavbarPosition;
    const navbarTopStyle = config.config.phoenixNavbarTopStyle;
    const navbarVerticalStyle = config.config.phoenixNavbarVerticalStyle;

    // Seleccionar elementos del DOM
    const body = document.querySelector('body');
    const navbarDefault = document.querySelector('#navbarDefault');
    const navbarTop = document.querySelector('#navbarTop');
    const topNavSlim = document.querySelector('#topNavSlim');
    const navbarTopSlim = document.querySelector('#navbarTopSlim');
    const navbarCombo = document.querySelector('#navbarCombo');
    const navbarComboSlim = document.querySelector('#navbarComboSlim');
    const dualNav = document.querySelector('#dualNav');
    const documentElement = document.documentElement;
    const navbarVertical = document.querySelector('.navbar-vertical');

    // Lógica para configurar la navegación según la configuración
    if (navbarPosition === 'dual-nav') {
      topNavSlim?.remove();
      navbarTop?.remove();
      navbarTopSlim?.remove();
      navbarCombo?.remove();
      navbarComboSlim?.remove();
      navbarDefault?.remove();
      navbarVertical?.remove();
      dualNav?.removeAttribute('style');
      documentElement.setAttribute('data-navigation-type', 'dual');

    } else if (navbarTopShape === 'slim' && navbarPosition === 'vertical') {
      navbarDefault?.remove();
      navbarTop?.remove();
      navbarTopSlim?.remove();
      navbarCombo?.remove();
      navbarComboSlim?.remove();
      topNavSlim?.removeAttribute('style');
      navbarVertical?.removeAttribute('style');
      documentElement.setAttribute('data-navbar-horizontal-shape', 'slim');

    } else if (navbarTopShape === 'slim' && navbarPosition === 'horizontal') {
      navbarDefault?.remove();
      navbarVertical?.remove();
      navbarTop?.remove();
      topNavSlim?.remove();
      navbarCombo?.remove();
      navbarComboSlim?.remove();
      dualNav?.remove();
      navbarTopSlim?.removeAttribute('style');
      documentElement.setAttribute('data-navbar-horizontal-shape', 'slim');

    } else if (navbarTopShape === 'slim' && navbarPosition === 'combo') {
      navbarDefault?.remove();
      navbarTop?.remove();
      topNavSlim?.remove();
      navbarCombo?.remove();
      navbarTopSlim?.remove();
      dualNav?.remove();
      navbarComboSlim?.removeAttribute('style');
      navbarVertical?.removeAttribute('style');
      documentElement.setAttribute('data-navbar-horizontal-shape', 'slim');

    } else if (navbarTopShape === 'default' && navbarPosition === 'horizontal') {
      navbarDefault?.remove();
      topNavSlim?.remove();
      navbarVertical?.remove();
      navbarTopSlim?.remove();
      navbarCombo?.remove();
      navbarComboSlim?.remove();
      dualNav?.remove();
      navbarTop?.removeAttribute('style');
      documentElement.setAttribute('data-navigation-type', 'horizontal');

    } else if (navbarTopShape === 'default' && navbarPosition === 'combo') {
      topNavSlim?.remove();
      navbarTop?.remove();
      navbarTopSlim?.remove();
      navbarDefault?.remove();
      navbarComboSlim?.remove();
      dualNav?.remove();
      navbarCombo?.removeAttribute('style');
      navbarVertical?.removeAttribute('style');
      documentElement.setAttribute('data-navigation-type', 'combo');

    } else {
      topNavSlim?.remove();
      navbarTop?.remove();
      navbarTopSlim?.remove();
      navbarCombo?.remove();
      navbarComboSlim?.remove();
      dualNav?.remove();
      navbarDefault?.removeAttribute('style');
      navbarVertical?.removeAttribute('style');
    }

    // Configuración de apariencia del navbar superior
    const navbarTopElement = document.querySelector('.navbar-top');
    if (navbarTopStyle === 'darker' && navbarTopElement) {
      navbarTopElement.setAttribute('data-navbar-appearance', 'darker');
    }

    // Configuración de apariencia del navbar vertical
    if (navbarVerticalStyle === 'darker' && navbarVertical) {
      navbarVertical.setAttribute('data-navbar-appearance', 'darker');
    }
  }
  ngAfterViewInit(): void {
    // Asegúrate de que window.config esté definido
    this.initDOM();
    this.PageLoaded = true

  }
  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
