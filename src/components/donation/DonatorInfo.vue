<template>
  <span>
    <v-flex style="margin-top:120px;">
      <v-card flat fill-height>
        <div class="subheading font-weight-bold mb-3">
          <span class="mr-4">{{ donationItems.users[0].nickname }}</span>
          <span class="info--text">{{ donationItems.users[0].pivot.donation_amount }}이노</span>
          <span class="mx-4">{{ donationItems.users[0].pivot.created_at }}</span>
        </div>
      </v-card>
    </v-flex>
    <!-- <v-flex xs8 class="ml-5" style="margin-top:140px;">
      <v-btn depressed fab color="#BDBDBD" dark>모두보기</v-btn>
    </v-flex> -->
  </span>
</template>

<script>
  export default {
    props: ['donationItems'],
  }
</script>
