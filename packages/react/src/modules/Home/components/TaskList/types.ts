export interface Task {
  description: string;
  done: boolean;
  created: number;
}

export interface TaskList {
  tasks: Task[];
  onChecked: (task: Task) => void;
}