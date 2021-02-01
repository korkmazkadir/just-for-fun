# Cellular Automaton

This folder contains a simple cellular automaton implementation in HTML and Javascript. The idea of implementing a cellular automaton came after watching a video from the NumberPhile Youtube channel which is one of my favorite channels. You can access the video using the link:

https://youtu.be/_UtCli1SgjI

During my university years, I have implemented a simple cellular automaton using Java and Swing. It was homework, and I have implemented that one without any understanding. At that time it was just a fun programming exercise for me.

In the beginning, I was planning to implement a simple Domain Specific Language (DSL) to describe the cellular automaton rules. I did a quick search and I have realized that designing a simple DSL is not that simple. In the long term, I am planning to implement one to describe cellular automatons. It could be used for educational purposes (Possibly, there are examples of DSLs to describe cellular automatons. I should search on the Internet). 

After implementing this one, I have selected one seed cell, and I have observed that when I select one seed cell, it is always finishing after 255 rounds! Natural questions should be answered:

1- Why it is so?

2- How to prove it in a strict manner?

I have observed that using two seed cells selected randomly creating a random appearing figure after some rounds. I think that it could be used to produce pseudo-random numbers. I have decided to evaluate the randomness of results, then I have reached the following Wikipedia articles:

https://en.wikipedia.org/wiki/Randomness_test

https://en.wikipedia.org/wiki/List_of_random_number_generators


From the articles, I have learned that cellular-automatons are used to produce random numbers.

Idea: I can use the JS canvas API to get png files of each file, and I can produce a simple GIF or movie. Even, I can use the current patterns to produce an 8 bit sound on each frame update. For the sound creation look at the project:

https://github.com/meenie/band.js

http://plnkr.co/edit/LG20SL?p=preview&preview


I just tell the story behind the implementation, and I did not say much about the implementation because it is a simple one and contains just a few hundred lines of code so there is not much to mention about it.


