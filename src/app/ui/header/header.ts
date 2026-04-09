import { Component } from '@angular/core';
import { ButtonModule, Button } from 'primeng/button';
import { NgStyle } from '@angular/common';
 
@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  template: `
    <header class="head">
      <p-button size="large" icon="pi pi-user" variant="text" severity="contrast" />

      <p-button size="large" icon="pi pi-chart-bar" variant="text" severity="contrast" />

      <h1>Wordle</h1>

      <p-button size="large" icon="pi pi-users" variant="text" severity="contrast" />

      <p-button size="large" icon="pi pi-cog" variant="text" severity="contrast" />
    </header>
  `,
  styleUrl: './header.scss',
})
export class Header {}