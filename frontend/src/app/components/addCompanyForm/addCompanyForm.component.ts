import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addCompanyForm',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addCompanyForm.component.html',
  styleUrl: './addCompanyForm.component.css'
})
export class AddCompanyFormComponent {
  isVisible = false;

  @Output() formClosed = new EventEmitter<void>();

  openForm() {
    this.isVisible = true;
  }

  closeForm() {
    this.isVisible = false;
    this.formClosed.emit(); // Optional: Emit an event when the form is closed
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
    this.closeForm(); // Close form after submission
  }

}

