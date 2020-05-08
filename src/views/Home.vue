<template>
  <div class="home">
    <div class="hello"></div>
    <div class="container">
      <div class="row">
        <div v-for="i in 12" :key="i" class="col-6 col-md-4">
          <Card
              :title="card.title"
              :tags="card.tags"
              :service="card.service"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      card: {
        title: '50嵐 捷運善導寺店',
        tags: {
          open: '10:00 ~ 19:00',
          distance: 0.5,
          rating: 3.5
        },
        service: ['drink', 'delivery']
      }
    }
  }
}
</script>
