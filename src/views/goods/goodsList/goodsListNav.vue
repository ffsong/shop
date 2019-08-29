<template>
  <div class="category-nav">
    <div class="nav-select">
      <div class="title">
        所有分类 &nbsp;>
      </div>
      <div class="value">
        <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose">{{ item }}</Tag>
      </div>
    </div>
    <div class="clear"></div>
    <div class="nav-groups">
      <div class="group">
        <div class="row" v-for="(items, index) in group" :key="index">
          <div class="head">
            {{ items.name }} ：
          </div>
          <div class="body">
            <div class="items">
              <a class="item" @click="handleAdd(item)" v-for="(item, i) in items.list" :key="i">{{ item }}</a>
            </div>
          </div>
          <div class="foot right">
            <span>更多</span>
            <Icon type="ios-arrow-down"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListNav",
    props: {
      count: Array,
      group: Array
    },
    methods: {
      handleAdd(itme) {
        this.count.push(itme);
      },
      handleClose(event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .category-nav {
    width: 100%;
    font-size: 12px;
    .nav-select {
      height: 26px;
      display: flex;
      align-items: center;
      .title {
        height: 100%;
        line-height: 26px;
        margin-right: 10px;
      }
    }
    .nav-groups {
      margin-top: 10px;
      border: 1px solid #e8e8e8;
      .group {
        .row {
          border-top: 1px dashed #dedede;
          margin: 0 8px;
          padding: 6px;
          &:first-child {
            border-top: none
          }
        ;
          .head {
            min-width: 120px;
            display: inline-block;
            color: #999999;
          }
          .body {
            display: inline-block;
            .items {
              display: flex;
              .item {
                display: inline-block;
                float: left;
                margin: 9px 20px 9px 0;
                height: 18px;
                color: #666666;
                &:hover {
                  color: #e4393c;
                }
              }
            }
          }
          .foot {
            display: inline-block;
            margin: 9px 20px 9px 0;
            margin-right: 40px;
            color: #666666;
          }
        }
      }
    }

  }
</style>