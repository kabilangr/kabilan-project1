var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];
var queen = {
    position: {
        x: 0,
        y: 0
    }
}

function move(n, d) {
    let temp;
    let t;
    switch (d) {
        case 'E': {
            temp = queen.position.y + n;
            if (temp > 8 || temp < 0) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else
                queen.position.y = temp;
            break;
        }
        case 'W': {
            temp = queen.position.y - n;
            if (temp > 8 || temp < 0) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else
                queen.position.y = temp;
            break;
        }
        case 'N': {
            temp = queen.position.x - n;
            if (temp > 8 || temp < 0) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else
                queen.position.x = temp;
            break;
        }
        case 'S': {
            temp = queen.position.x + n;
            if (temp > 8 || temp < 0) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else
                queen.position.x = temp;
            break;
        }
        case 'SE': {
            temp = queen.position.x + n;
            t = queen.position.y + n;
            if ((temp > 8) || (temp < 0) || (t > 8) || (t < 0)) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = t;
            }
            break;
        }
        case 'NE': {
            temp = queen.position.x - n;
            t = queen.position.y + n;
            if ((temp > 8) || (temp < 0) || (t > 8) || (t < 0)) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = t;
            }
            break;
        }
        case 'SW': {
            temp = queen.position.x + n;
            t = queen.position.y - n;
            if ((temp > 8) || (temp < 0) || (t > 8) || (t < 0)) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = t;
            }
            break;
        }
        case 'NW': {
            temp = queen.position.x - n;
            t = queen.position.y - n;
            if ((temp > 8) || (temp < 0) || (t > 8) || (t < 0)) {
                console.log("Outside Boundry");
                document.write("Outside Boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = t;
            }
            break;
        }
        default:
            document.write("Invalid");
    }

}

function play() {
    var a = document.getElementById("value").value;
    var value = a.split(" ");
    value.forEach(element => {
        let n = Number(element.slice(element.length - 1));
        let d = element.slice(0, element.length - 1);
        move(n, d);
    });

    console.log("your position-->" + board[queen.position.x][queen.position.y]);
    document.write("your position-->" + board[queen.position.x][queen.position.y]);
}