<script>
  import Button from "../shared/Button.svelte";
  import Card from "../shared/Card.svelte";
  import { createEventDispatcher } from "svelte";
  import {tweened} from 'svelte/motion';
  import {db} from '../Firebase';
  import {setDoc, doc, deleteDoc} from "firebase/firestore";
  export let poll;
  
  let dispach = createEventDispatcher();
  
  $: totalVotes = poll.votesA + poll.votesB;
  let percentA = tweened(0);
  let percentB = tweened(0);

  $: percentA.set(Math.floor(100 / totalVotes * poll.votesA) || 0);
  $: percentB.set(Math.floor(100 / totalVotes * poll.votesB) || 0);
  


  async function handleVote(option, id){

    let votedPoll = {...poll};

    if(option === 'a'){
      votedPoll.votesA++;
    }

    if(option === 'b'){
      votedPoll.votesB++;
    }

    poll = votedPoll;
    let pollRef = doc(db, 'polls', id);
    setDoc(pollRef, poll);
  }

  async function handleDelete(id){
    await deleteDoc(doc(db, 'polls', id))
    dispach('delete', id)
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>{totalVotes}</p>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" style="width: {$percentA}%;"></div>
      <span>{poll.answerA} ({Math.round($percentA)}%)</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width: {$percentB}%;"></div>
      <span>{poll.answerB} ({Math.round($percentB)}%)</span>
    </div>
    <div class="delete">
      <Button flat on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3{
    margin: 0 auto;
    color: #555;
  }

  p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer{
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover{
    opacity: 0.6;
  }

  span{
    display: inline-block;
    padding: 10px 20px;
  }

  .percent{
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a{
    border-left: 4px solid #d91b42;
    background-color: rgba(217, 27, 66, 0.2);
  }

  .percent-b{
    border-left: 4px solid #45c496;
    background-color: rgba(69, 196, 150, 0.2);
  }
  
  .delete{
    text-align: center;
    margin-top: 30px;
  }
</style>