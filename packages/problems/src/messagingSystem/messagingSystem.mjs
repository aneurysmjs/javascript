export default function messagingSystem() {
  /**
   * @typedef {Object} MessageItem
   * @property {number} timestamp - Message's timestamp in seconds.
   * @property {string} text - Message's content
   */

  /**
   * @type {MessageItem[]} messagesQueue
   */
  const messagesQueue = [];

  /**
   * @param {number} timestamp
   * @param {string} text
   */
  function addMessage(timestamp, text) {
    messagesQueue.push({ timestamp, text });
    messagesQueue.sort((a, b) => a.timestamp - b.timestamp);
  }

  /**
   * @param {number} currentTime
   */
  function addgetReadyMessagesMessage(currentTime) {
    const readyMessages = [];
    /**
     * Iterates through the messageQueue while the first message's timestamp is 10 seconds
     * or more behind the current time
     *
     * Explanation
     *
     * messageQueue: Refers to the message queue, which is a data structure holding the incoming messages.
     * [0]: Accesses the first element in the queue, representing the oldest message.
     * timestamp: The timestamp of the oldest message.
     * >= 10: Checks if the timestamp is greater than or equal to 10 seconds older than the current time.
     *
     * Purpose
     *
     * The code snippet ensures that messages are output only when:
     *
     * They are in the correct chronological order (the oldest message is at the front of the queue).
     * They are at least 10 seconds older than the current time, minimizing the chances of receiving an earlier message that should be output before the current one.
     */
    while (messagesQueue.length > 0 && currentTime - messagesQueue[0].timestamp >= 10) {
      readyMessages.push(messagesQueue.shift().text);
    }

    return readyMessages;
  }

  return {
    addMessage,
    addgetReadyMessagesMessage,
  };
}
