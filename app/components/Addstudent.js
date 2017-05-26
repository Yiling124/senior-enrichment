import React from 'react';

const AddStudent = (props) => {
    const campuses = props.campuses
    const handleSubmit = props.handleSubmit
    const handleNameChange = props.handleNameChange
    const handlePhoneChange = props.handlePhoneChange
    const handleEmailChange = props.handleEmailChange
    const handleCampusChange = props.handleCampusChange
    const nameInputValue = props.nameInputValue
    const emailInputValue = props.emailInputValue
    const campusInputValue = props.campusInputValue
    const phoneInputValue = props.phoneInputValue

    return (
        <div>
            <h3>Add Student - Update Student</h3>

            <form onSubmit = {handleSubmit}>

                <div className="form-group">
                    <label >Name</label>
                    <input onChange = {handleNameChange} type="text" className="form-control"  placeholder="Example input" />
                </div>

                <div className="form-group">
                    <label >Phone</label>
                    <input onChange = {handlePhoneChange} type="text" className="form-control"  placeholder="Example input" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange = {handleEmailChange} type="text" className="form-control"  placeholder="Example input" />
                </div>


                <select onChange = {handleCampusChange} className="selectpicker">

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
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default AddStudent;
