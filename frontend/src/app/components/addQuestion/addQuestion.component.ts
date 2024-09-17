import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addQuestion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addQuestion.component.html',
  styleUrl: './addQuestion.component.css'
})

export class AddQuestionComponent {
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

  options = ['Option 1', 'Option 2', 'Option 3', 'Other'];
  selectedOption = '';
  showOtherInput = false;
  otherOption = '';

  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
    this.showOtherInput = this.selectedOption === 'Other';
  }
}

