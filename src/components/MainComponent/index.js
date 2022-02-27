import { useEffect } from 'react';
import ProblemComponent from './ProblemComponent';

function MainComponent({ showSmallText = false, trackData, submit }) {
    useEffect(() => { trackData(); }, []);
    return (
        <div>
            This is Main Component
            <ProblemComponent />
            {showSmallText && <small>small text</small>}
            <button onClick={submit}>Submit</button>
        </div>
    )

}


export default MainComponent;