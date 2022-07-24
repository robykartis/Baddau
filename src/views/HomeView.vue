<template>
  <v-row>
    <template>
      <v-col cols="12" md="12" xs="12" lg="12" xl="12">
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </template>
    <template>
      <v-col cols="12" md="12">
        <v-card>

          <v-sheet height="150"></v-sheet>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>


export default {
  name: 'HomeView',

  components: {

  },
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],

    }
  },
}
</script>
