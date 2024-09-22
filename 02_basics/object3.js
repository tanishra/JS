const course = {
    courseName: "JS in Hindi",
    price: "1000",
    courseInstructor: "Hitesh"
}

// course.courseInstructor;

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor : instructor} = course;
console.log(instructor);

// {
//     "name": "Tanish",
//     "courseName": "JS in Hindi",
//     "price": "Free"
// }

// [
//     {},
//     {},
//     {}
// ]