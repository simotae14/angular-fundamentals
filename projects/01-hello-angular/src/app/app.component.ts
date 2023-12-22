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
    <ol>
      <li>Aleph</li>
      <li>Jack frusciante è uscito dal gruppo</li>
      <li>Il cielo è sempre più blu</li>
    </ol>
  `,
  styles: `ol {
    list-style-type: upper-roman;
  }`,
})
export class AppComponent {}
