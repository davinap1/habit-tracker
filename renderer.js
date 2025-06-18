document.addEventListener('DOMContentLoaded', () => {
    const habitTable = document.getElementById("habitTable");
    const tableHeader = document.getElementById("tableHeaderRow");
    const tableBody = habitTable.querySelector("tbody");

    const blankTh  = document.createElement("th");
    blankTh.textContent= "";
    tableHeader.appendChild(blankTh);
    for (let i = 1; i <= 31; ++i) {
        const th = document.createElement("th");
        th.textContent = i;
        tableHeader.appendChild(th);
    }

    const habitRow = document.createElement("tr");
    const habitCell = document.createElement("td");
    habitCell.contentEditable = true;
    habitCell.textContent = "Exercise";
    habitRow.appendChild(habitCell);

    for (let i = 1; i <= 31; ++i) {
        const td = document.createElement("td");
        const button = document.createElement("button");
        button.textContent = "✓";
        button.classList.add("check");
        td.appendChild(button);
        habitRow.appendChild(td);
    }

    tableBody.appendChild(habitRow);

    habitTable.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("check")) {
            e.target.classList.toggle("done");
            e.target.textContent = e.target.classList.contains("done") ? '✓' : '';
        }
    });
});