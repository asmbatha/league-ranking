import handler from './show-error.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

test('Should log the error and terminate the machine', async () => {
    stateMachine.state = 'show-error'
    stateMachine.context.error = new Error('test error')
    jest.spyOn(console, 'error').mockImplementation()

    await handler(stateMachine)

    expect(console.error).toHaveBeenLastCalledWith('test error')
    expect(stateMachine.state.name).toBe(undefined)
})