<script lang="ts">
  type TProps = {
    class?: string
  }
  const { class: className }: TProps = $props()
</script>

<svg
  width="40"
  height="40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
>
  <g>
    <path
      d="M39.3 30.1h.2l.1-.1.1-.1h.1v-.1l.1-.1v-.1-.1-.1h.1V10.7c0-.4-.4-.8-.9-.8H11.8a.9.9 0 00-.6.2v.1H11v.1l-.1.1v5.7a.9.9 0 101.7 0v-3.4l7.7 6.8h-.1l-7.6 7.7v-5.7a.9.9 0 10-1.8 0v1H6.5a.9.9 0 100 1.8h4.4v5c0 .5.4.8 1 .8H39.2zm-1-3l-7.6-7.5 5.7-4.9a.9.9 0 00-1.2-1.3l-9.7 8.3L14 11.6h24.2v15.6zm-16.8-6.3l.2-.2 3.2 2.9a.9.9 0 001.1 0l3.3-2.8.1.1 7.6 7.6H14l7.6-7.6z"
    ></path>
    <path d="M.9 19.7h14.6a.9.9 0 100-1.7H1a.9.9 0 100 1.7z"></path>
    <path d="M2.4 15H9a.9.9 0 100-1.8H2.4a.9.9 0 100 1.8z"></path>
    <path d="M7.2 26.2H1a.9.9 0 100 1.7h6.3a.9.9 0 100-1.7z"></path>
  </g>
</svg>
