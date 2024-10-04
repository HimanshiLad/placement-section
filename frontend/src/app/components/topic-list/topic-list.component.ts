import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AddQuestionComponent } from '../addQuestion/addQuestion.component';

interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, AddQuestionComponent],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})

export class TopicListComponent{

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) {}

topics: Topic[] = [];
companyId: number = 0;
categorizedTopics: {
  onlineAssessment: Topic[];
  interview: Topic[];
  writtenTest: Topic[];
} = {
  onlineAssessment: [],
  interview: [],
  writtenTest: []
};

//categories: ('onlineAssessment' | 'interview' | 'writtenTest')[] = ['onlineAssessment', 'interview', 'writtenTest'];

ngOnInit() {
  this.companyId = this.route.snapshot.params['companyId'];
  this.fetchInternshipTopics(this.companyId);
}

fetchInternshipTopics(companyId: number) {
    this.dataService.getTopicsByCompanyId(companyId).subscribe((topics:Topic[]) => {
        this.topics = topics;
        this.categorizeTopics();
    });
}

categorizeTopics() {

  this.categorizedTopics.onlineAssessment = [];
  this.categorizedTopics.interview = [];
  this.categorizedTopics.writtenTest = [];

  this.topics.forEach((topic: Topic) => {
    switch (topic.category) {
      case 'Online Assessment':
        this.categorizedTopics.onlineAssessment.push(topic);
        break;
      case 'Interview':
        this.categorizedTopics.interview.push(topic);
        break;
      case 'Written Test':
        this.categorizedTopics.writtenTest.push(topic);
        break;
    }
  });
}
  navigateToQuestionList(topicId: number): void {
    this.router.navigate(['/question-list', topicId]);
  }
  addQuestion1(){
    this.dataService.setTopics(this.categorizedTopics.onlineAssessment);
    this.router.navigate(['/addQuestion']);
  }
  addQuestion2(){
    this.dataService.setTopics(this.categorizedTopics.interview);
    this.router.navigate(['/addQuestion']);
  }
  addQuestion3(){
    this.dataService.setTopics(this.categorizedTopics.writtenTest);
    this.router.navigate(['/addQuestion']);
  }
}