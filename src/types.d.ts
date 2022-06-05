interface Pomodoro {
    workTime: number,
    shortBreakTime: number,
    numberOfPomodoros: number,
    longBreakTime: number,
};

interface Task {
    description: string,
    completed: boolean,
    id: number
}


type AddPomodoro = (pomodoroInfo: Pomodoro) => void;
type ToggleTask = (selectedTask: Task) => void;
type AddTask = (taskInfo: task) => void;
type RemoveTask = (selectedTask: Task) => void;
type UpdateTask = (selectedtask: Task, updatedTask: Task) => void;
type ToggleShowAbout = () => void;
type ToggleShowSettings = () => void;
type UpdateBgColor = (newBgColor: string) => void;