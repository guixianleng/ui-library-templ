/**
 * HelloWorld 是对应组件的名字，
 * 在 hello-world.vue 文件中还是 name 属性
 */
import HelloWorld from './hello-world.vue';

HelloWorld.install = Vue => Vue.component(HelloWorld.name, HelloWorld);

export default HelloWorld;
