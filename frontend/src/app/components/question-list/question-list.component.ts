import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit{
  data: any[] = [];
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.data = this.dataService.getQuestionList();
  }

}
