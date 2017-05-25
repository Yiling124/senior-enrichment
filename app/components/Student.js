import React from 'react';

const Student = (props) => {
	const student = props.student;

    return (
        <div>
            <div>{student.name} </div>
            <div>{student.phone}</div>
            <div>{student.email}</div>
        </div>
    );
}

export default Student
