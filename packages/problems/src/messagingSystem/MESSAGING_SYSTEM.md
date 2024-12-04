# Messaging system

You are developing a messaging system that needs to process a stream of messages.
Each message contains a `timestamp` (in seconds) and `text` content. Due to network delays, messages might arrive out of order.
Design a system that buffers incoming messages and outputs them in the correct chronological order.
If multiple messages have the same timestamp, maintain their original arrival order. <br />

The system should output a message only when it can guarantee no earlier messages will arrive (assume any message with a
timestamp more than 10 seconds in the past can be safely output).

## EXAMPLE

```javascript
Input: addMessage(5, 'Hello');
addMessage(3, 'World');
addMessage(4, 'Nice');
getReadyMessages(15);

Output: ['World', 'Nice', 'Hello'];
```

## Explanation
At time `15`, all messages are more than 10 seconds old and can be safely output in timestamp order

## EXAMPLE 2
```javascript
Input:addMessage(2, 'First')
addMessage(2, 'Second')
addMessage(1, 'Earlier')
getReadyMessages (12)

Output: ['Earlier', 'First', 'Second']
```

## Explanation
Messages with timestamp `2` maintain their arrival
order, and all messages are output as they're more than 10 seconds old.

## Requirements
1. Create a data structure to store and sort incoming messages. <br/>
2. Implement a method to add new messages: addMessage(timestamp, text) <br/>
3. Implement a method to retrieve ready messages: getReadyMessages(currentTime) <br/>
4. Messages must be output in chronological order
