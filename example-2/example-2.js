// 1. Detect that the form is submitted
const form = document.querySelector("form");

// Add an event listener on the form
form.addEventListener("submit", (event) => {
    // Disable default behavior of the event
    event.preventDefault();

    // 2. Grab the input value that was submitted
    const input = document.querySelector("#new-todo");

    // ALTERNATIVE:
    // const input = document.getElementById("new-todo");

    // 3. Target the ul
    const ul = document.querySelector("ul");

    // 4. Create a new todo with that value
        // a) Create an li
        // b) Add the input's value to the li
        // c) Append the li to the ul
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);

    // 5. Erase the value of the input
    input.value = "";
})



