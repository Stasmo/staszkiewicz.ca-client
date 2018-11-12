<template>
  <div class="Ticker container-fluid">
    <div v-if="tickerData" class="row">
      <div class="col-sm" v-for="q in tickerData['Stock Quotes']">
        <div class="stock-quote">
          <h2>{{ q['1. symbol'] }}</h2>
          <div>{{ q['2. price'] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .stock-quote {
    padding: 1em;
    color: white;
    background: #333;
    margin-bottom: 1em;
  }
</style>

<script>
import TickerService from '@/services/TickerService';

export default {
  name: 'ticker',
  data() {
    return {
      tickerData: {},
    };
  },
  created() {
    TickerService.fetchThoseGoodStocksThatWillMakeMeLotsOfMoney().then((tickerData) => {
      console.log(tickerData);
      this.tickerData = tickerData;
    });
  },
};
</script>
