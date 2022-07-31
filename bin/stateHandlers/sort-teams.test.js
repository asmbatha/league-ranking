import handler from './sort-teams.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

describe('sort-teams state handler', () => {
    test('Should correctly sort the teams by points in descending order', async () => {
        stateMachine.state = 'sort-teams'
        stateMachine.context.teamPoints = {
            'Test team': 4,
            'Man U': 0,
            'Barca': 1,
            'Banyana Banyana': 3
        }

        await handler(stateMachine)

        expect(stateMachine.context.league[0].points).toBeGreaterThan(stateMachine.context.league[3].points)
    })

    test('Next state should be `output`', async () => {
        expect(stateMachine.state.name).toBe('output')
    })
})