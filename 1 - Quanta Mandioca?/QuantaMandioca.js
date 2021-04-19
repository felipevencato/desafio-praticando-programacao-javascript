function OP1 () {
	let chico = 300 * parseInt(gets()); 
	let bento = 1500 * parseInt(gets()); 
	let bernardo = 600 * parseInt(gets()); 
	let marina = 1000 * parseInt(gets()); 
	let iara = 150 * parseInt(gets()); 
	let marlene = 225; 
	let total = 0; // Digite aqui o calculo total 
	console.log(total);
} 
function OP2() { 
	console.log([300, 1500, 600, 1000, 150] 
		.reduce((x, y) => x + y * parseInt(gets()), 0) 
		+ 225) 
} 
OP2()
