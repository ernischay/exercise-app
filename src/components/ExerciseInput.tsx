import { useState } from 'react'
import { IExercise } from '../models/IExercise'
import { ExerciseStore } from '../stores/ExerciseStore'

interface ExerciseInputProps {
    exerciseStore: ExerciseStore
}

export const ExerciseInput: React.FC<ExerciseInputProps> = ({ exerciseStore }) => {
    const [value, setValue] = useState<IExercise>({ name: '', sets: 0, reps: 0 })

    const handleChange = (e: React.ChangeEvent<any>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className='p-5 flex flex-col gap-y-1'>
            <div className='flex flex-row-reverse gap-x-4'>
                <button
                    onClick={() => {
                        exerciseStore.clearExercise()
                    }}
                    className='bg-gray-100 py-1 px-2 border rounded'
                >
                    Clear
                </button>
                <button
                    onClick={() => {
                        if (!!value.name && value.sets > 0 && value.reps > 0) {
                            exerciseStore.addExercise(value)
                            setValue({ name: '', sets: 0, reps: 0 })
                        }
                    }}
                    className='bg-gray-100 py-1 px-2 border rounded'
                >
                    Add
                </button>
            </div>
            <label htmlFor='name'>Name</label>
            <input className='border border-gray-200 text-gray-600 p-1 outline-0 text-sm' name='name' id='name' type='text' value={value.name} onChange={handleChange} />
            <label htmlFor='sets'>Sets</label>
            <input className='border border-gray-200 text-gray-600 p-1 outline-0 text-sm' name='sets' id='sets' type='text' value={value.sets} onChange={handleChange} />
            <label htmlFor='reps'>Reps</label>
            <input className='border border-gray-200 text-gray-600 p-1 outline-0 text-sm' name='reps' id='reps' type='text' value={value.reps} onChange={handleChange} />
        </div>
    )
}
