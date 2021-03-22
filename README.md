<h2>Homework Week 3 - Random Password Generator</h2>
  
This week I've been tasked with creating a random password generator, that is user defined with which kinds of characters and how long they want the password to be.
To start with, I was given code to work with, which set up the html and the css, just requiring me to write the fuctional javascript to make the password generate.

I started by creating my variables that would be user defined and would include PROMPTS and CONFIRMS in order to generate a feild of characters to choose through. I then went through and set up the variable fields with all my characters and a final variable array that was empty to concatonate my characters depending on the user input. I used strings and then the split function, otherwise I would have had to write it all in long hand.
Testing my script, I found that any way I clicked through my prompts, my ""FINAL"" array would end up with the characters I wanted or didnt want, and it was all working correctly. I just had to adjust how the initial prompt worked, as it wouldnt care whether I entered between 8 or 128, if I entered 5 it would still work. I added some if/else logic to help prompt a user if they didnt enter a number thats not within the correct range.

My next challenge was to work through the actual password generation. This was tough...
I used many different methods random generation, linked with looping through my array. I used a lot of googling and watched many a youtube video, and along with all that and some final advice from my lecturer, I managed to += into a final array which would generate the user amount of random characters, based of their picks!

![image](https://user-images.githubusercontent.com/78789156/111969220-e96c6280-8b49-11eb-90b0-8cd635d58df9.png)


Through this assignment I learnt a lot about conjoin different things I've learnt, like random functions, loops, promts and confirms, and how I can add them all together and make them work together. Before this assignment it was the biggest flaw in my knowledge, was how I can use many different functions and make them work together to create really cool applications like this one!

A copy of my deployed password generator can be found here: https://brucksta.github.io/hw3-javascipt-randompass/
