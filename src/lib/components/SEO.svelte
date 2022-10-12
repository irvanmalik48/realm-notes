<script lang="ts">
  export let title: string;
  export let description: string;
  export let keywords: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpequiv="X-UA-Compatible" content="ie=edge" />
</svelte:head>
