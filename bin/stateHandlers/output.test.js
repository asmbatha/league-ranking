import handler from './output.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

describe('sort-teams state handler', () => {
    test('Should correctly rank teams with equal points', async () => {
        jest.spyOn(console, 'log').mockImplementation()
        stateMachine.state = 'output'
        stateMachine.context.league = [
            { name: 'Tarantulas', points: 6 },
            { name: 'Lions', points: 5 },
            { name: 'Snakes', points: 1 },
            { name: 'FC Awesome', points: 1 },
            { name: 'Grouches', points: 0 }
        ]

        await handler(stateMachine)

        expect(stateMachine.context.league[2].rank).toEqual(stateMachine.context.league[3].rank)
    })
})