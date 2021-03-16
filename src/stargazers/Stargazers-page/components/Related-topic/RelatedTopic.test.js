import { render, screen } from '@testing-library/react';
import RelatedTopics from './RelatedTopic';
import { MockStargazerModels } from '../../../../mock-data/StargazerModels';

const relatedTopics = MockStargazerModels.data.search.nodes[0].repositoryTopics.nodes[0].topic.relatedTopics;

describe('RelatedTopics Tests', () => {
    let component;

    describe('when data is present', () => {
        beforeEach(() => {
            component = render(<RelatedTopics data={relatedTopics} />);
        });

        test('renders elements', () => {
            expect(component.getAllByRole(role => role === 'table')).toHaveLength(1);
            expect(component.getAllByRole(role => role === 'rowgroup')).toHaveLength(2);
            expect(component.getAllByRole(role => role === 'table')).toHaveLength(1);
            expect(component.getAllByRole(role => role === 'row')).toHaveLength(relatedTopics.length + 1);
            expect(component.getAllByRole(role => role === 'cell')).toHaveLength((relatedTopics.length + 1) * 2);
        });

        it('should render expexted text', () => {
            expect(screen.getByRole((role, el) => role === "cell" && el.textContent === "Topic")).toBeInTheDocument();
        });
    });

    describe('when data is not present', () => {
        beforeEach(() => {
            component = render(<RelatedTopics data={[]} />);
        });

        test('renders no data found text', () => {
            expect(screen.getByText("No stargaers are found!!!")).toBeInTheDocument();
        });
    });
});
