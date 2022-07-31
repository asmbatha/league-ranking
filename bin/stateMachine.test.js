import { StateMachine } from './stateMachine.js'

describe('Ensure our statemachine is configured correctly', () => {
    const stateMachine = new StateMachine()
    beforeEach(() => {
        stateMachine.state = 'file-input'
    })

    test('initial state should be `file-input`', () => {
        expect(stateMachine.state.name).toBe('file-input')
    })

    describe('file-input', () => {
        beforeEach(() => {
            stateMachine.state = 'file-input'
        })

        test('should be `file-input`', () => {
            expect(stateMachine.state.name).toBe('file-input')
        })

        test('next state should be `calculate-points`', () => {
            expect(stateMachine.action('next').name).toBe('calculate-points')
        })
    })

    describe('calculate-points', () => {
        beforeEach(() => {
            stateMachine.state = 'calculate-points'
        })

        test('should be `calculate-points`', () => {
            expect(stateMachine.state.name).toBe('calculate-points')
        })

        test('next state should be `sort-teams`', () => {
            expect(stateMachine.action('next').name).toBe('sort-teams')
        })
    })

    describe('sort-teams', () => {
        beforeEach(() => {
            stateMachine.state = 'sort-teams'
        })

        test('should be `sort-teams`', () => {
            expect(stateMachine.state.name).toBe('sort-teams')
        })

        test('next state should be `output`', () => {
            expect(stateMachine.action('next').name).toBe('output')
        })
    })

    describe('output', () => {
        beforeEach(() => {
            stateMachine.state = 'output'
        })

        test('should be `file-input`', () => {
            expect(stateMachine.state.name).toBe('output')
        })

        test('next state should be `calculate-points`', () => {
            expect(stateMachine.action('next').name).toBe(undefined)
        })
    })
})
