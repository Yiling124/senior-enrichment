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
            addstudentPageSwitch: false,
            studentPage: false,
            addstudentPage: false,
            campuses: [],
            students: [],
            selectedCampus: {},
            selectedStudent: {},
            nameInputValue: "",
            phoneInputValue: "",
            emailInputValue: "",
            campusInputValue: "",
            studentsForOneCamp:[]
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
        this.StudentsAtCampus = this.StudentsAtCampus.bind(this);
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
            .then(res => res.data)
            .then(campus =>{
                axios.get(`/students/campus/${id}`)
                .then(res => res.data)
                    .then(students => {
                        this.setState({
                        studentPage: false,
                        studentsForOneCamp: students,
                        selectedCampus: campus
                    }, function(){
                        console.log('studengson camp')
                    })
                })
            })
    }

    StudentsAtCampus(){
        this.setState({
            studentPage: true,
            selectedStudent: {},
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
            .then(res => res.data)
            .then(student => {
                axios.get(`/campuses/${student.campusId}`)
                .then(res => res.data)

                .then(campus => {
                    student['campus'] = campus.name;
                    this.setState({
                       selectedStudent: student
                    })
                })
                .catch()
            })

    }


    deleteCampus(id){
        axios.delete(`/campuses/${id}`)
			.then(()=> {
                this.setState({
                selectedCampus: {},
                studentPage: false
            },
            function(){console.log('resetted')});
        })
    }


    deleteStudent(id){
		axios.delete(`/students/${id}`)
			.then(()=> {
                this.setState({
                addstudentPageSwitch: false,
                studentPage: true,
                selectedStudent: {}
            }, function(){console.log('resetted')});
        })
    }


    addstudentPage(){
        this.setState({
            addstudentPageSwitch: true,
            studentPage: true,
            selectedStudent: {}
        }, function(){console.log('Switchin to Add student Page')})
    }

    handleNameChange(e){
        this.setState({
            nameInputValue: e.target.value
        }, function(){
            console.log('NameInputchanged')
        })
    }

    handlePhoneChange(e){
       this.setState({
            phoneInputValue: e.target.value
        }, function(){
            console.log('phoneInputchanged')
        })
    }

    handleEmailChange(e){
        this.setState({
            emailInputValue: e.target.value
        }, function(){
            console.log('emailInputchanged')
        })
    }

    handleCampusChange(e){
        this.setState({
            campusInputValue: e.target.value
        }, function(){
            console.log('campusInputchanged')
        })
    }

    handleSubmit(e){

        axios.post('/students', {
            name: this.state.nameInputValue,
            phone: this.state.phoneInputValue,
            email: this.state.emailInputValue,
            campus: this.state.campusInputValue
        })
        .then(function(){
             this.setState({
                campusInputValue: '',
                emailInputValue: '',
                nameInputValue: '',
                phoneInputValue: ''
            }, function(){console.log('resetted')})
        })
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
                                    <Student
                                        student = {this.state.selectedStudent}
                                    />
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
                                        nameInputValue = {this.state.nameInputValue}
                                        phoneInputValue = {this.phoneInputValue}
                                        emailInputValue = {this.emailInputValue}
                                        campusInputValue = {this.campusInputValue}
                                        campus = {this.state.selectedCampus}
                                        studentsForOneCamp = {this.state.studentsForOneCamp}
                                    />
                                }
                            </div>

                        :

                            <div>
                                {this.state.selectedCampus.id ?
                                    < Campus
                                        selectedCampus = {this.state.selectedCampus}
                                        studentsForOneCamp = {this.state.studentsForOneCamp}
                                        StudentsAtCampus = {this.StudentsAtCampus}
                                        studentPage = {this.state.studentPage}
                                        selectedStudent = {this.state.selectedStudent}
                                        selectStudent ={this.selectStudent}

                                    />
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



