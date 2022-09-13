<template>
  <div class="container">
    <!-- <vue-good-table :columns="columns" :rows="rows" class="my-4" /> -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :row-style-class="rowStyleClassFn"
      compactMode
      v-on:row-click="onRowClick"
      v-on:cell-click="onCellClick"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        searchFn: myFunc,
        placeholder: 'Search this table'
      }"
      :sort-options="{
        enabled: true
      }"
      :pagination-options="{
        enabled: true,
        perPage: 2,
        mode: 'pages',
        position: 'top',
        perPageDropdown: [2, 3, 5, 10, 15],
        dropdownAllowAll: false,
        setCurrentPage: 2
      }"
    >
      <template #table-actions>
        <button class="btn btn-info btn-sm">저장</button>
      </template>
      <template #table-actions-bottom>
        This will show up on the bottom of the table.
      </template>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        {
          id: 1,
          name: 'John',
          age: 20,
          createdAt: '2011-10-28',
          score: 0.03343
        },
        {
          id: 2,
          name: 'Jane',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343
        },
        {
          id: 3,
          name: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343
        },
        {
          id: 4,
          name: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343
        },
        {
          id: 5,
          name: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343
        },
        {
          id: 6,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343
        }
      ]
    }
  },
  methods: {
    rowStyleClassFn(row) {
      return row.age > 18 ? 'green' : 'red'
    },
    onRowClick(params) {
      console.log('RowClick')
      console.dir(params)
      // params.row - row object
      // params.pageIndex - index of this row on the current page.
      // params.selected - if selection is enabled this argument
      // indicates selected or not
      // params.event - click event
    },
    onCellClick(params) {
      console.log('CellClick')
      console.dir(params)
      // params.row - row object
      // params.column - column object
      // params.rowIndex - index of this row on the current page.
      // params.event - click event
    }
    // myFunc(row, col, cellValue, searchTerm) {
    // console.log(row)
    // console.log(col)
    // console.log(cellValue)
    // console.log(searchTerm)
    // return cellValue === 'my value'
    // }
  }
}
</script>

<style>
.green {
  background-color: aquamarine;
}
.red {
  background-color: coral;
}
</style>
