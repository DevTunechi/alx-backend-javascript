/* eslint-disable */
function cleanSet(set, startString) {
	  if (!startString) {
		      return '';
		    }

	  const result = [];

	  for (let value of set) {
		      if (value.startsWith(startString)) {
			            result.push(value.slice(startString.length));
			          }
		    }

	  return result.join('-');
}

export default cleanSet;
