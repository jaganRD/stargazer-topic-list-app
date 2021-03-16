import { render, screen } from '@testing-library/react';
import StargazersHomePage from './StargazersHomePage';

describe('StargazersHomePage Tests', () => {
    let component;

    describe('it will renders the  StargazersHomePage', () => {
        beforeEach(() => {
            component = render(<StargazersHomePage />);
        });

        test('renders elements', () => {
            expect(screen.getByTestId('main-page-section')).toBeInTheDocument();
            expect(screen.getByTestId('graph-logo')).toBeInTheDocument();
            expect(screen.getByTestId('header-section')).toBeInTheDocument();
            expect(screen.getByTestId('topics-button')).toBeInTheDocument();
        });

        test('renders header title', () => {
            expect(screen.getByText("GraphQL Star Gazers Topics APP")).toBeInTheDocument();
        });

    });

});
