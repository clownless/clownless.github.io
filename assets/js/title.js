var text = ["$", " $", "s $", "ss $", "3ss $", "l3ss $", "nl3ss $", "wnl3ss $", "ownl3ss $","lownl3ss $","clownl3ss $","clownl3s $", "clownl $", "clown $", "clow $", "clo $", "cl $", "c $"];
var counter = 0
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
