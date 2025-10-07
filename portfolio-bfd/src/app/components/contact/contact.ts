import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  onSubmit() {
    alert(`Obrigado, ${this.name}! Sua mensagem foi enviada.`);
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }
}
