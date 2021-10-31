let points = [];
let movepoints = [];
let qpoints = 30;

function setup() {
    // console.clear();
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id("canvas-background");

    for (let index = 0; index < qpoints; index++) {
        points.push([
            abs(floor(randomGaussian(0, 200))),
            abs(floor(randomGaussian(0, 200)))
        ]);
        points[index].push((points[index][0] + points[index][1]) / 2)
        movepoints.push([
            abs(floor(randomGaussian(0, 200))),
            abs(floor(randomGaussian(0, 200)))
        ]);
    }

    // console.log(points);
    // console.log(movepoints);
}

let xoff = 0.0;
let yoff = 0.0;
let t = 0.0;
let linesize = 150;

function draw() {
    clear();

    fill(`rgba(252, 179, 76, 120)`);
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        noiseSeed(point[2])

        x = (width * noise(t));
        y = (height * noise(t + 5));

        noStroke();
        circle(x, y, 20);

        movepoints[i][0] = x;
        movepoints[i][1] = y;

        // Venom lines
        var pclose = movepoints.filter(innerpoint => dist(x, y, innerpoint[0], innerpoint[1]) <= linesize)
        pclose.forEach(innerpoint => {
            var d = dist(x, y, innerpoint[0], innerpoint[1]);
            stroke(`rgba(252, 179, 76, ${map(d, 0, linesize, 1, 0)})`);
            strokeWeight(map(d, 0, linesize, 0, 10))
            line(x, y, innerpoint[0], innerpoint[1]);
        });
    }

    // fill(`rgba(252, 179, 76, 120)`);
    // points.forEach((point, i) => {
    //     noiseSeed(point[2])
    //         // noiseSeed((point[0] + point[1]) / 2)
    //         // noiseSeed((movepoints[i][0] + movepoints[i][1]) / 10)

    //     // x = width * noise(t);
    //     // y = height * noise(t + 2);

    //     x = width * noise(t); //map(noise(t), 0, 1, 0, width) * 2;
    //     y = height * noise(t + 5); //map(noise(t + 5), 0, 1, 0, height) * 2;
    //     // console.log(noise(t));

    //     // mx = point[0] + x - (width / 3);
    //     // my = point[1] + y - (height / 3);

    //     mx = x; //- (width / 2); // * noise(0, 2); //- (width / 5); //(point[0] * t) + x - (width / 2);
    //     my = y; //- (height / 2.5); // * noise(0, 2); //* 2 - (height / 2); //(point[1] * t) + y - (height / 2);

    //     noStroke();
    //     fill(`rgba(252, 179, 76, 120)`);
    //     circle(mx, my, 20);
    //     // fill('black');
    //     // text(`${i}`, mx, my);

    //     movepoints[i][0] = mx;
    //     movepoints[i][1] = my;

    //     // Venom lines
    //     var pclose = movepoints.filter(innerpoint => dist(mx, my, innerpoint[0], innerpoint[1]) <= linesize)
    //     pclose.forEach(innerpoint => {
    //         var opac = map(dist(mx, my, innerpoint[0], innerpoint[1]), 0, linesize, 1, 0);
    //         stroke(`rgba(252, 179, 76, ${opac})`);
    //         var weight = map(dist(mx, my, innerpoint[0], innerpoint[1]), 0, linesize, 0, 10);
    //         strokeWeight(weight)
    //         line(mx, my, innerpoint[0], innerpoint[1]);
    //     });
    //     // t += 0.00001;
    // });

    t += 0.001;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}