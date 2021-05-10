<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="(video, index, key) in data.items" :key="key">
        <v-row class="fil-height">
          <v-col cols="5">
            <v-img
              :src="video.snippet.thumbnails.high.url"
              :height="video.snippet.thumbnails.height"
              :width="video.snippet.thumbnails.width"
            />
          </v-col>
          <v-col cols="7">
            <h1>
              {{ video.snippet.channelTitle }}
            </h1>
            <p>
              {{ video.snippet.description }}
            </p>
            <span>
              <!-- {{ video.snippet.publishTime | moment("dddd, MMMM Do YYYY") }} -->
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    data: {
      type: [Object, Array],
      default: () => {},
    },
  },
};
</script>
