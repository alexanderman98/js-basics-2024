function sumOfVowels(text) {
    // Define a mapping of vowels to values
    var vowelMapping = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5
    };

    // Initialize a variable to store the sum
    var sum = 0;

    // Convert the text to lowercase to make it case-insensitive
    text = text.toLowerCase();

    // Loop through each character in the text
    for (var i = 0; i < text.length; i++) {
        var character = text.charAt(i);
        // Check if the character is a vowel and if it exists in the vowelMapping
        if (vowelMapping[character] !== undefined) {
            // Add the value of the vowel to the sum
            sum += vowelMapping[character];
        }
    }

    // Print the sum of the values of the vowels
    console.log("Sum of the values of the vowels:", sum);
}

// Example usage:
var text = "Hello!";
sumOfVowels(text);
