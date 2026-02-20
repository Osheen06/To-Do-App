let arr = [];

let user = prompt("Enter what you want to do (list, add, delete, quit): ");

while(user != "quit") {

    // LIST TASKS
    if(user == "list") {

        if(arr.length == 0) {
            console.log("Oops! There is nothing to do :/");
        } else {
            console.log("Your tasks:");
            for(let i = 0; i < arr.length; i++){
                console.log(i + 1, arr[i]);
            }
        }

    }

    // ADD TASK
    else if(user == "add") {

        let ans = prompt("Enter task to add:");
        arr.push(ans);
        console.log("Task added!");

    }

    // DELETE TASK
    else if(user == "delete") {

        if(arr.length == 0) {
            console.log("No tasks to delete.");
        } else {

            for(let i = 0; i < arr.length; i++){
                console.log(i + 1, arr[i]);
            }

            let idx = prompt("Enter position number of task to delete:");

            if(idx >= 1 && idx <= arr.length) {
                arr.splice(idx - 1, 1);
                console.log("Task deleted.");
            } else {
                console.log("Invalid position.");
            }

        }

    }

    user = prompt("Enter what you want to do (list, add, delete, quit): ");
}

console.log("Okay bye! See you soon.");
