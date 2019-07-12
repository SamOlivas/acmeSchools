// show the most popular school
// show the school with the highest GPA


const ADD_STUDENT = 'ADD_STUDENT';
const DEL_STUDENT = 'DEL_STUDENT';
const ENROLL_STUDENT = 'ENROLL_STUDENT';
const WITHDRAW_STUDENT = 'WITHDRAW_STUDENT';



const store = Redux.createStore((state = {schools: [], students: []}, action ) => {
  switch(action.type){
    case ADD_STUDENT:
      break;
    case DEL_STUDENT:
      break;
    case ENROLL_STUDENT:
      break;
    case WITHDRAW_STUDENT:
      break;
    default:
      return state
  }
})
