// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#ositaB').click(function(e) {
	e.preventDefault();
	 makeGrid();
});


function makeGrid() {
	
    var height =  $('#inputHeight').val();
	var width =  $('#inputWeight').val();
	var table = $('#pixelCanvas');
	var i,j,row;
	//clean element
	table.children().remove();
	for(i=1; i<= height; i++){
		    table.append('<tr> </tr>');
		 for ( j=1; j<=width; j++) {
		 	table.children().last().append('<td class="colorP"> </td>');
		 }
	}
	console.log(height);
	console.log(width);
// Your code goes here!
	
	

$('#pixelCanvas td').click(function() {
	
	var color = $('#colorPicker').val();
	 //change background color
	var currentColor =  $(this).css('background-color');
	console.log(typeof(currentColor));
	currentColor = rgb2Hex(currentColor);
	
	var hexColor = RGB2Color(currentColor[0],currentColor[1],currentColor[2]);
	console.log(color + "  " + currentColor + " " + hexColor );
	if(hexColor !== color){
		 $(this).css('background-color', color);
	}
	else {
		  $(this).css('background-color', "#ffffff");
	}
    
	
})

}

function RGB2Color(r,g,b)
{
  return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}
function byte2Hex (n)
{
  var nybHexString = "0123456789abcdef";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function rgb2Hex(string){
	var a = string.split("(")[1].split(")")[0];
	a = a.split(",");
	console.log(a);
	return a;
}