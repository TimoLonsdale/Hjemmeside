function setup() {
  //canvas
  canvasX = windowWidth
  canvasY = windowHeight-115
  createCanvas(canvasX, canvasY)
  
  //sliders
  slider_a = createSlider(0,90000,45000)
  slider_a.size(canvasX)
  
  slider_v_0 = createSlider (0,100000000000,10000000000)
  slider_v_0.size(canvasX)
  
  slider_y_0 = createSlider (0,50000,0)
  slider_y_0.size(canvasX)
  
  slider_t = createSlider (0,50000,0)
  slider_t.size(canvasX)
  
  slider_c = createSlider (500,10000000,1245000)
  slider_c.size(canvasX)
}

function draw() {
  //independant variables
  var a = slider_a.value()/1000
  var v_0 = slider_v_0.value()/1000000000
  var y_0 = slider_y_0.value()/1000
  var t = slider_t.value()/1000
  var c = slider_c.value()/10000
  var x_0 = 50
  var g = 9.82
  
  //dependant variables
  var a_r = a*PI/180
  var v_0x = v_0*cos(a_r)
  var v_0y = v_0*sin(a_r)
  var v_x = v_0x
  var v_y = -g*t+v_0y
  var v = sqrt(v_x**2+v_y**2)
  var a_t = acos(v_x/v)
  var x_t = v_0x*t
  var y_t = 0.5*-g*t**2+v_0y*t+y_0
  var x_max = (sin(a_r)*cos(a_r)*v_0**2+(sqrt((tan(a_r))**2+2*g*y_0/(v_0*cos(a_r))**2))*(v_0*cos(a_r))**2)/g
  var y_max = tan(a_r)**2*v_0x**2/(2*g)+y_0
  var t_top = v_0y/g
  var x_top = v_0x*t_top
  var t_max = ((tan(a_r)*v_0x**2+(sqrt((tan(a_r))**2+2*g*y_0/v_0x**2))*v_0x**2)/g)/v_0x
  var v_x_max = v_x
  var v_y_max = -g*t_max+v_0y
  var v_max = sqrt(v_x_max**2+v_y_max**2)
  
  //colormode
  colorMode(HSL)
  
  //background color
  background(0,0,100)
  
  //x-axis
  stroke(0,0,0)
  fill(0,0,0)
  strokeWeight(2)
  line(0,canvasY-50,canvasX-10,canvasY-50)
  var l = canvasX
  var x_l = new Float32Array(l)
  for (let i = 0; i < l; i++) {
    x_l[i] = canvasX*i/float(l)
    if (c<0.1953125) {line(x_l[i]*c*400+x_0,canvasY-50,x_l[i]*c*400+x_0,canvasY-40)}
    else if (c<0.390625) {line(x_l[i]*c*200+x_0,canvasY-50,x_l[i]*c*200+x_0,canvasY-40)}
    else if (c<0.78125) {line(x_l[i]*c*100+x_0,canvasY-50,x_l[i]*c*100+x_0,canvasY-40)}
    else if (c<1.5625) {line(x_l[i]*c*40+x_0,canvasY-50,x_l[i]*c*40+x_0,canvasY-40)}
    else if (c<3.125) {line(x_l[i]*c*20+x_0,canvasY-50,x_l[i]*c*20+x_0,canvasY-40)}
    else if (c<6.25) {line(x_l[i]*c*10+x_0,canvasY-50,x_l[i]*c*10+x_0,canvasY-40)}
    else if (c<12.5) {line(x_l[i]*c*4+x_0,canvasY-50,x_l[i]*c*4+x_0,canvasY-40)}
    else if (c<25) {line(x_l[i]*c*2+x_0,canvasY-50,x_l[i]*c*2+x_0,canvasY-40)}
    else if (c<50) {line(x_l[i]*c+x_0,canvasY-50,x_l[i]*c+x_0,canvasY-40)}
    else if (c<100) {line(x_l[i]*c/2.5+x_0,canvasY-50,x_l[i]*c/2.5+x_0,canvasY-40)}
    else if (c<200) {line(x_l[i]*c/5+x_0,canvasY-50,x_l[i]*c/5+x_0,canvasY-40)}
    else if (c<400) {line(x_l[i]*c/10+x_0,canvasY-50,x_l[i]*c/10+x_0,canvasY-40)}
    else if (c<800) {line(x_l[i]*c/25+x_0,canvasY-50,x_l[i]*c/25+x_0,canvasY-40)}
    else {line(x_l[i]*c/50+x_0,canvasY-50,x_l[i]*c/50+x_0,canvasY-40)}
  }
  
  for (let i = 0; i < l; i++) {
    if(i>0){
      noStroke()
      textSize(12)
      if (c<0.1953125) {text(i*2000,x_l[i]*c*2000+x_0-3.5,canvasY-27)}
      else if (c<0.390625) {text(i*1000,x_l[i]*c*1000+x_0-3.5,canvasY-27)}
      else if (c<0.78125) {text(i*500,x_l[i]*c*500+x_0-3.5,canvasY-27)}
      else if (c<1.5625) {text(i*200,x_l[i]*c*200+x_0-3.5,canvasY-27)}
      else if (c<3.125) {text(i*100,x_l[i]*c*100+x_0-3.5,canvasY-27)}
      else if (c<6.25) {text(i*50,x_l[i]*c*50+x_0-3.5,canvasY-27)}
      else if (c<12.5) {text(i*20,x_l[i]*c*20+x_0-3.5,canvasY-27)}
      else if (c<25) {text(i*10,x_l[i]*c*10+x_0-3.5,canvasY-27)}
      else if (c<50) {text(i*5,x_l[i]*c*5+x_0-3.5,canvasY-27)}
      else if (c<100) {text(i*2,x_l[i]*c*2+x_0-3.5,canvasY-27)}
      else if (c<200) {text(i,x_l[i]*c+x_0-3.5,canvasY-27)}
      else if (c<400) {text(i/2,x_l[i]*c/2+x_0-3.5,canvasY-27)}
      else if (c<800) {text(i/5,x_l[i]*c/5+x_0-3.5,canvasY-27)}
      else {text(i/10,x_l[i]*c/10+x_0-3.5,canvasY-27)}
    }
  }
  
  stroke(0,100,100)
  fill(0,100,100)
  rect(canvasX-20,canvasY-55,20,55)
  
  stroke(0,0,0)
  fill(0,0,0)
  triangle(canvasX-10,canvasY-50,canvasX-20,canvasY-55,canvasX-20,canvasY-45)
  
  noStroke()
  textSize(12)
  text("x (m)",canvasX-50,canvasY-55)
  text("0",55,canvasY-37.5)
  
  //y-axis
  stroke(0,0,0)
  fill(0,0,0)
  strokeWeight(2)
  line(x_0,canvasY,x_0,10)
  var m = canvasY
  var y_m = new Float32Array(m)
  for (let j = 0; j < m; j++) {
    y_m[j] = canvasY*j/float(m)
    if (c<0.1953125) {line(50,canvasY-50-y_m[j]*c*400,40,canvasY-50-y_m[j]*c*400)}
    else if (c<0.390625) {line(50,canvasY-50-y_m[j]*c*200,40,canvasY-50-y_m[j]*c*200)}
    else if (c<0.78125) {line(50,canvasY-50-y_m[j]*c*100,40,canvasY-50-y_m[j]*c*100)}
    else if (c<1.5625) {line(50,canvasY-50-y_m[j]*c*40,40,canvasY-50-y_m[j]*c*40)}
    else if (c<3.125) {line(50,canvasY-50-y_m[j]*c*20,40,canvasY-50-y_m[j]*c*20)}
    else if (c<6.25) {line(50,canvasY-50-y_m[j]*c*10,40,canvasY-50-y_m[j]*c*10)}
    else if (c<12.5) {line(50,canvasY-50-y_m[j]*c*4,40,canvasY-50-y_m[j]*c*4)}
    else if (c<25) {line(50,canvasY-50-y_m[j]*c*2,40,canvasY-50-y_m[j]*c*2)}
    else if (c<50) {line(50,canvasY-50-y_m[j]*c,40,canvasY-50-y_m[j]*c)}
    else if (c<100) {line(50,canvasY-50-y_m[j]*c/2.5,40,canvasY-50-y_m[j]*c/2.5)}
    else if (c<200) {line(50,canvasY-50-y_m[j]*c/5,40,canvasY-50-y_m[j]*c/5)}
    else if (c<400) {line(50,canvasY-50-y_m[j]*c/10,40,canvasY-50-y_m[j]*c/10)}
    else if (c<800) {line(50,canvasY-50-y_m[j]*c/25,40,canvasY-50-y_m[j]*c/25)}
    else {line(50,canvasY-50-y_m[j]*c/50,40,canvasY-50-y_m[j]*c/50)}
  }
  
  for (let j = 0; j < m; j++) {
    if(j>0){
      noStroke()
      textSize(12)
      if (c<0.1953125){text(j*2000,10,canvasY-50-y_m[j]*c*2000+4)}
      else if (c<0.390625){text(j*1000,15,canvasY-50-y_m[j]*c*1000+4)}
      else if (c<0.78125){text(j*500,18,canvasY-50-y_m[j]*c*500+4)}
      else if (c<1.5625){text(j*200,18,canvasY-50-y_m[j]*c*200+4)}
      else if (c<3.125){text(j*100,18,canvasY-50-y_m[j]*c*100+4)}
      else if (c<6.25){text(j*50,18,canvasY-50-y_m[j]*c*50+4)}
      else if (c<12.5){text(j*20,22,canvasY-50-y_m[j]*c*20+4)}
      else if (c<25){text(j*10,22,canvasY-50-y_m[j]*c*10+4)}
      else if (c<50) {text(j*5,22,canvasY-50-y_m[j]*c*5+4)}
      else if (c<100) {text(j*2,28,canvasY-50-y_m[j]*c*2+4)}
      else if (c<200) {text(j,28,canvasY-50-y_m[j]*c+4)}
      else if (c<400) {text(j/2,18,canvasY-50-y_m[j]*c/2+4)}
      else if (c<800) {text(j/5,18,canvasY-50-y_m[j]*c/5+4)}
      else {text(j/10,18,canvasY-50-y_m[j]*c/10+4)}
    }
  }
  
  stroke(0,100,100)
  fill(0,100,100)
  rect(0,0,550,20)
  
  stroke(0,0,0)
  fill(0,0,0)
  triangle(50,10,45,20,55,20)
  
  noStroke()
  textSize(12)
  text("y (m)",55,30)
  text("0",40,canvasY-55)
  
  //parabular
  stroke(0,0,0)
  strokeWeight(2)
  var n = x_max*c
  var x = new Float32Array(n)
  var y_x = new Float32Array(n)
  for (let k = 0; k < n; k++) {
    x[k] = x_max*k/float(n)
    y_x[k] = (-g*(x[k]**2))/(2*(v_0x**2))+tan(a_r)*x[k]
    point(x_0+x[k]*c,canvasY-50-y_0*c-y_x[k]*c)
  }
  
  //projectile direction
  stroke(0,100,50)
  fill(0,100,50)
  strokeWeight(2)
  if (x_t<x_max){
    var o_x = x_0+x_t*c
    var o_y = canvasY-50-y_t*c
    stroke(120,100,50)
    fill(120,100,50)
    line(o_x,o_y,o_x+v_0x*c/5,o_y)
    triangle(o_x+v_0x*c/5,o_y,o_x+v_0x*c/5-10,o_y+5,o_x+v_0x*c/5-10,o_y-5)
  
    stroke(240,100,50)
    fill(240,100,50)
    line(o_x,o_y,o_x,o_y-v_y*c/5)
    if(v_y>0.1) {triangle(o_x,o_y-v_y*c/5,o_x+5,o_y-v_y*c/5+10,o_x-5,o_y-v_y*c/5+10)}
    else if (v_y<-0.1) {triangle(o_x,o_y-v_y*c/5,o_x+5,o_y-v_y*c/5-10,o_x-5,o_y-v_y*c/5-10)}
    else {triangle(0,0,0,0,0,0)}
  
    stroke(0,100,50)
    fill(0,100,50)
    line(o_x,o_y,o_x+v_0x*c/5,o_y-v_y*c/5)
    if (x_t<x_top){
      triangle(o_x+v_0x*c/5,o_y-v_y*c/5,
      o_x+v_0x*c/5+5*sin(a_t)-10*cos(a_t),o_y-v_y*c/5+5*cos(a_t)+10*sin(a_t),
      o_x+v_0x*c/5-5*sin(a_t)-10*cos(a_t),o_y-v_y*c/5-5*cos(a_t)+10*sin(a_t))
    }
    else {
      triangle(o_x+v_0x*c/5,o_y-v_y*c/5,
      o_x+v_0x*c/5+5*sin(-a_t)-10*cos(-a_t),o_y-v_y*c/5+5*cos(-a_t)+10*sin(-a_t),
      o_x+v_0x*c/5-5*sin(-a_t)-10*cos(-a_t),o_y-v_y*c/5-5*cos(-a_t)+10*sin(-a_t))
    }
  }
  
  //ball
  stroke(0,0,0)
  fill(60,100,50)
  strokeWeight(2)
  if (x_t<x_max) {ellipse(x_0+x_t*c,canvasY-50-y_t*c,15,15)}
  else if (x_t>x_max) {ellipse(x_0+x_max*c,canvasY-50,15,15)}
  else {ellipse(x_0,canvasY-50-y_0*c,15,15)}
  
  
  //text for sliders and values
  noStroke()
  fill(0,0,0) 
  textSize(12) 
  text("Vinkel (α): " + a + "˚",100, 35)
  text("Kastelængde (x_max): " + round(x_max,3) + "m",100,55)
  text("Maks højde (y_max): " + round(y_max,3) + "m",100,75)
  text("Højde (y_0): " + y_0 + "m",500,35)
  text("Stighøjde (y_max-y_0): " + round(y_max-y_0,3) + "m",500,55)
  text("Længde til maks højde (x_1): " + round(x_top,3) + "m",500,75)
  text("Tid (t): " + t + "s",750, 35)
  text("Fart (v_max): " + round(v_max,3) + "m/s",950, 35)
  text("Vandret fart (v_x_max): " + round(v_x_max,3) + "m/s",950, 55)
  text("Lodret fart (v_y_max): " + round(v_y_max,3) + "m/s",950, 75)
  if (x_t<x_max) {
    text("Længde (x(t)): " + round(x_t,3) + "m",750,55)
    text("Højde (y(t)): " + round(y_t,3) + "m",750,75)
    text("Fart (v): " + round(v,3) + "m/s",300, 35)
    text("Vandret fart (v_x): " + round(v_x,3) + "m/s",300, 55)
    text("Lodret fart (v_y): " + round(v_y,3) + "m/s",300, 75)
  }
  else {
    text("Længde (x(t)): " + round(x_max,3) + "m",750,55)
    text("Højde (y(t)): " + round(y_max,3) + "m",750,75)
    text("Fart (v): " + 0 + "m/s",300, 35)
    text("Vandret fart (v_x): " + 0 + "m/s",300, 55)
    text("Lodret fart (v_y): " + 0 + "m/s",300, 75)
  }
}