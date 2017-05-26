import React from 'react';
import Students from './Students';

const Campus = (props) => {
	const campus = props.selectedCampus;
    const studentsForOneCamp = props.studentsForOneCamp;
    const StudentsAtCampus = props.StudentsAtCampus;
    const studentPage = props.studentPage;
    const selectedStudent = props.selectedStudent;
    const selectStudent = props.selectStudent;



    if (studentPage === false){
        return (
            <div>
                <h3>{campus.name} Campus</h3>
                <div>Phone Number: {campus.phone}</div>
                <div>Email: {campus.email}</div>
                <div>Address:{campus.address}</div>

                <h5>Student st {campus.name} Campus:</h5>
                <div>{
                    studentsForOneCamp.map((student) => {
                        let campusId = student.campusId;

                        return (
                            <div>
                                <div>{student.name}</div>
                            </div>
                        )
                    })
                }</div>
            </div>
        )
    }
}

export default Campus


