const prompt = require("readline-sync").question;

let students = [];

// MAIN MENU
function menu() {
    while (true) {
        let choice = prompt(
            "Choose an option:\n" +
            "1. Add/Update Student\n" +
            "2. Display Students\n" +
            "3. Search Student\n" +
            "4. Delete Student\n" +
            "5. Exit\n"
        );

        switch (choice) {
            case "1":
                saveStudentPrompt();
                break;

            case "2":
                displayStudents();
                break;

            case "3":
                let sid = Number(prompt("Enter Student ID to search: "));
                searchStudent(sid);
                break;

            case "4":
                let did = Number(prompt("Enter Student ID to delete: "));
                deleteStudent(did);
                break;

            case "5":
                console.log("Exiting...");
                return;

            default:
                console.log("Invalid option!");
        }
    }
}

// ADD/UPDATE VIA PROMPT
function saveStudentPrompt() {
    let id = Number(prompt("Enter ID: "));
    let name = prompt("Enter Name: ");
    let age = Number(prompt("Enter Age: "));
    let grade = prompt("Enter Grade: ");
    let course = prompt("Enter Course: ");

    saveStudent(id, name, age, grade, course);
}

// ADD/UPDATE
function saveStudent(id, name, age, grade, course) {
    if (!id || !name || !age || !grade || !course) {
        console.log("All fields are required!");
        return;
    }

    let existing = students.find(s => s.id === id);

    if (existing) {
        existing.name = name;
        existing.age = age;
        existing.grade = grade;
        existing.course = course;
        console.log("Student Updated!");
    } else {
        students.push({ id, name, age, grade, course });
        console.log("Student Added!");
    }
}

// DISPLAY ALL STUDENTS
function displayStudents() {
    if (students.length === 0) {
        console.log("No students to display!");
        return;
    }

    console.log("\n--- Student List ---");
    students.forEach(s => {
        console.log(
            `ID: ${s.id}, Name: ${s.name}, Age: ${s.age}, Grade: ${s.grade}, Course: ${s.course}`
        );
    });
    console.log("---------------------\n");
}

// SEARCH
function searchStudent(id) {
    let s = students.find(st => st.id === id);

    if (!s) {
        console.log("Student not found!");
        return;
    }

    console.log("\nStudent Found:");
    console.log(s);
}

// DELETE
function deleteStudent(id) {
    let before = students.length;

    students = students.filter(s => s.id !== id);

    if (students.length < before) {
        console.log("Student Deleted!");
    } else {
        console.log("No student found!");
    }
}

// START PROGRAM
menu();
