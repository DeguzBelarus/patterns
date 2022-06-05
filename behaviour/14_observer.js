// формирует зависимости одного объекта ко многим
// другие подписанные объекты получают изменения
// называется диспатчер или лисенер

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (currentObserver) => currentObserver !== observer
    );
  }

  fire(action) {
    this.observers.forEach((observer) => {
      observer.update(action);
    });
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case "INCREMENT":
        this.state = ++this.state;
        break;

      case "DECREMENT":
        this.state = --this.state;
        break;

      case "ADD":
        this.state += action.payload;
        break;

      default:
        this.state = this.initialState;
        break;
    }
  }
}

const stream$ = new Subject();

const observer1 = new Observer();
const observer2 = new Observer(42);

stream$.subscribe(observer1);
stream$.subscribe(observer2);

stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "ADD", payload: 5 });

console.log(observer1.state);
console.log(observer2.state);
