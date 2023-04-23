<template>
  <section class="text-center text-lg-center">
    <div v-if="registered">
    <h2>You have been registered successfully</h2>
    <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="loginUser()">Login</button>
    </div>
      <div v-else class="section-title">
        <h2>Please Register</h2>
      </div>
      <div class="card mb-5">
        <div class="row g-0 d-flex align-items-center justify-content-center">
          <div class="col-lg-4">
            <div class="card-body py-5 px-md-5">
              <!-- First Name input -->
              <div class="form-outline mb-4">
                <input
                  v-model="firstname"
                  type="firstname"
                  id="form2Example1"
                  placeholder=""
                  class="form-control"
                />
                <label class="form-label" for="form2Example1">First Name</label>
              </div>
              <!-- Last Name input -->
              <div class="form-outline mb-4">
                <input
                  v-model="lastname"
                  type="lastname"
                  id="form2Example1"
                  placeholder=""
                  class="form-control"
                />
                <label class="form-label" for="form2Example1">Last Name</label>
              </div>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input v-model="email" type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input v-model="password" type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
              </div>

              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center"></div>
              </div>
              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4"
                @click.prevent="registerUser()">Register</button>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
   import { register, update } from '../data/userRepository';

   export default {
    name: "RegisterView",
    data() {
        return{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            registered: false
        };
    },
    methods: {
        registerUser() {
            register(this.email, this.password).then((auth) => {
                console.log (auth);
                update (this.firstname, this.lastname)
                .then(() => {
                    console.log("User profile Updated");
                    // this.$router.push({name: "home"});
                    this.registered = true;
                })
                .catch(error => console.log (error))
            }).catch((error) => {
                console.log (error);
            })
        },
        loginUser() {
            this.$router.push({name: "login"});
        }
    }
}
</script>

<style scoped></style>
