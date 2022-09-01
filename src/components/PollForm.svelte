<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  import PollStore from "../stores/PollStore";
  import {slide, fade} from "svelte/transition";

  let dispach = createEventDispatcher()
  let fields = {question: '', answerA: '', answerB: ''};
  let errors = {question: '', answerA: '', answerB: ''};
  let valid = true;

  const submitHandler = () => {
    valid = true;
    errors.question = '';
    errors.answerA = '';
    errors.answerB = '';

    // Validate question
    if(fields.question.trim().length < 5){
      valid = false;
      errors.question = 'Question must be at least 5 characters long';
    } 

    // Validate AnswerA
    if(fields.answerA.trim().length < 1){
      valid = false;
      errors.answerA = 'Question must be at least 1 character long';
    } 

    // Validate AnswerB
    if(fields.answerB.trim().length < 1){
      valid = false;
      errors.answerB = 'Question must be at least 1 character long';
    } 

    if(valid){
      let poll = {...fields, votesA : 0, votesB: 0, id: Math.random() * 100}
      // Save poll to store
      PollStore.update(currentPolls => {
        return [poll, ...currentPolls];
      })
      dispach('add');
    }

  }
</script>

<div transition:fade>
  <form on:submit|preventDefault={submitHandler}>
    <div class="form-field mb-3">
      <label for="question">Poll Question</label>
      <input class="form-control" type="text" id="question" bind:value={fields.question}>
      <small class="error">{errors.question}</small>
    </div>
    <div class="form-field mb-3">
      <label for="answer-a">Answer A</label>
      <input class="form-control" type="text" id="answer-a" bind:value={fields.answerA}>
      <small class="error">{errors.answerA}</small>
    </div>
    <div class="form-field mb-3">
      <label for="answer-b">Answer B</label>
      <input class="form-control" type="text" id="answer-b" bind:value={fields.answerB}>
      <small class="error">{errors.answerB}</small>
    </div>

    <Button type="secondary" flat>Add Poll</Button>
  </form>
</div>

<style>
  form{
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field{
    text-align: left;
    margin: 18px auto;
  }

  input{
    width: 100%;
    border-radius: 6px;
  }

  label{
    margin: 10px auto;
    text-align: left;
  } 

  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }

</style>