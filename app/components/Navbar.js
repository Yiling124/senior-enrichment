import React from 'react';

const Navbar = (props) => {
    const unselectCampus = props.unselectCampus;
    const selectAllStudents = props.selectAllStudents;

    return (
        <div>

            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <h3>Margaret</h3>
                </div>
                <ul className="nav navbar-nav">
                    <li ><a href="#" onClick={unselectCampus}>Home</a></li>
                    <li><a href="#" onClick={selectAllStudents}>Students</a></li>
                    <li><a href="#" onClick={unselectCampus}>Campuses</a></li>
                </ul>
            </div>
            </nav>


        </div>
    );
}

export default Navbar

