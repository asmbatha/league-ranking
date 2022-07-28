import showError from './show-error.js'
import { stateMachine } from '../stateMachine.js'

test('Should log the error and terminate the machine', async () => {
    stateMachine.state = 'show-error'
    stateMachine.context.error = new Error('test error')
    jest.spyOn(console, 'error').mockImplementation()

    await showError(stateMachine)

    expect(console.error).toHaveBeenLastCalledWith('test error')
    expect(stateMachine.state.name).toBe(undefined)
})