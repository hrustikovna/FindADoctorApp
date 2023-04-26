<template>
  <!-- ======= Doctors Section ======= -->
  <section id="doctors" class="doctors">
    <div class="container">
      <div class="section-title">
        <h2>Doctors</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div v-if="doctors" class="row">
        <div v-for="doctor in doctors" :key="doctor.id"  class="col-lg-6">
          <div class="member d-flex align-items-start">
            <div class="pic">
              <img :src="doctor.imgURL" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>{{ doctor.name }}</h4>
              <span>{{ doctor.position }}</span>
              <p>{{ doctor.description }}</p>
              <span>{{ doctor.phone }}</span>
              <!-- <div class="social">
                <a href=""><i class="ri-twitter-fill"></i></a>
                <a href=""><i class="ri-facebook-fill"></i></a>
                <a href=""><i class="ri-instagram-fill"></i></a>
                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>
          No doctors found at the moment, please check here later
        </p>
      </div>
      <div v-if="doctors" class="row">
        <div class="col"></div>
        <div class="col">
          <vue-awesome-paginate
          :total-items="8"
          :items-per-page="2"
          :max-pages-shown="2"
          :on-click="onClickHandler"
          v-model="currentPage"
          class="my-5"
        />
        </div>
        <div class="col"></div>
        
      </div>
    </div>
    
  </section>
  <!-- End Doctors Section -->
</template>

<script>
  import getAll from "../data/doctorRepository";
  import { useUserStore } from "../stores/userStore";
  import { mapStores } from "pinia";

  export default {
    name: 'DoctorsView',
    data() {
      return {
        doctors: [],
        currentPage: 1
      }
    },
    computed: {
      ...mapStores(useUserStore)
    },
    methods: {
      onClickHandler(pageNumber) {
        console.log("Page Number", pageNumber);
      }
    },
    async mounted() {
      this.doctors = await getAll();
      // console.log(this.doctors);
    }
  }
</script>

<style scoped></style>
