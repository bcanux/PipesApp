import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { FloatLabel } from 'primeng/floatlabel';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] | undefined;
  constructor(private router:  Router){}

  ngOnInit() {
    this.menuItems = [
     {
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: 'basics',
          // command:()=>{this.router.navigate(['/basics'])}

        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'

          // command:()=>{this.router.navigate(['/numbers'])}
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink: 'uncommon'
          //command:()=>{this.router.navigate(['/uncommon'])}
        }
      ]

     },
     {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Custom Pipes',
          icon: 'pi pi-cog',
          routerLink: 'custom'
        }
      ]
     }
    ];
  }
}
