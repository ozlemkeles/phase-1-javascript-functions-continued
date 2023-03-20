// code your solution here

function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`;
}

function mondayWork(workplace = "go to the office"){
    return `This Monday, I will ${workplace}.`;
}

function wrapAdjective(wrap = "*"){
    return function(msg = "a hard worker"){
        return `You are ${wrap}${msg}${wrap}!`;
    }
}