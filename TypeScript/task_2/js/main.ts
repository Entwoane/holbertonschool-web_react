interface DirectorInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeBreak(): string {
    return 'Getting coffe break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeBreak(): string {
    return 'Cannot have a break';
  }
  workDirectorTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
