// class

class User {
  constructor({ name, lastName, email, password }) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log("Hello!");
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("not the same.");
    }
  }
}

const useUser = new User({
  name: "Name",
  lastName: "Kim",
  email: "name@naver.com",
  password: "0000",
});
console.log(useUser);

// super

class Admin extends User {
  constructor({ name, lastName, email, password, superAdmin, isActive }) {
    super({ name, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Delete");
  }
}

const useAdmin = new Admin(
  {
    name: "dmin",
    lastName: "A",
    email: "admin@gmail.com",
    password: "0000",
    superAdmin: true,
    isActive: true,
  },
  true
);
console.log(useAdmin);

class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusbtn = document.getElementById(plusId);
    this.minusbtn = document.getElementById(minusId);
    this.addEventListners();
  }
  addEventListners = () => {
    this.plusbtn.addEventListener("click", this.increase);
    this.minusbtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count += 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count -= 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
