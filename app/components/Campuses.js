import React from 'react';

const Campuses = (props) => {
    const selectCampus = props.selectCampus;
	const campuses = props.campuses;

    return (
        <div> {
            campuses.map((campus, idx) => {
			    return (
                    <div className="col-xs-4" key={campus.id}>
                        <a href="#" onClick = {() => selectCampus(campus)} >{campus.name} Campus</a>
                    </div>)
            })
        }
        </div>
    );
}

export default Campuses




