// определяет скелет будущего алгоритма и делегирует состояние в дочерние классы

class Employer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} имеет заработную плату ${this.salary}`;
  }
}

class Developer extends Employer {
  constructor(name, salary) {
    super(name, salary); // чтобы проинициализировать родительский конструктор
  }

  responsibilities() {
    return "процесс создания программ";
  }
}

class Tester extends Employer {
  constructor(name, salary) {
    super(name, salary); // чтобы проинициализировать родительский конструктор
  }

  responsibilities() {
    return "процесс тестирования программ";
  }
}

const dev = new Developer("Deguz", 120000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester("Vasya", 80000);
console.log(tester.getPaid());
console.log(tester.work());
