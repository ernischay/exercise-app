import { makeAutoObservable } from 'mobx'
import { IExercise } from '../models/IExercise'

export class ExerciseStore {
    exerciseList: IExercise[] = []

    constructor() {
        makeAutoObservable(this)
        const list = localStorage.getItem('exercise')
        if (typeof list === 'string') {
            this.exerciseList = JSON.parse(list)
        }
    }

    addExercise(exercise: IExercise) {
        this.exerciseList.push(exercise)
        localStorage.setItem('exercise', JSON.stringify(this.exerciseList))
    }

    clearExercise() {
        this.exerciseList = []
        localStorage.clear()
    }
}
