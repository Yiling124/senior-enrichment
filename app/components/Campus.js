import React from 'react';

const Campuses = (props) => {
	const campus = props.campus;
    const students = props.students;

    return (
        <div>
            <div>{campus.name} Campus</div>
            <div>{campus.address}</div>

            <students students={students}/>
        </div>
    );
}

export default Campuses


