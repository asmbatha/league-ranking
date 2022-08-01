import handler from './show-error.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

test('Should log the error and terminate the machine', async () => {
    stateMachine.state = 'show-error'
    stateMachine.context.error = new Error('test error')
    jest.spyOn(process, 'exit').mockImplementation()
    jest.spyOn(process.stderr, 'write').mockImplementation()

    await handler(stateMachine)

    expect(process.exit).toHaveBeenLastCalledWith(1)
})