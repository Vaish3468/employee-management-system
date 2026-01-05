const API = "http://localhost:8080/api/employees";
const role = localStorage.getItem("role");

if (!role) {
    window.location.href = "login.html";
}

if (role === "USER") {
    document.getElementById("addBtn").style.display = "none";
}

let modal = new bootstrap.Modal(document.getElementById("empModal"));

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function loadEmployees() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.forEach(emp => {
                rows += `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.department}</td>
                        <td>${emp.email}</td>
                        <td>${emp.phone}</td>
                        <td>${emp.hireDate}</td>
                        <td>
                            ${role === "ADMIN" ? `
                            <button class="btn btn-sm btn-warning" onclick="editEmployee(${emp.id},'${emp.name}','${emp.department}','${emp.email}','${emp.phone}','${emp.hireDate}')">Edit</button>
                            <button class="btn btn-sm btn-danger" onclick="deleteEmployee(${emp.id})">Delete</button>` : ""}
                        </td>
                    </tr>`;
            });
            document.getElementById("employeeTable").innerHTML = rows;
        });
}

function openAdd() {
    document.getElementById("modalTitle").innerText = "Add Employee";
    document.getElementById("empId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("hireDate").value = "";
    modal.show();
}

function editEmployee(id, name, dept, email, phone, date) {
    document.getElementById("modalTitle").innerText = "Edit Employee";
    document.getElementById("empId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("department").value = dept;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    document.getElementById("hireDate").value = date;
    modal.show();
}

function saveEmployee() {
    const emp = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        hireDate: document.getElementById("hireDate").value
    };

    const id = document.getElementById("empId").value;

    if (id) {
        fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(emp)
        }).then(() => {
            modal.hide();
            loadEmployees();
        });
    } else {
        fetch(API, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(emp)
        }).then(() => {
            modal.hide();
            loadEmployees();
        });
    }
}

function deleteEmployee(id) {
    if (confirm("Delete employee?")) {
        fetch(`${API}/${id}`, {method: "DELETE"})
            .then(() => loadEmployees());
    }
}

loadEmployees();
