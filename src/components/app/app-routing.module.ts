import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemindersComponent } from '../reminders/reminders.component';

const routes: Routes = [
  { path: 'reminders', component: RemindersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
