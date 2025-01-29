function generateInputs() {
    let numSubjects = document.getElementById('numSubjects').value;
    let marksSection = document.getElementById('marksSection');
    marksSection.innerHTML = "";

    for (let i = 0; i < numSubjects; i++) {
        marksSection.innerHTML += `<label>Subject ${i + 1} Name:</label> 
                                   <input type="text" id="subject${i}"><br>
                                   <label>Marks:</label> 
                                   <input type="number" id="marks${i}" min="0" max="100"><br>`;
    }

    document.getElementById('calculateBtn').style.display = 'block';
}

function calculateGrades() {
    let numSubjects = document.getElementById('numSubjects').value;
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h3>Results:</h3>";

    for (let i = 0; i < numSubjects; i++) {
        let subjectName = document.getElementById(`subject${i}`).value;
        let marks = document.getElementById(`marks${i}`).value;
        let grade = "";

        if (marks >= 90) {
            grade = "A+";
        } else if (marks >= 80) {
            grade = "A";
        } else if (marks >= 70) {
            grade = "B";
        } else if (marks >= 60) {
            grade = "C";
        } else if (marks >= 50) {
            grade = "D";
        } else {
            grade = "F (Fail)";
        }

        resultDiv.innerHTML += `<p>${subjectName}: ${grade}</p>`;
    }

    document.getElementById('downloadBtn').style.display = 'block';
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    let numSubjects = document.getElementById('numSubjects').value;

    doc.text("Grade Report", 80, 10);
    doc.text("====================================", 20, 20);

    for (let i = 0; i < numSubjects; i++) {
        let subjectName = document.getElementById(`subject${i}`).value;
        let marks = document.getElementById(`marks${i}`).value;
        let grade = "";

        if (marks >= 90) {
            grade = "A+";
        } else if (marks >= 80) {
            grade = "A";
        } else if (marks >= 70) {
            grade = "B";
        } else if (marks >= 60) {
            grade = "C";
        } else if (marks >= 50) {
            grade = "D";
        } else {
            grade = "F (Fail)";
        }

        doc.text(`${subjectName}: ${grade}`, 20, 30 + i * 10);
    }

    doc.save("Grade_Report.pdf");
}
