#!/usr/bin/env node
"use strict";

import { StateMachine } from "./stateMachine.js";
import stateHandlers from "./stateHandlers/index.js"

const machine = new StateMachine({
    onEntry: state => {
        try {
            if (state.name in stateHandlers) stateHandlers[state.name](machine)
        } catch (error) {
            console.error('Error while calling state handler', { error, state })
        }
    },
    state: 'file-input'
})

machine.start()
