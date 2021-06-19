gameWinner = (board) => {
	
	for(var i=0;i<3;i++)                      
	{
		let x=true;
		let o=true;
		for(var j=0;j<3;j++)    //check every row
		{
			if(board[i][j]!="x")x=false;
			if(board[i][j]!="o")o=false;
		}
		if(x==true)return "x";
		if(o==true)return "o";
		
		x=true;
		o=true;
		for(var k=0;k<3;k++)    //check every column
		{ 
			if(board[k][i]!="x")x=false;
			if(board[k][i]!="o")o=false;
		}
		if(x==true)return "x";
		if(o==true)return "o";
	} 
	
	let diagx=true;
	let diago=true;
	let reversdiagx=true;
	let reversdiago=true;
	for(var i=0;i<3;i++)         //check diagonals
	{
		if(board[i][i]!="x")diagx=false;
		if(board[i][i]!="o")diago=false;
		if(board[i][2-i]!="x")reversdiagx=false;
		if(board[i][2-i]!="o")reversdiago=false;
	}
	if(diagx==true || reversdiagx==true)return "x";
	if(diago==true || reversdiago==true)return "o";
	
	for(var i=0;i<3;i++)        //check if game is not finished yet
	{
		for(var j=0;j<3;j++)
		{
			if(board[i][j]==0)return null;  
		}
	}
	return "draw";
};
