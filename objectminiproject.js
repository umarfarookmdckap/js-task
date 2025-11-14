
let students = [];


function addStudent(id, name, age, grade, course) {

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return "Error: A student with this ID already exists.";
        }
    }


    let student = {
        id: id,
        name: name,
        age: age,
        grade: grade,
        course: course
    };


    students.push(student);

    return "Student added: " + name;
}


function viewStudents() {
    if (students.length === 0) {
        return "No students found.";
    }

    let result = "Student List:\n";

    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        result += s.id + ". " + s.name + " - " + s.course + " (" + s.grade + ")\n";
    }

    return result;
}


function updateStudent(id, newGrade, newCourse) {

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {

            if (newGrade !== "") {
                students[i].grade = newGrade;
            }

            if (newCourse !== "") {
                students[i].course = newCourse;
            }

            return "Student with ID " + id + " updated.";
        }
    }

    return "Error: Student not found.";
}

function deleteStudent(id) {

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            let removed = students.splice(i, 1);
            return "Deleted student: " + removed[0].name;
        }
    }

    return "Error: Student not found.";
}


function searchStudent(id) {

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return "Student Found:\n" + JSON.stringify(students[i], null, 2);
        }
    }

    return "Error: Student not found.";
}





function menu() {
    while (true) {

        let choice = prompt(
            "Student Management System\n\n" +
            "1. Add Student\n" +
            "2. View All Students\n" +
            "3. Update Student\n" +
            "4. Delete Student\n" +
            "5. Search Student\n" +
            "6. Exit\n\n" +
            "Enter your choice:"
        );

        if (choice === null) {
            break; 
        }

        switch (choice) {
            case "1":
                let id = parseInt(prompt("Enter student ID:"));
                let name = prompt("Enter name:");
                let age = parseInt(prompt("Enter age:"));
                let grade = prompt("Enter grade:");
                let course = prompt("Enter course:");
                alert(addStudent(id, name, age, grade, course));
                break;

            case "2":
                alert(viewStudents());
                break;

            case "3":
                let uid = parseInt(prompt("Enter ID to update:"));
                let newGrade = prompt("Enter new grade (leave empty to skip):");
                let newCourse = prompt("Enter new course (leave empty to skip):");
                alert(updateStudent(uid, newGrade, newCourse));
                break;

            case "4":
                let did = parseInt(prompt("Enter ID to delete:"));
                alert(deleteStudent(did));
                break;

            case "5":
                let sid = parseInt(prompt("Enter ID to search:"));
                alert(searchStudent(sid));
                break;

            case "6":
                alert("Exiting program...");
                return;

            default:
                alert("Invalid choice. Please enter 1–6.");
        }
    }
}

menu();
