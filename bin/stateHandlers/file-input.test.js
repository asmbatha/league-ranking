import handler from './file-input.js'
import { StateMachine } from '../stateMachine.js'


describe('file-input state handler', () => {
    let stateMachine = new StateMachine()

    jest.spyOn(process.stdout, 'write').mockImplementation()

    test('Should throw an error when no source is provided', async () => {
        await handler(stateMachine)
        process.argv = ['node', 'entry'];

        expect(stateMachine.context.gameResults).toEqual([
            'Lions 3, Snakes 3',
            'Tarantulas 1, FC Awesome 0',
            'Lions 1, FC Awesome 1',
            'Tarantulas 3, Snakes 1',
            'Lions 4, Grouches 0'
        ])
    })

    test('Should correctly read the contents of the input file', async () => {
        process.argv = ['node', 'entry', 'test/input.txt'];

        stateMachine = new StateMachine()
        await handler(stateMachine)

        expect(stateMachine.context.gameResults).toEqual([
            'Lions 3, Snakes 3',
            'Tarantulas 1, FC Awesome 0',
            'Lions 1, FC Awesome 1',
            'Tarantulas 3, Snakes 1',
            'Lions 4, Grouches 0'
        ])
    })

    test('Should correctly read the contents of multiple input files', async () => {
        process.argv = ['node', 'entry', 'test/input.txt', 'test/input2.txt'];

        stateMachine = new StateMachine()
        await handler(stateMachine)

        expect(stateMachine.context.gameResults).toEqual([
            'Lions 3, Snakes 3',
            'Tarantulas 1, FC Awesome 0',
            'Lions 1, FC Awesome 1',
            'Tarantulas 3, Snakes 1',
            'Lions 4, Grouches 0',
            'Lions 2, Snakes 3',
            'Tarantulas 1, FC Awesome 3',
            'Lions 2, FC Awesome 1',
            'Tarantulas 3, Snakes 1',
            'Lions 4, Grouches 3'
        ])
    })

    test('Next state should be `calculate-points`', async () => {
        expect(stateMachine.state.name).toBe('calculate-points')
    })
})