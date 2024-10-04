import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

export interface question{
  question: string;
  topicId: number;
  }

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit{
  Question: question[] = [];
  topicId: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

 ngOnInit(): void {
     this.topicId = this.route.snapshot.params['topicId'];
     this.fetchQuestions(this.topicId)
 } 
  fetchQuestions(topicId: number): void {
    this.dataService.getQuestionsByTopicId(topicId).subscribe((Question:question[]) => {
      this.Question = Question;
  });
  }

}