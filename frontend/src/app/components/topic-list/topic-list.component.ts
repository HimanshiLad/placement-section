import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AddQuestionComponent } from '../addQuestion/addQuestion.component';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, AddQuestionComponent],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})


export class TopicListComponent implements OnInit {
  data: any[] = [];
  topics: any;
  company: number=1;

  constructor(private router: Router, private dataService: DataService) {}
  navigateToQuestionList(): void {
    this.router.navigate(['/question-list']);
  }
  ngOnInit(): void {
    this.getTopicList(this.company);
  }

  getTopicList(company: number): void {

    //company: number = 1;
    this.dataService.getTopicList(company).subscribe({
      next: (data) => {
        this.topics = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error); // Log any errors
      },
    });
  }

  @ViewChild(AddQuestionComponent) addQuestionComponent!: AddQuestionComponent;
  public callChildMethod(): void {
    this.addQuestionComponent.openForm();
  }
}