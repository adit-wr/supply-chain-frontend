import mitt from 'mitt';

// Create a new mitt event emitter instance
const emitter = mitt();

export const EventBus = {
  // Emit an event
  emit: (event, ...args) => emitter.emit(event, ...args),
  // Listen to an event
  on: (event, handler) => emitter.on(event, handler),
  // Remove event listener
  off: (event, handler) => emitter.off(event, handler)
};

export default emitter;
