//input elements REQUIRED
const inputElements = document.querySelectorAll('input');
inputElements.forEach(input => {
    input.setAttribute('required', 'true');
});

//Email Input
//pattern=".+@canada\.ca"
const emailPattern = document.getElementById('email');
emailPattern.setAttribute('pattern', '.+@canada\\.ca');

//Employee Information
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting form data
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const hireDate = document.getElementById('hire_date').value;
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];

    if (photoFile) {

        // Photo Reader
        const photoReader = new FileReader();
        photoReader.onload = function(event) {
            const photoUrl = event.target.result;

            // Table
            const tableBody = document.getElementById('employeeList');

            // New Row
            const newRow = document.createElement('tr');

            // Cells in Rows
            // Photo
            const photoC = document.createElement('td');
            const photoElement = document.createElement('img');
            photoElement.src = photoUrl;
            photoElement.style.maxWidth = '90px';
            photoC.appendChild(photoElement);
            newRow.appendChild(photoC);

            // First Name
            const firstNameC = document.createElement('td');
            firstNameC.textContent = firstName;
            newRow.appendChild(firstNameC);

            // Last Name
            const lastNameC = document.createElement('td');
            lastNameC.textContent = lastName;
            newRow.appendChild(lastNameC);

            // Email
            const emailC = document.createElement('td');
            emailC.textContent = email;
            newRow.appendChild(emailC);

            // Hire Date
            const hireDateC = document.createElement('td');
            hireDateC.textContent = hireDate;
            newRow.appendChild(hireDateC);

            // Actions
            const actionsC = document.createElement('td');
            //Delete Button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            actionsC.appendChild(deleteButton);

            //Delete Button Action
            deleteButton.addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this employee?')) {
                    // Delete Row
                    const row = deleteButton.closest('tr'); //Row in which the button is located
                    row.remove();
                } else {
                    console.log('Deletion cancelled');
                }
                
            });

            newRow.appendChild(actionsC);

            // New Row to Table
            tableBody.appendChild(newRow);

            // Clear inputs
            document.querySelector('form').reset();
        };

       // Reading Image
        photoReader.readAsDataURL(photoFile);
    } 
});

