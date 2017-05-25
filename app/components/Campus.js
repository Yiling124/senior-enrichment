import React from 'react';

const Campuses = (props) => {
	const campus = props.campus;

    return (
        <div>
            <div>{campus.name} Campus</div>
            <div>{campus.address}</div>
            <div>{campus.phone}</div>
            <div>{campus.email}</div>
            <students />
        </div>
    );
}

export default Campuses


