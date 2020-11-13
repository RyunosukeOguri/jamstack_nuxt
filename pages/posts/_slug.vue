<template>
  <div class="l-container">
    <article>
      <div class="p-article-header">
        <div class="p-article-avatar">
          <div class="p-article-avatar__thumb">
            <img :src="post.fields.author.fields.avatar.fields.file.url">
          </div>
          <div class="p-article-avatar__content">
            <span class="p-article-avatar__name">著者: {{ post.fields.author.fields.name }}/{{ post.fields.author.fields.job }}</span>
            <span class="p-article-avatar__date">{{ post.sys.updatedAt }}</span>
          </div>
        </div>
        <h1 class="p-article-title">{{ post.fields.title }}</h1>
      </div>
      <div class="p-article-thumb">
        <img :src="post.fields.thumbnail.fields.file.url">
      </div>
      <div class="p-article-content" v-html="$md.render(post.fields.content)"></div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { createClient } from '@/plugins/contentful.js'
const client = createClient()

interface TPost {
  fields: {
    title: string
    slug: string
    content: string
    thumbnail: string
  }
}

@Component
export default class PostDetail extends Vue {
  post: TPost | null = null

  asyncData ({ env, params, payload } : { env: any, params: any, payload: any }) {
    if (payload) return { post: payload }
    return client.getEntries({
        content_type: env.CTF_POST_TYPE_ID,
        'fields.slug': params.slug
      })
      .then(entries => {
        return {
          post: entries.items[0]
        }
      }).catch(e => console.log(e))
  }
  head() {
    if (!this.post) return {}
    return {
      title: this.post.fields.title
    }
  }
}

</script>

<style lang="scss">
article {
  max-width: 620px;
  margin: auto;
  padding: 10px 0;
}

.p-article-avatar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &__thumb {
    position: relative;
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
    img {
      position: absolute;
      width: 45px;
      height: 45px;
    }
  }
  &__content {
    
  }
  &__name {
    display: block;
    font-size: 1rem;
    margin-bottom: 4px;
  }
  &__date {
    display: block;
    font-size: 1rem;
  }
}

.p-article-title {
  font-size: 2rem;
  margin-bottom: 15px;
}

.p-article-thumb {
  margin-bottom: 30px;
}

.p-article-content {
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  p {
    margin: 0 0 20px 0;
    font-size: 1.2rem;
    line-height: 1.8;
  }
  img {
    max-width: 100%;
    border: 1px solid #000;
  }
}
</style>
