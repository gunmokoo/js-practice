// Object Destructuring

const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
    light: "white",
  },
};

const { notifications: { follow = false } = {}, color } = settings;

console.log(follow);
console.log(color);

// Array Destructuring

const days = ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu = "Thu"] = days;
console.log(mon, tue, wed, thu);

// Skipping

const [, , wednesDay] = days;
console.log(wednesDay);

// Renaming

const {
  color: { theme: dark = "dark" },
} = settings;
console.log(dark);

let white;
({
  color: { light: white },
} = settings);
console.log(white);

// Function Destructuring

function saveSettings({ follow, alert, color = "blue" }) {
  console.log(color);
}
saveSettings({
  follow: true,
  alert: true,
  mkt: true,
  color: "green",
});

// Swapping

let one = "two";
let two = "one";

[two, one] = [one, two];

console.log(one, two);
