// src/app/app.module.ts
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule, Output, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CardComponent } from './components/card/card.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';

@NgModule({
  declarations: [
    TopicListComponent,
    CardComponent, 
    CardPageComponent, 
    QuestionListComponent, 
    MatIconModule,
    AddQuestionComponent,
    FormsModule,
    ViewChild,
    CommonModule,
    NgModel,
    Output,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewChild
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
