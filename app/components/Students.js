import React from 'react';
import AddStudent from './AddStudent';

const Students = (props) => {
    const students = props.students
    const campuses = props.campuses
    const selectStudent = props.selectStudent
    const deleteStudent = props.deleteStudent
    const addstudentPageSwitch = props.addstudentPageSwitch
    const addstudentPage = props.addstudentPage


    if (!addstudentPageSwitch){
    return (
        <div>
            <button onClick={addstudentPage}  data-action="add" className="btn btn-primary btn-circle pull-right">+</button>
                <div>{
                    students.map((student, idx) => {
                        return (
                            <div>
                                <div className="col-xs-4" key = {student.id}>
                                    <a href="#" onClick = {() => selectStudent(student)} >
                                        {student.name}
                                    </a>
                                </div>
                                <button onClick={deleteStudent} className="btn btn-xs btn-danger remove   btn-circle"> x </button>
                            </div>
                        )
                    })
                }</div>
        } </div>
    )}
    else {

        return (
        <div>
            <AddStudent campuses = {campuses}/>
        </div>
        )
    }
}

export default Students
