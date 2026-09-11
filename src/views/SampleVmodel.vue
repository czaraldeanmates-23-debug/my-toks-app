<template>

  <input v-model="name">

  <input v-model="age">

  <input v-model="course">

  <h2>Hello {{ name }}</h2>

  <h2>Age {{ age }}</h2>

  <h2>Course {{ course }}</h2>

</template>

 

<script>

export default {

  data() {

    return {

      name: "",
      age: "",
      course: "",

    }

  }

}

</script>