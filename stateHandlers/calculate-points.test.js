import calculatePoints from './calculate-points.js'
import { stateMachine } from '../stateMachine.js'

test('Should correctly add up points', async () => {
    stateMachine.state = 'calculate-points'
    stateMachine.context.gameResults = [
        'Test team 5, Man U 0',
        'Barca 3, Test team 3',
        'Test team 0, Banyana Banyana 3'
    ]

    await calculatePoints(stateMachine)

    expect(stateMachine.context.teamPoints['Test team']).toBe(4)
})