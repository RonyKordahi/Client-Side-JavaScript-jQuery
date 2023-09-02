// 1. Grab the form
const $form = $("form");

// 2. Add event listener on the form
$form.on("submit", (event) => {
    // Prevent default behavior
    event.preventDefault();

    // 3. Grab the input
    const $input = $("#new-todo");
    
    // 4. target the ul
    const $ul = $("ul");

    // 5. Create the li
    const $li = `<li>${$input.val()}</li>`

    // 6. Append the li to the ul
    $ul.append($li);

    // 7. Erase the value of the input
    $input.val("");
})