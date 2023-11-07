# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 4
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_odd(number)
    if number.even?
        "#{number} is even"
    else
        "#{number} is odd"
    end
end
# p even_odd(7)
# p even_odd(42)
# p even_odd(221)

# Pseudo code:
# Input: Number
# Output: Number is even or odd
# Create a method that takes in a number
# use .even command to ask if the number is even or not
# Use string interpolation to write your if else statements



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels(string)
    string.gsub(/[aeiouAEIOU]/,'')
end

# p no_vowels('Rubber Soul')
# p no_vowels('Sgt Pepper')
# p no_vowels('Abbey Road')


# Pseudo code:
# Input: A string
# Output: A string without the vowels
# Create a method that takes in a string 
# Create an anonymous method that will hold the new string.
# Use a command that removes vowels (gsub)
# Return new string without the vowels

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(string)
check_string = string.downcase
    if check_string == check_string.reverse
    "#{check_string} is a palindrome"
else
    "#{check_string} is not a palindrome"
    end
end

puts palindrome('Racecar')
puts palindrome('LEARN')
puts palindrome('Rotator')
 

# Pseudo code:
# Input: A string
# Output: A string that is defined a pallindrome or not
# Create a method that takes in a string
# use .downcase to change any user input to all lower case
# Reverse the string and set it equal to the orginal string
# Create if else statment to determine if the reverse string = orginal string or not