import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { TopicListComponent } from '../topic-list/topic-list.component';

interface company {
  id : number;
  name: string;
  category: string;
  description: string;
}
interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TopicListComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  companyId: number | null = null;
  topics: Topic[]= [];

  @Input() company!: company;

  // @Output() companySelected = new EventEmitter<number>();

  constructor(private router: Router, private dataService: DataService) {}

  internshipClick() {
    this.companyId = this.company.id;
    this.router.navigate(['/topic-list', this.companyId]);
}
  placementClick(){
    this.companyId = this.company.id;
    this.router.navigate(['/PlacementTopic-list', this.companyId]);
}
}
