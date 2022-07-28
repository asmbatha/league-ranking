export const stateMachine = {
    currentState: 'file-input',
    context: {},
    states: {
        'file-input': {
            onError: 'show-error',
            onNext: 'calculate-points'
        },
        'calculate-points': {
            onError: 'show-error',
            onNext: 'sort-teams'
        },
        'sort-teams': {
            onError: 'show-error',
            onNext: 'output'
        },
        'output': {},
        'show-error': {},
    },
    get state() {
        const actions = this.states[this.currentState]
        return {
            name: this.currentState,
            actions
        }
    },
    set state(name) {
        this.currentState = name
    },
    get next() {
        this.state = this.state.actions.onNext
        return this.state
    },
    get error() {
        this.state = this.state.actions.onError
        return this.state
    }
}