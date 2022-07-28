import { stateMachine } from './stateMachine.js'

describe('initial state', () => {
    test('hello world test', () => {
        console.log({ stateMachine })
        expect(1).toBe(1)
    })
})