import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemindersComponent } from '../reminders/reminders.component';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'reminders', component: RemindersComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
