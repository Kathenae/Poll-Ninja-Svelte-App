import {writable} from 'svelte/store';

const PollStore = writable([
  {
    id : 1,
    question: 'Python or Javascript?',
    answerA: 'Python',
    answerB: 'Javascript',
    votesA: 23,
    votesB: 100,
  }
])

export default PollStore;