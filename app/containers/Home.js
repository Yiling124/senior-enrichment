import React, {Component} from 'react';
import axios from 'axios';
import Campuses from '../components/Campuses';
import Campus from '../components/Campus';
import Students from '../components/Students';
import Navbar from '../components/Navbar';
import Student from '../components/Student';



export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            addstudentPageSwitch:false,
            studentPage: false,
            addstudentPage: false,
            campuses: [],
            students: [],
            selectedCampus: {},
            selectedStudent: {},
            nameInputValue: "",
            phoneInputValue: "",
            emailInputValue: "",
            campusInputValue: ""
        }
        this.selectCampus = this.selectCampus.bind(this);
        this.unselectCampus = this.unselectCampus.bind(this);
        this.selectAllStudents = this.selectAllStudents.bind(this);
        this.selectStudent = this.selectStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.addstudentPage = this.addstudentPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
        this.deleteCampus = this.deleteCampus.bind(this);
    }

    componentDidMount() {
        axios.get(`/campuses`)
            .then(res => res.data)
            .then(data => this.setState({campuses: data}));

        axios.get(`/students`)
            .then(res => res.data)
            .then(data => this.setState({students: data}));
    }


    selectCampus(id){
		axios.get(`/campuses/${id}`)
			.then(res => {
				let campus = res.data;
                this.setState({selectedCampus: campus},
                function () {
                    console.log("selectedCampus")
                })
            })


	}

    unselectCampus(){
        this.setState(
            { selectedCampus: {},
              studentPage: false
            }
        );
    }

    selectAllStudents(){
        this.setState({
            addstudentPageSwitch: false,
            studentPage: true,
            selectedStudent: {}
        });
        return (this.state.students);

    }


    selectStudent(id){
        axios.get(`/students/${id}`)
        	.then(res => {
				let student = res.data;
                this.setState({selectedStudent: student},
                function () {
                console.log("selectedCampus");
            })
        })
    }

    deleteCampus(id){
        axios.delete(`/campuses/${id}`)
			.then(()=> {
                console.log('done')
            });
    }


    deleteStudent(id){
		axios.delete(`/students/${id}`)
			.then(()=> {
                this.setState({
                addstudentPageSwitch: false,
                studentPage: true,
                selectedStudent: {}
            });
        })
    }
        // axios.get(`/students/${studentId}`)
		// 	.then(res => {
		// 		let student = res.data;
        //         this.setState({selectedStudent: student},
        //         function () {
        //         console.log("*****selectedStudent", this.state.selectedStudent);
        //     })
        // })


    addstudentPage(){
        this.setState({
            addstudentPageSwitch: true,
            studentPage: true,
            selectedStudent: {}
        }, function(){console.log('PageSwitch Status changed', this.state.addstudentPageSwitch)})
    }

    handleNameChange(e){
        console.log("Name added", e.target.value)
        const nameValue = e.target.value;
        this.setState({
        nameInputValue: nameValue
        })
    }

    handlePhoneChange(e){
        console.log("Phone added", e.target.value)
        const phoneValue = e.target.value;
        this.setState({
        phoneInputValue: phoneValue
        })
    }

    handleEmailChange(e){
        console.log("Email added", e.target.value)
        const emailValue = e.target.value;
        this.setState({
        emailInputValue: emailValue
        })
    }

    handleCampusChange(e){
        console.log("Campus added", e.target.value)
        const campusValue = e.target.value;
        this.setState({
        campusInputValue: campusValue
        })
    }

    handleSubmit(e){
        console.log("submitttttttttt", e.target.value);
        e.preventDefault();

        axios.post('/students', {
            name: this.state.nameValue,
            phone: this.state.phoneValue,
            email: this.state.emailValue,
            campus: this.state.campusValue
        })
        .then(function(student){
            console.log("one new studenttttttt", student)
            this.setState({
                campusValue: '',
                emailValue: '',
                nameValue: '',
                phoneValue: ''
            })
        })
        return student;
    }


    render () {
		return (
                <div id="home" className="container-fluid">
                    <Navbar
                        selectCampus = {this.selectedCampus}
                        campus = {this.selectedCampus}
                        unselectCampus = {this.unselectCampus}
                        selectAllStudents = {this.selectAllStudents}
                    />

                    {
                        this.state.studentPage === true ?

                            <div>
                                {this.state.selectedStudent.id ?
                                    <Student student = {this.state.selectedStudent}/>
                                    :
                                    <Students
                                        campuses = {this.state.campuses}
                                        students = {this.state.students}
                                        selectAllStudents = {this.selectAllStudents}
                                        selectStudent = {this.selectStudent}
                                        deleteStudent = {this.deleteStudent}
                                        addstudentPageSwitch = {this.state.addstudentPageSwitch}
                                        addstudentPage = {this.addstudentPage}
                                        handleSubmit = {this.handleSubmit}
                                        handleNameChange = {this.handleNameChange}
                                        handleEmailChange = {this.handleEmailChange}
                                        handlePhoneChange = {this.handlePhoneChange}
                                        handleCampusChange = {this.handleCampusChange}
                                    />
                                }
                            </div>

                        :

                            <div>
                                {this.state.selectedCampus.id ?
                                    <Campus campus = {this.state.selectedCampus}/>
                                :
                                    <Campuses
                                        campuses = {this.state.campuses}
                                        selectCampus = {this.selectCampus}
                                        deleteCampus = {this.deleteCampus}
                                    />
                                }
                            </div>
                        }
                </div>
        )
    }
}



