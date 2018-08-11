const expect = require('chai').expect

const fizzBuzz = require('../fizzBuzzer');

describe ('fizzBuzz' function(){
	it('numbers divisible by 3 return \'fizz\', divisble by 5 return \'buzz\' and 15 returns \'fizzbuzz\' ' function(){
		const normalCases = [
		  {a: 3 expected: 'fizz'},
		  {a: 10 expected: 'buzz'},
		  {a: 15 expected: 'fizzbuzz'}
		];
		normalCases.forEach(function(input){
			const answer = fizzBuzz(input.a);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise error if arg not numbers' function(){
		const badInputs = [
		'false', 'a', '4'
		];
		bandInputs.forEach(function(input){
			expect(function(){
				fizzBuzz(input[0]);
			}).to.throw(Error);
		});
	});
});