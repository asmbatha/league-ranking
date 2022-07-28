export default async (stateMachine) => {
    console.error(stateMachine.context.error.message)
    stateMachine.next
}