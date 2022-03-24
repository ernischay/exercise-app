import { observer } from 'mobx-react'
import { ExerciseStore } from '../stores/ExerciseStore'
import { ExerciseItem } from './ExerciseItem'

interface ExerciseListProps {
    exerciseStore: ExerciseStore
}

export const ExerciseList: React.FC<ExerciseListProps> = observer(({ exerciseStore }) => {
    return (
        <div className='p-5 flex flex-col gap-y-2'>
            {exerciseStore.exerciseList.map((exercise, index) => {
                return <ExerciseItem key={index} exercise={exercise} index={index} />
            })}
        </div>
    )
})
