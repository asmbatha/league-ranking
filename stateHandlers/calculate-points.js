export default async (stateMachine) => {
    const matches = stateMachine.context.gameResults

    const teams = {
    }

    matches.forEach(match => {
        let [home, away] = match.split(', ')

        home = teamResult(home)
        away = teamResult(away)
        if (home.goals == away.goals) {
            addPoints(home.name, 1)
            addPoints(away.name, 1)
        } else if (home.goals > away.goals) {
            addPoints(home.name, 3)
            addPoints(away.name, 0)
        } else {
            addPoints(home.name, 0)
            addPoints(away.name, 3)
        }
    });

    function teamResult(team) {
        team = team.split(' ')
        let goals = Number(team.pop())
        return {
            name: team.join(' '),
            goals
        }
    }

    function addPoints(team, points) {
        if (!(team in teams)) teams[team] = 0

        teams[team] += points
    }

    stateMachine.context.teamPoints = teams

    stateMachine.next
}