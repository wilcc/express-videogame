const quotes = [
    'If at first you don’t succeed; call it version 1.0',
    `Software is like sex: It’s better when it’s free. – (Linus Torvalds)`,
    `Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work”.`,
    `Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. – Martin Golding`,
    `Talk is cheap. Show me the code. – Linus Torvalds`,
    `Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time. – N.J. Rubenking`,
    `Old programmers never die. They simply give up their resources.`,
    `There are only two industries that refer to their customers as “users”. – (Edward Tufte)`,
    `“Software Developer” – An organism that turns caffeine into software`,
    `If debugging is the process of removing software bugs, then programming must be the process of putting them in – Edsger Dijkstra`,
    `A user interface is like a joke. If you have to explain it, it’s not that good.`,
]




const snarky= (req,res,next)=>{
    let number = Math.floor(Math.random()*10)
    console.log(quotes[number])
    next()
}

module.exports = snarky