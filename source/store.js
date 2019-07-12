// show the most popular school
// show the school with the highest GPA
const { store } = require('redux')


const ADD_STUDENT = 'ADD_STUDENT';
const DEL_STUDENT = 'DEL_STUDENT';
const ENROLL_STUDENT = 'ENROLL_STUDENT';
const WITHDRAW_STUDENT = 'WITHDRAW_STUDENT';

const addStudent= (_student) => (
  {
    type: ADD_STUDENT,
    student: _student
  }
);
const delStudent = (_student) => (
  {
    type: DEL_STUDENT,
    id: _student.id
  }
);
// v TO WORK ON v
const enrollStudent = (_student, _school) => (
  {
    type: ENROLL_STUDENT,
    student: _student,
    school: _school
  }
);
const withdrawStudent = (_student) => (
  {
    type: WITHDRAW_STUDENT,
    student: _student
  }
);

const store = Redux.createStore((state = {schools: [], students: []}, action ) => {
  switch(action.type){
    case 'ADD_STUDENT':
      return {
        ...state,
        students: {...state.students, student}
      }
      break;
    case 'DEL_STUDENT':
      return {
        ...state,
        students: state.students.filter( (student) => student.id !== action.id)
      }
      break;
    case 'ENROLL_STUDENT':
      break;
    case 'WITHDRAW_STUDENT':
      break;
    default:
      return state
  }
})
