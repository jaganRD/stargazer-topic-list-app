import { render, screen, waitFor } from '@testing-library/react';
import StargazersModel from './StargazersModel';
import { MockedProvider } from '@apollo/client/testing';
import { MockStargazerModels } from '../../../../mock-data/StargazerModels';
import { GET_TOPICS_LIST } from '../../../model/StargazersQuery';

const mocks = [
  {
    request: {
      query: GET_TOPICS_LIST,
      variables: {
        name: 'frontEnd',
      },
    },
    result: {
      data: MockStargazerModels.data,
    },
  },
];

describe('StargazersModel Tests', () => {
  let component;

  beforeEach(() => {
    component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <StargazersModel node="frontEnd" />
      </MockedProvider>
    );
  });
  
  test('show loading message when loading', () => {
    expect(component.getByText(/Loading.../)).toBeInTheDocument();
  });

  test('show data after loading completed', async () => {
    await waitFor(() => expect(component.getByTestId('stargazers-model')).toBeInTheDocument());
    expect(component.getAllByTestId('stargazer-topic-list')).toHaveLength(39);
  });
});
