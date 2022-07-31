import fs from 'fs'

export default async (stateMachine) => {
    try {
        const files = Array.from(new Set(process.argv.slice(2)))
        stateMachine.context.gameResults = []

        if (files.length) {
            const data = [].concat(...files.map(readData))
            stateMachine.context.gameResults = data
        } else {
            const data = readData(0)
            stateMachine.context.gameResults = data
        }

        function readData(source) {
            return fs.readFileSync(source, 'utf8')
                .toString()
                .split('\n')
                .filter(data => !!data)
        }

        if (!stateMachine.context.gameResults.length)
            throw new Error(`No match results provided`)

        stateMachine.action('next')
    } catch (error) {
        stateMachine.context.error = error
        stateMachine.action('error')
    }
}