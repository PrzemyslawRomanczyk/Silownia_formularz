<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <b-container class="container">
        <b-row>
          <p class="a-text desc-text">
            Welcome: user3
          </p>
        </b-row>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">File Name</th>
              <th scope="col">Date</th>
              <th scope="col">Number of Errors</th>
              <th scope="col">Repair</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>example1.stl</td>
              <td>{{ date1 }}</td>
              <td>57</td>
              <td>No</td>
            </tr>
            <tr>
              <th>2</th>
              <td>example2.stl</td>
              <td>27.04.2022, 18:58:32</td>
              <td>57</td>
              <td>
                <a href="https://source.unsplash.com/random/500x500">File</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserDashboard",
  data: () => ({
    date1: new Date().toLocaleString(),
    date2: new Date().toLocaleString(),
  }),
  firebase: {},
});
</script>

<style>
.cont-div {
  display: flex;
  justify-content: center;
}

.a-text-2 {
  font-size: 1.15rem;
  justify-self: center;
  text-align: center;
}
</style>
