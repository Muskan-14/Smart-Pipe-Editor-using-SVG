var svgPath;
var startPoint = [0, 0];
$(function () {
    $("#abc").bind('mousedown', function (event) {
        //Gradient and stroke definitons
        svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svgPath.setAttribute("stroke", "black");
        svgPath.setAttribute("fill", "none");
        svgPath.setAttribute("shape-rendering", "geometricPrecision");
        svgPath.setAttribute("stroke-linejoin", "round");
        svgPath.setAttribute("stroke-width", "10")
        startPoint = [event.clientX, event.clientY];
        svgPath.setAttribute("d", "M" + event.clientX + "," + event.clientY);
        document.getElementById("abc").appendChild(svgPath);
    });

    $("#abc").bind('mousemove', function (event) {
        if (svgPath) {

            var margin = 25;
            var pathData = svgPath.getAttribute("d");

            var xDiff = Math.abs(startPoint[0] - event.clientX);
            var yDiff = Math.abs(startPoint[1] - event.clientY); // X and Y resemble coordinates.

            //Check to ensure all lines and diagonals are straight
            if (xDiff < 17.677 && yDiff < 17.677) {

                var endX = startPoint[0];
                var endY = startPoint[1];

                pathData = pathData + "L" + endX + "," + endY
                svgPath.setAttribute("d", pathData);
                startPoint = [endX, endY];

            }

            else if ((xDiff > margin || yDiff > margin)) {

                var endX = xDiff > margin ? event.clientX : startPoint[0];
                var endY = yDiff > margin ? event.clientY : startPoint[1];
                pathData = pathData + "L" + endX + "," + endY

                svgPath.setAttribute("d", pathData);


                startPoint = [endX, endY];
            }
        }
    });
    //To stop the path from drawing.
    $("#abc").bind('mouseup', function (event) {
        svgPath = null;
    });
});

        
            