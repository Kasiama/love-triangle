/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let result = 0;
  	let used = [];
  	for(let i = 0;i+3<=preferences.length;i+=1){
  		let first = preferences[i];
  		if(!used[first] && first!=preferences[first-1])
  		{
  			let second = preferences[first-1];
  			if (!used[second] && second != preferences[second-1]){
  				let third = preferences[second-1];
  				if(!used[third] && third != preferences[third-1] && third == i+1 ){
  					result++;
  					used[first]=1;
  					used[second]=1;
  					used[third]=1;
  				}
  			}

  		}
  			
  	}
  		
  		
return result;
};