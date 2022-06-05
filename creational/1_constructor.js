//== ES 5

function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function () {
  return `https://${this.ip}:80`;
};

const aws = new Server("AWS", "82.20.20.30");
console.log(aws.getUrl());

//== ES 6
class Server2 {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws2 = new Server2("AWS", "80.22.21.35");
console.log(aws2.getUrl());

// https://www.youtube.com/watch?v=YJVj4XNASDk
// 1 25 55
