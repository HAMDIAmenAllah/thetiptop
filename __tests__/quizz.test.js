import { render, screen } from '@testing-library/react'
import Quiz from '../src/components/quizzes/Quiz'

describe('Quiz', () => {
    it('test if form exist', () => {
        render(<Quiz />);
        const formElement = document.querySelector('form');
        expect(formElement).toBeInTheDocument();
    });
    it('check if title JEU CONCOURS written', () => {
        render(<Quiz />);

        const firstText = screen.getByText('TENTE TA CHANCE');
        expect(firstText).toBeInTheDocument();
    });
    it('check if heading exist', () => {
        render(<Quiz />)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
});