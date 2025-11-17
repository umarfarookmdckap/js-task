let students = [];

// SAVE (ADD/UPDATE)
document.getElementById("saveBtn").addEventListener("click", function () {

    let id = Number(document.getElementById("id").value);
    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let grade = document.getElementById("grade").value.trim();
    let course = document.getElementById("course").value.trim();

    if (!id || !name || !age || !grade || !course) {
        alert("All fields are required!");
        return;
    }

    // Check existing
    let existing = students.find(s => s.id === id);

    if (existing) {
        // Update
        existing.name = name;
        existing.age = age;
        existing.grade = grade;
        existing.course = course;
        alert("Student Updated!");
    } else {
        // Add new
        students.push({ id, name, age, grade, course });
        alert("Student Added!");
    }

    displayStudents();
    document.getElementById("studentForm").reset();
});

// DISPLAY STUDENT TABLE
function displayStudents() {
    let tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    students.forEach(student => {
        let row = `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>${student.course}</td>
            <td>
                <button class="action-btn update-btn" onclick="editStudent(${student.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        </tr>
        `;
        tbody.innerHTML += row;
    });
}

// EDIT STUDENT (fills form)
function editStudent(id) {
    let student = students.find(s => s.id === id);

    document.getElementById("id").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("grade").value = student.grade;
    document.getElementById("course").value = student.course;
}

// DELETE STUDENT
function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    alert("Student Deleted");
    displayStudents();
}

// CLEAR & SIMPLE SEARCH METHOD
document.getElementById("searchBtn").addEventListener("click", function () {
    
    let id = Number(document.getElementById("searchId").value);

    if (!id) {
        alert("Please enter a valid ID!");
        return;
    }

    let student = students.find(s => s.id === id);

    if (student) {
        alert(
            "Student Found:\n" +
            "ID: " + student.id + "\n" +
            "Name: " + student.name + "\n" +
            "Age: " + student.age + "\n" +
            "Grade: " + student.grade + "\n" +
            "Course: " + student.course
        );
    } else {
        alert("Student not found!");
    }

});
