import Exercise from './components/Exercise'
import { ExerciseStore } from './stores/ExerciseStore'

const exerciseStore = new ExerciseStore()

const App: React.FC = () => {
    return (
        <div className='container mx-auto md:max-w-3xl px-4 py-4 md:py-8 md:px-4'>
            <Exercise exerciseStore={exerciseStore} />
        </div>
    )
}

export default App
