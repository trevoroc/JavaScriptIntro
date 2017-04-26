function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courseList = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function(course) {
  if (!this.courseList.includes(course)) {
    this.courseList.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function() {
  let load = {};

  this.courseList.forEach( course => {
    let department = course.department;

    if (load[department] === undefined) {
      load[department] = course.credits;
    } else {
      load[department] += course.credits;
    }
  });

  return load;
};

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};
