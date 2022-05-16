interface Pomodoro {
    workTime: number,
    shortBreakTime: number,
    numberOfPomodoros: number,
    longBreakTime: number,
};

type addPomodoro = (pomodoroInfo: Pomodoro) => void;