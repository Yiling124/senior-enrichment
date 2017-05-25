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
            studentPage: false,
            campuses: [],
            students: [],
            selectedCampus: {},
            selectedStudent: {}
        }
        this.selectCampus = this.selectCampus.bind(this);
        this.unselectCampus = this.unselectCampus.bind(this);
        this.selectAllStudents = this.selectAllStudents.bind(this);
        this.selectStudent = this.selectStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    componentDidMount() {
        axios.get(`/campuses`)
            .then(res => res.data)
            .then(data => this.setState({campuses: data}));

        axios.get(`/students`)
            .then(res => res.data)
            .then(data => this.setState({students: data}));
    }


    selectCampus(e){
        let campusId = e.id;
		axios.get(`/campuses/${campusId}`)
			.then(res => {
				let campus = res.data;
                this.setState({selectedCampus: campus},
                function () {
                console.log("selectedCampus", this.state.selectedCampus);
            })
        })
        .then(campusId => {
            axios.get(`/students/${campusId}`)
                .then(res =>{
                    let studentList = res.data;

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
            studentPage: true,
            selectedStudent: {}
        });
        return (this.state.students);

    }


    selectStudent(e){
        let studentId = e.id;
		axios.delete(`/students/${studentId}`)
			.then(res => {
				let student = res.data;
                this.setState({selectedStudent: student},
                function () {
                console.log("delete A student", this.state.selectedStudent);
            })
        })
    }


    deleteStudent(e){
        console.log("i want to deleteeeeeet", e)
        let studentId = e.id;
        axios.get(`/students/${studentId}`)
			.then(res => {
				let student = res.data;
                this.setState({selectedStudent: student},
                function () {
                console.log("*****selectedStudent", this.state.selectedStudent);
            })
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
                                    <Student student = {this.state.selectedStudent}/>
                                    :
                                    <Students
                                        students = {this.state.students}
                                        selectAllStudents = {this.selectAllStudents}
                                        selectStudent = {this.selectStudent}
                                        deleteStudent = {this.deleteStudent}
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
                                    />
                                }
                            </div>
                        }
                </div>
        )
    }
}



