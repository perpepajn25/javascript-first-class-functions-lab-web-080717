function countdown(callback){
  setTimeout(callback,2000)
};

function createMultiplier(multiplier){
  return num => num * multiplier
};

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multplierValue,num){
  return multplierValue * num
}

var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)
