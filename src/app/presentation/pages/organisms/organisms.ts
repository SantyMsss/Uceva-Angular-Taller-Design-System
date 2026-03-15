import { Component } from '@angular/core';
import { ContainerAtom, NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, ContainerAtom],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  };

  navbarCompactConfig: NavbarConfig = {
    title: 'Showcase Organismo',
    iconConfig: {
      icon: 'diagram-3-fill',
      size: 1.5,
    },
    navLinks: [
      { text: 'Inicio', url: '/atoms' },
      { text: 'Componentes', url: '/molecules' },
    ],
  };
}
