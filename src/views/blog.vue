<template>
  <div class="blog" id="blog">
    <add-blog />
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from "@/components/blog.vue";

export default {
  name: "Blog",
  components: {
    "add-blog": Blog,
  },
};
</script>
