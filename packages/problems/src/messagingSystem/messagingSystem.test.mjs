import messagingSystem from './messagingSystem.mjs';

describe('messagingSystem', () => {
  const cases = [
    [
      [
        [5, 'Hello'],
        [3, 'World'],
        [4, 'Nice'],
      ],
      15,
      ['World', 'Nice', 'Hello'],
    ],
    // [
    //   [
    //     [2, 'First'],
    //     [2, 'Second'],
    //     [1, 'Earlier'],
    //   ],
    //   12,
    //   ['Earlier', 'First', 'Second'],
    // ],
  ];

  it.each(cases)('for "%p" the K: %d most frequent elements are %p', (messages, time, expected) => {
    const { addMessage, addgetReadyMessagesMessage } = messagingSystem();
    console.log('messages', messages);

    messages.forEach(([timestamp, text]) => addMessage(timestamp, text));
    expect(addgetReadyMessagesMessage(time)).toStrictEqual(expected);
  });
});
