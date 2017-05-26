import React from 'react';

const Student = (props) => {
	const student = props.student;

    return (
        <div>
            <div>Student Name: {student.name} </div>
            <div>Student Phone: {student.phone}</div>
            <div>Student Email: {student.email}</div>
            <div>Campus: {student.campus}</div>
        </div>
    );
}

export default Student
