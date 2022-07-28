export default async (stateMachine) => {
    let league = Object.entries(stateMachine.context.teamPoints)
        .map(([name, points]) => ({
            name,
            points
        })).sort((a, b) => b.points - a.points)

    stateMachine.context.league = league
    stateMachine.next
}