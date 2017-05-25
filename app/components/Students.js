import React from 'react';


const Students = (props) => {
	const students = props.students;
    const selectStudent = props.selectStudent;
    const deleteStudent = props.deleteStudent;

    return (
        <div>
            <div>
                <button data-action="add" className="btn btn-primary btn-circle pull-right">+</button>
            </div>

            {
            students.map((student, idx) => {
			    return (
                    <div >
                        <div className="col-xs-4" key = {student.id}>
                            <a href="#" onClick = {() => selectStudent(student)} >
                                {student.name}
                            </a>
                        </div>
                        <button onClick={deleteStudent} className="btn btn-xs btn-danger remove   btn-circle">x</button>
                    </div>
                )

            })
        }
        </div>
    );

}

export default Students
