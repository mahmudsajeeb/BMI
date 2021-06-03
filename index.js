function bmi(weight, height) {
  const bmi = weight /(height * height);
  console.log(bmi)
  if(bmi <=18.5){
    return "Underweight";
  } if( bmi <=25.0){
    return "Normal";
  }if (bmi <=30.0 ){
    return "Overweight";
  }
    return "Obese";
 
 
 }
bmi ( 45, 5.2);
const bmi = (w,h, bmi = w/h/h) => bmi <=18.5 ? "Underweight":
                                  bmi <=25.0 ?  "Normal":
                                  bmi <= 30.0 ? "Overweight":

function bmi(weight,height){
  const formala = weight /(Math.pow(height/height)/2);

  switch(true){
    case formala<=18.5:
    return "Underweight";
    case formala<=25.0:
    return "Normal";
    case formala <= 30.0:
    return "Overweight";
    default:
    return "obse"
  }
}                                  

function bmi(weight,height){
  var bmi = weight/(height*height)
  return bmi = bmi <=18.5 ? "Underweight" : bmi <=25.0 ? "Normal": bmi<= 30.0 ? "Overweight" : "obse" ;
}
