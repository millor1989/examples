
/*
 * 打乱数组的顺序
 * shuffle an array
 */
function shuffleSelf(array, size) {
    var index = -1, length = array.length, lastIndex = length - 1;

    size = size === undefined ? length : size;

    while (++index < size) {
        var rand = index + Math.floor(Math.random() * (lastIndex - index + 1)),
            value = array[rand];
        array[rand] = array[index];
        array[index] = value;
    }
    array.length = size;
    return array;
}

var pairs = shuffleSelf(content.split('\n'));
var i = 0;
var swq = 1;

const app = Vue.createApp({
    data() {
        return {
            message: pairs[i].split('\t'),
            learn_mode: "En --> 汉"
        }
    },
    methods: {
        change() {
            swq = swq + 1;
            this.learn_mode = swq % 2 ? "En --> 汉" : "汉 --> En";
        },
        refresh() {
            i = i + 1;
            if (i >= pairs.length) {
                i = 0;
            }
            this.message = pairs[i].split('\t');
        },
    }
});
app.use(Quasar, {
    config: {
      brand: {
        primary: '#1976d2',
        secondary: '#26A69A',
        accent: '#9C27B0',
  
        dark: '#1d1d1d',
  
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  });
Quasar.lang.set(Quasar.lang.zhCN);
app.mount('#hello-vue');