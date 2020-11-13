<template>
  <div class="l-container">
    <div>
      <ul class="c-row">
        <li v-for="post in posts" class="c-row__col -col-3">
          <n-link class="c-card" :to="`posts/${post.fields.slug}`">
            <div class="c-card__thumb">
              <img :src="post.fields.thumbnail.fields.file.url">
            </div>
            <div class="c-card__body">
              <h4>{{ post.fields.title }}</h4>
              <span>{{ post.sys.publishedAt }}</span>
            </div>
          </n-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { createClient } from '@/plugins/contentful.js'
const client = createClient()

@Component
export default class IndexPage extends Vue {
  asyncData ({ env } : { env: any }) {
    return Promise.all([
      // // fetch the owner of the blog
      // client.getEntries({
      //   'sys.id': env.CTF_PERSON_ID
      // }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([posts]) => {
      // return data that should be available
      // in the template
      return {
        posts: posts.items
      }
    }).catch(console.error)
  }
}

</script>

<style lang="scss">
.c-card {
  display: block;
  &__thumb {

  }
  &__body {
    padding: 15px 0;
    h4 {
      font-size: 1.2rem;
    }
  }
}
</style>
