var cc = {

  //courses: [{name:"Course1", code:"EG111"},{name:"Course2", code:"EG222"},{name:"Course3", code:"EG333"}],  // if there are default items

  courses: [], // if it is an empty array

  addCourse: function (a,b) {  // add course with two string param inputs
    var obj = {name:a,code:b};
    this.courses.push(obj);
 },

  addCourseObj: function (a) {  // add course using object
  this.courses.push(a);
},

  getCourseAt: function(b){   // return object from index position b
      return this.courses[b];
  },

  length: function(){   // returns number of objects in the array of objects
      return this.courses.length;
  } 
}

module.exports=cc;