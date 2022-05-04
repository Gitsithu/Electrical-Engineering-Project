//PARSE JSON DATA AND CREATE COPIES OF IT
const profdata = JSON.parse(prof) //used for storing holes in prof
const studentdata = JSON.parse(student) //used for storing holes in student

const profdata2 = JSON.parse(prof) //used for storing components connected in prof
const studentdata2 = JSON.parse(student) //used for storing components connected in student

let studentdatamsg = JSON.parse(student) //used for returning error msg

//MAKE AN ARRAY FROM A JSON DATA(USED FOR STUDENTDATAMSG)
const makearray = function (data) {
  let arr = []
  for (const components of Object.values(data)) {
    for (let component of components) {
      arr.push(component)
    }
  }
  return arr
}

studentdatamsg = makearray(studentdatamsg)

//CHANGE THE HOLE IDS TO MAKE IT SIMILAR(.e.g. A-11--> T-11 and C-11--> T-11) AND MAKE ARRAY FROM JSON
const changename = function (data) {
  let newjson = []
  const topSection = ['A', 'B', 'C', 'D', 'E']
  const bottomSection = ['F', 'G', 'H', 'I', 'J']
  for (const components of Object.values(data)) {
    for (let component of components) {
      if (component.pointA) {
        if (component.pointA.length <= 4) {
          const letterA = component.pointA.slice(0, 1)
          const numberA = component.pointA.slice(1)
          const newpointA = topSection.includes(letterA)
            ? 'T' + numberA
            : 'B' + numberA
          component.pointA = newpointA
        }
      }
      if (component.pointB) {
        if (component.pointB.length <= 4) {
          const letterB = component.pointB.slice(0, 1)
          const numberB = component.pointB.slice(1)
          const newpointB = topSection.includes(letterB)
            ? 'T' + numberB
            : 'B' + numberB
          component.pointB = newpointB
        }
      }
    }
  }
  for (const components of Object.values(data)) {
    for (let component of components) {
      newjson.push(component)
    }
  }
  return newjson
}

let studentnewdata = changename(studentdata)
let profnewdata = changename(profdata)
let studentnewdata2 = changename(studentdata2)
let profnewdata2 = changename(profdata2)
// console.log(profnewdata)
// console.log(studentnewdata)

//REMOVE THE NUMBERS FROM THE IDS - RES01-->RES
const removenumber = function (data) {
  for (const component of data) {
    component.id = component.id.slice(0, 3)
  }
  return data
}

studentnewdata = removenumber(studentnewdata)
profnewdata = removenumber(profnewdata)
studentnewdata2 = removenumber(studentnewdata2)
profnewdata2 = removenumber(profnewdata2)
// console.log(profnewdata)
// console.log(studentnewdata)

//MAKE THE POINTS A AND B OF THE COPY OF PROFJSON AND COPY OF STUDENTJSON TO PUSH IN COMPONENTS LATER
const makeobjarray = function (data) {
  for (let component of data) {
    component.pointA = []
    component.pointB = []
  }
}
makeobjarray(studentnewdata2)
makeobjarray(profnewdata2)

//ADD THE COMPONENTS CONNECTED TO TEH POINTS A AND B INTO THE COPY OF PROF AND COPY OF SUDENT
const addComponents = function (dataorg, datacopy) {
  for (let i = 0; i < dataorg.length; i++) {
    for (let componento of dataorg) {
      if (
        dataorg[i].pointB == componento.pointA ||
        dataorg[i].pointB.slice(0, 3) == componento.pointA.slice(0, 3)
      ) {
        datacopy[i].pointB.push(componento.id)
      }

      if (
        dataorg[i].pointA == componento.pointB ||
        dataorg[i].pointA.slice(0, 3) == componento.pointB.slice(0, 3)
      ) {
        datacopy[i].pointA.push(componento.id)
      }
    }
  }
}

// console.log('WITH []', profnewdata2)
// console.log('NORMAL', profnewdata)
addComponents(studentnewdata, studentnewdata2)
addComponents(profnewdata, profnewdata2)
console.log(studentnewdata2)
console.log(profnewdata2)

if (_.isEqual(profnewdata2, studentnewdata2)) {
  console.log('No Error! Both prof and student circcuit are same!')
} else if (studentnewdata2.length < profnewdata2.length) {
  console.log('Insufficient Components on breadboard')
} else if (studentnewdata2.length >= profnewdata2.length) {
  //MAKE THE COPY OF THE PROF AND STUDENT(THE ARRAY WITH THE COMPONENTS CONNECTED TO POINTS A AND B)INTO A NON NESTED ARRAY FOR EASIER COMPARISON
  const flatarray = function (data) {
    const flatarr = []
    for (let [i, component] of data.entries()) {
      let pairs = _.pairs(component)
      // console.log(pairs)
      pairs.unshift(i)
      flatarr.push(_.flatten(pairs))
    }
    return flatarr
  }

  let studentnewdatarray2 = flatarray(studentnewdata2)
  let profnewdatarray2 = flatarray(profnewdata2)
  console.log('1', studentnewdata2)
  console.log('2', studentnewdatarray2)
  console.log(studentnewdatarray2)
  console.log(profnewdatarray2)

  //CHECK IF THE ARRAY COMPONENT IN THE COPY OF STUDENT HAS THE SAME ARRAY AS PROF IF IT HAS REMOVE THAT ARRAY(COMPONENTS WHICH DONT MATCH WILL BE LEFT BEHING)
  for (let i = 0; i < profnewdatarray2.length; i++) {
    for (let j = 0; j < studentnewdatarray2.length; j++) {
      if (
        _.isEqual(profnewdatarray2[i].slice(1), studentnewdatarray2[j].slice(1))
      ) {
        studentnewdatarray2.splice(j, 1)
      }
    }
  }

  //DISPLAY ERROR MSG FOR THE COMPONENTS THAT DONT MATCH
  console.log(studentnewdatarray2)
  for (let wrongcomponent of studentnewdatarray2) {
    let wrongcomponentid = wrongcomponent[0]
    console.log(wrongcomponentid)
    console.log(studentdatamsg[wrongcomponentid])
    console.log(
      `Error at component ${studentdatamsg[wrongcomponentid].id} between ${studentdatamsg[wrongcomponentid].pointA} and  ${studentdatamsg[wrongcomponentid].pointB} `
    )
    document.querySelector(
      '.backendmessage'
    ).innerHTML = `Error at component between ${studentdatamsg[wrongcomponentid].pointA} and  ${studentdatamsg[wrongcomponentid].pointB} `
    console.log(studentdatamsg[wrongcomponentid].pointA)
    const holeA = document.getElementById(
      `${studentdatamsg[wrongcomponentid].pointA}`
    )
    holeA.setAttribute('stroke', 'Red')
    holeA.style.strokeWidth = 4

    const holeB = document.getElementById(
      `${studentdatamsg[wrongcomponentid].pointB}`
    )
    holeB.setAttribute('stroke', 'Red')
    holeB.style.strokeWidth = 4

    const wrongid = document.getElementById(
      `${studentdatamsg[wrongcomponentid].id}`
    )
    wrongid.style.backgroundColor = 'red'
  }
}
