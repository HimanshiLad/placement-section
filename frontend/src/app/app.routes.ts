// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyFormComponent } from './components/addCompanyForm/addCompanyForm.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';


const routes: Routes = [
  { path: '', component: CardPageComponent },
  { path: 'topic-list', component: TopicListComponent },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'addCompanyForm', component: AddCompanyFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export { routes };

