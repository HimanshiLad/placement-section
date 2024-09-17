import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DataService } from '../../data.service';
import { AddCompanyFormComponent } from '../addCompanyForm/addCompanyForm.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CardComponent, MatIconModule, RouterModule, AddCompanyFormComponent, CommonModule],
  providers:[DataService],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  constructor(private dataService: DataService) {}

  companies: any[]=[];

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList(): void {

    this.dataService.getCompanyList().subscribe({
      next: (data) => {
        this.companies = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error); // Log any errors
      },
    });
  }

  @ViewChild(AddCompanyFormComponent) addCompanyFormComponent!: AddCompanyFormComponent;
  public callChildMethod(): void {
    this.addCompanyFormComponent.openForm();
  }

  
}

