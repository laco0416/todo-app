import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/module';

import { TodoFormComponent } from './todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent,
  ],
  providers: []
})
export class TodoModule { }
