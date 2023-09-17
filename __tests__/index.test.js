import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home', () => {
    it('should render SAUTEZ SUR L’OCCASION AVEC ThéTipTop', () => {
        render(<Home />);
        const firstText = screen.getByText('SAUTEZ SUR L’OCCASION AVEC ThéTipTop');
        expect(firstText).toBeInTheDocument();
    });
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: 'SAUTEZ SUR L’OCCASION AVEC ThéTipTop',
        })
        expect(heading).toBeInTheDocument()
    })
});