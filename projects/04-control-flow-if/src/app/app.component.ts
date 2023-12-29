import { Component } from '@angular/core';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="card">
      <h1 class="card-title">Frontend Masters Express</h1>
      <p class="card-number">0000 0000 0000 0000</p>
      <section class="membership-info">
        <p>
          @if (account.name) {
          <!-- name -->
          {{ account.name }}
          } @else {
          <!-- name -->
          {{ '' }}
          }
        </p>
        <p>
          @if(account.validThru) {
          <!-- valid thru -->
          Valid Thru: {{ account.validThru }}
          } @else {
          <!-- valid thru -->
          Valid Thru: {{ '' }}
          }
        </p>
        <p>
          @if(account.CVV) {
          <!-- CVV -->
          CVV: {{ account.CVV }}
          } @else {
          <!-- CVV -->
          CVV: {{ '' }} }
        </p>
        <p>
          <!-- membership status -->
          @if(account.membershipStatus === 'gold') {
          <span class="badge gold">Gold</span>
          } @else if(account.membershipStatus === 'platinum') {
          <span class="badge platinum">Platinum</span>
          } @else {
          <span class="badge silver">Silver</span>
          }
        </p>
      </section>
    </article>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    membershipStatus: 'gold',
    validThru: '12/2022',
    CVV: '123',
  };
}
