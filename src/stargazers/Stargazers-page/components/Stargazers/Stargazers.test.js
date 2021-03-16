import { render, screen, waitFor } from '@testing-library/react';
import Stargazers from './Stargazers';
import { MockedProvider } from '@apollo/client/testing';
import { GET_TOPICS_LIST } from '../../../model/StargazersQuery';
import { MockStargazerModels } from '../../../../mock-data/StargazerModels';

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

describe('Stargazers Tests', () => {
  let component;

  beforeEach(() => {
      component = render(
          <MockedProvider mocks={mocks} addTypename={false}>
              <Stargazers />
          </MockedProvider>);
  });
  
  test('renders elements with loading message', () => {
    expect(component.getByRole((role, el) => role === 'textbox' && el.value === 'frontEnd')).toBeInTheDocument();
    expect(screen.getByTestId('btn-home')).toBeInTheDocument();

    expect(screen.getByText(/Go Home/)).toBeInTheDocument();
    expect(screen.getByText(/Search for Topic Name:/)).toBeInTheDocument();
    expect(screen.getAllByText(/search topic/)).toHaveLength(2);

    expect(component.getByText(/Loading.../)).toBeInTheDocument();
  });

  test('show data after loading completed', async () => {
    await waitFor(() => expect(component.getByTestId('stargazers-model')).toBeInTheDocument());
    expect(component.getAllByTestId('stargazer-topic-list')).toHaveLength(39);
  });

});
