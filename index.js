import { stateMachine } from "./stateMachine.js";
import stateHandlers from "./stateHandlers/index.js"

(async () => {
    while (stateMachine.state.name in stateHandlers) {
        await stateHandlers[stateMachine.state.name]?.(stateMachine)
    }
})()