import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCyclesAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}
export function markCurrentCyclesAsFinishedAction() {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
export function interruptCurrentCycledAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  }
}
