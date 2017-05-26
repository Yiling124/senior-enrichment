import React from 'react';
import AddStudent from './AddStudent';

const Students = (props) => {
    const students = props.students
    const campuses = props.campuses
    const selectStudent = props.selectStudent
    const deleteStudent = props.deleteStudent
    const addstudentPageSwitch = props.addstudentPageSwitch
    const addstudentPage = props.addstudentPage
    const handleSubmit = props.handleSubmit
    const handleNameChange = props.handleNameChange
    const handleEmailChange = props.handleEmailChange
    const handlePhoneChange = props.handlePhoneChange
    const handleCampusChange = props.handleCampusChange
    const nameInputValue = props.nameInputValue
    const emailInputValue = props.emailInputValue
    const campusInputValue = props.campusInputValue
    const phoneInputValue = props.phoneInputValue



    if (addstudentPageSwitch === false){
    return (
        <div>
            <button onClick={addstudentPage}  data-action="add" className="btn btn-primary btn-circle pull-right">+</button>
                <div>{
                    students.map((student) => {
                        let campusId = student.campusId;

                        return (
                            <div>
                                <a href="#" onClick = {() => selectStudent(student.id)} >
                                    {student.name}   {}
                                </a>
                                <button onClick={()=> deleteStudent(student.id)} className="btn btn-xs btn-danger remove   btn-circle"> x </button>
                            </div>
                        )
                    })
                }</div>
        </div>
    )}
    else if(addstudentPageSwitch === true) {
        return (
        <div>
            <AddStudent
            campuses = {campuses}
            handleSubmit = {handleSubmit}
            handleNameChange = {handleNameChange}
            handlePhoneChange = {handlePhoneChange}
            handleEmailChange = {handleEmailChange}
            handleCampusChange = {handleCampusChange}
            nameInputValue = {nameInputValue}
            emailInputValue = {emailInputValue}
            campusInputValue = {campusInputValue}
            phoneInputValue = {phoneInputValue}
            />
        </div>
        )
    }
}

export default Students


