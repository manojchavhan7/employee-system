let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = parseInt(document.getElementById('age').value);

    if (name === '' || profession === '' || isNaN(age)) {
        showError('All fields are required!');
        return;
    }

    const id = employees.length + 1;
    employees.push({ id, name, profession, age });

    showSuccess('Employee added successfully!');
    displayEmployees();
    clearForm();
}

function displayEmployees() {
    const employeesList = document.getElementById('employeesList');
    employeesList.innerHTML = '';

    employees.forEach(employee => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>ID: ${employee.id}</p>
            <p>Name: ${employee.name}</p>
            <p>Profession: ${employee.profession}</p>
            <p>Age: ${employee.age}</p>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeesList.appendChild(div);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function showError(message) {
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}

function showSuccess(message) {
    const successDiv = document.getElementById('successDiv');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}