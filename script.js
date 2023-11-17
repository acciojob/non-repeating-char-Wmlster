function firstNonRepeatedChar(s) {
 // Write your code here

	for(let i=0;i<s.length;i++)
		{
			let ok=1;
			
			for(let j=0;j<s.length;j++)
				{
					if(i==j)
					{
						continue;
					}

					if(s[i]==s[j])
					{
						ok=0;
						break;
					}
					
				}

			if(ok==1)
				return s[i];
		} 

	return null;
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
