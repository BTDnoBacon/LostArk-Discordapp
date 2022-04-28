import fetch from 'node-fetch';



const a= async ()=> {
    const a= await fetch("https://lostark.game.onstove.com/Profile/Character/베토디베이컨빼주세요");
    const r = a.body
    console.log(r);
    console.log(a)
}
a()