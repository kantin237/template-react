import './loading.css'
import load from '../../../assets/chasing-arrows.gif'


export default function Loading() {
    return (
        <div className="loader">
            <img src={load} alt="Loading..." />
            Loading ...
        </div>
    )
}

