// позволяет выстраивать тесную коммуникацию между объектами разного типа
class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }
  recieve(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.recieve(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].recieve(message, from);
        }
      });
    }
  }
}

const deguz = new User("Deguz");
const petya = new User("Petya");
const vasya = new User("Vasya");

const room = new ChatRoom();
room.register(deguz);
room.register(petya);
room.register(vasya);

deguz.send("Hello", petya);
vasya.send("Hi", deguz);
petya.send("Hello everyone");

console.log(room.users);
