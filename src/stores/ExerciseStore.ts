import { makeAutoObservable } from 'mobx'
import { IExercise } from '../models/IExercise'

export class ExerciseStore {
    exerciseList: IExercise[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addExercise(exercise: IExercise) {
        this.exerciseList.push(exercise)
    }

    clearExercise() {
        this.exerciseList = []
    }
}
