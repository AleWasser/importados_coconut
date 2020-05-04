<template>
  <div>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" class="pa-0">
          <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card shaped>
              <v-img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out title-background v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-row align="center" justify="center">Categoria</v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card shaped>
              <v-img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out title-background v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-row align="center" justify="center">Categoria</v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card shaped>
              <v-img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out title-background v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-row align="center" justify="center">Categoria</v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card shaped>
              <v-img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out title-background v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-row align="center" justify="center">Categoria</v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card shaped>
              <v-img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out title-background v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-row align="center" justify="center">Categoria</v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-card shaped>
              <v-img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out title-background v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-row align="center" justify="center">Categoria</v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 orange">
      <v-row align="center" class="text-center" style="height:400px">
        <v-col cols="12">
          <h3 class="display-4 white--text">Ofertas</h3>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 red">
      <v-row align="center" class="text-center" style="height:400px">
        <v-col cols="12">
          <h3 class="display-4 white--text">Footer</h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style>
.title-background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>