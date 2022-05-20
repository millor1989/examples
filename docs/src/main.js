
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
            learn_mode: "En",
            q_t_class: "",
            a_t_class: "invisible",
            az_date:'',
            az_hour:''
        }
    },
    methods: {// 方法
        change() {// 英汉切换
            swq = swq + 1;
            this.learn_mode = swq % 2 ? "En" : "Han";
        },
        answer() {// 显示答案\译文
            this.a_t_class = "";
        },
        rusty() {// 生疏
            // TODO
        },
        pass() {// Pass 跳过，熟练掌握了
            i = i + 1;
            if (i >= pairs.length) {
                i = 0;
            }
            // 确保答案不可见
            this.a_t_class = "invisible";

            // 下一条
            this.message = pairs[i].split('\t');
            /*
            const api = axios.create({ baseURL: 'https://api.example.com' })
            ajax 请求貌似是不能跨域的
            axios
                .get('https://www.runoob.com/try/ajax/json_demo.json', {headers:{ 'Access-Control-Allow-Origin': "*",'Referrer-Policy':"origin" }})
                .then(response => (console.dir(response)))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
                */
               console.log(this.az_hour_repair_url);
               console.log(this.az_date);
               console.log(this.az_hour);
        },
    },
    computed: {// 计算属性
        modeText: function () {// learn_mode 变化时 modeText 随之变化
            return this.learn_mode == "En" ? "En --> 汉" : "汉 --> En";
        },
        q_text: function () {
            return this.learn_mode == "En" ? this.message[0] : this.message[1]
        },
        a_text: function () {
            return this.learn_mode == "En" ? this.message[1] : this.message[0]
        },
        az_hour_repair_url: function () {
            return azhr_url.replace("9-9-9", this.az_date).replace("0-0-0", this.az_hour)
        }
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