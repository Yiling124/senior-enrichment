import React from 'react';

const AddStudent = (props) => {
    const campuses = props.campuses

    return (
        <div>
            <h3>Add Student</h3>

            <form>

                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control"  placeholder="Example input" />
                </div>

                <div className="form-group">
                    <label >Phone</label>
                    <input type="text" className="form-control"  placeholder="Example input" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"  placeholder="Example input" />
                </div>


                <select className="selectpicker">

                    {
                        campuses.map((campus) => {
                            return (
                                    <option className="col-xs-4" key={campus.id}>
                                        {campus.name}
                                    </option>
                            )
                        })
                    }

                </select>

                <button type="button" className="btn btn-success">Submit</button>


            </form>

        </div>
    )
}

export default AddStudent;
