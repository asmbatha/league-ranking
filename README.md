# League Ranking cli application

![System design](system-diagram.png)

Production ready, maintainable, testable command-line application that will calculate the ranking table for a league.
This simple cli application takes a text file contain a list of match results as input, calculates points for each team and prints a ranking table for a league.

[BE Coding Test - Candidate.pdf](BE&#32;Coding&#32;Test&#32;-&#32;Candidate.pdf) contains the entire brief about the problem.

## System design

![State machine](state-machine.png)

- A state machine as described in the diagram above will controll the logical flow of the application and define a clear scope for our unit tests.
- Unit tests will ensure each unit of logical processing/computation behaves as intended and is written in a clear manner that directly addresses the concerns of the unit.
- Unit test also promotes writing minimal, maintainable and testable code and cuts out all of the unnecessary.

## Roadmap / Tasks
- [X] Create a state machine
- [X] Set up a unit testing environment.
- [X] Unit test the state machine to validate our state transitions
- [X] Write unit tests for operations/computation within each state/stage in our system
- [X] Program solutions that pass when for Unit tests
- [X] Review - refactor and update README. Then submit the assessment.

## Post thoughts and considerations
- Javascript uses a Insertion sort algorithm in their `sort` function. This has a time complexity of Big O(n^2). This is perfectly fine for this use case as a leage would probably not consist of a very large number of participants and match ups.
- Other minor optimizations are also possible at the risk of over engineering a rather simple peace of code.

## Installation
Clone this repository locally.
Ensure you have nodejs installed then simply run:
```
npm i
```

## Usage
To use the [input file](input.txt) included in this repo, you can simply run:
```
npm start
```

To use a different file as input you can run the following. 
```
node index.js [file path]
```

## Testing
Run Tests once:
```
npm test
```

Rerun tests after file changes:
```
npm run tdd
```