import { isYes } from '../utils.js';

const test = QUnit.test;

test('should take in a string and return true if answer begins with a y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userInput = 'yes';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes(userInput);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, userInput, 'yes returns true');
    expect.equal(isYes('YAS'), true, 'YAS returns true');
    expect.equal(isYes('NOO'), false, 'NOO returns false');
});
