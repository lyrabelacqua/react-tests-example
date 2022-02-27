import { fireEvent, render, screen } from '@testing-library/react';
import MainComponent from '../index';
import ProblemComponent from '../ProblemComponent';

const setup = ({ showSmallText } = {}) => {
    const trackData = jest.fn();
    const submit = jest.fn();
    render(<MainComponent showSmallText={showSmallText} trackData={trackData} submit={submit}/>)
    return { trackData, submit };
};

jest.mock('../ProblemComponent', () => ({
    __esModule: true,
    default: () => <div />
}));


beforeEach(() => { console.log('!!! start')})
beforeAll(() => { console.log('!!! START');})

describe('MainComponent', () => {
    it('shows main text', () => {
        setup();
        expect(screen.getByText('This is Main Component')).toBeVisible();
    });

    it('renders small text if the prop showSmallText is set to true', () => {
        setup({ showSmallText: true });
        expect(screen.getByText('small text')).toMatchSnapshot();
    });

    it(`doesn't render small text if the prop is set to false`, () => {
        setup({ showSmallText: false });

        expect(screen.queryByText('small text')).not.toBeInTheDocument();
    });

    it('runs trackData after the component mounted', () => {
        const { trackData } = setup();

        expect(trackData).toHaveBeenCalled();
    });

    it('runs the clicking function when the button is clicked', () => {
        // arrange
        const { submit } = setup();
        
        // act
        fireEvent.click(screen.getByText('Submit'));
        
        // assert
        expect(submit).toHaveBeenCalled();

    });
});
