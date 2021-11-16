// Genenrators

function* listPeople() {
  yield "Dal";
  yield "Flynn";
  yield "Mark";
  yield "Godkimchi";
  yield "Japan Guy";
}
const listG = listPeople();
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());

const friends = ["Dal", "Flynn", "Mark", "Godkimchi", "Japan Guy"];

function* friendTeller() {
  for (const friend of friends) {
    yield friend;
  }
}

const friendLooper = friendTeller();
console.log(friendLooper.next());
console.log(friendLooper.next());
console.log(friendLooper.next());
console.log(friendLooper.next());
console.log(friendLooper.next());
console.log(friendLooper.next());
console.log(friendLooper.next());
console.log(friendLooper.next());
