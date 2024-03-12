/* console.log("script executing")

const link = document.getElementById('link')

link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank')

const h1 = document.getElementById('header')
const h2 = document.getElementById('header-2')

header.innerHTML = "<u>hello</u>"
header2.textContent = "Hello 2" */

// const student = [
//     {
//         name: "Juan",
//         gender: "M",
//         course: "BS-IT"
//     },
//     {
//         name: "Sophia",
//         gender: "F",
//         course: "BS-CS"
//     },
//     {
//         name: "Clark",
//         gender: "M",
//         course: "BS-IS"
//     },
// ]
const studentTable = document.getElementById('student-table').querySelector('tbody')

function generateRows(table, rows){
    //imaging rows are students
    // Imagine table is a studentTable
    for (let row of rows){
        const r = table.insertRow()

        /* const colName = r.insertCell() // Empty <td>
        const colGender = r.insertCell()
        const colCourse = r.insertCell()

        colName.textContent = row.name
        colGender.textContent = row.gender
        colCourse.textContent = row.course

        console.log(row) */

        for(let field in row){
            const col = r.insertCell()
            col.textContent = row[field]
        }
    
    }
    for(let i = 0; i < rows.length; i++)
    console.log(rows[i])
    
}

generateRows(studentTable, student)


function addStudent(){
    const form = document.forms['student-form']

    const student = {
        name: form['name'].value,
        gender: form['gender'].value,
        course: form['course'].value

    }

    if(!student.name){
        alert('Please Input Name')
        return
    }
    const r = studentTable.insertRow()

    for (let field in student){
        const col = r.insertCell()
        col.textContent = student[field]
    }
}