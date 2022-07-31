import handler from './file-input.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

describe('file-input state handler', () => {
    test('Should correctly ready the contents of the input file', async () => {
        await handler(stateMachine)

        expect(stateMachine.context.gameResults).toEqual([
            'Lions 3, Snakes 3',
            'Tarantulas 1, FC Awesome 0',
            'Lions 1, FC Awesome 1',
            'Tarantulas 3, Snakes 1',
            'Lions 4, Grouches 0'
        ])
    })

    test('Next state should be `calculate-points`', async () => {
        expect(stateMachine.state.name).toBe('calculate-points')
    })
})