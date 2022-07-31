# League Ranking

![System design](system-diagram.png)

Node.js CLI application.  
This simple cli application calculates and outputs a league ranking table from a texet file with match results.

Sample input:  
```txt
Lions 3, Snakes 3
Tarantulas 1, FC Awesome 0
Lions 1, FC Awesome 1
Tarantulas 3, Snakes 1
Lions 4, Grouches 0
```

Expected output:  
```txt
1. Tarantulas, 6 pts
2. Lions, 5 pts
3. FC Awesome, 1 pt
3. Snakes, 1 pt
5. Grouches, 0 pts
```

See [BE Coding Test - Candidate.pdf](BE&#32;Coding&#32;Test&#32;-&#32;Candidate.pdf)


## Requirements
- Node.js v12.x or newer
- Clone this repository


## Usage
**Install**  
From the command line in the `league-ranking` folder
```sh
$ npm install -g
```
**Execute**
```sh
$ league-ranking FILENAME
```

**Uninstall**
```sh
$ npm uninstall league-ranking -g
```

## Development
**Install dependencies**
```sh
$ npm i
```

**Run with demo [input.txt](input.txt) file**
```sh
$ npm start
```

**Run with custom input**  
```sh
$ node . FILENAME
```
or
```
$ bin/cli.js FILENAME
```


**Testing**
```sh
$ npm test
```
or 
```sh
$ npm tdd
```

## System design

![State machine](state-machine.png)

- A state machine as described in the diagram above will controll the logical flow of the application and define clear scopes for our unit tests.

