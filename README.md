# Exercism Javascript <img style="width:20%" align='right' src="https://media.giphy.com/media/SvFocn0wNMx0iv2rYz/giphy.gif" />&nbsp;&nbsp;
<br><br>
### 140 coding exercises for JavaScript on Exercism ! From Isogram to Reverse String 
<br>

- ## [Exo 1](https://github.com/Leagian/exercism-javascript/blob/main/helloWorld.js)

Instructions :

The classical introductory exercise. Just say "Hello, World!"
"Hello, World!" is the traditional first program for beginning programming in a new language or environment.
The objectives are simple:

   1. Write a function that returns the string "Hello, World!"

- ## [Exo 2](https://github.com/Leagian/exercism-javascript/blob/main/luciansLasagna.js)

Instructions :

1. Define the expected oven time in minutes
Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.

2. Calculate the remaining oven time in minutes
Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

3. Calculate the preparation time in minutes
Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

4. Calculate the total working time in minutes
Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

- ## [Exo 3](https://github.com/Leagian/exercism-javascript/blob/main/infiltration.js)

Instructions :

 1. Fast attack: a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on, so he will be vulnerable.
 
 2. Spy: the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.
 
 3. Signal prisoner: the prisoner can be signalled using bird sounds if the prisoner is awake and the archer is sleeping, as archers are trained in bird signaling so they could intercept the message.
 
  4. Free prisoner: Annalyn can try sneaking into the camp to free the prisoner. This is a risky thing to do and can only succeed in one of two ways:
        If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.
        If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer.

You have four tasks: to implement the logic for determining if the above actions are available based on the state of the three characters found in the forest and whether Annalyn's pet dog is present or not.
