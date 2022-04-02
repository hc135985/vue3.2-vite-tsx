declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '@element-plus/icons-vue';
