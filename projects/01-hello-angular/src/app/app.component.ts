import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  // decorator
  selector: 'app-root', // tag name
  standalone: true, // no parent component
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
  `,
  styles: ``,
})
export class AppComponent {}
