export interface Task {
  id: string;
  description: string;
  done: boolean;
  created: number;
}

export interface TaskList {
  tasks: Task[];
  onChecked: (task: Task) => void;
}
