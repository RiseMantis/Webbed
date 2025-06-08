function Name(){
    const user_name = prompt("What do they call you, stranger : ");
    alert(user_name + " has entered the Wild Web");
}

const enemy_health = Math.round(100 * Math.random());
let user_health = 50;

Name()
alert("Enemy Health : " + enemy_health);
alert("Your Health : " + user_health);

