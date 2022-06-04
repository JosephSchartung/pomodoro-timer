interface Pomodoro {
    workTime: number,
    shortBreakTime: number,
    numberOfPomodoros: number,
    longBreakTime: number,
};

interface Todo {
    description: string,
    completed: boolean,
    id: number
}


type AddPomodoro = (pomodoroInfo: Pomodoro) => void;
type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (todoInfo: Todo) => void;
type RemoveTodo = (selectedTodo: Todo) => void;
type UpdateTodo = (selectedTodo: Todo, updatedTodo: Todo) => void;
type ToggleShowAbout = () => void;
type ToggleShowSettings = () => void;