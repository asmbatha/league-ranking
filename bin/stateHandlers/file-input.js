import fs from 'fs'

export default async (stateMachine) => {
    try {
        const filePath = process.argv[2];
        const gameResults = fs.readFileSync(filePath, 'utf8').toString().split('\n')

        stateMachine.context.gameResults = gameResults
        stateMachine.action('next')
    } catch (error) {
        stateMachine.context.error = error
        stateMachine.error
    }
}