import handler from './calculate-points.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

describe('calculate-points state handler', () => {
    test('Should correctly add up points', async () => {
        stateMachine.state = 'calculate-points'
        stateMachine.context.gameResults = [
            'Test team 5, Man U 0',
            'Barca 3, Test team 3',
            'Test team 0, Banyana Banyana 3'
        ]

        await handler(stateMachine)

        expect(stateMachine.context.teamPoints['Test team']).toBe(4)
    })

    test('Next state should be `sort-teams`', async () => {
        expect(stateMachine.state.name).toBe('sort-teams')
    })
})