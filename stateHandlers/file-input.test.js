import fileInput from './file-input.js'
import { stateMachine } from '../stateMachine.js'

test('Should correctly ready the contents of the input file', async () => {
    await fileInput(stateMachine)

    expect(stateMachine.context.gameResults).toEqual([
        'Lions 3, Snakes 3',
        'Tarantulas 1, FC Awesome 0',
        'Lions 1, FC Awesome 1',
        'Tarantulas 3, Snakes 1',
        'Lions 4, Grouches 0'
    ])
})