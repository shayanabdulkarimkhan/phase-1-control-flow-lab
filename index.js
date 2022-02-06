function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return `This one is on me!`;
  } else if (distance > 2500) {
    return `No can do.`;
    
  } else if (distance > 2000) {
    return `I will gladly take your thirty bucks.`;
  };
};

function ternaryCheckCity(city){
  // Write your code here!
  let approval = "Ok, sounds good.";
  let rejection = "No go."

  const response = (city === 'NYC') ? approval : rejection;

  return response;
};

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case `generous`:
      return `Thank you so much.`;
      break;
    
    case `not as generous`:
      return `Thank you.`;
      break;
  
    default:
      return `Bye.`;
      break;
  }
}