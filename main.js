

let dataset=[100,200,120,75,45,35,76,45,67,145,193,264];

const svgWidth=800;
const svgHeight=500;
const barPadding=5;
const barWidth=(svgWidth/dataset.length);



let svg=d3.select("svg")
    .attr("width",svgWidth)
    .attr("height",svgHeight)
    .attr("class","bar-chart");
    
let barChart=svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y",function(d){return (svgHeight-d);})
    .attr("height",function(d){return d;})
    .attr("width",barWidth-barPadding)
    .attr("transform",function(d,i){
        let translate=barWidth*i;
        return "translate("+translate+")";
    });

    