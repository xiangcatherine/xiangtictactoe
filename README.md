Link to hosted game:
https://xiangcatherine.github.io/xiangtictactoe/

List of technologies:
HTML, CSS, SCSS, Javascript and jQuery, Rails


Document your planning and tell a story about your development process and problem-solving strategy.

wireframe -> basic HTML and minimal styling (to get a basic
visual) -> authentication -> game engine -> game API + UI -> styling + UI

I essentially tried to stick to the suggested schedule as much as possible (though
I definitely got distracted by styling here and there). I first started by mapping
out a wireframe, which gave me a clearer idea of the structures needed to be built.

Going in, I knew that building the game engine/ logic would be the most time-
consuming and difficult portion, so I allocated most of my time to that. I was
quite lost at first, and my first attempt was a LOT of jQuery, consisting of
ginormous cascades of if statements. I realized this was not only incredibly
inefficient and not modular at all, but it would also make the game API process
very difficult. So I scratched that first attempt and started the javascript from
scratch.

JS attempt number 2 was much better. I began with high-level pseudo code (I now
realized how important this step is to map out the logic and organize one's
brain). The pseudo code was incredibly helpful in helping me think about the
flow of the game and what functions to write according to that.

Apart from my first failed attempt at the game logic, it was very hard to keep
code modular -- there was a lot of writing out functions - recognizing redudancy
- erasing or moving, and so on. Scope was hard to keep track of as well (importing,
exporting, writing callbacks etc.).

All in all, this was a very challenging project, but I definitely learned a lot.
Concepts I had troubled grasping in class (like callbacks and scope) became much
clearer through application.


Unsolved problems:

1) The forms aren't cleared after submission, which is unsafe.
2) More game statistics should be recorded (this game only records how many games
the user has played), such as how many win/ draws.
3) The CSS styling is a bit messy, could be much more organized.
4) User cannot choose to be X or O.
5) The game isn't multiplayer.

Wireframes and user stories:

![Catherine's wireframe] (http://imgur.com/a/KSKui)

User stories:
1) A guest can sign up for an account;
2) A registered user can play tic tac toe;
3) A registered user can see if they've won or drawn;
4) A registered user can keep track of how many games they've played;
5) A registered user can start a new game any time;
6) A registered user can sign out after playing.
