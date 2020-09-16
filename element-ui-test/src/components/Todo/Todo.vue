<template>
  <div>
    <el-header>
      <h1>Todo</h1>
    </el-header>
    <el-main :span="24">
      <div>
        <el-row>
          <el-col>
            <div class="demo-input-size">
              <el-input placeholder="Please input" v-model="titleEdit"></el-input>
              <el-input placeholder="Please input" v-model="textEdit"></el-input>
              <el-button v-on:click="editTodo" type="primary">Edit</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="8" v-for="(card, index) in cards" :key="card">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px;">
                <h2>{{card.title}}</h2>
                <div>{{card.text}}</div>
                <br />
                <div class="bottom clearfix">
                  <el-button @click="loadEditData(card.title, card.text, card.id)">Edit</el-button>
                  <el-button type="danger" v-on:click="deleteCard(card.id)">Delete</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer></el-footer>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";

export default {
  name: "Table",
  data() {
    return {
      titleEdit: "",
      textEdit: "",
      idEdit: null,
    };
  },

  computed: {
    cards() {
      return this.$store.state.data;
    },
  },

  methods: {
    deleteCard(id) {
      console.log(id);
      this.$store.commit("deleteItem", { id });
    },

    loadEditData(title, text, id) {
      this.titleEdit = title;
      this.textEdit = text;
      this.idEdit = id;
    },

    editTodo() {
      this.$store.commit("editItem", {
        text: this.textEdit,
        title: this.titleEdit,
        id: this.idEdit,
      });
    },
  },
};
</script>