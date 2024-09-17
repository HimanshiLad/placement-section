import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CardComponent } from './components/card/card.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';

// @NgModule({
//   declarations: [TopicListComponent, AddQuestionComponent, CardComponent,CardPageComponent,AddCompanyFormComponent, QuestionListComponent ],
//   imports: [CommonModule, RouterModule, Component, DataService, FormsModule],  // Add necessary modules here
//   providers: [provideHttpClient()],
//   exports: [AppComponent]
// })
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CardComponent, TopicListComponent, CardPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title= 'placement_section'
}