import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

interface company {
  id: number;
  name: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})



export class CardComponent {
  @Input() company!: company; // Define an Input property to receive data

constructor(private router: Router, private dataService: DataService) {}

  navigateToTopicList(): void {
    this.router.navigate(['/topic-list']);
  }
  // data : {name: string}
  // ngOnInit(): void {
  //   this.data = this.dataService.getTopicList();
  // }

  
}