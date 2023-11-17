function firstNonRepeatedChar(s) {
 // Write your code here

	for(let i=0;i<s.length;i++)
		{
			if(i==0&&s[i]!=s[i+1])
			{
				return s[i];
			}
			else if(i==s.length-1&&s[i]!=s[i-1])
			{
				return s[i];
			}
			else if(s[i]!=s[i-1]&&s[i]!=s[i+1])
			{
				return s[i];
			}  
		}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
