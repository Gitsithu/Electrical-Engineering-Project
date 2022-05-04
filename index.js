var t = 9

var brdId = '#brd', //id of the svg element where the board should be renderd
  bwidth = 900, // width of the broard in px
  bheight, //height of the board
  nbrHolesH = 63,
  nbrHolesV = 13,
  //__________svg elements styles-----------//
  holeR = 3,
  holeStyle = {
    fill: '#D9D9D6',
    stroke: 'grey',
    strokeWidth: 2,
    class: 'pin',
  },
  poseHoleStyle = {
    fill: holeStyle.fill,
    stroke: 'red',
    strokeWidth: holeStyle.strokeWidth,
    class: 'pin',
  },
  negaHoleStyle = {
    fill: holeStyle.fill,
    stroke: 'teal',
    strokeWidth: holeStyle.strokeWidth,
    class: 'pin',
  },
  poseLineStyle = {
    stroke: poseHoleStyle.stroke,
    strokeWidth: holeR - 2,
  },
  negaLineStyle = {
    stroke: negaHoleStyle.stroke,
    strokeWidth: holeR - 2,
  }

Fontsize = {
  fontSize: 'x-small',
}

//wrap the svg element to a snap drawing surface
var Brd = Snap(brdId)
var wrap = Snap('#wrap')
//x:is the x posittion of the first hole on the board && also the distance between holes
var x = Math.floor(bwidth / (nbrHolesH + 1))
console.log(x)

bheight = x * (nbrHolesV + 2)

//seting the board svg element with the rigth propotions (width/height)
$(brdId).attr({
  width: bwidth + 'px',
  height: bheight + 'px',
})
//var brd ="#brd"
var r = Brd.rect(0, 1, 910, 295).attr({
  fill: '#ffffe0', //brd background color
  stroke: 'black',
  strokeWidth: 5,
  opacity: 0.8,
})
function drawA1(brd, x, y, nbrHolesH) {
  //console.log(nbrHolesH)

  //draw the + & - lines
  //Brd.line(0, y, x * nbrHolesH, y).attr(poseLineStyle);
  //Brd.line(x, y + x, bwidth, y + x).attr(negaLineStyle);

  // label the lines with - & + signs
  // Brd.text(x * nbrHolesH + x +4, y + 4, '+')
  Brd.text(x / 2 - holeR + 2, y + x + 9, '-')
  Brd.text(x / 2 - holeR, y + x - 4, '+')
  Brd.text(x / 2 - holeR + 892, y + x + 9, '-')
  Brd.text(x / 2 - holeR + 890, y + x - 4, '+')
  Brd.text(x / 2 - holeR + 892, y + x + 254, '-')
  Brd.text(x / 2 - holeR + 890, y + x + 239, '+')

  //draw  + & - holes
  var a = 0
  var b = 0
  for (i = 1; i <= nbrHolesH; i++) {
    if (i == 30) {
      i = i + 3
    } else {
      if (i < 30) {
        if (i % 6) {
          a++
          var pos1 = Brd.circle(x * i + 27, y + 5, holeR).attr(poseHoleStyle) //shift VL1 to the right
          pos1.attr({ id: `VL1-${a}` })

          // console.log("k",k)
        }
      } else {
        j = i - 3
        if (j % 6) {
          b++
          var pos2 = Brd.circle(x * i + 8, y + 5, holeR).attr(poseHoleStyle) //shift VL2 to the left
          pos2.attr({ id: `VL2-${b}` })
        }
      }
    }
  }
  var c = 0
  var d = 0
  for (i = 1; i <= nbrHolesH; i++) {
    if (i == 30) {
      i = i + 3
    } else {
      if (i < 30) {
        if (i % 6) {
          c++
          var neg1 = Brd.circle(x * i + 27, y + x + 5, holeR).attr(
            negaHoleStyle
          ) //shift GL1 to the right
          neg1.attr({ id: `GL1-${c}` })
        }
      } else {
        j = i - 3
        if (j % 6) {
          d++
          neg2 = Brd.circle(x * i + 8, y + x + 5, holeR).attr(negaHoleStyle) //shift GL2 to the right
          neg2.attr({ id: `GL2-${d}` })
        }
      }

      //console.log(i);
    }
  }
}

function drawA2(brd, x, y, nbrHolesH) {
  //console.log(nbrHolesH)

  //draw the + & - lines
  //Brd.line(0, y, x * nbrHolesH, y).attr(poseLineStyle);
  //Brd.line(x, y + x, bwidth, y + x).attr(negaLineStyle);

  // label the lines with - & + signs
  // Brd.text(x * nbrHolesH + x +4, y + 14, '+')
  Brd.text(x / 2 - holeR + 2, y + x + 65, '-')
  Brd.text(x / 2 - holeR, y + x + 50, '+')

  //draw  + & - holes
  var a = 0
  var b = 0
  for (i = 1; i <= nbrHolesH; i++) {
    if (i == 30) {
      i = i + 3
    } else {
      if (i < 30) {
        if (i % 6) {
          a++
          var pos1 = Brd.circle(x * i + 27, y + 60, holeR).attr(poseHoleStyle) //shift VL3 to the right
          pos1.attr({ id: `VL3-${a}` })

          // console.log("k",k)
        }
      } else {
        j = i - 3
        if (j % 6) {
          b++
          var pos2 = Brd.circle(x * i + 8, y + 60, holeR).attr(poseHoleStyle) //shift VL4 to the left
          pos2.attr({ id: `VL4-${b}` })
        }
      }
    }
  }
  var c = 0
  var d = 0
  for (i = 1; i <= nbrHolesH; i++) {
    if (i == 30) {
      i = i + 3
    } else {
      if (i < 30) {
        if (i % 6) {
          c++
          var neg1 = Brd.circle(x * i + 27, y + 60 + x, holeR).attr(
            //shift GL3 to the right
            negaHoleStyle
          )
          neg1.attr({ id: `GL3-${c}` })
        }
      } else {
        j = i - 3
        if (j % 6) {
          d++
          neg2 = Brd.circle(x * i + 8, y + 60 + x, holeR).attr(negaHoleStyle) //shift GL4 to the right
          neg2.attr({ id: `GL4-${d}` })
        }
      }

      //console.log(i);
    }
  }
}
function drawB1(brd, x, y, nbrHolesH, nbrh = 5) {
  //console.log(x)
  Brd.text(x / 2 - holeR, y + x + 33, 'A').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 48, 'B').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 62, 'C').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 76, 'D').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 90, 'E').attr(Fontsize)

  for (i = 1; i <= nbrHolesH; i++) {
    Brd.text(x * i + 5, y + x + 17, `${i}`).attr(Fontsize)
  }

  //draw  + & - holes
  for (i = 1; i <= nbrh; i++) {
    y = y + x
    for (j = 1; j <= nbrHolesH; j++) {
      var usce = Brd.circle(x * j + 10, y + 30, holeR).attr(holeStyle)
      if (i == 1) {
        usce.attr({ id: `A${j}` })
      }
      if (i == 2) {
        usce.attr({ id: `B${j}` })
      }
      if (i == 3) {
        usce.attr({ id: `C${j}` })
      }
      if (i == 4) {
        usce.attr({ id: `D${j}` })
      }
      if (i == 5) {
        usce.attr({ id: `E${j}` })
      }

      t = t + 1
    }
  }
}
function drawB2(brd, x, y, nbrHolesH, nbrh = 5) {
  //console.log(x)
  Brd.text(x / 2 - holeR, y + x + 54, 'F').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 68, 'G').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 83, 'H').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 96, 'I').attr(Fontsize)
  Brd.text(x / 2 - holeR, y + x + 111, 'J').attr(Fontsize)

  //draw  + & - holes
  for (i = 1; i <= nbrh; i++) {
    y = y + x
    for (j = 1; j <= nbrHolesH; j++) {
      var usce = Brd.circle(x * j + 10, y + 51, holeR).attr(holeStyle)
      if (i == 1) {
        usce.attr({ id: `F${j}` })
      }
      if (i == 2) {
        usce.attr({ id: `G${j}` })
      }
      if (i == 3) {
        usce.attr({ id: `H${j}` })
      }
      if (i == 4) {
        usce.attr({ id: `I${j}` })
      }
      if (i == 5) {
        usce.attr({ id: `J${j}` })
      }

      t = t + 1
    }
  }
}

//draw the bread board

drawA1(brd, x, x, nbrHolesH)

Brd.line(5, x * 2 + x * 1.5, bwidth, x * 2 + x * 1.5).attr({
  stroke: 'grey',
  strokeWidth: 1,
})

drawB1(brd, x, x * 2 + x * 0.5, nbrHolesH)

Brd.line(5, x * 8 + x * 1 + 30, bwidth, x * 8 + x * 1 + 30).attr({
  stroke: 'lightgrey',
  strokeWidth: 9,
})

drawB2(brd, x, x * 8, nbrHolesH)

Brd.line(5, x * 14 + x * 1.5 + 30, bwidth, x * 14 + x * 1.5 + 30).attr({
  stroke: 'grey',
  strokeWidth: 1,
})
drawA2(brd, x, x * 14 + x * 0.5, nbrHolesH)

//==================================Hovering Feature=====================================//
for (let j = 1; j < 26; j++) {
  // Positive Volt line
  document
    .getElementById(`VL1-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL1-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`VL1-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL1-${i}`).setAttribute('stroke', 'red')
      }
    })
  document
    .getElementById(`VL2-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL2-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`VL2-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL2-${i}`).setAttribute('stroke', 'red')
      }
    })
  document
    .getElementById(`VL3-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL3-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`VL3-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL3-${i}`).setAttribute('stroke', 'red')
      }
    })
  document
    .getElementById(`VL4-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL4-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`VL4-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`VL4-${i}`).setAttribute('stroke', 'red')
      }
    })
  // Negative Volt line
  document
    .getElementById(`GL1-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL1-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`GL1-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL1-${i}`).setAttribute('stroke', 'teal')
      }
    })
  document
    .getElementById(`GL2-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL2-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`GL2-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL2-${i}`).setAttribute('stroke', 'teal')
      }
    })
  document
    .getElementById(`GL3-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL3-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`GL3-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL3-${i}`).setAttribute('stroke', 'teal')
      }
    })
  document
    .getElementById(`GL4-${j}`)
    .addEventListener('mouseover', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL4-${i}`).setAttribute('stroke', '#00FF00')
      }
    })
  document
    .getElementById(`GL4-${j}`)
    .addEventListener('mouseout', function (e) {
      for (let i = 1; i < 26; i++) {
        document.getElementById(`GL4-${i}`).setAttribute('stroke', 'teal')
      }
    })
}
// Main Body Holes
for (let h = 1; h < 64; h++) {
  for (let j = 0; j < 5; j++) {
    var chr = String.fromCharCode(65 + j)
    document
      .getElementById(`${chr}${h}`)
      .addEventListener('mouseover', function (e) {
        for (let i = 0; i < 5; i++) {
          var chr2 = String.fromCharCode(65 + i)
          document
            .getElementById(`${chr2}${h}`)
            .setAttribute('stroke', '#00FF00')
        }
      })
    document
      .getElementById(`${chr}${h}`)
      .addEventListener('mouseout', function (e) {
        for (let i = 0; i < 5; i++) {
          var chr2 = String.fromCharCode(65 + i)
          document
            .getElementById(`${chr2}${h}`)
            .setAttribute('stroke', '#808080')
        }
      })
  }
}
for (let h = 1; h < 64; h++) {
  for (let j = 0; j < 5; j++) {
    var chr = String.fromCharCode(70 + j)
    document
      .getElementById(`${chr}${h}`)
      .addEventListener('mouseover', function (e) {
        for (let i = 0; i < 5; i++) {
          var chr2 = String.fromCharCode(70 + i)
          document
            .getElementById(`${chr2}${h}`)
            .setAttribute('stroke', '	#00FF00')
        }
      })
    document
      .getElementById(`${chr}${h}`)
      .addEventListener('mouseout', function (e) {
        for (let i = 0; i < 5; i++) {
          var chr2 = String.fromCharCode(70 + i)
          document
            .getElementById(`${chr2}${h}`)
            .setAttribute('stroke', '#808080')
        }
      })
  }
}

//=========================================================Additional features============================================================//

//Move, Drag and Stop
var move = function (dx, dy) {
  //console.log(dx,dy)
  this.attr({
    transform:
      this.data('origTransform') +
      (this.data('origTransform') ? 'T' : 't') +
      [dx, dy],
  })
}

var start = function () {
  this.data('origTransform', this.transform().local)
}
var stop = function () {
  console.log('finished dragging')
}

var backend = {
  Res: [],
  Led: [],
  Wire: [],
  Batt: [],
  VoltageSource: [],
  Diode: [],
  Inductor: [],
  CCapacitor: [],
  ECapacitor: [],
  LDR: [],
  IRE: [],
  IRD: [],
  Microphone: [],
  DCMotor: [],
  VarRes: [],
  MultiturnTrimpot: [],
  VoltageRegulator: [],
  RGBLed: [],
  Opamp: [],
  TimerChip: [],
  MotorDriver: [],
  Arduino: [],
}

//=====================================Component Desgin==============================================//
var resistor = `
<svg  class="resclss" fill="red">

 

<g fill="red">

<g class="resTTclass" visibility="hidden" >
    <rect x="4" y="24" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="22" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="38"  class="resTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>

  
<path />
	<line
	  x1="5"
	  x2="47"
	  y1="12"
	  y2="12"
	  stroke="black"
	  stroke-width="2"
	/>
	  <circle
	  cx="8"
	  cy="12"
	  r="3"
	  stroke="MidnightBlue"
	  fill="gray"
	/>

	<rect
	  x="15"
	  y="4"
    rx="1"
	  ry="1"
	  width="5" 
	  height="14"
	  stroke="Burlywood"
	  fill="Burlywood"
	  stroke-width="1"
	/>
	<rect 
  class="firstband"
	  x="20"
	  y="6"
	  width="2"
	  height="10" 
	  stroke-width="1"
	/>
	<rect
	  x="22"
	  y="6"
	  width="2"
	  height="10" 
	  stroke="Burlywood"
	  fill="Burlywood"
	  stroke-width="1"
	/>
	<rect
   class="secondband"
	  x="24"
	  y="6"
	  width="2"
	  height="10" 
	  stroke-width="1"
	/>

	<rect
	  x="26"
	  y="6"
	  width="2"
	  height="10" 
	  stroke="Burlywood"
	  fill="Burlywood"
	  stroke-width="1"
	/>
	<rect
  class="thirdband"
	  x="28"
	  y="6"
	  width="2"
	  height="10" 
	  stroke-width="1"
	  
	/>
	<rect
	  x="30"
	  y="6"
	  width="2"
	  height="10" 
	  stroke="Burlywood"
	  fill="Burlywood"
	  stroke-width="1"
	/>

	<rect

   class="fourthband"
	  x="32"
	  y="6"
	  width="2"
	  height="10" 
	  stroke-width="1"
	/>
	<rect
	  x="34"
	  y="6"
	  width="2"
	  height="10"
	  stroke="Burlywood"
	  fill="Burlywood"
	  stroke-width="1"
	/>
	<rect
  class="fifthband"
	  x="36"
	  y="6"
	  width="2"
	  height="10"
	  stroke-width="1"
	  
	/>
	<rect
	  x="38"
	  y="4"
	  rx="1"
	  ry="1"
	  width="5"
	  height="14" 
	  stroke="Burlywood"
	  fill="Burlywood"
	  stroke-width="1"
	/> 

	  <circle id="graphic_11"  cx="50" cy="12" r="3" stroke="MidnightBlue" fill="gray"/>
    <path class="resoutline" d="M 15 4 L 20 4 L 20 6 L 38 6 L 38 4 L 43 4 L 43 18 L 38 18 L 38 16 L 20 16 L 20 18 L 15 18 Z " stroke="blue" display="none"  fill="transparent" stroke-width="3" />
       <path class="resoutline1" d="M 15 4 L 20 4 L 20 6 L 38 6 L 38 4 L 43 4 L 43 18 L 38 18 L 38 16 L 20 16 L 20 18 L 15 18 Z " stroke="red" display="none"  fill="transparent" stroke-width="3" />
  </g>
</svg>`
var led = `<svg class="ledclss" >
                                    <g>
                                    <g class="ledTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="ledTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="4" x2="49" y1="32" y2="32" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="8" cy="32" r="3" stroke="MidnightBlue" fill="gray" />

                                        <path d="M 38 23.5 A 11 11 0 1 0 38 38.5 z" stroke="black" fill="#ae2012"
                                            stroke-width="2" />
                                            <path class="ledoutline" display="none" d="M 38 23.5 A 11 11 0 1 0 38 38.5 z" stroke="blue"  fill="transparent" stroke-width="3"
                                            />
                                            <path class="ledoutline1" display="none" d="M 38 23.5 A 11 11 0 1 0 38 38.5 z" stroke="red"  fill="transparent" stroke-width="3"
                                            />

                                        <!-- <circle cx="28" cy="32" r="11" stroke="black" fill="#ae2012" stroke-width="2" /> -->
                                        <circle cx="50" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                    </g>

                                </svg>`
var wire = `<g class="wireclass2">
<g class="wirTTclass" visibility="hidden" >
    <rect x="4" y="44" width="150" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="150" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="wirTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
  <circle class="leftcclass" stroke="black" r="3"fill="black"/>
  <line   class="wireclass"  stroke="black" stroke-width="5"/>
    <circle class="rightcclass" stroke="black" r="3"fill="black"/>
</g>
`
var voltagesource = `<svg  class="vsclss">
                                    <g>
                                    <g class="vsoTTclass" visibility="hidden" >
    <rect x="4" y="24" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="22" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="38"  class="vsoTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>

                                       
                                        <line x1="4" x2="49" y1="32" y2="32" class="wirevsclass stroke="black" stroke-width="3"
                                            />
                                        <circle class="leftcircleclass"  cx="8" cy="32"  r="3" stroke="MidnightBlue" fill="gray" />

                                         <circle class="vscircleclass"   cx="29" cy="32" r="11" stroke="black" fill="#8a5a44" stroke-width="2" />


                                        

                                      
                                        <text class="positiveclass" class="heavy">+</text>
                                        <text class="negativeclass" class="heavy">-</text>
                                        <circle class="rightcircleclass"   cx="50" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle class="vsoutline" display="none"  cx="29" cy="32" r="11" stroke="blue" fill="transparent" stroke-width="3" />
                                         <circle class="vsoutline1" display="none"  cx="29" cy="32" r="11" stroke="red" fill="transparent" stroke-width="3" />

                                        
                                    </g>
                                    </svg>

                                `

var diode = `<svg class="diodeclss"   id="inducid" x=800 y=540>
                                    <g>
                                    <g class="dioTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="dioTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                   
                                        <line x1="5" x2="46" y1="32" y2="32" stroke="black" stroke-width="2" />
                                        <circle cx="8" cy="32" r="3" stroke="MidnightBlue" fill="gray" />

                                        <rect x="15" y="24" rx="1" ry="1" width="28" height="16" fill="transparent"
                                            stroke="#6c757d" stroke-width="3" />

                                        <rect x="15" y="24" rx="1" ry="1" width="21" height="16" stroke="Black"
                                            fill="Black" stroke-width="1" />

                                        <rect x="36" y="24" width="7" height="16" stroke-width="1" stroke="Black"
                                            fill="#6c757d" />

                                        <!-- <rect x="24" y="24" width="4" height="16" stroke-width="1" stroke="#6c757d"
                                            fill="#6c757d" />


                                        <rect x="28" y="24" width="10" height="16" stroke-width="1" stroke="Black"
                                            fill="Black" />

                                        <rect x="38" y="24" rx="1" ry="1" width="5" height="16" stroke="Black"
                                            fill="Black" stroke-width="1" /> -->
                                        <circle id="graphic_11" cx="50" cy="32" r="3" stroke="MidnightBlue"
                                            fill="gray" />

                                             <path class="diodeoutline" display="none" d="M 15 24 L 43 24 L 43 40 L 15 40  z" stroke="blue"   fill="transparent" stroke-width="3"
                                            />
                                            <path class="diodeoutline1" display="none" d="M 15 24 L 43 24 L 43 40 L 15 40  z" stroke="red"  fill="transparent" stroke-width="3"
                                            />
                                    </g>
                                </svg>`

var inductor = `<svg class="inductorclss">
                                    <g>
                                    <g class="indTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="indTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                   

                                        <line x1="4" x2="49" y1="32" y2="32" stroke="black" stroke-width="2" />
                                        <circle cx="6" cy="32" r="3" stroke="MidnightBlue" fill="gray" />



                                        <rect x="12" y="25" rx="6" ry="6" width="4" height="14" stroke="green"
                                            fill="green" stroke-width="1" />
                                        <rect x="16" y="24" width="2" height="16" stroke-width="1" stroke="white"
                                            fill="white" />
                                        <rect x="18" y="24" width="4" height="16" stroke="green" fill="green"
                                            stroke-width="1" />
                                        <rect x="22" y="24" width="2" height="16" stroke-width="1" stroke="grey"
                                            fill="grey" />

                                        <rect x="24" y="24" width="5" height="16" stroke="green" fill="green"
                                            stroke-width="1" />
                                        <rect x="29" y="24" width="2" height="16" stroke-width="1" stroke="brown"
                                            fill="brown" />
                                        <rect x="31" y="24" width="5" height="16" stroke="green" fill="green"
                                            stroke-width="1" />


                                        <rect x="38" y="25" rx="6" ry="6" width="4" height="14" stroke="green"
                                            fill="green" stroke-width="1" />
                                        <rect x="36" y="24" width="2" height="16" stroke-width="1" stroke="grey"
                                            fill="grey" />

                                        <rect x="12" y="24" rx="5" ry="5" width="30" height="16" stroke="black"
                                            fill="transparent" stroke-width="1" />

                                        <circle cx="48" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                            <rect class="inductoroutline" display="none"  x="12" y="24" rx="5" ry="5" width="30" height="16" 
                                            fill="transparent" stroke="blue"   stroke-width="3"
                                            />
                                            <rect class="inductoroutline1" display="none"  x="12" y="24" rx="5" ry="5" width="30" height="16" 
                                            fill="transparent" stroke="red"   stroke-width="3"
                                            />
                                    </g>
                                </svg>`

var ccapacitor = `<svg class="ccapacitorclss" >
                                    <g>
                                    <g class="ccaTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="ccaTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                 
                                        <line x1="4" x2="49" y1="17" y2="17" stroke=" black" stroke-width="2"
                                            id="line" />
                                        <circle cx="8" cy="17" r="3" stroke="MidnightBlue" fill="gray" />

                                        <circle cx="29" cy="17" r="11" stroke="black" fill="Orange" stroke-width="2" />
                                        <text x="23" y="23" class="heavy">C</text>
                                        <circle cx="50" cy="17" r="3" stroke="MidnightBlue" fill="gray" />

                                           <circle cx="29" cy="17" r="11" class="ccaoutline" stroke="blue" fill="transparent" stroke-width="3" display="none" />
                                      <circle cx="29" cy="17" r="11" class="ccaoutline1" stroke="red" fill="transparent" stroke-width="3" display="none" />
                                    </g>

                                </svg>`
var ecapacitor = `<svg class="ecapacitorclss" >
                                    <g>
                                     <g class="ecaTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="ecaTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                     

                                        <rect x="10" y="5" rx="7" ry="7" width="20" height="35" stroke="MidnightBlue"
                                            fill="Black" stroke-width="2" />


                                        <rect x="27" y="5"  rx="7" ry="7" width="3" height="35" stroke="Grey" fill="Grey" stroke-width="2" />


                                        <rect x="10" y="5" rx="7" ry="7" width="20" height="35" stroke="Black" fill="transparent" stroke-width="2" />


                                        <line x1="14" x2="14" y1="40" y2="53" stroke=" black" stroke-width="2"
                                            id="line" />
                                        <line x1="26" x2="26" y1="40" y2="53" stroke=" black" stroke-width="2" id="line" />
                                        <circle cx="13" cy="50" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="50" r="3" stroke="MidnightBlue" fill="gray" />
                                        <rect x="10" y="5" class="ecaoutline" rx="7" ry="7" width="20" height="35" stroke="blue" display="none" fill="transparent" stroke-width="3" />
                                       <rect x="10" y="5" class="ecaoutline1" rx="7" ry="7" width="20" height="35" stroke="red" display="none" fill="transparent" stroke-width="3" />
                                    </g>

                                </svg>`

var ldr = `<svg class="ldrclss" >
                                    <g>
                                       <g class="ldrTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="ldrTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>


                                        <line x1="4" x2="49" y1="32" y2="32" stroke=" black" stroke-width="2"
                                            id="line" />
                                        <circle cx="8" cy="32" r="3" stroke="MidnightBlue" fill="grey" />
                                        <rect x="15" y="21" rx="9" ry="9" width="27" height="20" stroke="Black"
                                            fill="LightGrey" stroke-width="2" />
                                        <path
                                            d=" M 22 23 A 2 2 0 1 0 22 27 L 35 27 A 2 2 0 1 1 35 31 L 22 31 A 2 2 0 1 0 22 35 L 35 35 A 2 2 0 1 1 35 39 L 22 39 A 1 1 0 1 0 22 39"
                                            fill="transparent" stroke="DarkRed" stroke-width="1" />
                                        <circle cx="50" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                             <rect x="15" y="21" rx="9" ry="9" class="ldroutline" width="27" height="20" stroke="blue"
                                            fill="transparent" stroke-width="3"  display="none"/>
                                                 <rect x="15" y="21" rx="9" ry="9" class="ldroutline1" width="27" height="20" stroke="red"
                                            fill="transparent" stroke-width="3"  display="none"/>
                                    </g>

                                </svg>`

var ire = `<svg class="ireclss" >
                                    <g>
<g class="ireTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="ireTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>


                                        <line x1="4" x2="49" y1="32" y2="32" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="8" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                        <rect x="19" y="23" width="20" height="20" stroke="black" fill="white"
                                            stroke-width="2" />
                                        <text x="21" y="37" class="small">IRE</text>
                                        <circle cx="50" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                        <rect x="19" y="23" width="20" height="20" class="ireoutline" stroke="blue" fill="transparent" display="none"
                                            stroke-width="3" />
                                            <rect x="19" y="23" width="20" height="20" class="ireoutline1" stroke="red" fill="transparent" display="none"
                                            stroke-width="3" />
                                    </g>

                                </svg>

`
var ird = `<svg class="irdclss">
                                    <g>
                                    <g class="irdTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="irdTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>

                                    
                                        <line x1="4" x2="49" y1="32" y2="32" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="8" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                        <!-- <circle cx="28" cy="22" r="13" stroke="black" fill="Lavender"
                                            stroke-width="2" /> -->
                                        <!-- <rect x="20" y="15" height="15" width="15" stroke-width="2" stroke="Black"
                                            fill="RebeccaPurple" /> -->
                                        <!-- <text x="20" y="28" class="heavy">IR</text> -->
                                        <rect x="19" y="23" width="20" height="20" stroke="black" fill="white"
                                            stroke-width="2" />
                                        <text x="21" y="37" class="small">IRD</text>
                                        <circle cx="50" cy="32" r="3" stroke="MidnightBlue" fill="gray" />
                                          <rect x="19" y="23" width="20" height="20" class="irdoutline" display="none" stroke="blue" fill="transparent"
                                            stroke-width="3" />
                                              <rect x="19" y="23" width="20" height="20" class="irdoutline1" display="none" stroke="red" fill="transparent"
                                            stroke-width="3" />

                                    </g>

                                </svg>`
var microphone = `                                <svg class="microclss" >
                                    <g>
                                    <g class="micTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="micTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>

                                        <line x1="4" x2="49" y1="32" y2="32" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="8" cy="32" r="3" stroke="MidnightBlue" fill="gray" />

                                        
                                        <circle cx="28" cy="32" r="11" stroke="silver" fill="black" stroke-width="2" />
                                        <circle cx="28" cy="32" r="5" fill="#343a40" stroke-width="2" />
                                        <circle cx="50" cy="32" r="3" stroke="MidnightBlue" fill="gray" />

                                        <circle cx="28" cy="32" r="11" stroke="blue" class="microoutline" display="none" fill="transparent" stroke-width="3" />
                                         <circle cx="28" cy="32" r="11" stroke="red" class="microoutline1" display="none" fill="transparent" stroke-width="3" />
                                    </g>

                                </svg>`
var dcmotor = `<svg class="dcmclss">
                                    <g>
                                     <g class="dcmTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="dcmTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>


                                        <path d="M 0 0 H 30  C 30 0, 50 20, 30 40 L 0 40 C 0 40,-20 20,0 0"
                                            transform="translate(15,0)" fill="Gray" stroke="LightGrey"
                                            stroke-width="3" />

                                            

                                        <path fill="#ff9f1c"
                                            d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"
                                            transform="translate(23,12)" />
                                        <circle cx="31" cy="20" r="5" fill="#fcbf49" stroke-width="2" />
                                        <circle cx="30" cy="7" r="3" fill="#495057" stroke-width="2" />
                                        <circle cx="16" cy="20" r="3" fill="#495057" stroke-width="2" />
                                        <circle cx="46" cy="20" r="3" fill="#495057" stroke-width="2" />
                                        <line x1="20" x2="20" y1="40" y2="50" stroke=" black" stroke-width="2"
                                            id="line" />
                                        <line x1="34" x2="34" y1="40" y2="50" stroke=" black" stroke-width="2"
                                            id="line" />
                                        <circle cx="20" cy="50" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="34" cy="50" r="3" stroke="MidnightBlue" fill="gray" />
                                        <path d="M 0 0 H 30  C 30 0, 50 20, 30 40 L 0 40 C 0 40,-20 20,0 0"
                                            transform="translate(15,0)" fill="transparent" stroke="blue" display="none" class="dcmotoroutline"
                                            stroke-width="3" />
                                            <path d="M 0 0 H 30  C 30 0, 50 20, 30 40 L 0 40 C 0 40,-20 20,0 0"
                                            transform="translate(15,0)" fill="transparent" stroke="red" display="none" class="dcmotoroutline1"
                                            stroke-width="3" />


                                    </g>

                                </svg>`
var variableresistor = `<svg class="vrsclss">
                                    <g>
                                    <g class="vrsTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="vrsTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="21" x2="21" y1="31" y2="40" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="35" x2="35" y1="31" y2="54" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="49" x2="49" y1="31" y2="40" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="21" cy="40" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="35" cy="54" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="49" cy="40" r="3" stroke="MidnightBlue" fill="gray" />


                                        <rect x="20" y="1" width="30" height="30" stroke="black" fill="#0096c7"
                                            stroke-width="1" />

                                        <circle cx="35" cy="16" r="10" stroke="MidnightBlue" fill="gray" />
                                        <text  x="26" y="26" font-size="30" class="plusbig" stroke="black">+</text>
                                        <rect x="20" y="1" width="30" height="30" stroke="blue"  class="vrsoutline" display="none" fill="transparent"
                                            stroke-width="3" />
                                            <rect x="20" y="1" width="30" height="30" stroke="red"  class="vrsoutline1" display="none" fill="transparent"
                                            stroke-width="3" />


                                    </g>

                                </svg>`

var multiturntrimpot = ` <svg class="mtclss" >
                                    <g>
                                    <g class="mtpTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="mtpTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="12" x2="12" y1="20" y2="30" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="27" x2="27" y1="20" y2="44" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="41" x2="41" y1="20" y2="30" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="12" cy="30" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="44" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="30" r="3" stroke="MidnightBlue" fill="gray" />


                                        <rect x="6" y="0" width="40" height="20" stroke="black" fill="#023e8a"
                                            stroke-width="1" />
                                        <rect x="46" y="3" rx="2" ry="2" width="5" height="8" stroke="black"
                                            fill="#f6bd60" stroke-width="1" />
                                              <rect x="6" y="0" width="40" height="20" stroke="blue" fill="transparent" display="none" class="mtoutline"
                                            stroke-width="3" />
                                              <rect x="6" y="0" width="40" height="20" stroke="red" fill="transparent" display="none" class="mtoutline1"
                                            stroke-width="3" />




                                    </g>

                                </svg>`
var voltageregulator = `<svg class="vrgclss">
                                    <g>
                                    <g class="vrgTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="vrgTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="21" x2="21" y1="31" y2="40" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="35" x2="35" y1="31" y2="40" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="49" x2="49" y1="31" y2="40" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="21" cy="40" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="35" cy="40" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="49" cy="40" r="3" stroke="MidnightBlue" fill="gray" />

                                        <rect x="20" y="1" width="30" height="10" stroke="black" fill="#DCDCDC"
                                            stroke-width="1" />
                                        <circle cx="35" cy="6" r="4" stroke="MidnightBlue" fill="white" />
                                        <rect x="20" y="11" width="30" height="20" stroke="black" fill="black"
                                            stroke-width="1" />

                                        <rect x="20" y="1" width="30" height="30" stroke="blue" fill="transparent"
                                            stroke-width="3" display="none" class="vrgoutline" />
                                               <rect x="20" y="1" width="30" height="30" stroke="red" fill="transparent"
                                            stroke-width="3" display="none" class="vrgoutline1" />

                                        



                                    </g>

                                </svg>
`

var rgbled = `                 <svg class="rgbledclss">
                                    <g>
                                    <g class="rgbTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="rgbTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <circle cx="35" cy="13" r="11" stroke="black" stroke-width="2" fill="white" />

                                        
                                        <line x1="28" y1="18" x2="14" y2="24" stroke="black" stroke-width="1" />
                                        <line x1="14" y1="24" x2="14" y2="32" stroke="black" stroke-width="1" />
                                        <circle cx="14" cy="34" r="3" stroke="MidnightBlue" fill="grey" />

                                        <line x1="28" y1="23" x2="28" y2="32" stroke="black" stroke-width="1" />
                                        <circle cx="28" cy="34" r="3" stroke="MidnightBlue" fill="grey" />

                                        <line x1="42" y1="23" x2="42" y2="32" stroke="black" stroke-width="1" />
                                        <circle cx="42" cy="34" r="3" stroke="MidnightBlue" fill="grey" />

                                        <line x1="43" y1="18" x2="56" y2="24" stroke="black" stroke-width="1" />
                                        <line x1="56" y1="24" x2="56" y2="32" stroke="black" stroke-width="1" />
                                        <circle cx="56" cy="34" r="3" stroke="MidnightBlue" fill="grey" />

                                        <text class="rgbplus" x="22" y="30" class="heavy" stroke="darkRed">+</text>
                                        <line x1="28" y1="6" x2="42" y2="20" stroke="black" stroke-width="2" />
                                        <line x1="28" y1="20" x2="42" y2="6" stroke="black" stroke-width="2" />
                                        <circle cx="35" cy="13" r="11" stroke="blue" stroke-width="2" fill="transparent" class="rgboutline" display="none" />
                                        <circle cx="35" cy="13" r="11" stroke="red" stroke-width="2" fill="transparent" class="rgboutline1" display="none" />
                                    

                                    </g>

                                </svg>`

var opamp = `<svg class="opampclss">
                                     <g>
                                     <g class="opaTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="opaTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="13" x2="13" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="27" x2="27" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="41" x2="41" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="55" x2="55" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="13" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="55" cy="11" r="3" stroke="MidnightBlue" fill="gray" />


                                        <rect x="12" y="19" width="44" height="25" stroke="black" fill="black"
                                            stroke-width="1" />
                                        <text x="17" y="35" class="opamptext2">LM358</text>
                                        <path d="M 12 27 A 5 5 0  1 1 12 37 Z " fill="Grey" stroke="DimGrey"/>

                                        <line x1="13" x2="13" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="27" x2="27" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="41" x2="41" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="55" x2="55" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="13" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="55" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
<rect x="12" y="19" width="44" height="25" stroke="blue"  class="opaoutline" display="none"
                                            stroke-width="3" fill="transparent"/>
                                            <rect x="12" y="19" width="44" height="25" stroke="red"  class="opaoutline1" display="none"  fill="transparent"
                                            stroke-width="3" />
                                        
                                           




                                    </g>
                                </svg>`

var timerchip = `<svg class="tcclss">
                                     <g>
                                     <g class="tciTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="tciTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="13" x2="13" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="27" x2="27" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="41" x2="41" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="55" x2="55" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="13" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="55" cy="11" r="3" stroke="MidnightBlue" fill="gray" />


                                        <rect x="12" y="19" width="44" height="25" stroke="black" fill="black"
                                            stroke-width="1" />
                                        <text x="17" y="35" class="timerchiptext2">NE555N</text>
                                        <path d="M 12 27 A 5 5 0  1 1 12 37 Z " fill="Grey" stroke="DimGrey"/>

                                        <line x1="13" x2="13" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="27" x2="27" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="41" x2="41" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="55" x2="55" y1="44" y2="53" stroke="black" stroke-width="2"
                                            id="line" />
                                        <circle cx="13" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="55" cy="53" r="3" stroke="MidnightBlue" fill="gray" />

                                        <rect x="12" y="19" width="44" height="25" stroke="blue"  class="tcioutline" display="none" stroke-width="3" fill="transparent"/>

                                            <rect x="12" y="19" width="44" height="25" stroke="red"  class="tcioutline1" display="none"  fill="transparent" stroke-width="3" />

                                    </g>

                                </svg>`

var motordriver = `  <svg class="mdclss">
                                    <g>
                                    <g class="mdrTTclass" visibility="hidden" >
    <rect x="4" y="44" width="200" height="24" fill="black" opacity="0.4" rx="2" ry="2"/>
    <rect x="2" y="42" width="200" height="24" fill="white" rx="2" ry="2"/>
    <text  x="4" y="58"  class="mdrTTclasstext"fill="blue" font-weight="bold" >Tooltip</text>
</g>
                                        <line x1="13" x2="13" y1="11" y2="19" stroke="black" stroke-width="2" id="line" />
                                        <line x1="27" x2="27" y1="11" y2="19" stroke="black" stroke-width="2" id="line" />
                                        <line x1="41" x2="41" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="55" x2="55" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="69" x2="69" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="83" x2="83" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="97" x2="97" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="111" x2="111" y1="11" y2="19" stroke="black" stroke-width="2"
                                            id="line" />
                                        


                                        <circle cx="13" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="55" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="69" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="83" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="97" cy="11" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="111" cy="11" r="3" stroke="MidnightBlue" fill="gray" />





                                        <rect x="12" y="19" width="100" height="25" stroke="black" fill="black"
                                            stroke-width="1" />
                                        <text x="45" y="35" class="motordrivertext2">L293D</text>


                                        <line x1="13" x2="13" y1="42" y2="52" stroke="black" stroke-width="2" id="line" />
                                        <line x1="27" x2="27" y1="42" y2="52" stroke="black" stroke-width="2" id="line" />
                                        <line x1="41" x2="41" y1="42" y2="52" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="55" x2="55" y1="42" y2="52" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="69" x2="69" y1="42" y2="52" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="83" x2="83" y1="42" y2="52" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="97" x2="97" y1="42" y2="52" stroke="black" stroke-width="2"
                                            id="line" />
                                        <line x1="111" x2="111" y1="42" y2="52" stroke="black" stroke-width="2"
                                            id="line" />
                                    

                                        <circle cx="13" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="27" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="41" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="55" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="69" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="83" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="97" cy="53" r="3" stroke="MidnightBlue" fill="gray" />
                                        <circle cx="111" cy="53" r="3" stroke="MidnightBlue" fill="gray" />

                                         <rect x="12" y="19" width="100" height="25" stroke="blue"  class="mdroutline" display="none" stroke-width="3" fill="transparent"/>

                                            <rect x="12" y="19" width="100" height="25" stroke="red"  class="mdroutline1" display="none"  fill="transparent" stroke-width="3" />









                                    </g>

                                </svg>`

const holeid = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'A9',
  'A10',
  'A11',
  'A12',
  'A13',
  'A14',
  'A15',
  'A16',
  'A17',
  'A18',
  'A19',
  'A20',
  'A21',
  'A22',
  'A23',
  'A24',
  'A25',
  'A26',
  'A27',
  'A28',
  'A29',
  'A30',
  'A31',
  'A32',
  'A33',
  'A34',
  'A35',
  'A36',
  'A37',
  'A38',
  'A39',
  'A40',
  'A41',
  'A42',
  'A43',
  'A44',
  'A45',
  'A46',
  'A47',
  'A48',
  'A49',
  'A50',
  'A51',
  'A52',
  'A53',
  'A54',
  'A55',
  'A56',
  'A57',
  'A58',
  'A59',
  'A60',
  'A61',
  'A62',
  'A63',

  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'B9',
  'B10',
  'B11',
  'B12',
  'B13',
  'B14',
  'B15',
  'B16',
  'B17',
  'B18',
  'B19',
  'B20',
  'B21',
  'B22',
  'B23',
  'B24',
  'B25',
  'B26',
  'B27',
  'B28',
  'B29',
  'B30',
  'B31',
  'B32',
  'B33',
  'B34',
  'B35',
  'B36',
  'B37',
  'B38',
  'B39',
  'B40',
  'B41',
  'B42',
  'B43',
  'B44',
  'B45',
  'B46',
  'B47',
  'B48',
  'B49',
  'B50',
  'B51',
  'B52',
  'B53',
  'B54',
  'B55',
  'B56',
  'B57',
  'B58',
  'B59',
  'B60',
  'B61',
  'B62',
  'B63',

  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
  'C10',
  'C11',
  'C12',
  'C13',
  'C14',
  'C15',
  'C16',
  'C17',
  'C18',
  'C19',
  'C20',
  'C21',
  'C22',
  'C23',
  'C24',
  'C25',
  'C26',
  'C27',
  'C28',
  'C29',
  'C30',
  'C31',
  'C32',
  'C33',
  'C34',
  'C35',
  'C36',
  'C37',
  'C38',
  'C39',
  'C40',
  'C41',
  'C42',
  'C43',
  'C44',
  'C45',
  'C46',
  'C47',
  'C48',
  'C49',
  'C50',
  'C51',
  'C52',
  'C53',
  'C54',
  'C55',
  'C56',
  'C57',
  'C58',
  'C59',
  'C60',
  'C61',
  'C62',
  'C63',

  'D1',
  'D2',
  'D3',
  'D4',
  'D5',
  'D6',
  'D7',
  'D8',
  'D9',
  'D10',
  'D11',
  'D12',
  'D13',
  'D14',
  'D15',
  'D16',
  'D17',
  'D18',
  'D19',
  'D20',
  'D21',
  'D22',
  'D23',
  'D24',
  'D25',
  'D26',
  'D27',
  'D28',
  'D29',
  'D30',
  'D31',
  'D32',
  'D33',
  'D34',
  'D35',
  'D36',
  'D37',
  'D38',
  'D39',
  'D40',
  'D41',
  'D42',
  'D43',
  'D44',
  'D45',
  'D46',
  'D47',
  'D48',
  'D49',
  'D50',
  'D51',
  'D52',
  'D53',
  'D54',
  'D55',
  'D56',
  'D57',
  'D58',
  'D59',
  'D60',
  'D61',
  'D62',
  'D63',

  'E1',
  'E2',
  'E3',
  'E4',
  'E5',
  'E6',
  'E7',
  'E8',
  'E9',
  'E10',
  'E11',
  'E12',
  'E13',
  'E14',
  'E15',
  'E16',
  'E17',
  'E18',
  'E19',
  'E20',
  'E21',
  'E22',
  'E23',
  'E24',
  'E25',
  'E26',
  'E27',
  'E28',
  'E29',
  'E30',
  'E31',
  'E32',
  'E33',
  'E34',
  'E35',
  'E36',
  'E37',
  'E38',
  'E39',
  'E40',
  'E41',
  'E42',
  'E43',
  'E44',
  'E45',
  'E46',
  'E47',
  'E48',
  'E49',
  'E50',
  'E51',
  'E52',
  'E53',
  'E54',
  'E55',
  'E56',
  'E57',
  'E58',
  'E59',
  'E60',
  'E61',
  'E62',
  'E63',

  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'F13',
  'F14',
  'F15',
  'F16',
  'F17',
  'F18',
  'F19',
  'F20',
  'F21',
  'F22',
  'F23',
  'F24',
  'F25',
  'F26',
  'F27',
  'F28',
  'F29',
  'F30',
  'F31',
  'F32',
  'F33',
  'F34',
  'F35',
  'F36',
  'F37',
  'F38',
  'F39',
  'F40',
  'F41',
  'F42',
  'F43',
  'F44',
  'F45',
  'F46',
  'F47',
  'F48',
  'F49',
  'F50',
  'F51',
  'F52',
  'F53',
  'F54',
  'F55',
  'F56',
  'F57',
  'F58',
  'F59',
  'F60',
  'F61',
  'F62',
  'F63',

  'G1',
  'G2',
  'G3',
  'G4',
  'G5',
  'G6',
  'G7',
  'G8',
  'G9',
  'G10',
  'G11',
  'G12',
  'G13',
  'G14',
  'G15',
  'G16',
  'G17',
  'G18',
  'G19',
  'G20',
  'G21',
  'G22',
  'G23',
  'G24',
  'G25',
  'G26',
  'G27',
  'G28',
  'G29',
  'G30',
  'G31',
  'G32',
  'G33',
  'G34',
  'G35',
  'G36',
  'G37',
  'G38',
  'G39',
  'G40',
  'G41',
  'G42',
  'G43',
  'G44',
  'G45',
  'G46',
  'G47',
  'G48',
  'G49',
  'G50',
  'G51',
  'G52',
  'G53',
  'G54',
  'G55',
  'G56',
  'G57',
  'G58',
  'G59',
  'G60',
  'G61',
  'G62',
  'G63',

  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'H7',
  'H8',
  'H9',
  'H10',
  'H11',
  'H12',
  'H13',
  'H14',
  'H15',
  'H16',
  'H17',
  'H18',
  'H19',
  'H20',
  'H21',
  'H22',
  'H23',
  'H24',
  'H25',
  'H26',
  'H27',
  'H28',
  'H29',
  'H30',
  'H31',
  'H32',
  'H33',
  'H34',
  'H35',
  'H36',
  'H37',
  'H38',
  'H39',
  'H40',
  'H41',
  'H42',
  'H43',
  'H44',
  'H45',
  'H46',
  'H47',
  'H48',
  'H49',
  'H50',
  'H51',
  'H52',
  'H53',
  'H54',
  'H55',
  'H56',
  'H57',
  'H58',
  'H59',
  'H60',
  'H61',
  'H62',
  'H63',

  'I1',
  'I2',
  'I3',
  'I4',
  'I5',
  'I6',
  'I7',
  'I8',
  'I9',
  'I10',
  'I11',
  'I12',
  'I13',
  'I14',
  'I15',
  'I16',
  'I17',
  'I18',
  'I19',
  'I20',
  'I21',
  'I22',
  'I23',
  'I24',
  'I25',
  'I26',
  'I27',
  'I28',
  'I29',
  'I30',
  'I31',
  'I32',
  'I33',
  'I34',
  'I35',
  'I36',
  'I37',
  'I38',
  'I39',
  'I40',
  'I41',
  'I42',
  'I43',
  'I44',
  'I45',
  'I46',
  'I47',
  'I48',
  'I49',
  'I50',
  'I51',
  'I52',
  'I53',
  'I54',
  'I55',
  'I56',
  'I57',
  'I58',
  'I59',
  'I60',
  'I61',
  'I62',
  'I63',

  'J1',
  'J2',
  'J3',
  'J4',
  'J5',
  'J6',
  'J7',
  'J8',
  'J9',
  'J10',
  'J11',
  'J12',
  'J13',
  'J14',
  'J15',
  'J16',
  'J17',
  'J18',
  'J19',
  'J20',
  'J21',
  'J22',
  'J23',
  'J24',
  'J25',
  'J26',
  'J27',
  'J28',
  'J29',
  'J30',
  'J31',
  'J32',
  'J33',
  'J34',
  'J35',
  'J36',
  'J37',
  'J38',
  'J39',
  'J40',
  'J41',
  'J42',
  'J43',
  'J44',
  'J45',
  'J46',
  'J47',
  'J48',
  'J49',
  'J50',
  'J51',
  'J52',
  'J53',
  'J54',
  'J55',
  'J56',
  'J57',
  'J58',
  'J59',
  'J60',
  'J61',
  'J62',
  'J63',

  'VL1-1',
  'VL1-2',
  'VL1-3',
  'VL1-4',
  'VL1-5',
  'VL1-6',
  'VL1-7',
  'VL1-8',
  'VL1-9',
  'VL1-10',
  'VL1-11',
  'VL1-12',
  'VL1-13',
  'VL1-14',
  'VL1-15',
  'VL1-16',
  'VL1-17',
  'VL1-18',
  'VL1-19',
  'VL1-20',
  'VL1-21',
  'VL1-22',
  'VL1-23',
  'VL1-24',
  'VL1-25',

  'VL2-1',
  'VL2-2',
  'VL2-3',
  'VL2-4',
  'VL2-5',
  'VL2-6',
  'VL2-7',
  'VL2-8',
  'VL2-9',
  'VL2-10',
  'VL2-11',
  'VL2-12',
  'VL2-13',
  'VL2-14',
  'VL2-15',
  'VL2-16',
  'VL2-17',
  'VL2-18',
  'VL2-19',
  'VL2-20',
  'VL2-21',
  'VL2-22',
  'VL2-23',
  'VL2-24',
  'VL2-25',

  'GL1-1',
  'GL1-2',
  'GL1-3',
  'GL1-4',
  'GL1-5',
  'GL1-6',
  'GL1-7',
  'GL1-8',
  'GL1-9',
  'GL1-10',
  'GL1-11',
  'GL1-12',
  'GL1-13',
  'GL1-14',
  'GL1-15',
  'GL1-16',
  'GL1-17',
  'GL1-18',
  'GL1-19',
  'GL1-20',
  'GL1-21',
  'GL1-22',
  'GL1-23',
  'GL1-24',
  'GL1-25',

  'GL2-1',
  'GL2-2',
  'GL2-3',
  'GL2-4',
  'GL2-5',
  'GL2-6',
  'GL2-7',
  'GL2-8',
  'GL2-9',
  'GL2-10',
  'GL2-11',
  'GL2-12',
  'GL2-13',
  'GL2-14',
  'GL2-15',
  'GL2-16',
  'GL2-17',
  'GL2-18',
  'GL2-19',
  'GL2-20',
  'GL2-21',
  'GL2-22',
  'GL2-23',
  'GL2-24',
  'GL2-25',

  'VL3-1',
  'VL3-2',
  'VL3-3',
  'VL3-4',
  'VL3-5',
  'VL3-6',
  'VL3-7',
  'VL3-8',
  'VL3-9',
  'VL3-10',
  'VL3-11',
  'VL3-12',
  'VL3-13',
  'VL3-14',
  'VL3-15',
  'VL3-16',
  'VL3-17',
  'VL3-18',
  'VL3-19',
  'VL3-20',
  'VL3-21',
  'VL3-22',
  'VL3-23',
  'VL3-24',
  'VL3-25',

  'VL4-1',
  'VL4-2',
  'VL4-3',
  'VL4-4',
  'VL4-5',
  'VL4-6',
  'VL4-7',
  'VL4-8',
  'VL4-9',
  'VL4-10',
  'VL4-11',
  'VL4-12',
  'VL4-13',
  'VL4-14',
  'VL4-15',
  'VL4-16',
  'VL4-17',
  'VL4-18',
  'VL4-19',
  'VL4-20',
  'VL4-21',
  'VL4-22',
  'VL4-23',
  'VL4-24',
  'VL4-25',

  'GL3-1',
  'GL3-2',
  'GL3-3',
  'GL3-4',
  'GL3-5',
  'GL3-6',
  'GL3-7',
  'GL3-8',
  'GL3-9',
  'GL3-10',
  'GL3-11',
  'GL3-12',
  'GL3-13',
  'GL3-14',
  'GL3-15',
  'GL3-16',
  'GL3-17',
  'GL3-18',
  'GL3-19',
  'GL3-20',
  'GL3-21',
  'GL3-22',
  'GL3-23',
  'GL3-24',
  'GL3-25',

  'GL4-1',
  'GL4-2',
  'GL4-3',
  'GL4-4',
  'GL4-5',
  'GL4-6',
  'GL4-7',
  'GL4-8',
  'GL4-9',
  'GL4-10',
  'GL4-11',
  'GL4-12',
  'GL4-13',
  'GL4-14',
  'GL4-15',
  'GL4-16',
  'GL4-17',
  'GL4-18',
  'GL4-19',
  'GL4-20',
  'GL4-21',
  'GL4-22',
  'GL4-23',
  'GL4-24',
  'GL4-25',
]

const inspectordivs = document.querySelectorAll('.inspectordiv')

var RESno = 1

document.getElementById('resbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  var componenthode = []
  holeid.forEach((x) => {
    enableholes(x)
  })
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.resistor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextr1').innerHTML = x
        console.log('HHAHAHH', x)
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextr2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var firstbandcolor = getcolor1()
          var secondbandcolor = getcolor2()
          var thirdbandcolor = getcolor3()
          var fourthbandcolor = getcolor4()
          var fifthbandcolor = getcolor5()

          // console.log(firstbandcolor)
          var p = Snap.parse(resistor)
          var k = Brd.append(p)

          if (Array.isArray(backend.Res) && backend.Res.length) {
            RESnum = parseInt(backend.Res.at(-1)['id'].substr(4, 1)) + 1
            console.log(RESnum)
          } else {
            RESnum = RESno
          }

          var Rid = `RES0${RESnum}`
          var RB1id = `RESB1${RESnum}`
          var RB2id = `RESB2${RESnum}`
          var RB3id = `RESB3${RESnum}`
          var RB4id = `RESB4${RESnum}`
          var RB5id = `RESB5${RESnum}`
          var ResTTid = `RESTT${RESnum}`
          var ResTTTEXTid = `RESTTTEXT${RESnum}`

          // console.log(Rnum - 1)
          document
            .getElementsByClassName('resclss')
            [RESnum - 1].setAttribute('id', Rid)

          document
            .getElementsByClassName('firstband')
            [RESnum - 1].setAttribute('id', RB1id)

          document
            .getElementsByClassName('secondband')
            [RESnum - 1].setAttribute('id', RB2id)
          document
            .getElementsByClassName('thirdband')
            [RESnum - 1].setAttribute('id', RB3id)

          document
            .getElementsByClassName('fourthband')
            [RESnum - 1].setAttribute('id', RB4id)

          document
            .getElementsByClassName('fifthband')
            [RESnum - 1].setAttribute('id', RB5id)
          document
            .getElementsByClassName('resTTclass')
            [RESnum - 1].setAttribute('id', ResTTid)
          document
            .getElementsByClassName('resTTclasstext')
            [RESnum - 1].setAttribute('id', ResTTTEXTid)

          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')

          document.getElementById(Rid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(Rid).setAttribute('y', parseInt(ccyy) - 12)

          document.getElementById(ResTTid).setAttribute('x', 40)
          document.getElementById(ResTTid).setAttribute('y', 120)

          document
            .getElementById(RB1id)
            .setAttribute('fill', `${firstbandcolor}`)
          document
            .getElementById(RB1id)
            .setAttribute('stroke', `${firstbandcolor}`)
          document
            .getElementById(RB2id)
            .setAttribute('fill', `${secondbandcolor}`)
          document
            .getElementById(RB2id)
            .setAttribute('stroke', `${secondbandcolor}`)

          document
            .getElementById(RB3id)
            .setAttribute('fill', `${thirdbandcolor}`)
          document
            .getElementById(RB3id)
            .setAttribute('stroke', `${thirdbandcolor}`)

          document
            .getElementById(RB4id)
            .setAttribute('fill', `${fourthbandcolor}`)
          document
            .getElementById(RB4id)
            .setAttribute('stroke', `${fourthbandcolor}`)

          document
            .getElementById(RB5id)
            .setAttribute('fill', `${fifthbandcolor}`)
          document
            .getElementById(RB5id)
            .setAttribute('stroke', `${fifthbandcolor}`)

          var obj = {
            id: Rid,
            pointA: x,
            pointB: y,
            Color: [
              firstbandcolor,
              secondbandcolor,
              thirdbandcolor,
              fourthbandcolor,
              fifthbandcolor,
            ],
          }
          backend.Res = [...backend.Res, obj]
          deleteElementRes()
          console.log('backend', backend)

          // Rnum = Rnum + 1

          function getcolor1() {
            var colorValue = document
              .getElementById('firstband')
              .options[
                document.getElementById('firstband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor2() {
            var colorValue = document
              .getElementById('secondband')
              .options[
                document.getElementById('secondband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor3() {
            var colorValue = document
              .getElementById('thirdband')
              .options[
                document.getElementById('thirdband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor4() {
            var colorValue = document
              .getElementById('fourthband')
              .options[
                document.getElementById('fourthband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor5() {
            var colorValue = document
              .getElementById('fifthband')
              .options[
                document.getElementById('fifthband').selectedIndex
              ].text.slice(1)

            return colorValue
          }
          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })

          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.resistor').classList.add('hidden')
        }
      })
  )
  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var LEDno = 1

document.getElementById('ledbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.led').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextl1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextl2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(led)
          var k = Brd.append(p)
          //if backend.Led has value
          if (Array.isArray(backend.Led) && backend.Led.length) {
            LEDnum = parseInt(backend.Led.at(-1)['id'].substr(4, 1)) + 1
          } else {
            LEDnum = LEDno
          }
          var Lid = `LED0${LEDnum}`
          var LedTTid = `LEDTT${LEDnum}`
          var LedTTTEXTid = `LEDTTTEXT${LEDnum}`
          document
            .getElementsByClassName('ledclss')
            [LEDnum - 1].setAttribute('id', Lid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          console.log(ccxx)
          var ccyy = document.getElementById(x).getAttribute('cy')

          console.log(ccyy)

          document
            .getElementsByClassName('ledTTclass')
            [LEDnum - 1].setAttribute('id', LedTTid)
          document
            .getElementsByClassName('ledTTclasstext')
            [LEDnum - 1].setAttribute('id', LedTTTEXTid)

          document.getElementById(Lid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(Lid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(LedTTid).setAttribute('x', 60)
          document.getElementById(LedTTid).setAttribute('y', 200)

          console.log(document.getElementById(Lid).getAttribute('x'))
          var obj = {
            id: Lid,
            pointA: x,
            pointB: y,
          }
          backend.Led = [...backend.Led, obj]
          console.log('backend', backend)
          deleteElementLed()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.led').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var WIRno = 1
var wirebtn = document.getElementById('wirebutton')

wirebtn.onclick = () => {
  holeid.forEach((x) => {
    enableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.wire').classList.remove('hidden')
  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextw1').innerHTML = x
        var ccxx1 = document.getElementById(x).getAttribute('cx')
        var ccyy1 = document.getElementById(x).getAttribute('cy')
        console.log('x1', ccxx1)
        console.log('y1', ccyy1)
        removeEventOnclik()

        holeid.forEach(
          (y) =>
            (document.getElementById(y).onclick = () => {
              document.getElementById('holeidtextw2').innerHTML = y
              var ccxx2 = document.getElementById(y).getAttribute('cx')
              var ccyy2 = document.getElementById(y).getAttribute('cy')
              removeEventOnclik()

              document.getElementById('donebutton').onclick = () => {
                var wirecolor = getcolor()
                // console.log(wirecolor)

                var p = Snap.parse(wire)
                var k = Brd.append(p)

                if (Array.isArray(backend.Wire) && backend.Wire.length) {
                  WIRnum = parseInt(backend.Wire.at(-1)['id'].substr(4, 1)) + 1
                } else {
                  WIRnum = WIRno
                }

                var Wid = `WIR0${WIRnum}`
                var WCid = `WIRWC0${WIRnum}`
                var LCid = `WIRLC0${WIRnum}`
                var RCid = `WIRRC0${WIRnum}`
                var WirTTid = `WIRTT${WIRnum}`
                var WirTTTEXTid = `WIRTTTEXT${WIRnum}`

                var obj = {
                  id: Wid,
                  pointA: x,
                  pointB: y,
                }

                backend.Wire = [...backend.Wire, obj]
                console.log(backend)

                document
                  .getElementsByClassName('wireclass2')
                  [WIRnum - 1].setAttribute('id', Wid)

                document
                  .getElementsByClassName('wireclass')
                  [WIRnum - 1].setAttribute('id', WCid)

                document
                  .getElementsByClassName('leftcclass')
                  [WIRnum - 1].setAttribute('id', LCid)

                document
                  .getElementsByClassName('rightcclass')
                  [WIRnum - 1].setAttribute('id', RCid)
                document
                  .getElementsByClassName('wirTTclass')
                  [WIRnum - 1].setAttribute('id', WirTTid)
                document
                  .getElementsByClassName('wirTTclasstext')
                  [WIRnum - 1].setAttribute('id', WirTTTEXTid)
                document
                  .getElementById(WCid)
                  .setAttribute('x1', parseInt(ccxx1))
                document
                  .getElementById(WCid)
                  .setAttribute('y1', parseInt(ccyy1))
                document
                  .getElementById(WCid)
                  .setAttribute('x2', parseInt(ccxx2))
                document
                  .getElementById(WCid)
                  .setAttribute('y2', parseInt(ccyy2))
                document
                  .getElementById(LCid)
                  .setAttribute('cx', parseInt(ccxx1))
                document
                  .getElementById(LCid)
                  .setAttribute('cy', parseInt(ccyy1))
                document
                  .getElementById(RCid)
                  .setAttribute('cx', parseInt(ccxx2))
                document
                  .getElementById(RCid)
                  .setAttribute('cy', parseInt(ccyy2))

                document
                  .getElementById(LCid)
                  .setAttribute('fill', `${wirecolor}`)
                document
                  .getElementById(LCid)
                  .setAttribute('stroke', `${wirecolor}`)
                document
                  .getElementById(WCid)
                  .setAttribute('stroke', `${wirecolor}`)
                document
                  .getElementById(RCid)
                  .setAttribute('fill', `${wirecolor}`)
                document
                  .getElementById(RCid)
                  .setAttribute('stroke', `${wirecolor}`)
                document.getElementById(WirTTid).setAttribute('x', 60)
                document.getElementById(WirTTid).setAttribute('y', 200)
                deleteElementWire()
                // removeEventOnclik()

                function getcolor() {
                  var colorValue =
                    document.getElementById('select').options[
                      document.getElementById('select').selectedIndex
                    ].text

                  console.log(colorValue[0])
                  // console.log(colorValue)
                  /*  */

                  return colorValue
                }
                document.querySelector('.wire').classList.add('hidden')
              }
            })
        )
      })
  )
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var VSOno = 1
var voltagesourcebtn = document.getElementById('vsbutton')

voltagesourcebtn.onclick = () => {
  holeid.forEach((x) => {
    enableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.voltagesource').classList.remove('hidden')
  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextvs1').innerHTML = x
        var ccxx1 = document.getElementById(x).getAttribute('cx')
        var ccyy1 = document.getElementById(x).getAttribute('cy')
        removeEventOnclik()

        holeid.forEach(
          (y) =>
            (document.getElementById(y).onclick = () => {
              document.getElementById('holeidtextvs2').innerHTML = y
              var ccxx2 = document.getElementById(y).getAttribute('cx')
              var ccyy2 = document.getElementById(y).getAttribute('cy')
              removeEventOnclik()

              document.getElementById('donebutton').onclick = () => {
                var p = Snap.parse(voltagesource)
                var k = Brd.append(p)

                if (
                  Array.isArray(backend.VoltageSource) &&
                  backend.VoltageSource.length
                ) {
                  VSOnum =
                    parseInt(backend.VoltageSource.at(-1)['id'].substr(4, 1)) +
                    1
                } else {
                  VSOnum = VSOno
                }
                var VSid = `VSO0${VSOnum}`
                var Pid = `P0${VSOnum}`
                var Nid = `N0${VSOnum}`
                var WVid = `WV0${VSOnum}`
                var LCCid = `LCC0${VSOnum}`
                var RCCid = `RCC0${VSOnum}`
                var VSCid = `VSC0${VSOnum}`
                var VPSid = `VPSCO${VSOnum}`
                var VPS1id = `VPS1CO${VSOnum}`
                var VsoTTid = `VSOTT${VSOnum}`
                var VsoTTTEXTid = `VSOTTTEXT${VSOnum}`

                var obj = {
                  id: VSid,
                  pointA: x,
                  pointB: y,
                }

                backend.VoltageSource = [...backend.VoltageSource, obj]
                console.log(backend)
                document
                  .getElementsByClassName('vsclss')
                  [VSOnum - 1].setAttribute('id', VSid)
                document
                  .getElementsByClassName('positiveclass')
                  [VSOnum - 1].setAttribute('id', Pid)
                document
                  .getElementsByClassName('negativeclass')
                  [VSOnum - 1].setAttribute('id', Nid)
                document
                  .getElementsByClassName('wirevsclass')
                  [VSOnum - 1].setAttribute('id', WVid)

                document
                  .getElementsByClassName('leftcircleclass')
                  [VSOnum - 1].setAttribute('id', LCCid)

                document
                  .getElementsByClassName('rightcircleclass')
                  [VSOnum - 1].setAttribute('id', RCCid)

                document
                  .getElementsByClassName('vscircleclass')
                  [VSOnum - 1].setAttribute('id', VSCid)
                document
                  .getElementsByClassName('vsoutline')
                  [VSOnum - 1].setAttribute('id', VPSid)
                document
                  .getElementsByClassName('vsoutline1')
                  [VSOnum - 1].setAttribute('id', VPS1id)

                document
                  .getElementsByClassName('vsoTTclass')
                  [VSOnum - 1].setAttribute('id', VsoTTid)
                document
                  .getElementsByClassName('vsoTTclasstext')
                  [VSOnum - 1].setAttribute('id', VsoTTTEXTid)

                document.getElementById(WVid).setAttribute('stroke', 'black')
                document
                  .getElementById(WVid)
                  .setAttribute('x1', parseInt(ccxx1))
                document
                  .getElementById(WVid)
                  .setAttribute('y1', parseInt(ccyy1))
                document
                  .getElementById(WVid)
                  .setAttribute('x2', parseInt(ccxx2))
                document
                  .getElementById(WVid)
                  .setAttribute('y2', parseInt(ccyy2))
                document
                  .getElementById(LCCid)
                  .setAttribute('cx', parseInt(ccxx1))
                document
                  .getElementById(LCCid)
                  .setAttribute('cy', parseInt(ccyy1))
                document
                  .getElementById(RCCid)
                  .setAttribute('cx', parseInt(ccxx2))
                document
                  .getElementById(RCCid)
                  .setAttribute('cy', parseInt(ccyy2))

                // document
                //   .getElementById("A")
                //   .setAttribute('cx', (parseInt(ccxx1) + parseInt(ccxx2)) / 2)
                // document
                //   .getElementById("A")
                //   .setAttribute('cy', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)
                document
                  .getElementById(VSCid)
                  .setAttribute('cx', (parseInt(ccxx1) + parseInt(ccxx2)) / 2)
                document
                  .getElementById(VSCid)
                  .setAttribute('cy', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)

                document
                  .getElementById(VPSid)
                  .setAttribute('cx', (parseInt(ccxx1) + parseInt(ccxx2)) / 2)
                document
                  .getElementById(VPSid)
                  .setAttribute('cy', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)
                document
                  .getElementById(VPS1id)
                  .setAttribute('cx', (parseInt(ccxx1) + parseInt(ccxx2)) / 2)
                document
                  .getElementById(VPS1id)
                  .setAttribute('cy', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)
                document
                  .getElementById(Pid)
                  .setAttribute(
                    'x',
                    (parseInt(ccxx1) + parseInt(ccxx2)) / 2 - 12
                  )
                document
                  .getElementById(Pid)
                  .setAttribute(
                    'y',
                    (parseInt(ccyy1) + parseInt(ccyy2)) / 2 + 4
                  )

                document
                  .getElementById(Nid)
                  .setAttribute(
                    'y',
                    (parseInt(ccyy1) + parseInt(ccyy2)) / 2 + 3
                  )
                document
                  .getElementById(Nid)
                  .setAttribute(
                    'x',
                    (parseInt(ccxx1) + parseInt(ccxx2)) / 2 + 3
                  )
                document
                  .getElementById(VsoTTid)
                  .setAttribute('x', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)
                document
                  .getElementById(VsoTTid)
                  .setAttribute(
                    'y',
                    (parseInt(ccyy1) + parseInt(ccyy2)) / 2 + 50
                  )

                deleteElementVoltageSource()
                var parentvs = document.getElementsByClassName('vscircleclass1')
                console.log(parentvs)
                document.querySelector('.voltagesource').classList.add('hidden')
              }
            })
        )
      })
  )
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var DIOno = 1

document.getElementById('diodebutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []

  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.diode').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextd1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextd2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(diode)
          var k = Brd.append(p)

          if (Array.isArray(backend.Diode) && backend.Diode.length) {
            DIOnum = parseInt(backend.Diode.at(-1)['id'].substr(4, 1)) + 1
          } else {
            DIOnum = DIOno
          }
          var Did = `DIO0${DIOnum}`
          var DioTTid = `DIOTT${DIOnum}`
          var DioTTTEXTid = `DIOTTTEXT${DIOnum}`
          document
            .getElementsByClassName('diodeclss')
            [DIOnum - 1].setAttribute('id', Did)
          document
            .getElementsByClassName('dioTTclass')
            [DIOnum - 1].setAttribute('id', DioTTid)
          document
            .getElementsByClassName('dioTTclasstext')
            [DIOnum - 1].setAttribute('id', DioTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(Did).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(Did).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(DioTTid).setAttribute('x', 60)
          document.getElementById(DioTTid).setAttribute('y', 200)

          var obj = {
            id: Did,
            pointA: x,
            pointB: y,
          }
          backend.Diode = [...backend.Diode, obj]
          deleteElementDiode()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.diode').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var INDno = 1
document.getElementById('inductorbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.inductor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtexti1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtexti2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(inductor)
          var k = Brd.append(p)

          if (Array.isArray(backend.Inductor) && backend.Inductor.length) {
            INDnum = parseInt(backend.Inductor.at(-1)['id'].substr(4, 1)) + 1
          } else {
            INDnum = INDno
          }
          var INDid = `IND0${INDnum}`
          var IndTTid = `INDTT${INDnum}`
          var IndTTTEXTid = `INDTTTEXT${INDnum}`
          document
            .getElementsByClassName('inductorclss')
            [INDnum - 1].setAttribute('id', INDid)
          document
            .getElementsByClassName('indTTclass')
            [INDnum - 1].setAttribute('id', IndTTid)
          document
            .getElementsByClassName('indTTclasstext')
            [INDnum - 1].setAttribute('id', IndTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(INDid).setAttribute('x', parseInt(ccxx) - 6)
          document.getElementById(INDid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(IndTTid).setAttribute('x', 60)
          document.getElementById(IndTTid).setAttribute('y', 200)

          var obj = {
            id: INDid,
            pointA: x,
            pointB: y,
          }
          backend.Inductor = [...backend.Inductor, obj]
          deleteElementInductor()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.inductor').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var CCAno = 1
document.getElementById('ccapacitorbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.cccapacitor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextcc1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextcc2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(ccapacitor)
          var k = Brd.append(p)

          if (Array.isArray(backend.CCapacitor) && backend.CCapacitor.length) {
            CCAnum = parseInt(backend.CCapacitor.at(-1)['id'].substr(4, 1)) + 1
          } else {
            CCAnum = CCAno
          }
          var CCAid = `CCA0${CCAnum}`
          var CcaTTid = `CCATT${CCAnum}`
          var CcaTTTEXTid = `CCATTTEXT${CCAnum}`
          document
            .getElementsByClassName('ccapacitorclss')
            [CCAnum - 1].setAttribute('id', CCAid)
          document
            .getElementsByClassName('ccaTTclass')
            [CCAnum - 1].setAttribute('id', CcaTTid)
          document
            .getElementsByClassName('ccaTTclasstext')
            [CCAnum - 1].setAttribute('id', CcaTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(CCAid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(CCAid).setAttribute('y', parseInt(ccyy) - 17)
          document.getElementById(CcaTTid).setAttribute('x', 60)
          document.getElementById(CcaTTid).setAttribute('y', 200)

          var obj = {
            id: CCAid,
            pointA: x,
            pointB: y,
          }

          backend.CCapacitor = [...backend.CCapacitor, obj]
          console.log(backend)
          deleteElementCCapacitor()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.cccapacitor').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var ECAno = 1
document.getElementById('ecapacitorbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.eccapacitor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextec1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextec2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(ecapacitor)
          var k = Brd.append(p)

          if (Array.isArray(backend.ECapacitor) && backend.ECapacitor.length) {
            ECAnum = parseInt(backend.ECapacitor.at(-1)['id'].substr(4, 1)) + 1
          } else {
            ECAnum = ECAno
          }
          var ECAid = `ECA0${ECAnum}`
          var EcaTTid = `ECATT${ECAnum}`
          var EcaTTTEXTid = `ECATTTEXT${ECAnum}`
          document
            .getElementsByClassName('ecapacitorclss')
            [ECAnum - 1].setAttribute('id', ECAid)
          document
            .getElementsByClassName('ecaTTclass')
            [ECAnum - 1].setAttribute('id', EcaTTid)
          document
            .getElementsByClassName('ecaTTclasstext')
            [ECAnum - 1].setAttribute('id', EcaTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(ECAid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(ECAid).setAttribute('y', parseInt(ccyy) - 50)
          document.getElementById(EcaTTid).setAttribute('x', 60)
          document.getElementById(EcaTTid).setAttribute('y', 200)

          var obj = {
            id: ECAid,
            pointA: x,
            pointB: y,
          }

          backend.ECapacitor = [...backend.ECapacitor, obj]
          console.log(backend)
          deleteElementECapacitor()

          removeEventOnclik()
          var holearrayids = getIDs(x, 2)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.eccapacitor').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}
var LDRno = 1
document.getElementById('ldrbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.ldr').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextldr1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextldr2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(ldr)
          var k = Brd.append(p)

          if (Array.isArray(backend.LDR) && backend.LDR.length) {
            LDRnum = parseInt(backend.LDR.at(-1)['id'].substr(4, 1)) + 1
          } else {
            LDRnum = LDRno
          }
          var LDRid = `LDR0${LDRnum}`
          var LdrTTid = `LDRTT${LDRnum}`
          var LdrTTTEXTid = `LDRTTTEXT${LDRnum}`
          document
            .getElementsByClassName('ldrclss')
            [LDRnum - 1].setAttribute('id', LDRid)
          document
            .getElementsByClassName('ldrTTclass')
            [LDRnum - 1].setAttribute('id', LdrTTid)
          document
            .getElementsByClassName('ldrTTclasstext')
            [LDRnum - 1].setAttribute('id', LdrTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(LDRid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(LDRid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(LdrTTid).setAttribute('x', 60)
          document.getElementById(LdrTTid).setAttribute('y', 200)

          var obj = {
            id: LDRid,
            pointA: x,
            pointB: y,
          }

          backend.LDR = [...backend.LDR, obj]
          console.log(backend)
          deleteElementLDR()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.ldr').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}
var IREno = 1
document.getElementById('irebutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.iremittor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextire1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextire2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(ire)
          var k = Brd.append(p)

          if (Array.isArray(backend.IRE) && backend.IRE.length) {
            IREnum = parseInt(backend.IRE.at(-1)['id'].substr(4, 1)) + 1
          } else {
            IREnum = IREno
          }
          var IREid = `IRE0${IREnum}`
          var IreTTid = `IRETT${IREnum}`
          var IreTTTEXTid = `IRETTTEXT${IREnum}`
          document
            .getElementsByClassName('ireclss')
            [IREnum - 1].setAttribute('id', IREid)
          document
            .getElementsByClassName('ireTTclass')
            [IREnum - 1].setAttribute('id', IreTTid)
          document
            .getElementsByClassName('ireTTclasstext')
            [IREnum - 1].setAttribute('id', IreTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(IREid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(IREid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(IreTTid).setAttribute('x', 60)
          document.getElementById(IreTTid).setAttribute('y', 200)

          var obj = {
            id: IREid,
            pointA: x,
            pointB: y,
          }

          backend.IRE = [...backend.IRE, obj]
          console.log(backend)
          deleteElementIRE()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.iremittor').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var IRDno = 1
document.getElementById('irdbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.irdetector').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextird1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextird2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(ird)
          var k = Brd.append(p)

          if (Array.isArray(backend.IRD) && backend.IRD.length) {
            IRDnum = parseInt(backend.IRD.at(-1)['id'].substr(4, 1)) + 1
          } else {
            IRDnum = IRDno
          }
          var IRDid = `IRD0${IRDnum}`
          var IrdTTid = `IRDTT${IRDnum}`
          var IrdTTTEXTid = `IRDTTTEXT${IRDnum}`
          document
            .getElementsByClassName('irdclss')
            [IRDnum - 1].setAttribute('id', IRDid)
          document
            .getElementsByClassName('irdTTclass')
            [IRDnum - 1].setAttribute('id', IrdTTid)
          document
            .getElementsByClassName('irdTTclasstext')
            [IRDnum - 1].setAttribute('id', IrdTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(IRDid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(IRDid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(IrdTTid).setAttribute('x', 60)
          document.getElementById(IrdTTid).setAttribute('y', 200)

          var obj = {
            id: IRDid,
            pointA: x,
            pointB: y,
          }

          backend.IRD = [...backend.IRD, obj]
          console.log(backend)
          deleteElementIRD()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.irdetector').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}
var MICno = 1
document.getElementById('microbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.microphone').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextmic1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 3)
        document.getElementById('holeidtextmic2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(microphone)
          var k = Brd.append(p)

          if (Array.isArray(backend.Microphone) && backend.Microphone.length) {
            MICnum = parseInt(backend.Microphone.at(-1)['id'].substr(4, 1)) + 1
          } else {
            MICnum = MICno
          }
          var MICid = `MIC0${MICnum}`
          var MicTTid = `MICTT${MICnum}`
          var MicTTTEXTid = `MICTTTEXT${MICnum}`
          document
            .getElementsByClassName('microclss')
            [MICnum - 1].setAttribute('id', MICid)
          document
            .getElementsByClassName('micTTclass')
            [MICnum - 1].setAttribute('id', MicTTid)
          document
            .getElementsByClassName('micTTclasstext')
            [MICnum - 1].setAttribute('id', MicTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(MICid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(MICid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(MicTTid).setAttribute('x', 60)
          document.getElementById(MicTTid).setAttribute('y', 200)

          var obj = {
            id: MICid,
            pointA: x,
            pointB: y,
          }

          backend.Microphone = [...backend.Microphone, obj]
          console.log(backend)
          deleteElementMicrophone()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.microphone').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}
var DCMno = 1
document.getElementById('dcmbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.dcmotor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextdcm1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextdcm2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(dcmotor)
          var k = Brd.append(p)

          if (Array.isArray(backend.DCMotor) && backend.DCMotor.length) {
            DCMnum = parseInt(backend.DCMotor.at(-1)['id'].substr(4, 1)) + 1
          } else {
            DCMnum = DCMno
          }
          var DCMid = `DCM0${DCMnum}`
          var DcmTTid = `DCMTT${DCMnum}`
          var DcmTTTEXTid = `DCMTTTEXT${DCMnum}`
          document
            .getElementsByClassName('dcmclss')
            [DCMnum - 1].setAttribute('id', DCMid)
          document
            .getElementsByClassName('dcmTTclass')
            [DCMnum - 1].setAttribute('id', DcmTTid)
          document
            .getElementsByClassName('dcmTTclasstext')
            [DCMnum - 1].setAttribute('id', DcmTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(DCMid).setAttribute('x', parseInt(ccxx) - 20)
          document.getElementById(DCMid).setAttribute('y', parseInt(ccyy) - 50)
          document.getElementById(DcmTTid).setAttribute('x', 60)
          document.getElementById(DcmTTid).setAttribute('y', 200)

          var obj = {
            id: DCMid,
            pointA: x,
            pointB: y,
          }

          backend.DCMotor = [...backend.DCMotor, obj]
          console.log(backend)
          deleteElementDCMotor()

          removeEventOnclik()
          var holearrayids = getIDs(x, 2)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.dcmotor').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var VRSno = 1
document.getElementById('vrsbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.variableresistor').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextvrs1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextvrs2').innerHTML = y
        const z = x[0] + String(Number(x.slice(1)) + 2)
        document.getElementById('holeidtextvrs3').innerHTML = z

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(variableresistor)
          var k = Brd.append(p)

          if (Array.isArray(backend.VarRes) && backend.VarRes.length) {
            VRSnum = parseInt(backend.VarRes.at(-1)['id'].substr(4, 1)) + 1
          } else {
            VRSnum = VRSno
          }
          var VRSid = `VRS0${VRSnum}`
          var VrsTTid = `VRSTT${VRSnum}`
          var VrsTTTEXTid = `VRSTTTEXT${VRSnum}`
          document
            .getElementsByClassName('vrsclss')
            [VRSnum - 1].setAttribute('id', VRSid)
          document
            .getElementsByClassName('vrsTTclass')
            [VRSnum - 1].setAttribute('id', VrsTTid)
          document
            .getElementsByClassName('vrsTTclasstext')
            [VRSnum - 1].setAttribute('id', VrsTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(VRSid).setAttribute('x', parseInt(ccxx) - 21)
          document.getElementById(VRSid).setAttribute('y', parseInt(ccyy) - 40)
          document.getElementById(VrsTTid).setAttribute('x', 60)
          document.getElementById(VrsTTid).setAttribute('y', 200)

          var obj = {
            id: VRSid,
            pointA: x,
            pointB: z,
            pointC: y,
          }

          backend.VarRes = [...backend.VarRes, obj]
          console.log(backend)
          deleteElementVariableResistor()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.variableresistor').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var MTPno = 1
document.getElementById('mtbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.multiturntrimpot').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextmt1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextmt2').innerHTML = y
        const z = x[0] + String(Number(x.slice(1)) + 2)
        document.getElementById('holeidtextmt3').innerHTML = z

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(multiturntrimpot)
          var k = Brd.append(p)

          if (
            Array.isArray(backend.MultiturnTrimpot) &&
            backend.MultiturnTrimpot.length
          ) {
            MTPnum =
              parseInt(backend.MultiturnTrimpot.at(-1)['id'].substr(4, 1)) + 1
          } else {
            MTPnum = MTPno
          }
          var MTPid = `MTP0${MTPnum}`
          var MtpTTid = `MTPTT${MTPnum}`
          var MtpTTTEXTid = `MTPTTTEXT${MTPnum}`
          document
            .getElementsByClassName('mtclss')
            [MTPnum - 1].setAttribute('id', MTPid)
          document
            .getElementsByClassName('mtpTTclass')
            [MTPnum - 1].setAttribute('id', MtpTTid)
          document
            .getElementsByClassName('mtpTTclasstext')
            [MTPnum - 1].setAttribute('id', MtpTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(MTPid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(MTPid).setAttribute('y', parseInt(ccyy) - 30)
          document.getElementById(MtpTTid).setAttribute('x', 60)
          document.getElementById(MtpTTid).setAttribute('y', 200)

          var obj = {
            id: MTPid,
            pointA: x,
            pointB: z,
            pointC: y,
          }

          backend.MultiturnTrimpot = [...backend.MultiturnTrimpot, obj]
          console.log(backend)
          deleteElementMultiturnTrimpot()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.multiturntrimpot').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var VRGno = 1
document.getElementById('vrgbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.voltageregulator').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextvrg1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextvrg2').innerHTML = y
        const z = x[0] + String(Number(x.slice(1)) + 2)
        document.getElementById('holeidtextvrg3').innerHTML = z

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(voltageregulator)
          var k = Brd.append(p)

          if (
            Array.isArray(backend.VoltageRegulator) &&
            backend.VoltageRegulator.length
          ) {
            VRGnum =
              parseInt(backend.VoltageRegulator.at(-1)['id'].substr(4, 1)) + 1
          } else {
            VRGnum = VRGno
          }
          var VRGid = `VRG0${VRGnum}`
          var VrgTTid = `VRGTT${VRGnum}`
          var VrgTTTEXTid = `VRGTTTEXT${VRGnum}`
          document
            .getElementsByClassName('vrgclss')
            [VRGnum - 1].setAttribute('id', VRGid)
          document
            .getElementsByClassName('vrgTTclass')
            [VRGnum - 1].setAttribute('id', VrgTTid)
          document
            .getElementsByClassName('vrgTTclasstext')
            [VRGnum - 1].setAttribute('id', VrgTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(VRGid).setAttribute('x', parseInt(ccxx) - 21)
          document.getElementById(VRGid).setAttribute('y', parseInt(ccyy) - 40)
          document.getElementById(VrgTTid).setAttribute('x', 60)
          document.getElementById(VrgTTid).setAttribute('y', 200)

          var obj = {
            id: VRGid,
            pointA: x,
            pointB: z,
            pointC: y,
          }

          backend.VoltageRegulator = [...backend.VoltageRegulator, obj]
          console.log(backend)
          deleteElementVoltageRegulator()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.voltageregulator').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var RGBno = 1
document.getElementById('rgbledbutton').onclick = () => {
  var componentids = [
    'A61',
    'A62',
    'A63',
    'B61',
    'B62',
    'B63',
    'C61',
    'C62',
    'C63',
    'D61',
    'D62',
    'D63',
    'E61',
    'E62',
    'E63',
    'F61',
    'F62',
    'F63',
    'G61',
    'G62',
    'G63',
    'H61',
    'H62',
    'H63',
    'I61',
    'I62',
    'I63',
    'J61',
    'J62',
    'J63',
  ]
  holeid.forEach((x) => {
    enableholes(x)
  })
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.rgbled').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextrgb1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextrgb2').innerHTML = y

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(rgbled)
          var k = Brd.append(p)

          if (Array.isArray(backend.RGBLed) && backend.RGBLed.length) {
            RGBnum = parseInt(backend.RGBLed.at(-1)['id'].substr(4, 1)) + 1
          } else {
            RGBnum = RGBno
          }
          var RGBid = `RGB0${RGBnum}`
          var RgbTTid = `RGBTT${RGBnum}`
          var RgbTTTEXTid = `RGBTTTEXT${RGBnum}`
          document
            .getElementsByClassName('rgbledclss')
            [RGBnum - 1].setAttribute('id', RGBid)
          document
            .getElementsByClassName('rgbTTclass')
            [RGBnum - 1].setAttribute('id', RgbTTid)
          document
            .getElementsByClassName('rgbTTclasstext')
            [RGBnum - 1].setAttribute('id', RgbTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(RGBid).setAttribute('x', parseInt(ccxx) - 14)
          document.getElementById(RGBid).setAttribute('y', parseInt(ccyy) - 34)
          document.getElementById(RgbTTid).setAttribute('x', 60)
          document.getElementById(RgbTTid).setAttribute('y', 200)
          let w = parseInt(x.slice(1, 3)) + 2
          let z = parseInt(x.slice(1, 3)) + 3
          var obj = {
            id: RGBid,
            pointA: x,
            pointB: y,
            pointC: x[0] + w,
            pointD: x[0] + z,
          }

          backend.RGBLed = [...backend.RGBLed, obj]
          console.log(backend)
          deleteElementRGBLed()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.rgbled').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var OPAno = 1
document.getElementById('opbutton').onclick = () => {
  var componentids = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'A15',
    'A16',
    'A17',
    'A18',
    'A19',
    'A20',
    'A21',
    'A22',
    'A23',
    'A24',
    'A25',
    'A26',
    'A27',
    'A28',
    'A29',
    'A30',
    'A31',
    'A32',
    'A33',
    'A34',
    'A35',
    'A36',
    'A37',
    'A38',
    'A39',
    'A40',
    'A41',
    'A42',
    'A43',
    'A44',
    'A45',
    'A46',
    'A47',
    'A48',
    'A49',
    'A50',
    'A51',
    'A52',
    'A53',
    'A54',
    'A55',
    'A56',
    'A57',
    'A58',
    'A59',
    'A60',
    'A61',
    'A62',
    'A63',

    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'B11',
    'B12',
    'B13',
    'B14',
    'B15',
    'B16',
    'B17',
    'B18',
    'B19',
    'B20',
    'B21',
    'B22',
    'B23',
    'B24',
    'B25',
    'B26',
    'B27',
    'B28',
    'B29',
    'B30',
    'B31',
    'B32',
    'B33',
    'B34',
    'B35',
    'B36',
    'B37',
    'B38',
    'B39',
    'B40',
    'B41',
    'B42',
    'B43',
    'B44',
    'B45',
    'B46',
    'B47',
    'B48',
    'B49',
    'B50',
    'B51',
    'B52',
    'B53',
    'B54',
    'B55',
    'B56',
    'B57',
    'B58',
    'B59',
    'B60',
    'B61',
    'B62',
    'B63',

    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'C11',
    'C12',
    'C13',
    'C14',
    'C15',
    'C16',
    'C17',
    'C18',
    'C19',
    'C20',
    'C21',
    'C22',
    'C23',
    'C24',
    'C25',
    'C26',
    'C27',
    'C28',
    'C29',
    'C30',
    'C31',
    'C32',
    'C33',
    'C34',
    'C35',
    'C36',
    'C37',
    'C38',
    'C39',
    'C40',
    'C41',
    'C42',
    'C43',
    'C44',
    'C45',
    'C46',
    'C47',
    'C48',
    'C49',
    'C50',
    'C51',
    'C52',
    'C53',
    'C54',
    'C55',
    'C56',
    'C57',
    'C58',
    'C59',
    'C60',
    'C61',
    'C62',
    'C63',

    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'D11',
    'D12',
    'D13',
    'D14',
    'D15',
    'D16',
    'D17',
    'D18',
    'D19',
    'D20',
    'D21',
    'D22',
    'D23',
    'D24',
    'D25',
    'D26',
    'D27',
    'D28',
    'D29',
    'D30',
    'D31',
    'D32',
    'D33',
    'D34',
    'D35',
    'D36',
    'D37',
    'D38',
    'D39',
    'D40',
    'D41',
    'D42',
    'D43',
    'D44',
    'D45',
    'D46',
    'D47',
    'D48',
    'D49',
    'D50',
    'D51',
    'D52',
    'D53',
    'D54',
    'D55',
    'D56',
    'D57',
    'D58',
    'D59',
    'D60',
    'D61',
    'D62',
    'D63',

    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
    'G8',
    'G9',
    'G10',
    'G11',
    'G12',
    'G13',
    'G14',
    'G15',
    'G16',
    'G17',
    'G18',
    'G19',
    'G20',
    'G21',
    'G22',
    'G23',
    'G24',
    'G25',
    'G26',
    'G27',
    'G28',
    'G29',
    'G30',
    'G31',
    'G32',
    'G33',
    'G34',
    'G35',
    'G36',
    'G37',
    'G38',
    'G39',
    'G40',
    'G41',
    'G42',
    'G43',
    'G44',
    'G45',
    'G46',
    'G47',
    'G48',
    'G49',
    'G50',
    'G51',
    'G52',
    'G53',
    'G54',
    'G55',
    'G56',
    'G57',
    'G58',
    'G59',
    'G60',
    'G61',
    'G62',
    'G63',

    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'H10',
    'H11',
    'H12',
    'H13',
    'H14',
    'H15',
    'H16',
    'H17',
    'H18',
    'H19',
    'H20',
    'H21',
    'H22',
    'H23',
    'H24',
    'H25',
    'H26',
    'H27',
    'H28',
    'H29',
    'H30',
    'H31',
    'H32',
    'H33',
    'H34',
    'H35',
    'H36',
    'H37',
    'H38',
    'H39',
    'H40',
    'H41',
    'H42',
    'H43',
    'H44',
    'H45',
    'H46',
    'H47',
    'H48',
    'H49',
    'H50',
    'H51',
    'H52',
    'H53',
    'H54',
    'H55',
    'H56',
    'H57',
    'H58',
    'H59',
    'H60',
    'H61',
    'H62',
    'H63',

    'I1',
    'I2',
    'I3',
    'I4',
    'I5',
    'I6',
    'I7',
    'I8',
    'I9',
    'I10',
    'I11',
    'I12',
    'I13',
    'I14',
    'I15',
    'I16',
    'I17',
    'I18',
    'I19',
    'I20',
    'I21',
    'I22',
    'I23',
    'I24',
    'I25',
    'I26',
    'I27',
    'I28',
    'I29',
    'I30',
    'I31',
    'I32',
    'I33',
    'I34',
    'I35',
    'I36',
    'I37',
    'I38',
    'I39',
    'I40',
    'I41',
    'I42',
    'I43',
    'I44',
    'I45',
    'I46',
    'I47',
    'I48',
    'I49',
    'I50',
    'I51',
    'I52',
    'I53',
    'I54',
    'I55',
    'I56',
    'I57',
    'I58',
    'I59',
    'I60',
    'I61',
    'I62',
    'I63',

    'J1',
    'J2',
    'J3',
    'J4',
    'J5',
    'J6',
    'J7',
    'J8',
    'J9',
    'J10',
    'J11',
    'J12',
    'J13',
    'J14',
    'J15',
    'J16',
    'J17',
    'J18',
    'J19',
    'J20',
    'J21',
    'J22',
    'J23',
    'J24',
    'J25',
    'J26',
    'J27',
    'J28',
    'J29',
    'J30',
    'J31',
    'J32',
    'J33',
    'J34',
    'J35',
    'J36',
    'J37',
    'J38',
    'J39',
    'J40',
    'J41',
    'J42',
    'J43',
    'J44',
    'J45',
    'J46',
    'J47',
    'J48',
    'J49',
    'J50',
    'J51',
    'J52',
    'J53',
    'J54',
    'J55',
    'J56',
    'J57',
    'J58',
    'J59',
    'J60',
    'J61',
    'J62',
    'J63',
  ]

  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.opamp').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextopa1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextopa2').innerHTML = y

        let w = parseInt(x.slice(1, 3)) + 2
        let z = parseInt(x.slice(1, 3)) + 3
        let F = x[0].charCodeAt(0) + 1
        var chr = String.fromCharCode(F)

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(opamp)
          var k = Brd.append(p)

          if (Array.isArray(backend.Opamp) && backend.Opamp.length) {
            OPAnum = parseInt(backend.Opamp.at(-1)['id'].substr(4, 1)) + 1
          } else {
            OPAnum = OPAno
          }
          var OPAid = `OPA0${OPAnum}`
          var OpaTTid = `OPATT${OPAnum}`
          var OpaTTTEXTid = `OPATTTEXT${OPAnum}`
          document
            .getElementsByClassName('opampclss')
            [OPAnum - 1].setAttribute('id', OPAid)
          document
            .getElementsByClassName('opaTTclass')
            [OPAnum - 1].setAttribute('id', OpaTTid)
          document
            .getElementsByClassName('opaTTclasstext')
            [OPAnum - 1].setAttribute('id', OpaTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(OPAid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(OPAid).setAttribute('y', parseInt(ccyy) - 11)
          document.getElementById(OpaTTid).setAttribute('x', 60)
          document.getElementById(OpaTTid).setAttribute('y', 200)

          var obj = {
            id: OPAid,
            pointA: x,
            pointB: y,
            pointC: x[0] + w,
            pointD: x[0] + z,
            pointI: chr + x.slice(1),
            pointJ: chr + y.slice(1),
            pointK: chr + w,
            pointL: chr + z,
          }
          backend.Opamp = [...backend.Opamp, obj]
          console.log(backend)
          deleteElementOpamp()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.opamp').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var TCIno = 1
document.getElementById('tcbutton').onclick = () => {
  var componentids = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'A15',
    'A16',
    'A17',
    'A18',
    'A19',
    'A20',
    'A21',
    'A22',
    'A23',
    'A24',
    'A25',
    'A26',
    'A27',
    'A28',
    'A29',
    'A30',
    'A31',
    'A32',
    'A33',
    'A34',
    'A35',
    'A36',
    'A37',
    'A38',
    'A39',
    'A40',
    'A41',
    'A42',
    'A43',
    'A44',
    'A45',
    'A46',
    'A47',
    'A48',
    'A49',
    'A50',
    'A51',
    'A52',
    'A53',
    'A54',
    'A55',
    'A56',
    'A57',
    'A58',
    'A59',
    'A60',
    'A61',
    'A62',
    'A63',

    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'B11',
    'B12',
    'B13',
    'B14',
    'B15',
    'B16',
    'B17',
    'B18',
    'B19',
    'B20',
    'B21',
    'B22',
    'B23',
    'B24',
    'B25',
    'B26',
    'B27',
    'B28',
    'B29',
    'B30',
    'B31',
    'B32',
    'B33',
    'B34',
    'B35',
    'B36',
    'B37',
    'B38',
    'B39',
    'B40',
    'B41',
    'B42',
    'B43',
    'B44',
    'B45',
    'B46',
    'B47',
    'B48',
    'B49',
    'B50',
    'B51',
    'B52',
    'B53',
    'B54',
    'B55',
    'B56',
    'B57',
    'B58',
    'B59',
    'B60',
    'B61',
    'B62',
    'B63',

    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'C11',
    'C12',
    'C13',
    'C14',
    'C15',
    'C16',
    'C17',
    'C18',
    'C19',
    'C20',
    'C21',
    'C22',
    'C23',
    'C24',
    'C25',
    'C26',
    'C27',
    'C28',
    'C29',
    'C30',
    'C31',
    'C32',
    'C33',
    'C34',
    'C35',
    'C36',
    'C37',
    'C38',
    'C39',
    'C40',
    'C41',
    'C42',
    'C43',
    'C44',
    'C45',
    'C46',
    'C47',
    'C48',
    'C49',
    'C50',
    'C51',
    'C52',
    'C53',
    'C54',
    'C55',
    'C56',
    'C57',
    'C58',
    'C59',
    'C60',
    'C61',
    'C62',
    'C63',

    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'D11',
    'D12',
    'D13',
    'D14',
    'D15',
    'D16',
    'D17',
    'D18',
    'D19',
    'D20',
    'D21',
    'D22',
    'D23',
    'D24',
    'D25',
    'D26',
    'D27',
    'D28',
    'D29',
    'D30',
    'D31',
    'D32',
    'D33',
    'D34',
    'D35',
    'D36',
    'D37',
    'D38',
    'D39',
    'D40',
    'D41',
    'D42',
    'D43',
    'D44',
    'D45',
    'D46',
    'D47',
    'D48',
    'D49',
    'D50',
    'D51',
    'D52',
    'D53',
    'D54',
    'D55',
    'D56',
    'D57',
    'D58',
    'D59',
    'D60',
    'D61',
    'D62',
    'D63',

    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
    'G8',
    'G9',
    'G10',
    'G11',
    'G12',
    'G13',
    'G14',
    'G15',
    'G16',
    'G17',
    'G18',
    'G19',
    'G20',
    'G21',
    'G22',
    'G23',
    'G24',
    'G25',
    'G26',
    'G27',
    'G28',
    'G29',
    'G30',
    'G31',
    'G32',
    'G33',
    'G34',
    'G35',
    'G36',
    'G37',
    'G38',
    'G39',
    'G40',
    'G41',
    'G42',
    'G43',
    'G44',
    'G45',
    'G46',
    'G47',
    'G48',
    'G49',
    'G50',
    'G51',
    'G52',
    'G53',
    'G54',
    'G55',
    'G56',
    'G57',
    'G58',
    'G59',
    'G60',
    'G61',
    'G62',
    'G63',

    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'H10',
    'H11',
    'H12',
    'H13',
    'H14',
    'H15',
    'H16',
    'H17',
    'H18',
    'H19',
    'H20',
    'H21',
    'H22',
    'H23',
    'H24',
    'H25',
    'H26',
    'H27',
    'H28',
    'H29',
    'H30',
    'H31',
    'H32',
    'H33',
    'H34',
    'H35',
    'H36',
    'H37',
    'H38',
    'H39',
    'H40',
    'H41',
    'H42',
    'H43',
    'H44',
    'H45',
    'H46',
    'H47',
    'H48',
    'H49',
    'H50',
    'H51',
    'H52',
    'H53',
    'H54',
    'H55',
    'H56',
    'H57',
    'H58',
    'H59',
    'H60',
    'H61',
    'H62',
    'H63',

    'I1',
    'I2',
    'I3',
    'I4',
    'I5',
    'I6',
    'I7',
    'I8',
    'I9',
    'I10',
    'I11',
    'I12',
    'I13',
    'I14',
    'I15',
    'I16',
    'I17',
    'I18',
    'I19',
    'I20',
    'I21',
    'I22',
    'I23',
    'I24',
    'I25',
    'I26',
    'I27',
    'I28',
    'I29',
    'I30',
    'I31',
    'I32',
    'I33',
    'I34',
    'I35',
    'I36',
    'I37',
    'I38',
    'I39',
    'I40',
    'I41',
    'I42',
    'I43',
    'I44',
    'I45',
    'I46',
    'I47',
    'I48',
    'I49',
    'I50',
    'I51',
    'I52',
    'I53',
    'I54',
    'I55',
    'I56',
    'I57',
    'I58',
    'I59',
    'I60',
    'I61',
    'I62',
    'I63',

    'J1',
    'J2',
    'J3',
    'J4',
    'J5',
    'J6',
    'J7',
    'J8',
    'J9',
    'J10',
    'J11',
    'J12',
    'J13',
    'J14',
    'J15',
    'J16',
    'J17',
    'J18',
    'J19',
    'J20',
    'J21',
    'J22',
    'J23',
    'J24',
    'J25',
    'J26',
    'J27',
    'J28',
    'J29',
    'J30',
    'J31',
    'J32',
    'J33',
    'J34',
    'J35',
    'J36',
    'J37',
    'J38',
    'J39',
    'J40',
    'J41',
    'J42',
    'J43',
    'J44',
    'J45',
    'J46',
    'J47',
    'J48',
    'J49',
    'J50',
    'J51',
    'J52',
    'J53',
    'J54',
    'J55',
    'J56',
    'J57',
    'J58',
    'J59',
    'J60',
    'J61',
    'J62',
    'J63',
  ]
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.timerchip').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtexttci1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtexttci2').innerHTML = y
        let w = parseInt(x.slice(1, 3)) + 2
        let z = parseInt(x.slice(1, 3)) + 3
        let F = x[0].charCodeAt(0) + 1
        var chr = String.fromCharCode(F)
        // console.log(x.slice(1))

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(timerchip)
          var k = Brd.append(p)

          if (Array.isArray(backend.TimerChip) && backend.TimerChip.length) {
            TCInum = parseInt(backend.TimerChip.at(-1)['id'].substr(4, 1)) + 1
          } else {
            TCInum = TCIno
          }
          var TCIid = `TCI0${TCInum}`
          var TciTTid = `TCITT${TCInum}`
          var TciTTTEXTid = `TCITTTEXT${TCInum}`

          document
            .getElementsByClassName('tcclss')
            [TCInum - 1].setAttribute('id', TCIid)
          document
            .getElementsByClassName('tciTTclass')
            [TCInum - 1].setAttribute('id', TciTTid)
          document
            .getElementsByClassName('tciTTclasstext')
            [TCInum - 1].setAttribute('id', TciTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(TCIid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(TCIid).setAttribute('y', parseInt(ccyy) - 11)
          document.getElementById(TciTTid).setAttribute('x', 60)
          document.getElementById(TciTTid).setAttribute('y', 200)

          var obj = {
            id: TCIid,
            pointA: x,
            pointB: y,
            pointC: x[0] + w,
            pointD: x[0] + z,
            pointI: chr + x.slice(1),
            pointJ: chr + y.slice(1),
            pointK: chr + w,
            pointL: chr + z,
          }

          backend.TimerChip = [...backend.TimerChip, obj]
          console.log(backend)
          deleteElementTimerChip()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.timerchip').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

var MDRno = 1
document.getElementById('mrbutton').onclick = () => {
  var componentids = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'A15',
    'A16',
    'A17',
    'A18',
    'A19',
    'A20',
    'A21',
    'A22',
    'A23',
    'A24',
    'A25',
    'A26',
    'A27',
    'A28',
    'A29',
    'A30',
    'A31',
    'A32',
    'A33',
    'A34',
    'A35',
    'A36',
    'A37',
    'A38',
    'A39',
    'A40',
    'A41',
    'A42',
    'A43',
    'A44',
    'A45',
    'A46',
    'A47',
    'A48',
    'A49',
    'A50',
    'A51',
    'A52',
    'A53',
    'A54',
    'A55',
    'A56',
    'A57',
    'A58',
    'A59',
    'A60',
    'A61',
    'A62',
    'A63',

    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'B11',
    'B12',
    'B13',
    'B14',
    'B15',
    'B16',
    'B17',
    'B18',
    'B19',
    'B20',
    'B21',
    'B22',
    'B23',
    'B24',
    'B25',
    'B26',
    'B27',
    'B28',
    'B29',
    'B30',
    'B31',
    'B32',
    'B33',
    'B34',
    'B35',
    'B36',
    'B37',
    'B38',
    'B39',
    'B40',
    'B41',
    'B42',
    'B43',
    'B44',
    'B45',
    'B46',
    'B47',
    'B48',
    'B49',
    'B50',
    'B51',
    'B52',
    'B53',
    'B54',
    'B55',
    'B56',
    'B57',
    'B58',
    'B59',
    'B60',
    'B61',
    'B62',
    'B63',

    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'C11',
    'C12',
    'C13',
    'C14',
    'C15',
    'C16',
    'C17',
    'C18',
    'C19',
    'C20',
    'C21',
    'C22',
    'C23',
    'C24',
    'C25',
    'C26',
    'C27',
    'C28',
    'C29',
    'C30',
    'C31',
    'C32',
    'C33',
    'C34',
    'C35',
    'C36',
    'C37',
    'C38',
    'C39',
    'C40',
    'C41',
    'C42',
    'C43',
    'C44',
    'C45',
    'C46',
    'C47',
    'C48',
    'C49',
    'C50',
    'C51',
    'C52',
    'C53',
    'C54',
    'C55',
    'C56',
    'C57',
    'C58',
    'C59',
    'C60',
    'C61',
    'C62',
    'C63',

    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'D11',
    'D12',
    'D13',
    'D14',
    'D15',
    'D16',
    'D17',
    'D18',
    'D19',
    'D20',
    'D21',
    'D22',
    'D23',
    'D24',
    'D25',
    'D26',
    'D27',
    'D28',
    'D29',
    'D30',
    'D31',
    'D32',
    'D33',
    'D34',
    'D35',
    'D36',
    'D37',
    'D38',
    'D39',
    'D40',
    'D41',
    'D42',
    'D43',
    'D44',
    'D45',
    'D46',
    'D47',
    'D48',
    'D49',
    'D50',
    'D51',
    'D52',
    'D53',
    'D54',
    'D55',
    'D56',
    'D57',
    'D58',
    'D59',
    'D60',
    'D61',
    'D62',
    'D63',

    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
    'G8',
    'G9',
    'G10',
    'G11',
    'G12',
    'G13',
    'G14',
    'G15',
    'G16',
    'G17',
    'G18',
    'G19',
    'G20',
    'G21',
    'G22',
    'G23',
    'G24',
    'G25',
    'G26',
    'G27',
    'G28',
    'G29',
    'G30',
    'G31',
    'G32',
    'G33',
    'G34',
    'G35',
    'G36',
    'G37',
    'G38',
    'G39',
    'G40',
    'G41',
    'G42',
    'G43',
    'G44',
    'G45',
    'G46',
    'G47',
    'G48',
    'G49',
    'G50',
    'G51',
    'G52',
    'G53',
    'G54',
    'G55',
    'G56',
    'G57',
    'G58',
    'G59',
    'G60',
    'G61',
    'G62',
    'G63',

    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'H10',
    'H11',
    'H12',
    'H13',
    'H14',
    'H15',
    'H16',
    'H17',
    'H18',
    'H19',
    'H20',
    'H21',
    'H22',
    'H23',
    'H24',
    'H25',
    'H26',
    'H27',
    'H28',
    'H29',
    'H30',
    'H31',
    'H32',
    'H33',
    'H34',
    'H35',
    'H36',
    'H37',
    'H38',
    'H39',
    'H40',
    'H41',
    'H42',
    'H43',
    'H44',
    'H45',
    'H46',
    'H47',
    'H48',
    'H49',
    'H50',
    'H51',
    'H52',
    'H53',
    'H54',
    'H55',
    'H56',
    'H57',
    'H58',
    'H59',
    'H60',
    'H61',
    'H62',
    'H63',

    'I1',
    'I2',
    'I3',
    'I4',
    'I5',
    'I6',
    'I7',
    'I8',
    'I9',
    'I10',
    'I11',
    'I12',
    'I13',
    'I14',
    'I15',
    'I16',
    'I17',
    'I18',
    'I19',
    'I20',
    'I21',
    'I22',
    'I23',
    'I24',
    'I25',
    'I26',
    'I27',
    'I28',
    'I29',
    'I30',
    'I31',
    'I32',
    'I33',
    'I34',
    'I35',
    'I36',
    'I37',
    'I38',
    'I39',
    'I40',
    'I41',
    'I42',
    'I43',
    'I44',
    'I45',
    'I46',
    'I47',
    'I48',
    'I49',
    'I50',
    'I51',
    'I52',
    'I53',
    'I54',
    'I55',
    'I56',
    'I57',
    'I58',
    'I59',
    'I60',
    'I61',
    'I62',
    'I63',

    'J1',
    'J2',
    'J3',
    'J4',
    'J5',
    'J6',
    'J7',
    'J8',
    'J9',
    'J10',
    'J11',
    'J12',
    'J13',
    'J14',
    'J15',
    'J16',
    'J17',
    'J18',
    'J19',
    'J20',
    'J21',
    'J22',
    'J23',
    'J24',
    'J25',
    'J26',
    'J27',
    'J28',
    'J29',
    'J30',
    'J31',
    'J32',
    'J33',
    'J34',
    'J35',
    'J36',
    'J37',
    'J38',
    'J39',
    'J40',
    'J41',
    'J42',
    'J43',
    'J44',
    'J45',
    'J46',
    'J47',
    'J48',
    'J49',
    'J50',
    'J51',
    'J52',
    'J53',
    'J54',
    'J55',
    'J56',
    'J57',
    'J58',
    'J59',
    'J60',
    'J61',
    'J62',
    'J63',
  ]
  var componenthode = []
  componentids.forEach((x) => {
    disableholes(x)
  })
  inspectordivs.forEach((div) => div.classList.add('hidden'))
  document.querySelector('.motordriver').classList.remove('hidden')

  holeid.forEach(
    (x) =>
      (document.getElementById(x).onclick = () => {
        document.getElementById('holeidtextmdr1').innerHTML = x
        const y = x[0] + String(Number(x.slice(1)) + 1)
        document.getElementById('holeidtextmdr2').innerHTML = y
        const z = x[0] + String(Number(x.slice(1)) + 2)
        const a = x[0] + String(Number(x.slice(1)) + 3)
        const b = x[0] + String(Number(x.slice(1)) + 4)
        const c = x[0] + String(Number(x.slice(1)) + 5)
        const d = x[0] + String(Number(x.slice(1)) + 6)
        const e = x[0] + String(Number(x.slice(1)) + 7)
        let L = x[0].charCodeAt(0) + 1
        var chr = String.fromCharCode(L)
        const f = chr + String(Number(x.slice(1)))
        const g = chr + String(Number(x.slice(1)) + 1)
        const h = chr + String(Number(x.slice(1)) + 2)
        const i = chr + String(Number(x.slice(1)) + 3)
        const j = chr + String(Number(x.slice(1)) + 4)
        const l = chr + String(Number(x.slice(1)) + 5)
        const m = chr + String(Number(x.slice(1)) + 6)
        const n = chr + String(Number(x.slice(1)) + 7)

        document.getElementById('donebutton').onclick = () => {
          var p = Snap.parse(motordriver)
          var k = Brd.append(p)

          if (
            Array.isArray(backend.MotorDriver) &&
            backend.MotorDriver.length
          ) {
            MDRnum = parseInt(backend.MotorDriver.at(-1)['id'].substr(4, 1)) + 1
          } else {
            MDRnum = MDRno
          }
          var MDRid = `MDR0${MDRnum}`
          var MdrTTid = `MDRTT${MDRnum}`
          var MdrTTTEXTid = `MDRTTTEXT${MDRnum}`

          document
            .getElementsByClassName('mdclss')
            [MDRnum - 1].setAttribute('id', MDRid)
          document
            .getElementsByClassName('mdrTTclass')
            [MDRnum - 1].setAttribute('id', MdrTTid)
          document
            .getElementsByClassName('mdrTTclasstext')
            [MDRnum - 1].setAttribute('id', MdrTTTEXTid)

          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(MDRid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(MDRid).setAttribute('y', parseInt(ccyy) - 11)
          document.getElementById(MdrTTid).setAttribute('x', 60)
          document.getElementById(MdrTTid).setAttribute('y', 200)

          var obj = {
            id: MDRid,
            pointA: x,
            pointB: y,
            pointC: z,
            pointD: a,
            pointE: b,
            pointF: c,
            pointG: d,
            pointH: e,
            pointI: f,
            pointJ: g,
            pointK: h,
            pointL: i,
            pointM: j,
            pointN: l,
            pointO: m,
            pointP: n,
          }

          backend.MotorDriver = [...backend.MotorDriver, obj]
          console.log(backend)
          deleteElementMotorDriver()

          removeEventOnclik()
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
          /*   componenthode.forEach((x) => {
            disableholes(x)
          }) */
          componentids.forEach((x) => {
            enableholes(x)
          })
          document.querySelector('.motordriver').classList.add('hidden')
        }
      })
  )

  componentids.forEach((x) => {
    disableholes(x)
  })
  function removeEventOnclik() {
    holeid.forEach((x) => {
      document.getElementById(x).onclick = null
    })
  }
}

function getIDs(startid, noholes) {
  var letter = startid[0]
  var number = startid.slice(1)
  var holearray = []
  var intnumber = parseInt(number)

  if (intnumber < 61) {
    for (i = intnumber; i < intnumber + noholes; i++) {
      holearray.push(letter + `${i}`)
    }
  } else {
    console.log('OUT OF RANGE PLEASE TRY AGAIN')
  }

  //console.log(holearray)
  return holearray
}

function disableholes(componentids) {
  //console.log(componentids)

  document.getElementById(componentids).style.fill = 'gray'
  document.getElementById(componentids).onclick = null
}

function enableholes(componentids) {
  //console.log(componentids)

  document.getElementById(componentids).style.removeProperty('fill')
}

function deleteElementRes() {
  //origin 2
  backend.Res.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.Res = backend.Res.filter((item) => !(item.id == x.id))

        var length = backend.Res.length // 1
        for (let i = 0; i < length; i++) {
          var l = i + 1 // 1
          var origin = backend.Res[i]['id'] // L02
          var new_id = `RES0${l}` // L01
          backend.Res[i]['id'] = new_id // L02 change L01
          document.getElementById(origin).setAttribute('id', new_id)

          bandid = origin.substring(4, 5)
          var new_Bid1 = `RESB1${l}`
          var new_Bid2 = `RESB2${l}`
          var new_Bid3 = `RESB3${l}`
          var new_Bid4 = `RESB4${l}`
          var new_Bid5 = `RESB5${l}`
          var new_TTid = `RESTT${l}`
          var new_TTtextid = `RESTTTEXT${l}`

          document.getElementById(`RESB1${bandid}`).setAttribute('id', new_Bid1)
          document.getElementById(`RESB2${bandid}`).setAttribute('id', new_Bid2)
          document.getElementById(`RESB3${bandid}`).setAttribute('id', new_Bid3)
          document.getElementById(`RESB4${bandid}`).setAttribute('id', new_Bid4)
          document.getElementById(`RESB5${bandid}`).setAttribute('id', new_Bid5)
          document.getElementById(`RESTT${bandid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`RESTTTEXT${bandid}`)
            .setAttribute('id', new_TTtextid)
        }
        console.log(backend)

        //Rnum = Rnum-1
      }

      //console.log(backend)
    }
  })

  function removeEventOnclikcomm() {
    backend.Res.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementLed() {
  backend.Led.forEach((x) => {
    console.log(x.id)
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.Led = backend.Led.filter((item) => !(item.id == x.id))

        var length = backend.Led.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.Led[i]['id']
          let bandid = origin.substring(4, 5)
          var new_id = `LED0${l}`
          var new_TTid = `LEDTT${l}`
          var new_TTtextid = `LEDTTTEXT${l}`
          backend.Led[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`LEDTT${bandid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`LEDTTTEXT${bandid}`)
            .setAttribute('id', new_TTtextid)
        }

        console.log(backend)
      }

      //console.log(backend)
    }
  })

  function removeEventOnclikcomm() {
    backend.Led.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementWire() {
  backend.Wire.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        console.log(x.id)
        document.getElementById(x.id).remove()
        backend.Wire = backend.Wire.filter((item) => !(item.id == x.id))

        var length = backend.Wire.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.Wire[i]['id']

          var new_id = `WIR0${l}`
          backend.Wire[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)

          wireid = origin.substring(4, 5)
          var new_WCid = `WIRWC0${l}`
          var new_LCid = `WIRLC0${l}`
          var new_RCid = `WIRRC0${l}`
          var new_TTid = `WIRTT${l}`
          var new_TTtextid = `WIRTTTEXT${l}`
          document
            .getElementById(`WIRWC0${wireid}`)
            .setAttribute('id', new_WCid)
          document
            .getElementById(`WIRLC0${wireid}`)
            .setAttribute('id', new_LCid)
          document
            .getElementById(`WIRRC0${wireid}`)
            .setAttribute('id', new_RCid)
          document.getElementById(`WIRTT${wireid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`WIRTTTEXT${wireid}`)
            .setAttribute('id', new_TTtextid)
        }
      }

      //console.log(backend)
    }
  })
}

function deleteElementVoltageSource() {
  //origin 2
  backend.VoltageSource.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.VoltageSource = backend.VoltageSource.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.VoltageSource.length // 1
        for (let i = 0; i < length; i++) {
          var l = i + 1 // 1

          var origin = backend.VoltageSource[i]['id'] // L02
          let vsoid = origin.substring(4, 5)
          var new_id = `VSO0${l}` // L01
          var new_TTid = `VSOTT${l}`
          var new_TTtextid = `VSOTTTEXT${l}`
          backend.VoltageSource[i]['id'] = new_id // L02 change L01
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`VSOTT${vsoid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`VSOTTTEXT${vsoid}`)
            .setAttribute('id', new_TTtextid)
        }
        console.log(backend)
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.VoltageSource.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementDiode() {
  backend.Diode.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.Diode = backend.Diode.filter((item) => !(item.id == x.id))

        var length = backend.Diode.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.Diode[i]['id']
          let dioid = origin.substring(4, 5)

          var new_id = `DIO0${l}`
          var new_TTid = `DIOTT${l}`
          var new_TTtextid = `DIOTTTEXT${l}`
          backend.Diode[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`DIOTT${dioid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`DIOTTTEXT${dioid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.Diode.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementInductor() {
  backend.Inductor.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.Inductor = backend.Inductor.filter((item) => !(item.id == x.id))

        var length = backend.Inductor.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.Inductor[i]['id']
          let indid = origin.substring(4, 5)
          var new_id = `IND0${l}`
          var new_TTid = `INDTT${l}`
          var new_TTtextid = `INDTTTEXT${l}`
          backend.Inductor[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`INDTT${indid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`INDTTTEXT${indid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.Inductor.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementCCapacitor() {
  backend.CCapacitor.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.CCapacitor = backend.CCapacitor.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.CCapacitor.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.CCapacitor[i]['id']
          let ccaid = origin.substring(4, 5)
          var new_id = `CCA0${l}`
          var new_TTid = `CCATT${l}`
          var new_TTtextid = `CCATTTEXT${l}`
          backend.CCapacitor[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`CCATT${ccaid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`CCATTTEXT${ccaid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.CCapacitor.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementECapacitor() {
  backend.ECapacitor.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.ECapacitor = backend.ECapacitor.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.ECapacitor.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.ECapacitor[i]['id']
          let ecaid = origin.substring(4, 5)
          var new_id = `ECA0${l}`
          var new_TTid = `ECATT${l}`
          var new_TTtextid = `ECATTTEXT${l}`
          backend.ECapacitor[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`ECATT${ecaid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`ECATTTEXT${ecaid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.ECapacitor.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementLDR() {
  backend.LDR.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.LDR = backend.LDR.filter((item) => !(item.id == x.id))

        var length = backend.LDR.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.LDR[i]['id']
          let ldrid = origin.substring(4, 5)
          var new_id = `LDR0${l}`
          var new_TTid = `LDRTT${l}`
          var new_TTtextid = `LDRTTTEXT${l}`
          backend.LDR[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`LDRTT${ldrid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`LDRTTTEXT${ldrid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.LDR.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementIRE() {
  backend.IRE.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.IRE = backend.IRE.filter((item) => !(item.id == x.id))

        var length = backend.IRE.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.IRE[i]['id']
          let ireid = origin.substring(4, 5)
          var new_id = `IRE0${l}`
          var new_TTid = `IRETT${l}`
          var new_TTtextid = `IRETTTEXT${l}`
          backend.IRE[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`IRETT${ireid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`IRETTTEXT${ireid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.IRE.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementIRD() {
  backend.IRD.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.IRD = backend.IRD.filter((item) => !(item.id == x.id))

        var length = backend.IRD.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.IRD[i]['id']
          let irdid = origin.substring(4, 5)
          var new_id = `IRD0${l}`
          var new_TTid = `IRDTT${l}`
          var new_TTtextid = `IRDTTTEXT${l}`
          backend.IRD[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`IRDTT${irdid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`IRDTTTEXT${irdid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.IRD.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementMicrophone() {
  backend.Microphone.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.Microphone = backend.Microphone.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.Microphone.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.Microphone[i]['id']
          let micid = origin.substring(4, 5)
          var new_id = `MIC0${l}`
          var new_TTid = `MICTT${l}`
          var new_TTtextid = `MICTTTEXT${l}`
          backend.Microphone[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`MICTT${micid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`MICTTTEXT${micid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.Microphone.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementDCMotor() {
  backend.DCMotor.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.DCMotor = backend.DCMotor.filter((item) => !(item.id == x.id))

        var length = backend.DCMotor.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.DCMotor[i]['id']
          let dcmid = origin.substring(4, 5)
          var new_id = `DCM0${l}`
          var new_TTid = `DCMTT${l}`
          var new_TTtextid = `DCMTTTEXT${l}`
          backend.DCMotor[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`DCMTT${dcmid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`DCMTTTEXT${dcmid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.DCMotor.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementVariableResistor() {
  backend.VarRes.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.VarRes = backend.VarRes.filter((item) => !(item.id == x.id))

        var length = backend.VarRes.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.VarRes[i]['id']
          let vrsid = origin.substring(4, 5)
          var new_id = `VRS0${l}`
          var new_TTid = `VRSTT${l}`
          var new_TTtextid = `VRSTTTEXT${l}`
          backend.VarRes[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`VRSTT${vrsid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`VRSTTTEXT${vrsid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.VarRes.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementMultiturnTrimpot() {
  backend.MultiturnTrimpot.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.MultiturnTrimpot = backend.MultiturnTrimpot.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.MultiturnTrimpot.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.MultiturnTrimpot[i]['id']
          let mtpid = origin.substring(4, 5)
          var new_id = `MTP0${l}`
          var new_TTid = `MTPTT${l}`
          var new_TTtextid = `MTPTTTEXT${l}`
          backend.VarRes[i]['id'] = new_id
          backend.MultiturnTrimpot[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`MTPTT${mtpid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`MTPTTTEXT${mtpid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.MultiturnTrimpot.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementVoltageRegulator() {
  backend.VoltageRegulator.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.VoltageRegulator = backend.VoltageRegulator.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.VoltageRegulator.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.VoltageRegulator[i]['id']
          let vrgid = origin.substring(4, 5)
          var new_id = `VRG0${l}`
          var new_TTid = `VRGTT${l}`
          var new_TTtextid = `VRGTTTEXT${l}`
          backend.VoltageRegulator[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`VRGTT${vrgid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`VRGTTTEXT${vrgid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.VoltageRegulator.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
function deleteElementRGBLed() {
  backend.RGBLed.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.RGBLed = backend.RGBLed.filter((item) => !(item.id == x.id))

        var length = backend.RGBLed.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.RGBLed[i]['id']
          let rgbid = origin.substring(4, 5)
          var new_id = `RGB0${l}`
          var new_TTid = `RGBTT${l}`
          var new_TTtextid = `RGBTTTEXT${l}`
          backend.RGBLed[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`RGBTT${rgbid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`RGBTTTEXT${rgbid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.RGBLed.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementOpamp() {
  backend.Opamp.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.Opamp = backend.Opamp.filter((item) => !(item.id == x.id))

        var length = backend.Opamp.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.Opamp[i]['id']
          let opaid = origin.substring(4, 5)
          var new_id = `OPA0${l}`
          var new_TTid = `OPATT${l}`
          var new_TTtextid = `OPATTTEXT${l}`
          backend.Opamp[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`OPATT${opaid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`OPATTTEXT${opaid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.Opamp.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementTimerChip() {
  backend.TimerChip.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.TimerChip = backend.TimerChip.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.TimerChip.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.TimerChip[i]['id']
          let tciid = origin.substring(4, 5)
          var new_id = `TCI0${l}`
          var new_TTid = `TCITT${l}`
          var new_TTtextid = `TCITTTEXT${l}`
          backend.TimerChip[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`TCITT${tciid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`TCITTTEXT${tciid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.TimerChip.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}

function deleteElementMotorDriver() {
  backend.MotorDriver.forEach((x) => {
    document.getElementById(x.id).onclick = () => {
      document.getElementById('deletebutton').onclick = () => {
        document.getElementById(x.id).remove()
        backend.MotorDriver = backend.MotorDriver.filter(
          (item) => !(item.id == x.id)
        )

        var length = backend.MotorDriver.length
        for (let i = 0; i < length; i++) {
          var l = i + 1
          var origin = backend.MotorDriver[i]['id']
          let mdrid = origin.substring(4, 5)
          var new_id = `MDR0${l}`
          var new_TTid = `MDRTT${l}`
          var new_TTtextid = `MDRTTTEXT${l}`
          backend.MotorDriver[i]['id'] = new_id
          document.getElementById(origin).setAttribute('id', new_id)
          document.getElementById(`MDRTT${mdrid}`).setAttribute('id', new_TTid)
          document
            .getElementById(`MDRTTTEXT${mdrid}`)
            .setAttribute('id', new_TTtextid)
        }
      }
    }
  })

  function removeEventOnclikcomm() {
    backend.MotorDriver.forEach((x) => {
      document.getElementById(x.id).onclick = null
    })
  }
}
document.getElementById('Submitbutton').onclick = () => {
  var backendjason = JSON.stringify(backend)
  console.log(backendjason)
}
//download function
function download(content, fileName, contentType) {
  const a = document.createElement('a')
  const file = new Blob([content], { type: contentType })
  a.href = URL.createObjectURL(file)
  a.download = fileName
  a.click()
}

//get User from session Storage to check student or professor
var user = sessionStorage.getItem('User')

function onDownload() {
  console.log(user)
  //user 1 means he is professor
  if (user == 1) {
    //data encrypt and download
    var secret = 'My Secret Passphrase'
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(backend), secret)
    console.log(encrypted)
    download(encrypted, 'circuit.json', 'text/plain')
  }
  //user 2 means he is student
  else if (user == 2) {
    console.log(backend)
    //download without encrypting
    download(JSON.stringify(backend), 'circuit.json', 'text/plain')
  }
  console.log(user)
}

//upload function
document.getElementById('input_file').addEventListener('change', function () {
  var file_to_read = document.getElementById('input_file').files[0] //get file path
  var fileread = new FileReader()
  fileread.onload = function (e) {
    var content = e.target.result
    if (user == 1) {
      var secret = 'My Secret Passphrase'
      var decrypted = CryptoJS.AES.decrypt(content, secret) //decrypt the encrypted data
      var result = decrypted.toString(CryptoJS.enc.Utf8) //change the data to string
      var intern = JSON.parse(result) // parse json
      backend = intern
      loadcircuit(backend)
    } else if (user == 2) {
      console.log('STUDENT:')
      document.getElementById('verify').onclick = () => {
        //VERIFY WITH PROF
        console.log('VERIFY MODE:')
        var secret = 'My Secret Passphrase'
        var decrypted = CryptoJS.AES.decrypt(content, secret) //decrypt the encrypted data
        var profjson = decrypted.toString(CryptoJS.enc.Utf8) //change the data to string
        //  var profanswer = JSON.parse(result) // parse json
        //  console.log(profanswer)
        //  console.log(backend)
        var studentjson = JSON.stringify(backend)
        backenddd(profjson, studentjson)
      }

      document.getElementById('continue').onclick = () => {
        //CONTINUE STUDENT CIRCUIT
        console.log('CONTINUE MODE:')
        var intern = JSON.parse(content) // parse json

        backend = intern
        loadcircuit(backend)
      }
    } else {
      console.log('NEITHER PROF OR STUDENT')
      console.log(user)
    }

    function loadcircuit(backend) {
      //for Led
      if (Array.isArray(backend.Led) && backend.Led.length) {
        var componenthode = []

        var ledpointAArray = []
        var y = backend.Led
        y.forEach((x) => {
          ledpointAArray.push(x['pointA']) //get Led pointA from json and set to an Array
        })
        //remove some function from above Led on click function

        ledpointAArray.forEach((x, i) => {
          // document.getElementById('holeidtextl1').innerHTML = x

          var p = Snap.parse(led)
          var k = Brd.append(p)
          var LEDid = backend.Led[i]['id'] //get LED id from json
          var LEDnum = LEDid.substr(4, 2) // remove LED code from id
          var LedTTid = `LEDTT${LEDnum}`
          var LedTTTEXTid = `LEDTTTEXT${LEDnum}`

          document
            .getElementsByClassName('ledclss')
            [LEDnum - 1].setAttribute('id', LEDid)
          document
            .getElementsByClassName('ledTTclass')
            [LEDnum - 1].setAttribute('id', LedTTid)
          document
            .getElementsByClassName('ledTTclasstext')
            [LEDnum - 1].setAttribute('id', LedTTTEXTid)

          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(LEDid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(LEDid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(LedTTid).setAttribute('x', 60)
          document.getElementById(LedTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //for Wire
      if (Array.isArray(backend.Wire) && backend.Wire.length) {
        var wirepointAArray = []
        var wirepointBArray = []
        var z = backend.Wire
        z.forEach((x) => {
          wirepointAArray.push(x['pointA']) //get Wire pointA from json and set to an Array
          wirepointBArray.push(x['pointB']) //get Wire pointB from json and set to an Array
        })
        //remove some function and nested array from above Wire on click function
        wirepointAArray.forEach((x, i) => {
          // document.getElementById('holeidtextw1').innerHTML = x
          var ccxx1 = document.getElementById(x).getAttribute('cx')
          var ccyy1 = document.getElementById(x).getAttribute('cy')

          y = wirepointBArray[i]

          // document.getElementById('holeidtextw2').innerHTML = y
          var ccxx2 = document.getElementById(y).getAttribute('cx')
          var ccyy2 = document.getElementById(y).getAttribute('cy')
          // console.log('x2', ccxx2)
          // console.log('y2', ccyy2)

          var wirecolor = getcolor()
          // console.log(wirecolor)

          var p = Snap.parse(wire)
          var k = Brd.append(p)
          var WIRid = backend.Wire[i]['id']
          var WIRnum = WIRid.substr(4, 2)

          var Wid = `WIR0${WIRnum}`
          var WCid = `WIRWC0${WIRnum}`
          var LCid = `WIRLC0${WIRnum}`
          var RCid = `WIRRC0${WIRnum}`

          document
            .getElementsByClassName('wireclass2')
            [WIRnum - 1].setAttribute('id', Wid)

          document
            .getElementsByClassName('wireclass')
            [WIRnum - 1].setAttribute('id', WCid)

          document
            .getElementsByClassName('leftcclass')
            [WIRnum - 1].setAttribute('id', LCid)

          document
            .getElementsByClassName('rightcclass')
            [WIRnum - 1].setAttribute('id', RCid)

          document.getElementById(WCid).setAttribute('x1', parseInt(ccxx1))
          document.getElementById(WCid).setAttribute('y1', parseInt(ccyy1))
          document.getElementById(WCid).setAttribute('x2', parseInt(ccxx2))
          document.getElementById(WCid).setAttribute('y2', parseInt(ccyy2))
          document.getElementById(LCid).setAttribute('cx', parseInt(ccxx1))
          document.getElementById(LCid).setAttribute('cy', parseInt(ccyy1))
          document.getElementById(RCid).setAttribute('cx', parseInt(ccxx2))
          document.getElementById(RCid).setAttribute('cy', parseInt(ccyy2))

          document.getElementById(LCid).setAttribute('fill', `${wirecolor}`)
          document.getElementById(LCid).setAttribute('stroke', `${wirecolor}`)
          document.getElementById(WCid).setAttribute('stroke', `${wirecolor}`)
          document.getElementById(RCid).setAttribute('fill', `${wirecolor}`)
          document.getElementById(RCid).setAttribute('stroke', `${wirecolor}`)
          // removeEventOnclik()
          // Wnum = Wnum + 1

          function getcolor() {
            var colorValue =
              document.getElementById('select').options[
                document.getElementById('select').selectedIndex
              ].text

            return colorValue
          }
        })
      }

      //for Resistor
      if (Array.isArray(backend.Res) && backend.Res.length) {
        var componenthode = []
        var respointAArray = []
        var b = backend.Res
        b.forEach((x) => {
          respointAArray.push(x['pointA']) //get Wire pointA from json and set to an Array
        })

        //remove some function from above Res on click function
        respointAArray.forEach((x, i) => {
          // document.getElementById('holeidtextr1').innerHTML = x

          var firstbandcolor = getcolor1()
          var secondbandcolor = getcolor2()
          var thirdbandcolor = getcolor3()
          var fourthbandcolor = getcolor4()
          var fifthbandcolor = getcolor5()

          // console.log(firstbandcolor)
          var p = Snap.parse(resistor)
          var k = Brd.append(p)
          var RESnum = backend.Res[i]['id'].substr(4, 2) // remove Res code from id
          var Rid = `RES0${RESnum}`
          var RB1id = `RESB1${RESnum}`
          var RB2id = `RESB2${RESnum}`
          var RB3id = `RESB3${RESnum}`
          var RB4id = `RESB4${RESnum}`
          var RB5id = `RESB5${RESnum}`
          var ResTTid = `RESTT${RESnum}`
          var ResTTTEXTid = `RESTTTEXT${RESnum}`

          // console.log(Rnum - 1)
          document
            .getElementsByClassName('resclss')
            [RESnum - 1].setAttribute('id', Rid)

          document
            .getElementsByClassName('firstband')
            [RESnum - 1].setAttribute('id', RB1id)

          document
            .getElementsByClassName('secondband')
            [RESnum - 1].setAttribute('id', RB2id)
          document
            .getElementsByClassName('thirdband')
            [RESnum - 1].setAttribute('id', RB3id)

          document
            .getElementsByClassName('fourthband')
            [RESnum - 1].setAttribute('id', RB4id)

          document
            .getElementsByClassName('fifthband')
            [RESnum - 1].setAttribute('id', RB5id)
          document
            .getElementsByClassName('resTTclass')
            [RESnum - 1].setAttribute('id', ResTTid)
          document
            .getElementsByClassName('resTTclasstext')
            [RESnum - 1].setAttribute('id', ResTTTEXTid)

          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')

          console.log(parseInt(ccxx))
          document.getElementById(Rid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(Rid).setAttribute('y', parseInt(ccyy) - 12)
          document.getElementById(ResTTid).setAttribute('x', 40)
          document.getElementById(ResTTid).setAttribute('y', 120)
          document
            .getElementById(RB1id)
            .setAttribute('fill', `${firstbandcolor}`)
          document
            .getElementById(RB1id)
            .setAttribute('stroke', `${firstbandcolor}`)
          document
            .getElementById(RB2id)
            .setAttribute('fill', `${secondbandcolor}`)
          document
            .getElementById(RB2id)
            .setAttribute('stroke', `${secondbandcolor}`)

          document
            .getElementById(RB3id)
            .setAttribute('fill', `${thirdbandcolor}`)
          document
            .getElementById(RB3id)
            .setAttribute('stroke', `${thirdbandcolor}`)

          document
            .getElementById(RB4id)
            .setAttribute('fill', `${fourthbandcolor}`)
          document
            .getElementById(RB4id)
            .setAttribute('stroke', `${fourthbandcolor}`)

          document
            .getElementById(RB5id)
            .setAttribute('fill', `${fifthbandcolor}`)
          document
            .getElementById(RB5id)
            .setAttribute('stroke', `${fifthbandcolor}`)

          function getcolor1() {
            var colorValue = document
              .getElementById('firstband')
              .options[
                document.getElementById('firstband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor2() {
            var colorValue = document
              .getElementById('secondband')
              .options[
                document.getElementById('secondband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor3() {
            var colorValue = document
              .getElementById('thirdband')
              .options[
                document.getElementById('thirdband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor4() {
            var colorValue = document
              .getElementById('fourthband')
              .options[
                document.getElementById('fourthband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          function getcolor5() {
            var colorValue = document
              .getElementById('fifthband')
              .options[
                document.getElementById('fifthband').selectedIndex
              ].text.slice(1)

            return colorValue
          }

          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //for Voltage Source
      if (
        Array.isArray(backend.VoltageSource) &&
        backend.VoltageSource.length
      ) {
        var vsopointAArray = []
        var vsopointBArray = []
        var z = backend.VoltageSource
        z.forEach((x) => {
          vsopointAArray.push(x['pointA']) //get Wire pointA from json and set to an Array
          vsopointBArray.push(x['pointB']) //get Wire pointB from json and set to an Array
        })
        //remove some function and nested array from above Wire on click function
        vsopointAArray.forEach((x, i) => {
          // document.getElementById('holeidtextw1').innerHTML = x
          var ccxx1 = document.getElementById(x).getAttribute('cx')
          var ccyy1 = document.getElementById(x).getAttribute('cy')

          y = vsopointBArray[i]

          // document.getElementById('holeidtextw2').innerHTML = y
          var ccxx2 = document.getElementById(y).getAttribute('cx')
          var ccyy2 = document.getElementById(y).getAttribute('cy')
          // console.log('x2', ccxx2)
          // console.log('y2', ccyy2)

          var p = Snap.parse(voltagesource)
          var k = Brd.append(p)
          var VSOid = backend.VoltageSource[i]['id']
          var VSOnum = VSOid.substr(4, 2)

          var VSid = `VSO0${VSOnum}`
          var Pid = `P0${VSOnum}`
          var Nid = `N0${VSOnum}`
          var WVid = `WV0${VSOnum}`
          var LCCid = `LCC0${VSOnum}`
          var RCCid = `RCC0${VSOnum}`
          var VSCid = `VSC0${VSOnum}`
          var VsoTTid = `VSOTT${VSOnum}`
          var VsoTTTEXTid = `VSOTTTEXT${VSOnum}`

          document
            .getElementsByClassName('vsclss')
            [VSOnum - 1].setAttribute('id', VSid)
          document
            .getElementsByClassName('positiveclass')
            [VSOnum - 1].setAttribute('id', Pid)
          document
            .getElementsByClassName('negativeclass')
            [VSOnum - 1].setAttribute('id', Nid)
          document
            .getElementsByClassName('wirevsclass')
            [VSOnum - 1].setAttribute('id', WVid)

          document
            .getElementsByClassName('leftcircleclass')
            [VSOnum - 1].setAttribute('id', LCCid)

          document
            .getElementsByClassName('rightcircleclass')
            [VSOnum - 1].setAttribute('id', RCCid)

          document
            .getElementsByClassName('vscircleclass')
            [VSOnum - 1].setAttribute('id', VSCid)

          document
            .getElementsByClassName('vsoTTclass')
            [VSOnum - 1].setAttribute('id', VsoTTid)
          document
            .getElementsByClassName('vsoTTclasstext')
            [VSOnum - 1].setAttribute('id', VsoTTTEXTid)
          document.getElementById(WVid).setAttribute('stroke', 'black')
          document.getElementById(WVid).setAttribute('x1', parseInt(ccxx1))
          document.getElementById(WVid).setAttribute('y1', parseInt(ccyy1))
          document.getElementById(WVid).setAttribute('x2', parseInt(ccxx2))
          document.getElementById(WVid).setAttribute('y2', parseInt(ccyy2))
          document.getElementById(LCCid).setAttribute('cx', parseInt(ccxx1))
          document.getElementById(LCCid).setAttribute('cy', parseInt(ccyy1))
          document.getElementById(RCCid).setAttribute('cx', parseInt(ccxx2))
          document.getElementById(RCCid).setAttribute('cy', parseInt(ccyy2))
          document
            .getElementById(VSCid)
            .setAttribute('cx', (parseInt(ccxx1) + parseInt(ccxx2)) / 2)
          document
            .getElementById(VSCid)
            .setAttribute('cy', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)
          document
            .getElementById(Pid)
            .setAttribute('x', (parseInt(ccxx1) + parseInt(ccxx2)) / 2 - 12)
          document
            .getElementById(Pid)
            .setAttribute('y', (parseInt(ccyy1) + parseInt(ccyy2)) / 2 + 4)

          document
            .getElementById(Nid)
            .setAttribute('y', (parseInt(ccyy1) + parseInt(ccyy2)) / 2 + 3)
          document
            .getElementById(Nid)
            .setAttribute('x', (parseInt(ccxx1) + parseInt(ccxx2)) / 2 + 3)
          document
            .getElementById(VsoTTid)
            .setAttribute('x', (parseInt(ccyy1) + parseInt(ccyy2)) / 2)
          document
            .getElementById(VsoTTid)
            .setAttribute('y', (parseInt(ccyy1) + parseInt(ccyy2)) / 2 + 50)
        })
      }

      //  for diode
      if (Array.isArray(backend.Diode) && backend.Diode.length) {
        var componenthode = []

        var diodepointAArray = []
        var y = backend.Diode
        y.forEach((x) => {
          diodepointAArray.push(x['pointA']) //get Led pointA from json and set to an Array
        })
        //remove some function from above Led on click function

        diodepointAArray.forEach((x, i) => {
          // document.getElementById('holeidtextl1').innerHTML = x

          var p = Snap.parse(diode)
          var k = Brd.append(p)
          var DIOid = backend.Diode[i]['id'] //get LED id from json
          var DIOnum = DIOid.substr(4, 2) // remove LED code from id
          var DioTTid = `DIOTT${DIOnum}`
          var DioTTTEXTid = `DIOTTTEXT${DIOnum}`
          document
            .getElementsByClassName('diodeclss')
            [DIOnum - 1].setAttribute('id', DIOid)
          document
            .getElementsByClassName('dioTTclass')
            [DIOnum - 1].setAttribute('id', DioTTid)
          document
            .getElementsByClassName('dioTTclasstext')
            [DIOnum - 1].setAttribute('id', DioTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(DIOid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(DIOid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(DioTTid).setAttribute('x', 60)
          document.getElementById(DioTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for inductor
      if (Array.isArray(backend.Inductor) && backend.Inductor.length) {
        var componenthode = []

        var inductorpointAArray = []
        var y = backend.Inductor
        y.forEach((x) => {
          inductorpointAArray.push(x['pointA']) //get Led pointA from json and set to an Array
        })
        //remove some function from above Led on click function

        inductorpointAArray.forEach((x, i) => {
          // document.getElementById('holeidtextl1').innerHTML = x

          var p = Snap.parse(inductor)
          var k = Brd.append(p)
          var INDid = backend.Inductor[i]['id']
          var INDnum = INDid.substr(4, 2)
          var IndTTid = `INDTT${INDnum}`
          var IndTTTEXTid = `INDTTTEXT${INDnum}`
          document
            .getElementsByClassName('inductorclss')
            [INDnum - 1].setAttribute('id', INDid)
          document
            .getElementsByClassName('indTTclass')
            [INDnum - 1].setAttribute('id', IndTTid)
          document
            .getElementsByClassName('indTTclasstext')
            [INDnum - 1].setAttribute('id', IndTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(INDid).setAttribute('x', parseInt(ccxx) - 6)
          document.getElementById(INDid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(IndTTid).setAttribute('x', 60)
          document.getElementById(IndTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for ccapacitor
      if (Array.isArray(backend.CCapacitor) && backend.CCapacitor.length) {
        var componenthode = []

        var ccapacitorpointAArray = []
        var y = backend.CCapacitor
        y.forEach((x) => {
          ccapacitorpointAArray.push(x['pointA'])
        })

        ccapacitorpointAArray.forEach((x, i) => {
          var p = Snap.parse(ccapacitor)
          var k = Brd.append(p)
          var CCAid = backend.CCapacitor[i]['id']
          var CCAnum = CCAid.substr(4, 2)
          var CcaTTid = `CCATT${CCAnum}`
          var CcaTTTEXTid = `CCATTTEXT${CCAnum}`
          document
            .getElementsByClassName('ccapacitorclss')
            [CCAnum - 1].setAttribute('id', CCAid)
          document
            .getElementsByClassName('ccaTTclass')
            [CCAnum - 1].setAttribute('id', CcaTTid)
          document
            .getElementsByClassName('ccaTTclasstext')
            [CCAnum - 1].setAttribute('id', CcaTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(CCAid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(CCAid).setAttribute('y', parseInt(ccyy) - 17)
          document.getElementById(CcaTTid).setAttribute('x', 60)
          document.getElementById(CcaTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }
      //  for ecapacitor
      if (Array.isArray(backend.ECapacitor) && backend.ECapacitor.length) {
        var componenthode = []

        var ecapacitorpointAArray = []
        var y = backend.ECapacitor
        y.forEach((x) => {
          ecapacitorpointAArray.push(x['pointA'])
        })

        ecapacitorpointAArray.forEach((x, i) => {
          var p = Snap.parse(ecapacitor)
          var k = Brd.append(p)
          var ECAid = backend.ECapacitor[i]['id']
          var ECAnum = ECAid.substr(4, 2)
          var EcaTTid = `ECATT${ECAnum}`
          var EcaTTTEXTid = `ECATTTEXT${ECAnum}`
          document
            .getElementsByClassName('ecapacitorclss')
            [ECAnum - 1].setAttribute('id', ECAid)
          document
            .getElementsByClassName('ecaTTclass')
            [ECAnum - 1].setAttribute('id', EcaTTid)
          document
            .getElementsByClassName('ecaTTclasstext')
            [ECAnum - 1].setAttribute('id', EcaTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(ECAid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(ECAid).setAttribute('y', parseInt(ccyy) - 50)
          document.getElementById(EcaTTid).setAttribute('x', 60)
          document.getElementById(EcaTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for ldr
      if (Array.isArray(backend.LDR) && backend.LDR.length) {
        var componenthode = []

        var ldrpointAArray = []
        var y = backend.LDR
        y.forEach((x) => {
          ldrpointAArray.push(x['pointA'])
        })

        ldrpointAArray.forEach((x, i) => {
          var p = Snap.parse(ldr)
          var k = Brd.append(p)
          var LDRid = backend.LDR[i]['id']
          var LDRnum = LDRid.substr(4, 2)
          var LdrTTid = `LDRTT${LDRnum}`
          var LdrTTTEXTid = `LDRTTTEXT${LDRnum}`
          document
            .getElementsByClassName('ldrclss')
            [LDRnum - 1].setAttribute('id', LDRid)
          document
            .getElementsByClassName('ldrTTclass')
            [LDRnum - 1].setAttribute('id', LdrTTid)
          document
            .getElementsByClassName('ldrTTclasstext')
            [LDRnum - 1].setAttribute('id', LdrTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(LDRid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(LDRid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(LdrTTid).setAttribute('x', 60)
          document.getElementById(LdrTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for ire
      if (Array.isArray(backend.IRE) && backend.IRE.length) {
        var componenthode = []

        var irepointAArray = []
        var y = backend.IRE
        y.forEach((x) => {
          irepointAArray.push(x['pointA'])
        })

        irepointAArray.forEach((x, i) => {
          var p = Snap.parse(ire)
          var k = Brd.append(p)
          var IREid = backend.IRE[i]['id']
          var IREnum = IREid.substr(4, 2)
          var IreTTid = `IRETT${IREnum}`
          var IreTTTEXTid = `IRETTTEXT${IREnum}`
          document
            .getElementsByClassName('ireclss')
            [IREnum - 1].setAttribute('id', IREid)
          document
            .getElementsByClassName('ireTTclass')
            [IREnum - 1].setAttribute('id', IreTTid)
          document
            .getElementsByClassName('ireTTclasstext')
            [IREnum - 1].setAttribute('id', IreTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(IREid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(IREid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(IreTTid).setAttribute('x', 60)
          document.getElementById(IreTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for ird
      if (Array.isArray(backend.IRD) && backend.IRD.length) {
        var componenthode = []

        var irdpointAArray = []
        var y = backend.IRD
        y.forEach((x) => {
          irdpointAArray.push(x['pointA'])
        })

        irdpointAArray.forEach((x, i) => {
          var p = Snap.parse(ird)
          var k = Brd.append(p)
          var IRDid = backend.IRD[i]['id']
          var IRDnum = IRDid.substr(4, 2)
          var IrdTTid = `IRDTT${IRDnum}`
          var IrdTTTEXTid = `IRDTTTEXT${IRDnum}`
          document
            .getElementsByClassName('irdclss')
            [IRDnum - 1].setAttribute('id', IRDid)
          document
            .getElementsByClassName('irdTTclass')
            [IRDnum - 1].setAttribute('id', IrdTTid)
          document
            .getElementsByClassName('irdTTclasstext')
            [IRDnum - 1].setAttribute('id', IrdTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(IRDid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(IRDid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(IrdTTid).setAttribute('x', 60)
          document.getElementById(IrdTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }
      //  for Microphone
      if (Array.isArray(backend.Microphone) && backend.Microphone.length) {
        var componenthode = []

        var microphonepointAArray = []
        var y = backend.Microphone
        y.forEach((x) => {
          microphonepointAArray.push(x['pointA'])
        })

        microphonepointAArray.forEach((x, i) => {
          var p = Snap.parse(microphone)
          var k = Brd.append(p)
          var MICid = backend.Microphone[i]['id']
          var MICnum = MICid.substr(4, 2)
          var MicTTid = `MICTT${MICnum}`
          var MicTTTEXTid = `MICTTTEXT${MICnum}`
          document
            .getElementsByClassName('microclss')
            [MICnum - 1].setAttribute('id', MICid)
          document
            .getElementsByClassName('micTTclass')
            [MICnum - 1].setAttribute('id', MicTTid)
          document
            .getElementsByClassName('micTTclasstext')
            [MICnum - 1].setAttribute('id', MicTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(MICid).setAttribute('x', parseInt(ccxx) - 8)
          document.getElementById(MICid).setAttribute('y', parseInt(ccyy) - 32)
          document.getElementById(MicTTid).setAttribute('x', 60)
          document.getElementById(MicTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }
      //  for DC Motor
      if (Array.isArray(backend.DCMotor) && backend.DCMotor.length) {
        var componenthode = []

        var dcmotorpointAArray = []
        var y = backend.DCMotor
        y.forEach((x) => {
          dcmotorpointAArray.push(x['pointA'])
        })

        dcmotorpointAArray.forEach((x, i) => {
          var p = Snap.parse(dcmotor)
          var k = Brd.append(p)
          var DCMid = backend.DCMotor[i]['id']
          var DCMnum = DCMid.substr(4, 2)
          var DcmTTid = `DCMTT${DCMnum}`
          var DcmTTTEXTid = `DCMTTTEXT${DCMnum}`
          document
            .getElementsByClassName('dcmclss')
            [DCMnum - 1].setAttribute('id', DCMid)
          document
            .getElementsByClassName('dcmTTclass')
            [DCMnum - 1].setAttribute('id', DcmTTid)
          document
            .getElementsByClassName('dcmTTclasstext')
            [DCMnum - 1].setAttribute('id', DcmTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(DCMid).setAttribute('x', parseInt(ccxx) - 20)
          document.getElementById(DCMid).setAttribute('y', parseInt(ccyy) - 50)
          document.getElementById(DcmTTid).setAttribute('x', 60)
          document.getElementById(DcmTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for Variable Resistor
      if (Array.isArray(backend.VarRes) && backend.VarRes.length) {
        var componenthode = []

        var variableresistorpointAArray = []
        var y = backend.VarRes
        y.forEach((x) => {
          variableresistorpointAArray.push(x['pointA'])
        })

        variableresistorpointAArray.forEach((x, i) => {
          var p = Snap.parse(variableresistor)
          var k = Brd.append(p)
          var VRSid = backend.VarRes[i]['id']
          var VRSnum = VRSid.substr(4, 2)
          var VrsTTid = `VRSTT${VRSnum}`
          var VrsTTTEXTid = `VRSTTTEXT${VRSnum}`
          document
            .getElementsByClassName('vrsclss')
            [VRSnum - 1].setAttribute('id', VRSid)
          document
            .getElementsByClassName('vrsTTclass')
            [VRSnum - 1].setAttribute('id', VrsTTid)
          document
            .getElementsByClassName('vrsTTclasstext')
            [VRSnum - 1].setAttribute('id', VrsTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(VRSid).setAttribute('x', parseInt(ccxx) - 21)
          document.getElementById(VRSid).setAttribute('y', parseInt(ccyy) - 40)
          document.getElementById(VrsTTid).setAttribute('x', 60)
          document.getElementById(VrsTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for Multiturn Trimpot
      if (
        Array.isArray(backend.MultiturnTrimpot) &&
        backend.MultiturnTrimpot.length
      ) {
        var componenthode = []

        var multiturntrimpotpointAArray = []
        var y = backend.MultiturnTrimpot
        y.forEach((x) => {
          multiturntrimpotpointAArray.push(x['pointA'])
        })

        multiturntrimpotpointAArray.forEach((x, i) => {
          var p = Snap.parse(multiturntrimpot)
          var k = Brd.append(p)
          var MTPid = backend.MultiturnTrimpot[i]['id']
          var MTPnum = MTPid.substr(4, 2)
          var MtpTTid = `MTPTT${MTPnum}`
          var MtpTTTEXTid = `MTPTTTEXT${MTPnum}`
          document
            .getElementsByClassName('mtclss')
            [MTPnum - 1].setAttribute('id', MTPid)
          document
            .getElementsByClassName('mtpTTclass')
            [MTPnum - 1].setAttribute('id', MtpTTid)
          document
            .getElementsByClassName('mtpTTclasstext')
            [MTPnum - 1].setAttribute('id', MtpTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(MTPid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(MTPid).setAttribute('y', parseInt(ccyy) - 30)
          document.getElementById(MtpTTid).setAttribute('x', 60)
          document.getElementById(MtpTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //  for Voltage Regulator
      if (
        Array.isArray(backend.VoltageRegulator) &&
        backend.VoltageRegulator.length
      ) {
        var componenthode = []

        var voltageregulatorpointAArray = []
        var y = backend.VoltageRegulator
        y.forEach((x) => {
          voltageregulatorpointAArray.push(x['pointA'])
        })

        voltageregulatorpointAArray.forEach((x, i) => {
          var p = Snap.parse(voltageregulator)
          var k = Brd.append(p)
          var VRGid = backend.VoltageRegulator[i]['id']
          var VRGnum = VRGid.substr(4, 2)
          var VrgTTid = `VRGTT${VRGnum}`
          var VrgTTTEXTid = `VRGTTTEXT${VRGnum}`
          document
            .getElementsByClassName('vrgclss')
            [VRGnum - 1].setAttribute('id', VRGid)
          document
            .getElementsByClassName('vrgTTclass')
            [VRGnum - 1].setAttribute('id', VrgTTid)
          document
            .getElementsByClassName('vrgTTclasstext')
            [VRGnum - 1].setAttribute('id', VrgTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(VRGid).setAttribute('x', parseInt(ccxx) - 21)
          document.getElementById(VRGid).setAttribute('y', parseInt(ccyy) - 40)
          document.getElementById(VrgTTid).setAttribute('x', 60)
          document.getElementById(VrgTTid).setAttribute('y', 200)

          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //for RGBLed
      if (Array.isArray(backend.RGBLed) && backend.RGBLed.length) {
        var componenthode = []

        var rgbledpointAArray = []
        var y = backend.RGBLed
        y.forEach((x) => {
          rgbledpointAArray.push(x['pointA'])
        })

        rgbledpointAArray.forEach((x, i) => {
          var p = Snap.parse(rgbled)
          var k = Brd.append(p)
          var RGBid = backend.RGBLed[i]['id']
          var RGBnum = RGBid.substr(4, 2)
          var RgbTTid = `RGBTT${RGBnum}`
          var RgbTTTEXTid = `RGBTTTEXT${RGBnum}`
          document
            .getElementsByClassName('rgbledclss')
            [RGBnum - 1].setAttribute('id', RGBid)
          document
            .getElementsByClassName('rgbTTclass')
            [RGBnum - 1].setAttribute('id', RgbTTid)
          document
            .getElementsByClassName('rgbTTclasstext')
            [RGBnum - 1].setAttribute('id', RgbTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(RGBid).setAttribute('x', parseInt(ccxx) - 14)
          document.getElementById(RGBid).setAttribute('y', parseInt(ccyy) - 34)
          document.getElementById(RgbTTid).setAttribute('x', 60)
          document.getElementById(RgbTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //for Opamp
      if (Array.isArray(backend.Opamp) && backend.Opamp.length) {
        var componenthode = []

        var opamppointAArray = []
        var y = backend.Opamp
        y.forEach((x) => {
          opamppointAArray.push(x['pointA'])
        })

        opamppointAArray.forEach((x, i) => {
          var p = Snap.parse(opamp)
          var k = Brd.append(p)
          var OPAid = backend.Opamp[i]['id']
          var OPAnum = OPAid.substr(4, 2)
          var OpaTTid = `OPATT${OPAnum}`
          var OpaTTTEXTid = `OPATTTEXT${OPAnum}`
          document
            .getElementsByClassName('opampclss')
            [OPAnum - 1].setAttribute('id', OPAid)
          document
            .getElementsByClassName('opaTTclass')
            [OPAnum - 1].setAttribute('id', OpaTTid)
          document
            .getElementsByClassName('opaTTclasstext')
            [OPAnum - 1].setAttribute('id', OpaTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(OPAid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(OPAid).setAttribute('y', parseInt(ccyy) - 11)
          document.getElementById(OpaTTid).setAttribute('x', 60)
          document.getElementById(OpaTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //for Timerchip
      if (Array.isArray(backend.TimerChip) && backend.TimerChip.length) {
        var componenthode = []

        var timerchippointAArray = []
        var y = backend.TimerChip
        y.forEach((x) => {
          timerchippointAArray.push(x['pointA'])
        })

        timerchippointAArray.forEach((x, i) => {
          var p = Snap.parse(timerchip)
          var k = Brd.append(p)
          var TCIid = backend.TimerChip[i]['id']
          var TCInum = TCIid.substr(4, 2)
          var TciTTid = `TCITT${TCInum}`
          var TciTTTEXTid = `TCITTTEXT${TCInum}`
          document
            .getElementsByClassName('tcclss')
            [TCInum - 1].setAttribute('id', TCIid)
          document
            .getElementsByClassName('tciTTclass')
            [TCInum - 1].setAttribute('id', TciTTid)
          document
            .getElementsByClassName('tciTTclasstext')
            [TCInum - 1].setAttribute('id', TciTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(TCIid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(TCIid).setAttribute('y', parseInt(ccyy) - 11)
          document.getElementById(TciTTid).setAttribute('x', 60)
          document.getElementById(TciTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      //for Motordriver
      if (Array.isArray(backend.MotorDriver) && backend.MotorDriver.length) {
        var componenthode = []

        var motordriverpointAArray = []
        var y = backend.MotorDriver
        y.forEach((x) => {
          motordriverpointAArray.push(x['pointA'])
        })

        motordriverpointAArray.forEach((x, i) => {
          var p = Snap.parse(motordriver)
          var k = Brd.append(p)
          var MDRid = backend.MotorDriver[i]['id']
          var MDRnum = MDRid.substr(4, 2)
          var MdrTTid = `MDRTT${MDRnum}`
          var MdrTTTEXTid = `MDRTTTEXT${MDRnum}`
          document
            .getElementsByClassName('mdclss')
            [MDRnum - 1].setAttribute('id', MDRid)
          document
            .getElementsByClassName('mdrTTclass')
            [MDRnum - 1].setAttribute('id', MdrTTid)
          document
            .getElementsByClassName('mdrTTclasstext')
            [MDRnum - 1].setAttribute('id', MdrTTTEXTid)
          var ccxx = document.getElementById(x).getAttribute('cx')
          var ccyy = document.getElementById(x).getAttribute('cy')
          document.getElementById(MDRid).setAttribute('x', parseInt(ccxx) - 13)
          document.getElementById(MDRid).setAttribute('y', parseInt(ccyy) - 11)
          document.getElementById(MdrTTid).setAttribute('x', 60)
          document.getElementById(MdrTTid).setAttribute('y', 200)
          var holearrayids = getIDs(x, 4)
          holearrayids.forEach((x) => {
            componenthode.push(x)
          })
        })
      }

      deleteElementLed()
      deleteElementRes()
      deleteElementWire()
      deleteElementVoltageSource()
      deleteElementDiode()
      deleteElementInductor()
      deleteElementCCapacitor()
      deleteElementECapacitor()
      deleteElementLDR()
      deleteElementIRE()
      deleteElementIRD()
      deleteElementMicrophone()
      deleteElementDCMotor()
      deleteElementVariableResistor()
      deleteElementMultiturnTrimpot()
      deleteElementVoltageRegulator()
      deleteElementRGBLed()
      deleteElementOpamp()
      deleteElementTimerChip()
      deleteElementMotorDriver()
    }
  }
  fileread.readAsText(file_to_read)
})

function backenddd(prof, student) {
  document.getElementById('wrongresistorvalue').innerHTML = ''
  document.getElementById('componentshorted').innerHTML = ''
  document.getElementById('componentshorted1').innerHTML = ''
  document.getElementById('componentnotconnected').innerHTML = ''
  document.getElementById('wrongcomponent').innerHTML = ''
  document.getElementById('wrongconnectionA').innerHTML = ''
  document.getElementById('wrongconnectionB').innerHTML = ''
  document.getElementById('wrongconnectionC').innerHTML = ''
  document.getElementById('wrongconnectionD').innerHTML = ''
  document.getElementById('wrongconnectionE').innerHTML = ''
  document.getElementById('wrongconnectionF').innerHTML = ''
  document.getElementById('wrongconnectionG').innerHTML = ''
  document.getElementById('wrongconnectionH').innerHTML = ''
  document.getElementById('wrongconnectionI').innerHTML = ''
  document.getElementById('wrongconnectionJ').innerHTML = ''
  document.getElementById('wrongconnectionK').innerHTML = ''
  document.getElementById('wrongconnectionL').innerHTML = ''
  document.getElementById('wrongconnectionM').innerHTML = ''
  document.getElementById('wrongconnectionN').innerHTML = ''
  document.getElementById('wrongconnectionO').innerHTML = ''
  document.getElementById('wrongconnectionP').innerHTML = ''

  //PARSE JSON DATA AND CREATE COPIES OF IT
  var start = performance.now()
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
        if (component.pointC) {
          if (component.pointC.length <= 4) {
            const letterC = component.pointC.slice(0, 1)
            const numberC = component.pointC.slice(1)
            const newpointC = topSection.includes(letterC)
              ? 'T' + numberC
              : 'B' + numberC
            component.pointC = newpointC
          }
        }
        if (component.pointD) {
          if (component.pointD.length <= 4) {
            const letterD = component.pointD.slice(0, 1)
            const numberD = component.pointD.slice(1)
            const newpointD = topSection.includes(letterD)
              ? 'T' + numberD
              : 'B' + numberD
            component.pointD = newpointD
          }
        }
        if (component.pointI) {
          if (component.pointI.length <= 4) {
            const letterI = component.pointI.slice(0, 1)
            const numberI = component.pointI.slice(1)
            const newpointI = topSection.includes(letterI)
              ? 'T' + numberI
              : 'B' + numberI
            component.pointI = newpointI
          }
        }
        if (component.pointJ) {
          if (component.pointJ.length <= 4) {
            const letterJ = component.pointJ.slice(0, 1)
            const numberJ = component.pointJ.slice(1)
            const newpointJ = topSection.includes(letterJ)
              ? 'T' + numberJ
              : 'B' + numberJ
            component.pointJ = newpointJ
          }
        }
        if (component.pointK) {
          if (component.pointK.length <= 4) {
            const letterK = component.pointK.slice(0, 1)
            const numberK = component.pointK.slice(1)
            const newpointK = topSection.includes(letterK)
              ? 'T' + numberK
              : 'B' + numberK
            component.pointK = newpointK
          }
        }
        if (component.pointL) {
          if (component.pointL.length <= 4) {
            const letterL = component.pointL.slice(0, 1)
            const numberL = component.pointL.slice(1)
            const newpointL = topSection.includes(letterL)
              ? 'T' + numberL
              : 'B' + numberL
            component.pointL = newpointL
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

  //REMOVE THE NUMBERS FROM THE IDS - RES01--> RES
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

  //MAKE THE POINTS A AND B OF THE COPY OF PROFJSON AND COPY OF STUDENTJSON TO PUSH IN COMPONENTS LATER
  const makeobjarray = function (data) {
    for (let component of data) {
      component.pointA = []
      component.pointB = []
      component.pointC = []
      component.pointD = []
      component.pointE = []
      component.pointF = []
      component.pointG = []
      component.pointH = []
      component.pointI = []
      component.pointJ = []
      component.pointK = []
      component.pointL = []
      component.pointM = []
      component.pointN = []
      component.pointO = []
      component.pointP = []
    }
  }

  makeobjarray(studentnewdata2)
  makeobjarray(profnewdata2)

  //CHECKING FOR WIRES CONNECTED ON THE POINTB OF EACH  (RECURSIVE IF >1 WIRE )
  function CheckNextPointB(h, dataorg) {
    for (let component of dataorg) {
      if (h.pointB.slice(0, 2) == 'GL' || h.pointB.slice(0, 2) == 'VL') {
        return 'VSO'
      } else if (
        h.pointB == component.pointA ||
        h.pointB.slice(0, 3) == component.pointA.slice(0, 3)
      ) {
        if (component.id == 'WIR') {
          return CheckNextPointB(component, dataorg)
        } else {
          return component.id
        }
      } else if (
        h.pointB == component.pointB ||
        h.pointB.slice(0, 3) == component.pointB.slice(0, 3)
      ) {
        if (h.id != component.id) {
          if (component.id == 'WIR') {
            return CheckNextPointA(component, dataorg)
          } else {
            return component.id
          }
        }
      } else if (
        h.pointB == component?.pointC ||
        h.pointB.slice(0, 3) == component?.pointC?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointD ||
        h.pointB.slice(0, 3) == component?.pointD?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointE ||
        h.pointB.slice(0, 3) == component?.pointE?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointF ||
        h.pointB.slice(0, 3) == component?.pointF?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointG ||
        h.pointB.slice(0, 3) == component?.pointG?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointH ||
        h.pointB.slice(0, 3) == component?.pointH?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointI ||
        h.pointB.slice(0, 3) == component?.pointI?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointJ ||
        h.pointB.slice(0, 3) == component?.pointJ?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointK ||
        h.pointB.slice(0, 3) == component?.pointK?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointL ||
        h.pointB.slice(0, 3) == component?.pointL?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointM ||
        h.pointB.slice(0, 3) == component?.pointM?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointN ||
        h.pointB.slice(0, 3) == component?.pointN?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointO ||
        h.pointB.slice(0, 3) == component?.pointO?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointB == component?.pointP ||
        h.pointB.slice(0, 3) == component?.pointP?.slice(0, 3)
      ) {
        return component.id
      }
    }
  }
  //CHECKING FOR WIRES CONNECTED ON THE POINTA OF EACH COMPONENTS (RECURSIVE IF >1 WIRE )
  function CheckNextPointA(h, dataorg) {
    for (let component of dataorg) {
      if (h.pointA.slice(0, 2) == 'GL' || h.pointA.slice(0, 2) == 'VL') {
        return 'VSO'
      } else if (
        h.pointA == component.pointB ||
        h.pointA.slice(0, 3) == component.pointB.slice(0, 3)
      ) {
        if (component.id == 'WIR') {
          return CheckNextPointA(component, dataorg)
        } else {
          return component.id
        }
      } else if (
        h.pointA == component.pointA ||
        h.pointA.slice(0, 3) == component.pointA.slice(0, 3)
      ) {
        if (h.id != component.id) {
          if (component.id == 'WIR') {
            return CheckNextPointB(component, dataorg)
          } else {
            return component.id
          }
        }
      } else if (
        h.pointA == component?.pointC ||
        h.pointA.slice(0, 3) == component?.pointC?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointD ||
        h.pointA.slice(0, 3) == component?.pointD?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointE ||
        h.pointA.slice(0, 3) == component?.pointE?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointF ||
        h.pointA.slice(0, 3) == component?.pointF?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointG ||
        h.pointA.slice(0, 3) == component?.pointG?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointH ||
        h.pointA.slice(0, 3) == component?.pointH?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointI ||
        h.pointA.slice(0, 3) == component?.pointI?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointJ ||
        h.pointA.slice(0, 3) == component?.pointJ?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointK ||
        h.pointA.slice(0, 3) == component?.pointK?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointL ||
        h.pointA.slice(0, 3) == component?.pointL?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointM ||
        h.pointA.slice(0, 3) == component?.pointM?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointN ||
        h.pointA.slice(0, 3) == component?.pointN?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointO ||
        h.pointA.slice(0, 3) == component?.pointO?.slice(0, 3)
      ) {
        return component.id
      } else if (
        h.pointA == component?.pointP ||
        h.pointA.slice(0, 3) == component?.pointP?.slice(0, 3)
      ) {
        return component.id
      }
    }
  }

  //ADD THE COMPONENTS CONNECTED TO THE POINTS A AND B INTO THE COPY OF PROF AND COPY OF SUDENT
  const addComponents = function (dataorg, datacopy) {
    for (let i = 0; i < dataorg.length; i++) {
      if (
        dataorg[i].pointB.slice(0, 2) == 'GL' ||
        dataorg[i].pointB.slice(0, 2) == 'VL'
      ) {
        datacopy[i].pointB.push('VSO')
      }
      if (
        dataorg[i].pointA.slice(0, 2) == 'GL' ||
        dataorg[i].pointA.slice(0, 2) == 'VL'
      ) {
        datacopy[i].pointA.push('VSO')
      }

      for (let componento of dataorg) {
        //=====================================Component Point A============================================//
        if (datacopy[i].pointA != 'VSO') {
          if (
            dataorg[i].pointA == componento.pointB ||
            dataorg[i].pointA.slice(0, 3) == componento.pointB.slice(0, 3)
          ) {
            if (componento.id == 'WIR') {
              datacopy[i].pointA.push(CheckNextPointA(componento, dataorg))
            } else {
              datacopy[i].pointA.push(componento.id)
            }
          }
          //FOR COMPONENT POINT A == WIRE POINT A (Accounting for different user's node selection)
          else if (
            dataorg[i].pointA == componento.pointA ||
            dataorg[i].pointA.slice(0, 3) == componento.pointA.slice(0, 3)
          ) {
            if (dataorg[i] != componento) {
              if (componento.id == 'WIR') {
                datacopy[i].pointA.push(CheckNextPointB(componento, dataorg))
              } else {
                datacopy[i].pointA.push(componento.id)
              }
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointC ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointD ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointE ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointF ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointF ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointG ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointH ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointI ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointJ ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointK ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointL ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointM ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointN ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointO ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointA == componento?.pointP ||
            dataorg[i].pointA.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i].pointA.push(componento.id)
          }
        }
        //=====================================Component Point B============================================//
        if (datacopy[i].pointB != 'VSO') {
          if (
            dataorg[i].pointB == componento.pointA ||
            dataorg[i].pointB.slice(0, 3) == componento.pointA.slice(0, 3)
          ) {
            if (componento.id == 'WIR') {
              datacopy[i].pointB.push(CheckNextPointB(componento, dataorg))
            } else {
              datacopy[i].pointB.push(componento.id)
            }
          }
          //FOR COMPONENT POINT B == WIRE POINT B (Accounting for different user's node selection)
          else if (
            dataorg[i].pointB == componento.pointB ||
            dataorg[i].pointB.slice(0, 3) == componento.pointB.slice(0, 3)
          ) {
            if (dataorg[i] != componento) {
              if (componento.id == 'WIR') {
                datacopy[i].pointB.push(CheckNextPointA(componento, dataorg))
              } else {
                datacopy[i].pointB.push(componento.id)
              }
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointC ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }
          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointD ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }
          // IF POINT E IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointE ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINT F IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointF ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINT G IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointG ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINT H IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointH ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointI ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointJ ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointK ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointL ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINT M IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointM ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointN ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointO ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i].pointB == componento?.pointP ||
            dataorg[i].pointB.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i].pointB.push(componento.id)
          }
        }
        //=====================================Component Point C============================================//
        if (
          dataorg[i]?.pointC == componento.pointB ||
          dataorg[i]?.pointC?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointC?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointC?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointC == componento.pointA ||
          dataorg[i]?.pointC?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointC?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointC?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointC != undefined) {
          // IF POINTC IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointC == componento?.pointC ||
              dataorg[i]?.pointC?.slice(0, 3) == componento?.pointC?.slice(0, 3)
            ) {
              datacopy[i]?.pointC?.push(componento.id)
            }
          }
          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointD ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINT E IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointE ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINT F IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointF ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINT G  IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointG ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINT H  IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointH ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointI ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointJ ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointK ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointL ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointM ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointN ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointO ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointC == componento?.pointP ||
            dataorg[i]?.pointC?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointC?.push(componento.id)
          }
        }
        //=====================================Component Point D============================================//
        if (
          dataorg[i]?.pointD == componento.pointB ||
          dataorg[i]?.pointD?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointD?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointD?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointD == componento.pointA ||
          dataorg[i]?.pointD?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointD?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointD?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointD != undefined) {
          // IF POINTD IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointD == componento?.pointD ||
              dataorg[i]?.pointD?.slice(0, 3) == componento?.pointD?.slice(0, 3)
            ) {
              datacopy[i]?.pointD.push(componento.id)
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointC ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }

          // IF POINTE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointE ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }

          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointF ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }

          // IF POINTG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointG ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
          // IF POINTH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointH ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointI ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointJ ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointK ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointL ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointM ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointN ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointO ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointD == componento?.pointP ||
            dataorg[i]?.pointD?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointD?.push(componento.id)
          }
        }

        //=====================================Component Point E============================================//
        if (
          dataorg[i]?.pointE == componento.pointB ||
          dataorg[i]?.pointE?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointE?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointE?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointE == componento.pointA ||
          dataorg[i]?.pointE?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointE?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointE?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointE != undefined) {
          // IF POINTE IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointE == componento?.pointE ||
              dataorg[i]?.pointE?.slice(0, 3) == componento?.pointE?.slice(0, 3)
            ) {
              datacopy[i]?.pointD.push(componento.id)
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointC ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }

          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointD ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }

          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointF ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }

          // IF POINTG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointG ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
          // IF POINTH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointH ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointI ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointJ ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointK ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointL ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointM ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointN ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointO ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointE == componento?.pointP ||
            dataorg[i]?.pointE?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointE?.push(componento.id)
          }
        }
        //=====================================Component Point F============================================//
        if (
          dataorg[i]?.pointF == componento.pointB ||
          dataorg[i]?.pointF?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointF?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointF?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointF == componento.pointA ||
          dataorg[i]?.pointF?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointF?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointF?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointF != undefined) {
          // IF POINTF IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointF == componento?.pointF ||
              dataorg[i]?.pointF?.slice(0, 3) == componento?.pointF?.slice(0, 3)
            ) {
              datacopy[i]?.pointF.push(componento.id)
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointC ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }

          // IF POINTE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointE ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }

          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointD ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }

          // IF POINTG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointG ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
          // IF POINTH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointH ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointI ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointJ ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointK ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointL ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointM ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointN ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointO ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointF == componento?.pointP ||
            dataorg[i]?.pointF?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointF?.push(componento.id)
          }
        }

        //=====================================Component Point G============================================//
        if (
          dataorg[i]?.pointG == componento.pointB ||
          dataorg[i]?.pointG?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointG?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointG?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointG == componento.pointA ||
          dataorg[i]?.pointG?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointG?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointG?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointG != undefined) {
          // IF POINTG IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointG == componento?.pointG ||
              dataorg[i]?.pointG?.slice(0, 3) == componento?.pointG?.slice(0, 3)
            ) {
              datacopy[i]?.pointG.push(componento.id)
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointC ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointD ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointE ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointF ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointH ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointI ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointJ ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointK ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointL ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointM ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointN ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointO ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointG == componento?.pointP ||
            dataorg[i]?.pointG?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointG?.push(componento.id)
          }
        }

        //=====================================Component Point H============================================//
        if (
          dataorg[i]?.pointH == componento.pointB ||
          dataorg[i]?.pointH?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointH?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointH?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointH == componento.pointA ||
          dataorg[i]?.pointH?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointH?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointH?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointH != undefined) {
          // IF POINTH IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointH == componento?.pointH ||
              dataorg[i]?.pointH?.slice(0, 3) == componento?.pointH?.slice(0, 3)
            ) {
              datacopy[i]?.pointH.push(componento.id)
            }
          }
          // IF POINTC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointC ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointD ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointE ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointF ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointG ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointI ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointJ ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointK ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointL ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointM ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointN ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointO ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointH == componento?.pointP ||
            dataorg[i]?.pointH?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointH?.push(componento.id)
          }
        }
        //=====================================Component Point I============================================//
        if (
          dataorg[i]?.pointI == componento.pointB ||
          dataorg[i]?.pointI?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointI?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointI?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointI == componento.pointA ||
          dataorg[i]?.pointI?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointI?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointI?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointI != undefined) {
          // IF POINTI IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointI == componento?.pointI ||
              dataorg[i]?.pointI?.slice(0, 3) == componento?.pointI?.slice(0, 3)
            ) {
              datacopy[i]?.pointI?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointC ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointD ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointE ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointF ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointG ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointH ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointJ ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointK ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointL ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointM ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointN ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }

          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointO ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointI == componento?.pointP ||
            dataorg[i]?.pointI?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointI?.push(componento.id)
          }
        }
        //=====================================Component Point J============================================//
        if (
          dataorg[i]?.pointJ == componento.pointB ||
          dataorg[i]?.pointJ?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointJ?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointJ?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointJ == componento.pointA ||
          dataorg[i]?.pointJ?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointJ?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointJ?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointJ != undefined) {
          // IF POINTJ IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointJ == componento?.pointJ ||
              dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
            ) {
              datacopy[i]?.pointJ?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointC ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointD ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointE ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointF ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }
          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointG ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointH ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }
          // IF POINTI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointI ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointK ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointL ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointM ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointN ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointO ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }

          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointJ == componento?.pointP ||
            dataorg[i]?.pointJ?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointJ?.push(componento.id)
          }
        }
        //=====================================Component Point K===========================================//
        if (
          dataorg[i]?.pointK == componento.pointB ||
          dataorg[i]?.pointK?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointK?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointK?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointK == componento.pointA ||
          dataorg[i]?.pointK?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointK?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointK?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointK != undefined) {
          // IF POINTK IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointK == componento?.pointK ||
              dataorg[i]?.pointK?.slice(0, 3) == componento?.pointK?.slice(0, 3)
            ) {
              datacopy[i]?.pointK?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointC ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointD ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointE ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointF ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointG ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointH ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }
          // IF pointI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointI ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointJ ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }
          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointL ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointM ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointN ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointO ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointK == componento?.pointP ||
            dataorg[i]?.pointK?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }
        }
        //=====================================Component Point L===========================================//
        if (
          dataorg[i]?.pointL == componento.pointB ||
          dataorg[i]?.pointL?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointL?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointL?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointL == componento.pointA ||
          dataorg[i]?.pointL?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointL?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointL?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointL != undefined) {
          // IF POINTL IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointL == componento?.pointL ||
              dataorg[i]?.pointL?.slice(0, 3) == componento?.pointL?.slice(0, 3)
            ) {
              datacopy[i]?.pointL?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointC ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointD ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointE ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointF ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }

          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointG ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointH ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF pointI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointI ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointJ ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointK ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointM ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointN ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointO ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointL == componento?.pointP ||
            dataorg[i]?.pointL?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointL?.push(componento.id)
          }
        }

        //=====================================Component Point M===========================================//
        if (
          dataorg[i]?.pointM == componento.pointB ||
          dataorg[i]?.pointM?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointM?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointM?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointM == componento.pointA ||
          dataorg[i]?.pointM?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointM?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointM?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointM != undefined) {
          // IF POINTK IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointM == componento?.pointM ||
              dataorg[i]?.pointM?.slice(0, 3) == componento?.pointM?.slice(0, 3)
            ) {
              datacopy[i]?.pointM?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointC ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointD ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointE ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointF ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointG ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointH ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }
          // IF pointI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointI ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointJ ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointK?.push(componento.id)
          }

          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointK ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointL ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointN ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointO ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }

          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointM == componento?.pointP ||
            dataorg[i]?.pointM?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointM?.push(componento.id)
          }
        }

        //=====================================Component Point N===========================================//
        if (
          dataorg[i]?.pointN == componento.pointB ||
          dataorg[i]?.pointN?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointN?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointN?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointN == componento.pointA ||
          dataorg[i]?.pointN?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointN?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointN?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointN != undefined) {
          // IF POINTK IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointN == componento?.pointN ||
              dataorg[i]?.pointN?.slice(0, 3) == componento?.pointN?.slice(0, 3)
            ) {
              datacopy[i]?.pointN?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointC ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointD ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointE ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointF ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointG ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointH ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }
          // IF pointI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointI ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointJ ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointK ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointL ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointM ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointO ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }

          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointN == componento?.pointP ||
            dataorg[i]?.pointN?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointN?.push(componento.id)
          }
        }

        //=====================================Component Point O===========================================//
        if (
          dataorg[i]?.pointO == componento.pointB ||
          dataorg[i]?.pointO?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointO?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointO?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointO == componento.pointA ||
          dataorg[i]?.pointO?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointO?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointO?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointO != undefined) {
          // IF POINTK IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointO == componento?.pointO ||
              dataorg[i]?.pointO?.slice(0, 3) == componento?.pointO?.slice(0, 3)
            ) {
              datacopy[i]?.pointO?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointC ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointD ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointE ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointF ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointG ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointH ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }
          // IF pointI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointI ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointJ ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointK ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointL ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointM ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointN ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF POINTP IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointO == componento?.pointP ||
            dataorg[i]?.pointO?.slice(0, 3) == componento?.pointP?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }
        }

        //=====================================Component Point P===========================================//
        if (
          dataorg[i]?.pointP == componento.pointB ||
          dataorg[i]?.pointP?.slice(0, 3) == componento.pointB.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointP?.push(CheckNextPointA(componento, dataorg))
          } else {
            datacopy[i].pointP?.push(componento.id)
          }
        }
        if (
          dataorg[i]?.pointP == componento.pointA ||
          dataorg[i]?.pointP?.slice(0, 3) == componento.pointA.slice(0, 3)
        ) {
          if (componento.id == 'WIR') {
            datacopy[i]?.pointP?.push(CheckNextPointB(componento, dataorg))
          } else {
            datacopy[i].pointP?.push(componento.id)
          }
        }
        if (dataorg[i]?.pointP != undefined) {
          // IF POINTK IS PRESENT, CHECK IF DATAORG[I].ID != COMPOINENT.ID, THEN LOG THE COMPONENT ID
          if (dataorg[i]?.id != componento.id) {
            if (
              dataorg[i]?.pointP == componento?.pointP ||
              dataorg[i]?.pointP?.slice(0, 3) == componento?.pointP?.slice(0, 3)
            ) {
              datacopy[i]?.pointP?.push(componento.id)
            }
          }
          // IF pointC IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointC ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointC?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }
          // IF pointD IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointD ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointD?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF pointE IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointE ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointE?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF pointF IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointF ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointF?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF pointG IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointG ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointG?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF pointH IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointH ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointH?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }
          // IF pointI IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointI ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointI?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }
          // IF POINTJ IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointJ ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointJ?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF POINTK IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointK ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointK?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF POINTL IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointL ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointL?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF POINTM IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointM ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointM?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }

          // IF POINTN IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointN ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointN?.slice(0, 3)
          ) {
            datacopy[i]?.pointO?.push(componento.id)
          }

          // IF POINTO IS PRESENT, SIMPLY LOG THE COMPONENT ID
          if (
            dataorg[i]?.pointP == componento?.pointO ||
            dataorg[i]?.pointP?.slice(0, 3) == componento?.pointO?.slice(0, 3)
          ) {
            datacopy[i]?.pointP?.push(componento.id)
          }
        }
      }
    }
  }

  function checkforShorted(StuArray) {
    for (let i = 0; i < StuArray.length; i++) {
      if (
        _.isEqual(StuArray[i].pointA, StuArray[i].pointB) ||
        _.isEqual(
          StuArray[i].pointA.slice(0, 3),
          StuArray[i].pointB.slice(0, 3)
        )
      ) {
        console.log(`Component ${studentdatamsg[i].id} in blue is shorted`)
        // document.getElementById(
        //   'componentshorted'
        // ).innerHTML = `Component ${studentdatamsg[i].id} in blue is shorted`

        if (studentdatamsg[i].id.slice(0, 3) === 'VSO') {
          console.log('VOLTAGESOURCEID', studentdatamsg[i].id)
          let vsotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VSOTT${ttno}`)
          let tttext = document.getElementById(`VSOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          vsotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vsotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('vsoutline'))
          document
            .getElementsByClassName('vsoutline')
            [Number(num) - 1].setAttribute('id', `VSOPATH${num}`)

          document
            .getElementById(`VSOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'RES') {
          console.log('RESISTORID', studentdatamsg[i].id)
          let restrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RESTT${ttno}`)
          let tttext = document.getElementById(`RESTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          restrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          restrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('resoutline'))
          document
            .getElementsByClassName('resoutline')
            [Number(num) - 1].setAttribute('id', `RESPATH${num}`)

          document
            .getElementById(`RESPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'LED') {
          console.log('LEDID', studentdatamsg[i].id)
          let ledtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LEDTT${ttno}`)
          let tttext = document.getElementById(`LEDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ledtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ledtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ledoutline'))
          document
            .getElementsByClassName('ledoutline')
            [Number(num) - 1].setAttribute('id', `LEDPATH${num}`)

          document
            .getElementById(`LEDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IND') {
          console.log('INDID', studentdatamsg[i].id)
          let indtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`INDTT${ttno}`)
          let tttext = document.getElementById(`INDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          indtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          indtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('inductoroutline'))
          document
            .getElementsByClassName('inductoroutline')
            [Number(num) - 1].setAttribute('id', `INDPATH${num}`)

          document
            .getElementById(`INDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DIO') {
          console.log('DIOID', studentdatamsg[i].id)
          let diotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DIOTT${ttno}`)
          let tttext = document.getElementById(`DIOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          diotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          diotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('diodeoutline'))
          document
            .getElementsByClassName('diodeoutline')
            [Number(num) - 1].setAttribute('id', `DIOPATH${num}`)

          document
            .getElementById(`DIOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'CCA') {
          console.log('CCAID', studentdatamsg[i].id)
          let ccatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`CCATT${ttno}`)
          let tttext = document.getElementById(`CCATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ccatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ccatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ccaoutline'))
          document
            .getElementsByClassName('ccaoutline')
            [Number(num) - 1].setAttribute('id', `CCAPATH${num}`)

          document
            .getElementById(`CCAPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'ECA') {
          console.log('ECAID', studentdatamsg[i].id)
          let ecatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`ECATT${ttno}`)
          let tttext = document.getElementById(`ECATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ecatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ecatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ecaoutline'))
          document
            .getElementsByClassName('ecaoutline')
            [Number(num) - 1].setAttribute('id', `ECAPATH${num}`)

          document
            .getElementById(`ECAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'LDR') {
          console.log('LDRID', studentdatamsg[i].id)
          let ldrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LDRTT${ttno}`)
          let tttext = document.getElementById(`LDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ldrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ldrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ldroutline'))
          document
            .getElementsByClassName('ldroutline')
            [Number(num) - 1].setAttribute('id', `LDRPATH${num}`)

          document
            .getElementById(`LDRPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IRE') {
          console.log('IREID', studentdatamsg[i].id)
          let iretrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRETT${ttno}`)
          let tttext = document.getElementById(`IRETTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          iretrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          iretrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ireoutline'))
          document
            .getElementsByClassName('ireoutline')
            [Number(num) - 1].setAttribute('id', `IREPATH${num}`)

          document
            .getElementById(`IREPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'IRD') {
          console.log('IRDID', studentdatamsg[i].id)
          let irdtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRDTT${ttno}`)
          let tttext = document.getElementById(`IRDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          irdtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          irdtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('irdoutline'))
          document
            .getElementsByClassName('irdoutline')
            [Number(num) - 1].setAttribute('id', `IRDPATH${num}`)

          document
            .getElementById(`IRDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MIC') {
          console.log('MICID', studentdatamsg[i].id)
          let mictrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MICTT${ttno}`)
          let tttext = document.getElementById(`MICTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          mictrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mictrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('micoutline'))
          document
            .getElementsByClassName('micoutline')
            [Number(num) - 1].setAttribute('id', `MICPATH${num}`)

          document
            .getElementById(`MICPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DCM') {
          console.log('DCMID', studentdatamsg[i].id)
          let dcmtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DCMTT${ttno}`)
          let tttext = document.getElementById(`DCMTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          dcmtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          dcmtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('dcmotoroutline'))
          document
            .getElementsByClassName('dcmotoroutline')
            [Number(num) - 1].setAttribute('id', `DCMPATH${num}`)

          document
            .getElementById(`DCMPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'VRS') {
          console.log('VRSID', studentdatamsg[i].id)
          let vrstrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRSTT${ttno}`)
          let tttext = document.getElementById(`VRSTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          vrstrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrstrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('vrsoutline'))
          document
            .getElementsByClassName('vrsoutline')
            [Number(num) - 1].setAttribute('id', `VRSPATH${num}`)

          document
            .getElementById(`VRSPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MTP') {
          console.log('MTPID', studentdatamsg[i].id)
          let mtptrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MTPTT${ttno}`)
          let tttext = document.getElementById(`MTPTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          mtptrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mtptrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('mtoutline'))
          document
            .getElementsByClassName('mtoutline')
            [Number(num) - 1].setAttribute('id', `MTPPATH${num}`)

          document
            .getElementById(`MTPPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'VRG') {
          console.log('VRGID', studentdatamsg[i].id)
          let vrgtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRGTT${ttno}`)
          let tttext = document.getElementById(`VRGTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          vrgtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrgtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('vrgoutline'))
          document
            .getElementsByClassName('vrgoutline')
            [Number(num) - 1].setAttribute('id', `VRGPATH${num}`)

          document
            .getElementById(`VRGPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'RGB') {
          console.log('RGBID', studentdatamsg[i].id)
          let rgbtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RGBTT${ttno}`)
          let tttext = document.getElementById(`RGBTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          rgbtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          rgbtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('rgboutline'))
          document
            .getElementsByClassName('rgboutline')
            [Number(num) - 1].setAttribute('id', `RGBPATH${num}`)

          document
            .getElementById(`RGBPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'OPA') {
          console.log('OPAID', studentdatamsg[i].id)
          let opatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`OPATT${ttno}`)
          let tttext = document.getElementById(`OPATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          opatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          opatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('opaoutline'))
          document
            .getElementsByClassName('opaoutline')
            [Number(num) - 1].setAttribute('id', `OPAPATH${num}`)

          document
            .getElementById(`OPAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'TCI') {
          console.log('TCIID', studentdatamsg[i].id)
          let tcitrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`TCITT${ttno}`)
          let tttext = document.getElementById(`TCITTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          tcitrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          tcitrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('tcioutline'))
          document
            .getElementsByClassName('tcioutline')
            [Number(num) - 1].setAttribute('id', `TCIPATH${num}`)

          document
            .getElementById(`TCIPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MDR') {
          console.log('MDRID', studentdatamsg[i].id)
          let mdrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MDRTT${ttno}`)
          let tttext = document.getElementById(`MDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          mdrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mdrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('mdroutline'))
          document
            .getElementsByClassName('mdroutline')
            [Number(num) - 1].setAttribute('id', `MDRPATH${num}`)

          document
            .getElementById(`MDRPATH${num}`)
            .setAttribute('display', 'block')
        }
        delete StuArray[i]
        delete studentnewdata2[i]
      } else if (
        (StuArray[i].pointA.slice(0, 2) == 'VL' &&
          StuArray[i].pointB.slice(1, 4) == 'NaN') ||
        (StuArray[i].pointA.slice(0, 2) == 'GL' &&
          StuArray[i].pointB.slice(1, 4) == 'NaN')
      ) {
        if (studentdatamsg[i].id.slice(0, 3) === 'LED') {
          console.log('this works')
          console.log('LEDID', studentdatamsg[i].id)
          let ledtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LEDTT${ttno}`)
          let tttext = document.getElementById(`LEDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ledtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ledtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ledoutline'))
          document
            .getElementsByClassName('ledoutline')
            [Number(num) - 1].setAttribute('id', `LEDPATH${num}`)

          document
            .getElementById(`LEDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'RES') {
          console.log('RESISTORID', studentdatamsg[i].id)
          let restrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RESTT${ttno}`)
          let tttext = document.getElementById(`RESTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          restrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          restrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('resoutline'))
          document
            .getElementsByClassName('resoutline')
            [Number(num) - 1].setAttribute('id', `RESPATH${num}`)

          document
            .getElementById(`RESPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DIO') {
          console.log('DIOID', studentdatamsg[i].id)
          let diotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DIOTT${ttno}`)
          let tttext = document.getElementById(`DIOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          diotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          diotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('diodeoutline'))
          document
            .getElementsByClassName('diodeoutline')
            [Number(num) - 1].setAttribute('id', `DIOPATH${num}`)

          document
            .getElementById(`DIOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IND') {
          console.log('INDID', studentdatamsg[i].id)
          let indtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`INDTT${ttno}`)
          let tttext = document.getElementById(`INDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          indtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          indtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('inductoroutline'))
          document
            .getElementsByClassName('inductoroutline')
            [Number(num) - 1].setAttribute('id', `INDPATH${num}`)

          document
            .getElementById(`INDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'CCA') {
          console.log('CCAID', studentdatamsg[i].id)
          let ccatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`CCATT${ttno}`)
          let tttext = document.getElementById(`CCATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ccatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ccatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ccaoutline'))
          document
            .getElementsByClassName('ccaoutline')
            [Number(num) - 1].setAttribute('id', `CCAPATH${num}`)

          document
            .getElementById(`CCAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'ECA') {
          console.log('ECAID', studentdatamsg[i].id)
          let ecatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`ECATT${ttno}`)
          let tttext = document.getElementById(`ECATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ecatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ecatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ecaoutline'))
          document
            .getElementsByClassName('ecaoutline')
            [Number(num) - 1].setAttribute('id', `ECAPATH${num}`)

          document
            .getElementById(`ECAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'LDR') {
          console.log('LDRID', studentdatamsg[i].id)
          let ldrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LDRTT${ttno}`)
          let tttext = document.getElementById(`LDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          ldrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ldrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ldroutline'))
          document
            .getElementsByClassName('ldroutline')
            [Number(num) - 1].setAttribute('id', `LDRPATH${num}`)

          document
            .getElementById(`LDRPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IRE') {
          console.log('IREID', studentdatamsg[i].id)
          let iretrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRETT${ttno}`)
          let tttext = document.getElementById(`IRETTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          iretrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          iretrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('ireoutline'))
          document
            .getElementsByClassName('ireoutline')
            [Number(num) - 1].setAttribute('id', `IREPATH${num}`)

          document
            .getElementById(`IREPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'IRD') {
          console.log('IRDID', studentdatamsg[i].id)
          let irdtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRDTT${ttno}`)
          let tttext = document.getElementById(`IRDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          irdtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          irdtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('irdoutline'))
          document
            .getElementsByClassName('irdoutline')
            [Number(num) - 1].setAttribute('id', `IRDPATH${num}`)

          document
            .getElementById(`IRDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MIC') {
          console.log('MICID', studentdatamsg[i].id)
          let mictrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MICTT${ttno}`)
          let tttext = document.getElementById(`MICTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          mictrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mictrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('micoutline'))
          document
            .getElementsByClassName('micoutline')
            [Number(num) - 1].setAttribute('id', `MICPATH${num}`)

          document
            .getElementById(`MICPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DCM') {
          console.log('DCMID', studentdatamsg[i].id)
          let dcmtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DCMTT${ttno}`)
          let tttext = document.getElementById(`DCMTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          dcmtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          dcmtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('dcmotoroutline'))
          document
            .getElementsByClassName('dcmotoroutline')
            [Number(num) - 1].setAttribute('id', `DCMPATH${num}`)

          document
            .getElementById(`DCMPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'VRS') {
          console.log('VRSID', studentdatamsg[i].id)
          let vrstrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRSTT${ttno}`)
          let tttext = document.getElementById(`VRSTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          vrstrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrstrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('vrsoutline'))
          document
            .getElementsByClassName('vrsoutline')
            [Number(num) - 1].setAttribute('id', `VRSPATH${num}`)

          document
            .getElementById(`VRSPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MTP') {
          console.log('MTPID', studentdatamsg[i].id)
          let mtptrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MTPTT${ttno}`)
          let tttext = document.getElementById(`MTPTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          mtptrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mtptrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('mtoutline'))
          document
            .getElementsByClassName('mtoutline')
            [Number(num) - 1].setAttribute('id', `MTPPATH${num}`)

          document
            .getElementById(`MTPPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'VRG') {
          console.log('VRGID', studentdatamsg[i].id)
          let vrgtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRGTT${ttno}`)
          let tttext = document.getElementById(`VRGTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          vrgtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrgtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('vrgoutline'))
          document
            .getElementsByClassName('vrgoutline')
            [Number(num) - 1].setAttribute('id', `VRGPATH${num}`)

          document
            .getElementById(`VRGPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'RGB') {
          console.log('RGBID', studentdatamsg[i].id)
          let rgbtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RGBTT${ttno}`)
          let tttext = document.getElementById(`RGBTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          rgbtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          rgbtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('rgboutline'))
          document
            .getElementsByClassName('rgboutline')
            [Number(num) - 1].setAttribute('id', `RGBPATH${num}`)

          document
            .getElementById(`RGBPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'OPA') {
          console.log('OPAID', studentdatamsg[i].id)
          let opatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`OPATT${ttno}`)
          let tttext = document.getElementById(`OPATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          opatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          opatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('opaoutline'))
          document
            .getElementsByClassName('opaoutline')
            [Number(num) - 1].setAttribute('id', `OPAPATH${num}`)

          document
            .getElementById(`OPAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'TCI') {
          console.log('TCIID', studentdatamsg[i].id)
          let tcitrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`TCITT${ttno}`)
          let tttext = document.getElementById(`TCITTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          tcitrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          tcitrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('tcioutline'))
          document
            .getElementsByClassName('tcioutline')
            [Number(num) - 1].setAttribute('id', `TCIPATH${num}`)

          document
            .getElementById(`TCIPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MDR') {
          console.log('MDRID', studentdatamsg[i].id)
          let mdrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MDRTT${ttno}`)
          let tttext = document.getElementById(`MDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} is shorted`

          mdrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mdrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('mdroutline'))
          document
            .getElementsByClassName('mdroutline')
            [Number(num) - 1].setAttribute('id', `MDRPATH${num}`)

          document
            .getElementById(`MDRPATH${num}`)
            .setAttribute('display', 'block')
        }

        // document.getElementById(
        //   'componentshorted1'
        // ).innerHTML = `Component ${studentdatamsg[i].id} in blue is shorted`
        delete StuArray[i]
        delete studentnewdata2[i]
      }
    }
  }

  checkforShorted(studentnewdata)
  checkforShorted(studentdatamsg)

  studentnewdata = studentnewdata.filter((e) => e)
  studentnewdata2 = studentnewdata2.filter((e) => e)
  studentdatamsg = studentdatamsg.filter((e) => e)

  addComponents(studentnewdata, studentnewdata2)
  addComponents(profnewdata, profnewdata2)

  //REMOVING WIRES FOR CIRCUIT COMPARISON
  console.log(studentdata2)
  console.log(profnewdata2)
  function DeleteWire(Array) {
    for (let i = 0; i < Array.length; i++) {
      if (Array[i].id == 'VSO') {
        if (Array[i].pointA != '') {
          Array[i].pointA = 'VSO'
        }
        if (Array[i].pointB != '') {
          Array[i].pointB = 'VSO'
        }
      }

      if (Array[i].id == 'WIR' || Array[i].id.slice(0, 3) == 'WIR') {
        delete Array[i]
      }
    }
  }
  DeleteWire(studentnewdata2)
  DeleteWire(profnewdata2)
  DeleteWire(studentdatamsg)

  //REMOVE THE EMPTY LIST ARRAY AFTER REMOVING THE WIRES
  studentnewdata2 = studentnewdata2.filter((e) => e)
  profnewdata2 = profnewdata2.filter((e) => e)
  studentdatamsg = studentdatamsg.filter((e) => e)

  // CHECKING & REMOVING UNCONNECTED COMPONENTS
  function NotConnected(org) {
    for (let i = 0; i < org.length; i++) {
      if (org[i].pointA == '' && org[i].pointB == '') {
        console.log(`Component ${studentdatamsg[i]?.id} in blue not connected`)

        if (studentdatamsg[i].id.slice(0, 3) === 'RES') {
          console.log('RESISTORID', studentdatamsg[i].id)
          let restrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RESTT${ttno}`)
          let tttext = document.getElementById(`RESTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          restrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          restrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('resoutline'))
          document
            .getElementsByClassName('resoutline')
            [Number(num) - 1].setAttribute('id', `RESPATH${num}`)

          document
            .getElementById(`RESPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'LED') {
          let ledtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LEDTT${ttno}`)
          let tttext = document.getElementById(`LEDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          ledtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ledtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ledoutline'))
          document
            .getElementsByClassName('ledoutline')
            [Number(num) - 1].setAttribute('id', `LEDPATH${num}`)

          document
            .getElementById(`LEDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'VSO') {
          let vsotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VSOTT${ttno}`)
          let tttext = document.getElementById(`VSOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          vsotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vsotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          // console.log(document.getElementsByClassName('vsoutline'))
          document
            .getElementsByClassName('vsoutline')
            [Number(num) - 1].setAttribute('id', `VSOPATH${num}`)

          document
            .getElementById(`VSOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DIO') {
          let diotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DIOTT${ttno}`)
          let tttext = document.getElementById(`DIOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          diotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          diotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('diodeoutline'))
          document
            .getElementsByClassName('diodeoutline')
            [Number(num) - 1].setAttribute('id', `DIOPATH${num}`)

          document
            .getElementById(`DIOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IND') {
          console.log('INDID', studentdatamsg[i].id)
          let indtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`INDTT${ttno}`)
          let tttext = document.getElementById(`INDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          indtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          indtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('inductoroutline'))
          document
            .getElementsByClassName('inductoroutline')
            [Number(num) - 1].setAttribute('id', `INDPATH${num}`)

          document
            .getElementById(`INDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'CCA') {
          console.log('CCAID', studentdatamsg[i].id)
          let ccatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`CCATT${ttno}`)
          let tttext = document.getElementById(`CCATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          ccatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ccatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ccaoutline'))
          document
            .getElementsByClassName('ccaoutline')
            [Number(num) - 1].setAttribute('id', `CCAPATH${num}`)

          document
            .getElementById(`CCAPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'ECA') {
          console.log('ECAID', studentdatamsg[i].id)
          let ecatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`ECATT${ttno}`)
          let tttext = document.getElementById(`ECATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          ecatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ecatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ecaoutline'))
          document
            .getElementsByClassName('ecaoutline')
            [Number(num) - 1].setAttribute('id', `ECAPATH${num}`)

          document
            .getElementById(`ECAPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'LDR') {
          console.log('LDRID', studentdatamsg[i].id)
          let ldrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LDRTT${ttno}`)
          let tttext = document.getElementById(`LDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          ldrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ldrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ldroutline'))
          document
            .getElementsByClassName('ldroutline')
            [Number(num) - 1].setAttribute('id', `LDRPATH${num}`)

          document
            .getElementById(`LDRPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'IRE') {
          console.log('IREID', studentdatamsg[i].id)
          let iretrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRETT${ttno}`)
          let tttext = document.getElementById(`IRETTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          iretrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          iretrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ireoutline'))
          document
            .getElementsByClassName('ireoutline')
            [Number(num) - 1].setAttribute('id', `IREPATH${num}`)

          document
            .getElementById(`IREPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IRD') {
          console.log('IRDID', studentdatamsg[i].id)
          let irdtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRDTT${ttno}`)
          let tttext = document.getElementById(`IRDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          irdtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          irdtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('irdoutline'))
          document
            .getElementsByClassName('irdoutline')
            [Number(num) - 1].setAttribute('id', `IRDPATH${num}`)

          document
            .getElementById(`IRDPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'MIC') {
          console.log('MICID', studentdatamsg[i].id)
          let mictrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MICTT${ttno}`)
          let tttext = document.getElementById(`MICTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          mictrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mictrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('microoutline'))
          document
            .getElementsByClassName('microoutline')
            [Number(num) - 1].setAttribute('id', `MICPATH${num}`)

          document
            .getElementById(`MICPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'DCM') {
          console.log('DCMID', studentdatamsg[i].id)
          let dcmtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DCMTT${ttno}`)
          let tttext = document.getElementById(`DCMTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          dcmtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          dcmtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('dcmotoroutline'))
          document
            .getElementsByClassName('dcmotoroutline')
            [Number(num) - 1].setAttribute('id', `DCMPATH${num}`)

          document
            .getElementById(`DCMPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'VRS') {
          console.log('VRSID', studentdatamsg[i].id)
          let vrstrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRSTT${ttno}`)
          let tttext = document.getElementById(`VRSTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          vrstrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrstrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('vrsoutline'))
          document
            .getElementsByClassName('vrsoutline')
            [Number(num) - 1].setAttribute('id', `VRSPATH${num}`)

          document
            .getElementById(`VRSPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'MTP') {
          console.log('MTPID', studentdatamsg[i].id)
          let mtptrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MTPTT${ttno}`)
          let tttext = document.getElementById(`MTPTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          mtptrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mtptrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('mtoutline'))
          document
            .getElementsByClassName('mtoutline')
            [Number(num) - 1].setAttribute('id', `MTPPATH${num}`)

          document
            .getElementById(`MTPPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'VRG') {
          console.log('VRGID', studentdatamsg[i].id)
          let vrgtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRGTT${ttno}`)
          let tttext = document.getElementById(`VRGTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          vrgtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrgtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('vrgoutline'))
          document
            .getElementsByClassName('vrgoutline')
            [Number(num) - 1].setAttribute('id', `VRGPATH${num}`)

          document
            .getElementById(`VRGPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'RGB') {
          console.log('RGBID', studentdatamsg[i].id)
          let rgbtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RGBTT${ttno}`)
          let tttext = document.getElementById(`RGBTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          rgbtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          rgbtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('rgboutline'))
          document
            .getElementsByClassName('rgboutline')
            [Number(num) - 1].setAttribute('id', `RGBPATH${num}`)

          document
            .getElementById(`RGBPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'OPA') {
          console.log('OPAID', studentdatamsg[i].id)
          let opatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`OPATT${ttno}`)
          let tttext = document.getElementById(`OPATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          opatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          opatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('opaoutline'))
          document
            .getElementsByClassName('opaoutline')
            [Number(num) - 1].setAttribute('id', `OPAPATH${num}`)

          document
            .getElementById(`OPAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'TCI') {
          console.log('TCIID', studentdatamsg[i].id)
          let tcitrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`TCITT${ttno}`)
          let tttext = document.getElementById(`TCITTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          tcitrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          tcitrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('tcioutline'))
          document
            .getElementsByClassName('tcioutline')
            [Number(num) - 1].setAttribute('id', `TCIPATH${num}`)

          document
            .getElementById(`TCIPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MDR') {
          console.log('MDRID', studentdatamsg[i].id)
          let mdrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MDRTT${ttno}`)
          let tttext = document.getElementById(`MDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(0, 3)} not connected`

          mdrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mdrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('mdroutline'))
          document
            .getElementsByClassName('mdroutline')
            [Number(num) - 1].setAttribute('id', `MDRPATH${num}`)

          document
            .getElementById(`MDRPATH${num}`)
            .setAttribute('display', 'block')
        }
        delete org[i]
      }
    }
  }
  NotConnected(studentnewdata2)
  NotConnected(profnewdata2)
  NotConnected(studentdatamsg)

  //REMOVE THE EMPTY LIST ARRAY AFTER REMOVING UNCONNECTED COMPONENTS
  studentnewdata2 = studentnewdata2.filter((e) => e)
  profnewdata2 = profnewdata2.filter((e) => e)
  studentdatamsg = studentdatamsg.filter((e) => e)

  //WHY MUST LOOP EACH POINTS? _.isEqual will fail if the order of component is different
  let h = 0
  for (let i = 0; i < profnewdata2.length; i++) {
    for (let j = 0; j < studentnewdata2.length; j++) {
      if (_.isEqual(profnewdata2[i], studentnewdata2[j])) {
        h = h + 1
        console.log(i, j)
        break
      }
    }
  }
  let time
  if (h == profnewdata2.length) {
    console.log('Both prof and student circcuit are same!')
    var end = performance.now()
    time = end - start //in milliseconds
    console.log(time)
  } else if (studentnewdata2.length < profnewdata2.length) {
    console.log('Insufficient Components on breadboard')
    var end = performance.now()
    time = end - start //in milliseconds
    console.log(time)
  } else if (studentnewdata2.length >= profnewdata2.length) {
    //CHECKING FOR ERRORS, NEED TO UPDATE!!!
    //CHECK FOR NOT CONNECTED COMPONENTS INSTEAD OF DELETING THEM
    //CHECK FOR ERROR IN CONNECTION

    let studentnewdatarray2 = studentnewdata2
    let profnewdatarray2 = profnewdata2

    //CHECK IF THE ARRAY COMPONENT IN THE COPY OF STUDENT HAS THE SAME ARRAY AS PROF IF IT HAS REMOVE THAT ARRAY(COMPONENTS WHICH DONT MATCH WILL BE LEFT BEHING)
    //BOTH PROF AND STUDENT WILL REMOVE ALL THOSE WHICH ARE THE SAME

    console.log(profnewdatarray2)
    console.log(studentnewdatarray2)

    for (let i = 0; i < profnewdatarray2.length; i++) {
      for (let j = 0; j < studentnewdatarray2.length; j++) {
        if (_.isEqual(profnewdatarray2[i], studentnewdatarray2[j])) {
          //SLICE OFF THE LENGTH VALUE, THE FIRST INFO IN THE ARRAY
          // console.log(i,j)

          profnewdatarray2.splice(i, 1)
          studentnewdatarray2.splice(j, 1)
          studentdatamsg.splice(j, 1)
        }
      }
    }

    //IF THE COMPONENTS BETWEEN PROF AND STUDENT NOT SAME
    //THIS IS ONLY COMPARING THE DIFFERENT IDS
    for (let i = 0; i < profnewdatarray2.length; i++) {
      if (profnewdatarray2[i].id != studentnewdatarray2[i].id) {
        console.log(`Wrong component connected: ${studentdatamsg[i].id}`)
        // document.getElementById(
        //   'wrongcomponent'
        // ).innerHTML = `Wrong component connected: ${studentdatamsg[i].id}`

        if (studentdatamsg[i].id.slice(0, 3) === 'RES') {
          console.log('RESISTORID', studentdatamsg[i].id)
          let restrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RESTT${ttno}`)
          let tttext = document.getElementById(`RESTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          restrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          restrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('resoutline'))
          document
            .getElementsByClassName('resoutline')
            [Number(num) - 1].setAttribute('id', `RESPATH${num}`)

          document
            .getElementById(`RESPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'LED') {
          let ledtrigger = document.getElementById(studentdatamsg[i].id)

          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LEDTT${ttno}`)
          let tttext = document.getElementById(`LEDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          ledtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ledtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ledoutline'))
          document
            .getElementsByClassName('ledoutline')
            [Number(num) - 1].setAttribute('id', `LEDPATH${num}`)

          document
            .getElementById(`LEDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'VSO') {
          let vsotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VSOTT${ttno}`)
          let tttext = document.getElementById(`VSOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          vsotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vsotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3)
          console.log(document.getElementsByClassName('vsoutline'))
          document
            .getElementsByClassName('vsoutline')
            [Number(num) - 1].setAttribute('id', `VSOPATH${num}`)

          document
            .getElementById(`VSOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DIO') {
          console.log('DIODEID', studentdatamsg[i].id)
          let diotrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DIOTT${ttno}`)
          let tttext = document.getElementById(`DIOTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          diotrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          diotrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('diodeoutline'))
          document
            .getElementsByClassName('diodeoutline')
            [Number(num) - 1].setAttribute('id', `DIOPATH${num}`)

          document
            .getElementById(`DIOPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IND') {
          console.log('INDID', studentdatamsg[i].id)
          let indtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`INDTT${ttno}`)
          let tttext = document.getElementById(`INDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          indtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          indtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('inductoroutline'))
          document
            .getElementsByClassName('inductoroutline')
            [Number(num) - 1].setAttribute('id', `INDPATH${num}`)

          document
            .getElementById(`INDPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'CCA') {
          console.log('CCAID', studentdatamsg[i].id)
          let ccatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`CCATT${ttno}`)
          let tttext = document.getElementById(`CCATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          ccatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ccatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ccaoutline'))
          document
            .getElementsByClassName('ccaoutline')
            [Number(num) - 1].setAttribute('id', `CCAPATH${num}`)

          document
            .getElementById(`CCAPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'ECA') {
          console.log('ECAID', studentdatamsg[i].id)
          let ecatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`ECATT${ttno}`)
          let tttext = document.getElementById(`ECATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          ecatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ecatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ecaoutline'))
          document
            .getElementsByClassName('ecaoutline')
            [Number(num) - 1].setAttribute('id', `ECAPATH${num}`)

          document
            .getElementById(`ECAPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'LDR') {
          console.log('LDRID', studentdatamsg[i].id)
          let ldrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`LDRTT${ttno}`)
          let tttext = document.getElementById(`LDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          ldrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          ldrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ldroutline'))
          document
            .getElementsByClassName('ldroutline')
            [Number(num) - 1].setAttribute('id', `LDRPATH${num}`)

          document
            .getElementById(`LDRPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'IRE') {
          console.log('IREID', studentdatamsg[i].id)
          let iretrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRETT${ttno}`)
          let tttext = document.getElementById(`IRETTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          iretrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          iretrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('ireoutline'))
          document
            .getElementsByClassName('ireoutline')
            [Number(num) - 1].setAttribute('id', `IREPATH${num}`)

          document
            .getElementById(`IREPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'IRD') {
          console.log('IRDID', studentdatamsg[i].id)
          let irdtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`IRDTT${ttno}`)
          let tttext = document.getElementById(`IRDTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          irdtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          irdtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('irdoutline'))
          document
            .getElementsByClassName('irdoutline')
            [Number(num) - 1].setAttribute('id', `IRDPATH${num}`)

          document
            .getElementById(`IRDPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'MIC') {
          console.log('MICID', studentdatamsg[i].id)
          let mictrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MICTT${ttno}`)
          let tttext = document.getElementById(`MICTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          mictrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mictrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('microoutline'))
          document
            .getElementsByClassName('microoutline')
            [Number(num) - 1].setAttribute('id', `MICPATH${num}`)

          document
            .getElementById(`MICPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'DCM') {
          console.log('DCMID', studentdatamsg[i].id)
          let dcmtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`DCMTT${ttno}`)
          let tttext = document.getElementById(`DCMTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          dcmtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          dcmtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('dcmotormicrooutline'))
          document
            .getElementsByClassName('dcmotoroutline')
            [Number(num) - 1].setAttribute('id', `DCMPATH${num}`)

          document
            .getElementById(`DCMPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'VRS') {
          console.log('VRSID', studentdatamsg[i].id)
          let vrstrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRSTT${ttno}`)
          let tttext = document.getElementById(`VRSTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          vrstrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrstrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('vrsoutline'))
          document
            .getElementsByClassName('vrsoutline')
            [Number(num) - 1].setAttribute('id', `VRSPATH${num}`)

          document
            .getElementById(`VRSPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'MTP') {
          console.log('MTPID', studentdatamsg[i].id)
          let mtptrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MTPTT${ttno}`)
          let tttext = document.getElementById(`MTPTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          mtptrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mtptrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('mtoutline'))
          document
            .getElementsByClassName('mtoutline')
            [Number(num) - 1].setAttribute('id', `MTPPATH${num}`)

          document
            .getElementById(`MTPPATH${num}`)
            .setAttribute('display', 'block')
        }

        if (studentdatamsg[i].id.slice(0, 3) === 'VRG') {
          console.log('VRGID', studentdatamsg[i].id)
          let vrgtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`VRGTT${ttno}`)
          let tttext = document.getElementById(`VRGTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          vrgtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          vrgtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })

          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('vrgoutline'))
          document
            .getElementsByClassName('vrgoutline')
            [Number(num) - 1].setAttribute('id', `VRGPATH${num}`)

          document
            .getElementById(`VRGPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'RGB') {
          console.log('RGBID', studentdatamsg[i].id)
          let rgbtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`RGBTT${ttno}`)
          let tttext = document.getElementById(`RGBTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          rgbtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          rgbtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('rgboutline'))
          document
            .getElementsByClassName('rgboutline')
            [Number(num) - 1].setAttribute('id', `RGBPATH${num}`)

          document
            .getElementById(`RGBPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'OPA') {
          console.log('OPAID', studentdatamsg[i].id)
          let opatrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`OPATT${ttno}`)
          let tttext = document.getElementById(`OPATTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          opatrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          opatrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('opaoutline'))
          document
            .getElementsByClassName('opaoutline')
            [Number(num) - 1].setAttribute('id', `OPAPATH${num}`)

          document
            .getElementById(`OPAPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'TCI') {
          console.log('TCIID', studentdatamsg[i].id)
          let tcitrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`TCITT${ttno}`)
          let tttext = document.getElementById(`TCITTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          tcitrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          tcitrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('tcioutline'))
          document
            .getElementsByClassName('tcioutline')
            [Number(num) - 1].setAttribute('id', `TCIPATH${num}`)

          document
            .getElementById(`TCIPATH${num}`)
            .setAttribute('display', 'block')
        }
        if (studentdatamsg[i].id.slice(0, 3) === 'MDR') {
          console.log('MDRID', studentdatamsg[i].id)
          let mdrtrigger = document.getElementById(studentdatamsg[i].id)
          let ttno = Number(studentdatamsg[i].id.slice(3))
          let tt = document.getElementById(`MDRTT${ttno}`)
          let tttext = document.getElementById(`MDRTTTEXT${ttno}`)
          tttext.innerHTML = `${studentdatamsg[i].id.slice(
            0,
            3
          )} is a wrong component`

          mdrtrigger.addEventListener('mousemove', function showTooltip(evt) {
            console.log('innnn')
            tt.setAttributeNS(null, 'visibility', 'visible')
          })
          mdrtrigger.addEventListener('mouseout', function hideTooltip() {
            console.log('outtt')
            tt.setAttributeNS(null, 'visibility', 'hidden')
          })
          let num = studentdatamsg[i].id.slice(3) //01
          console.log(document.getElementsByClassName('mdroutline'))
          document
            .getElementsByClassName('mdroutline')
            [Number(num) - 1].setAttribute('id', `MDRPATH${num}`)

          document
            .getElementById(`MDRPATH${num}`)
            .setAttribute('display', 'block')
        }
      }

      //THIS IS COMPARING THE SAME IDS BUT DIFFERENT WRONG CONNECTION
      if (profnewdatarray2[i].id == studentnewdatarray2[i].id) {
        //INCORRECT RESISTOR VALUE
        if (studentnewdatarray2[i]?.color == profnewdatarray2[i]?.color) {
          console.log('Wrong input of resistor value')
          // document.getElementById(
          //   'wrongresistorvalue'
          // ).innerHTML = `Wrong input of resistor value`
          if (studentdatamsg[i].id.slice(0, 3) === 'RES') {
            console.log('RESISTORID', studentdatamsg[i].id)
            let restrigger = document.getElementById(studentdatamsg[i].id)
            let ttno = Number(studentdatamsg[i].id.slice(3))
            let tt = document.getElementById(`RESTT${ttno}`)
            let tttext = document.getElementById(`RESTTTEXT${ttno}`)
            tttext.innerHTML = `Wrong  resistor value`

            restrigger.addEventListener('mousemove', function showTooltip(evt) {
              console.log('innnn')
              tt.setAttributeNS(null, 'visibility', 'visible')
            })
            restrigger.addEventListener('mouseout', function hideTooltip() {
              console.log('outtt')
              tt.setAttributeNS(null, 'visibility', 'hidden')
            })

            let num = studentdatamsg[i].id.slice(3) //01
            console.log(document.getElementsByClassName('resoutline'))
            document
              .getElementsByClassName('resoutline')
              [Number(num) - 1].setAttribute('id', `RESPATH${num}`)

            document
              .getElementById(`RESPATH${num}`)
              .setAttribute('display', 'block')
          }
        }
        /////////////////////////////////////////////POINTA///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointA, profnewdatarray2[i].pointA)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointA.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionA'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointA.slice(1)}  `

          if (studentdatamsg[i].pointA[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointA.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointA.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTB///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointB, profnewdatarray2[i].pointB)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointB.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionB'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointB.slice(1)} `

          if (studentdatamsg[i].pointB[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointB.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointB.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTC///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointC, profnewdatarray2[i].pointC)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointC.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionC'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointC.slice(1)} `
          // document.querySelector(
          //   '.backendmessage'
          // ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointC.slice(1)} `
          if (studentdatamsg[i].pointC[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointC.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointC.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTD///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointD, profnewdatarray2[i].pointD)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointD.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionD'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointD.slice(1)} `

          // document.querySelector(
          //   '.backendmessage'
          // ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointD.slice(1)} `
          if (studentdatamsg[i].pointD[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointD.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointD.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTE///////////////////////////////////////////////////////

        if (
          _.isEqual(studentnewdatarray2[i].pointE, profnewdatarray2[i].pointE)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointE.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionE'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointE.slice(1)} `

          // document.querySelector(
          //   '.backendmessage'
          // ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointE.slice(1)} `
          if (studentdatamsg[i].pointE[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointE.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointE.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTF///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointF, profnewdatarray2[i].pointF)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointF.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionF'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointF.slice(1)} `

          // document.querySelector(
          //   '.backendmessage'
          // ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointF.slice(1)} `
          if (studentdatamsg[i].pointF[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointF.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointF.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTG///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointG, profnewdatarray2[i].pointG)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointG.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionG'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointG.slice(1)} `

          // document.querySelector(
          //   '.backendmessage'
          // ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointG.slice(1)} `
          if (studentdatamsg[i].pointG[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointG.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointG.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTH///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointH, profnewdatarray2[i].pointH)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointH.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionH'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointG.slice(1)} `

          // document.querySelector(
          //   '.backendmessage'
          // ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointH.slice(1)} `
          if (studentdatamsg[i].pointH[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointH.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointH.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTI///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointI, profnewdatarray2[i].pointI)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointI.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionI'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointI.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointI.slice(1)} `
          if (studentdatamsg[i].pointI[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointI.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointI.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTJ///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointJ, profnewdatarray2[i].pointJ)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointJ.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionJ'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointJ.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointJ.slice(1)} `
          if (studentdatamsg[i].pointJ[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointJ.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointJ.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTK///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointK, profnewdatarray2[i].pointK)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointK.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionK'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointH.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointK.slice(1)} `
          if (studentdatamsg[i].pointK[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointK.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointK.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTL///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointL, profnewdatarray2[i].pointL)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointL.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionL'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointL.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointL.slice(1)} `
          if (studentdatamsg[i].pointL[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointL.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointL.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }

        /////////////////////////////////////////////POINTM///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointM, profnewdatarray2[i].pointM)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointM.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionM'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointM.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointM.slice(1)} `
          if (studentdatamsg[i].pointM[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointM.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointM.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }

        /////////////////////////////////////////////POINTN///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointN, profnewdatarray2[i].pointN)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointN.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionN'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointN.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointN.slice(1)} `
          if (studentdatamsg[i].pointN[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointN.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointN.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }

        /////////////////////////////////////////////POINTO///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointO, profnewdatarray2[i].pointO)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointO.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionO'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointO.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointO.slice(1)} `
          if (studentdatamsg[i].pointO[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointO.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointO.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
        /////////////////////////////////////////////POINTP///////////////////////////////////////////////////////
        if (
          _.isEqual(studentnewdatarray2[i].pointP, profnewdatarray2[i].pointP)
        ) {
        } else {
          console.log(
            `Wrong connection in row ${studentdatamsg[i].pointP.slice(1)} `
          )
          document.getElementById(
            'wrongconnectionP'
          ).innerHTML = `Wrong connection in row ${studentdatamsg[
            i
          ].pointP.slice(1)}  `

          // document.querySelector(
          //       '.backendmessage'
          //     ).innerHTML = `Wrong connection in row ${studentdatamsg[i].pointP.slice(1)} `
          if (studentdatamsg[i].pointP[0].charCodeAt(0) < 70) {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(65 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointP.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          } else {
            for (let j = 0; j < 5; j++) {
              var chr = String.fromCharCode(70 + j)
              document
                .getElementById(`${chr}${studentdatamsg[i].pointP.slice(1)}`)
                .setAttribute('stroke', '#FF0000')
            }
          }
        }
      }
    }
    var end = performance.now()
    let time = end - start //in milliseconds
    console.log(time)
  }
}
