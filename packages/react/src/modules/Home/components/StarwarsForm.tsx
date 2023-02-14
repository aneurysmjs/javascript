/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FunctionComponent, useState, Dispatch, SetStateAction, KeyboardEvent } from 'react';
// @ts-ignore
import debounce from 'lodash.debounce'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved
import axios, { type AxiosResponse, type AxiosError } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

/**
 * Some best UX recommendations
 *
 * Limit the number of possible completions to relatively short list, 5 to 10, depending on your device and screen size.
 *
 * Give user the possibility to pick them by mouse, by keyboard, by tapping. For keyboard, make sure this doesn't trigger the search,
 * but just adds the selected word into the input field.
 *
 * After user selected one of completions, consider if further completions make sense and show them. E.g. if input is "des",
 * completion can be "design". After user selected "design" from the auto completion list, you can suggest "design tools",
 * "design tutorials", "UX design". Then user may select one of them. Etc.
 *
 * Don't trigger search after user selected one of completions. User may want to modify suggested word or add his own words.
 *
 * Trigger search only after user clicked or tapped the button or pressed Enter key.
 */

const apiUrl = 'https://swapi.dev/api/people';
// angp@ciklum.com
interface Character {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
}

interface Response {
  results: Character[];
}

const fetchCharacter = (
  name: string,
  stateSetter: Dispatch<SetStateAction<boolean>>,
): Promise<AxiosResponse<Response>> => {
  stateSetter(true);

  return new Promise((resolve, reject) => {
    axios
      .get<Response>(apiUrl, {
        params: {
          search: name,
        },
      })
      .then((result) => {
        resolve(result);

        stateSetter(false);
      })
      .catch((err: AxiosError) => {
        reject(err);

        stateSetter(false);
      });
  });
};

const StarwarsForm: FunctionComponent = () => {
  const [characterNames, setCharacterNames] = useState<Character[]>([]);
  const [isRequestGoing, setIsRequestGoing] = useState(false);

  const handleKeydown = debounce(async (evt: KeyboardEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement;

    try {
      const {
        data: { results },
      } = await fetchCharacter(value, setIsRequestGoing);

      if (results.length) {
        setCharacterNames(results);
      }

      if (value === '') {
        setCharacterNames([]);
      }
    } catch (error) {}
  }, 300);

  console.log('isRequestGoing', isRequestGoing);

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="type a name"
          onKeyDown={handleKeydown}
          name="starwarsName"
        />
      </form>

      <div className="mt-3">
        {isRequestGoing ? (
          <div className="text-center" data-testid="loader">
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        ) : null}
        {characterNames.length
          ? characterNames.map((character) => (
              <ul className="list-group mb-2" key={character.name} data-testid="character-card">
                <li className="list-group-item">{character.name}</li>
              </ul>
            ))
          : null}
      </div>
    </div>
  );
};

export default StarwarsForm;
