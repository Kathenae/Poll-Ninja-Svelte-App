<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollForm from "./components/PollForm.svelte";
import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  //Tabs
  let items = ['View Polls', 'Create New Poll'];
  let activeItem = 'View Polls';
  const tabChange = (e) => {
    activeItem = e.detail;
  }

  const handleAdd = (e) => {
    activeItem = "View Polls"
  }

</script>

<Header />
<main>
    <Tabs {activeItem} {items} on:tabChange={tabChange}/>
    
    {#if activeItem == 'View Polls'}
      <PollList/>
    {/if}

    {#if activeItem == 'Create New Poll'}
      <PollForm on:add={handleAdd}/>
    {/if}
</main>
<Footer />

<style>
  main{
    max-width: 960px;
    margin: 40px auto;
  }
</style>
