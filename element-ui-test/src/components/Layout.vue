<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router="true">
          <el-menu-item index="/" :route="{ name: 'Table'}">
            <!-- <i class="el-icon-setting"></i> -->

            <span>Table</span>
          </el-menu-item>
          <el-menu-item index="/todo" :route="{ name: 'Todo'}">
            <!-- <i class="el-icon-setting"></i> -->
            <span>Todo</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>