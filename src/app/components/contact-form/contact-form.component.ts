import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],  // <- aquí

})
export class ContactFormComponent {

}
