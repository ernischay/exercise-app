import { IExercise } from '../models/IExercise'

interface ExerciseItemProps {
    exercise: IExercise
    index: number
}

export const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise, index }) => {
    return (
        <div className='flex flex-col gap-y-1 border-b border-gray-200'>
            <div className='text-lg text-gray-700'>
                {index + 1}. {exercise.name}
            </div>
            <div className='flex justify-between py-2 px-5 md:w-1/2'>
                <p className='text-base text-gray-600'>Sets: {exercise.sets}</p>
                <p className='text-base text-gray-600'>Reps: {exercise.reps}</p>
            </div>
        </div>
    )
}
