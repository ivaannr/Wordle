import { Component, Input, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  template: `
    <header class="head">
      <p-button size="large" icon="pi pi-user" variant="text" severity="contrast" />

      <p-button size="large" icon="pi pi-chart-bar" variant="text" severity="contrast" />

      <h1>Wordle</h1>

      <p-button
        size="large"
        icon="pi pi-users"
        variant="text"
        [severity]="this.isMultiplayer() ? 'danger' : 'contrast'"
        (onClick)="toggleMultiplayer($event)"
      />

      <p-button size="large" icon="pi pi-cog" variant="text" severity="contrast" />
    </header>
  `,
  styleUrl: './header.scss',
})
export class Header {
  @Input() isMultiplayer: WritableSignal<boolean> = signal(false);

  toggleMultiplayer(e: MouseEvent) {
    e.preventDefault();
    this.isMultiplayer.update((multiplayer) => !multiplayer);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
