import React from 'react';

const Campuses = (props) => {
    const selectCampus = props.selectCampus;
	const campuses = props.campuses;
    const deleteCampus = props.deleteCampus;

    return (
        <div> {
            campuses.map((campus, idx) => {
			    return (
                    <div className="col-xs-4" key={campus.id}>
                        <a href="#" onClick = {() => selectCampus(campus.id)} >{campus.name} Campus</a>
                        <button onClick={()=> deleteCampus(campus.id)} className="btn btn-xs btn-danger remove   btn-circle"> x </button>
                    </div>

                    )
            })
        }
        </div>
    );
}

export default Campuses






