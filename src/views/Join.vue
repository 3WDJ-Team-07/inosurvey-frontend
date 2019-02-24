<template>
   <v-fade-transition mode="out-in">
    <v-container fluid mt-5><v-layout row wrap :key="$route.path">

      <v-flex xs12 sm12 md7 class="pa-5">
        <v-card tile flat color="#FAFAFA" height="100vh">
          <v-card-text>
             <v-card-text>
          <v-text-field
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            placeholder="Snowy Rock Pl"
            counter="25"
            required
          ></v-text-field>
          <v-text-field
            placeholder="El Paso"
            required
          ></v-text-field>
          <v-text-field
            required
            placeholder="TX"
          ></v-text-field>
          <v-text-field
            required
            placeholder="79938"
          ></v-text-field>
          <v-autocomplete
            placeholder="Select..."
            required
          ></v-autocomplete>
        <v-card-actions>
          <v-slide-x-reverse-transition>
            <v-tooltip
              right
            >
              <v-btn
                slot="activator"
                icon
                class="my-0"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-spacer></v-spacer>
          <v-btn color="primary" text >Submit</v-btn>
        </v-card-actions>
        </v-card-text>
            
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md5>
        <v-card tile flat height="100vh" color="#FAFAFA">
          <v-card-text class="home-hero">
              <v-card-title primary-title >
                  <h2 class="white--text">어떤 것을 알아보고 싶으세요?</h2>
              </v-card-title>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout></v-container>
    
  </v-fade-transition>
</template>

<script>
export default {
    name: 'Join',
    data() {
        return {
        
        };
    },
    
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/bG3M_acL-Ao');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>