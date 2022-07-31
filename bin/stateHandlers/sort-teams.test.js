import handler from './sort-teams.js'
import { StateMachine } from '../stateMachine.js'

const stateMachine = new StateMachine()

test('Should correctly add up points', async () => {
    stateMachine.state = 'calculate-points'
    stateMachine.context.teamPoints = {
        'Test team': 4,
        'Man U': 0,
        'Barca': 1,
        'Banyana Banyana': 3
    }

    await handler(stateMachine)

    expect(stateMachine.context.league[0].points).toBeGreaterThan(stateMachine.context.league[3].points)
})