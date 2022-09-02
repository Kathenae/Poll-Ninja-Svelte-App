<script>
  import PollDetails from "./PollDetails.svelte";
  import {fade, slide, scale} from 'svelte/transition';
  import {flip} from 'svelte/animate';
  import {db} from '../Firebase';
  import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
  import { onMount } from "svelte";

  let polls = [];

  onMount(() => {
    loadPolls();
  })

  async function loadPolls(){
    const querySnapshot = await getDocs(collection(db, 'polls'));
    polls = querySnapshot.docs.map(poll => {
      return {id: poll.id, ...poll.data()};
    })
  }

</script>

<div class="poll-list">
  {#each polls as poll(poll.id)}
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
      <PollDetails {poll} on:vote on:delete={(id) => { loadPolls() }}/>
    </div>
  {/each}
</div>

<style>
  .poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>