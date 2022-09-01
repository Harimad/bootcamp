<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-if="selectType === 'checkbox'">
          <input
            type="checkbox"
            class="form-check-input"
            @change="checkAll($event)"
          />
        </th>
        <th v-else-if="selectType === 'radio'"></th>

        <th v-for="th in headers" :key="th.key">
          {{ th.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in items" :key="i">
        <td v-if="selectType === 'checkbox'">
          <input
            type="checkbox"
            class="form-class-input"
            :value="item[checkedKey]"
            v-model="checkedItems"
            @change="doChecked"
          />
        </td>
        <td v-else-if="selectTYpe === 'radio'">
          <input
            type="radio"
            class="form-class-input"
            :value="item[checkedKey]"
            v-model="checkItem"
            @change="doChecked"
          />
        </td>
        <td v-for="th in headers" :key="th.key">{{ item[th.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    checkedEventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      sampleData: '',
      checkedItems: [],
      checkedItem: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkAll(event) {
      const checkedItems = []
      if (event.target.checked) {
        this.items.forEach((item) => {
          checkedItems.push(item[this.checkedKey])
        })
      }
      this.checkedItems = checkedItems
    },
    doChecked() {
      if (this.selectType === 'checkbox') {
        this.$emit(this.checkedEventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.checkedEventName, this.checkedItems)
      }
    }
  }
}
</script>
