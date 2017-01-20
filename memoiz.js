memoize = function(func) {
  	var resultsStorage = {};
    function runFunc() {
  		  console.log('\n');
  		  console.log('arguments are:');
  		  console.log(arguments);
  		  console.log('storage object:')
  		  console.log(resultsStorage);
  		
  		  var args = Array.prototype.slice.call(arguments);
  		  var argsString = JSON.stringify(args);
		    if (argsString in resultsStorage) {
		      console.log('already in storage object:')
  		    console.log(resultsStorage);
			    return resultsStorage[argsString];
		    } else {
			    var result = func.apply(this, args);
			    resultsStorage[argsString] = result;
			    console.log('storing to storage object, now:')
  		    console.log(resultsStorage);
		    }
		    return result;
		  
    }
  return runFunc;
};


add = function(a, b) {
          return a + b;
};
var add2things = memoize(add);
console.log('output is ' +add2things(1,1));
console.log('output is ' +add2things(1,1));
console.log('output is ' +add2things(2,2));
console.log('output is ' +add2things(3,3));

gotcha = function() { return 'gotcha!' };
var gotchamemo = memoize(gotcha);
console.log('output is ' + gotchamemo([1,2,3]));
console.log('output is ' + gotchamemo([1,2,3]));
console.log('output is ' + gotchamemo(1,2,3));
console.log('output is ' + gotchamemo(1,2,3));
