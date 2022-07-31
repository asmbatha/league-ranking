export default async (stateMachine) => {
    const league = stateMachine.context.league

    league.forEach((team, i) => {
        if (league[i - 1]?.points == team.points) {
            team.rank = league[i - 1].rank
        } else {
            team.rank = i + 1
        }
        const { rank, name, points } = team

        console.log(`${rank}. ${name}, ${points} pt${points == 1 ? '' : 's'}`)
    });
}