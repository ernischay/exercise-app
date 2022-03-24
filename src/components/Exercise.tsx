import { observer } from 'mobx-react'
import { ExerciseStore } from '../stores/ExerciseStore'
import { ExerciseInput } from './ExerciseInput'
import { ExerciseList } from './ExerciseList'

interface ExerciseProps {
    exerciseStore: ExerciseStore
}

const Exercise: React.FC<ExerciseProps> = observer((props: ExerciseProps) => {
    return (
        <div className='border border-gray-200'>
            <div className='px-4 py-4 bg-gray-100'>
                <h5 className='font-medium text-xl text-gray-800 md:text-3xl'>Exercise App</h5>
            </div>
            <ExerciseInput exerciseStore={props.exerciseStore} />
            <ExerciseList exerciseStore={props.exerciseStore} />
        </div>
    )
})

export default Exercise
