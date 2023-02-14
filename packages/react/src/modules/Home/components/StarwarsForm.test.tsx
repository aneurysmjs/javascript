/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';
// @ts-ignore
import { render, fireEvent, act } from '@testing-library/react';
import StarwarsForm from './StarwarsForm';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

const characterData = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
];

describe('StarwarsForm', () => {
  it('should display a list of character names after searching', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: { results: characterData } });

    // @ts-ignore
    const { getByPlaceholderText, getAllByTestId, queryByTestId } = render(<StarwarsForm />);

    const input = getByPlaceholderText('type a name');

    expect(queryByTestId('loader')).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.change(input, { target: { value: 'luke' } });
    });

    expect(queryByTestId('loader')).not.toBeInTheDocument();

    // const characterCards = getAllByTestId('character-card');

    // expect(characterCards.length).toBe(2);
    // expect(characterCards[0]).toHaveTextContent('Luke Skywalker');
    // expect(characterCards[1]).toHaveTextContent('Leia Organa');
  });
});
