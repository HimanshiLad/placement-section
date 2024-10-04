import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}

@Component({
  selector: 'app-addQuestion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addQuestion.component.html',
  styleUrl: './addQuestion.component.css'
})

export class AddQuestionComponent {
  isVisible = false;
  topicList: Topic[]=[];
  category: string='';
  companyId: number=0;
  selectedOption = '';
  showOtherInput = false;
  otherOption = '';
  question='';
  selectedCategory: string ='';
  constructor(private route: ActivatedRoute, private dataService: DataService,) {}

  @Output() formClosed = new EventEmitter<void>();

  ngOnInit(){
    this.topicList = this.dataService.getTopics();
    if ((this.topicList).length){
    this.category= this.topicList[0].category;
    this.companyId= this.topicList[0].companyId;
    }
    this.openForm();
  }

  openForm() {
    this.isVisible = true;
  }

  closeForm() {
    this.isVisible = false;
    this.formClosed.emit(); // Optional: Emit an event when the form is closed
  }

  onSubmit() {
    if (this.selectedOption == '0' && this.selectedOption.trim()){
      let topic={
         name: this.otherOption,
         category: this.category,
         companyId: this.companyId,
      }
      this.dataService.addTopic(topic).subscribe(
        (response : Topic)=> {
          console.log('topic added successfully', response);
        }
      );
    }

    else {
    let Question={
      question: this.question,
      topicId: +(this.selectedOption),
    }
  
    console.log(Question);
    this.dataService.addQuestion(Question).subscribe(
      response => {
        console.log('question added successfully', response);
      }
    );
}
    this.closeForm(); // Close form after submission
    }
  onOptionChange() {
    this.showOtherInput = this.selectedOption === '0';
  }

}