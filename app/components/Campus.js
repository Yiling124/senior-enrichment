import React from 'react';

const Campuses = (props) => {
	const campus = props.campus;

    return (
        <div>
            <div>{campus.name} Campus</div>
            <div>{campus.address}</div>

            <students />
        </div>
    );
}

export default Campuses


