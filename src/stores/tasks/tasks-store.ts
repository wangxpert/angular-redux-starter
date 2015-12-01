import {TASK_ACTIONS} from '../../actions/action-constants';
import {Task} from '../../services';
import * as Rx from 'rx';

export class TasksStore {
  
  tasks: Rx.ReplaySubject<Task[]>;
  error: Rx.ReplaySubject<any>;

  static $inject = [
    'dispatcher'
  ];

  constructor(private dispatcher: Rx.Subject<any>) {
    
    this.tasks = new Rx.ReplaySubject<Task[]>(1);
    this.error = new Rx.ReplaySubject(1);
    
    this.registerActionHandlers();
  }
  
  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE)
        .subscribe(action => this.tasks.onNext(action.tasks));
      
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE_ERROR)
        .subscribe(action => this.error.onNext({
          type: action.actionType, 
          error: action.error 
        }));
  }

  getTaskById(id) {
    return this.tasks
      .map(tasks => tasks.find(task => task._id === id));
  }
}
