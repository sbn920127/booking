//brand stores
// https://loctw-service-api.nidin.shop/shopper/v2/store/listByPosition/?longitude=121.57123879999999&latitude=25.077789&page=1&count=20&brand_code=50lantea

let brandCodes = [
    "jingjing",
    // "mrogenki",
    // "halfday",
    // "huahuaboss",
    // "nongcha",
    // "innsunrise",
    // "mwdbrunch",
    // "insingerkaffee",
    // "youshemo",
    // "lazycat",
    // "zhimingyicun",
    // "itsotea",
    // "gaihoitea",
    // "senyong",
    // "notchcoffee",
    // "fikafikacafe",
    // "soupaestro",
    // "zaidouhua",
    // "hugdayday",
    // "missuteashop",
    // "pigletbus",
    // "michukitchen",
    // "jingyitea",
    // "shuigongfang",
    // "maccbf",
    // "magicchicken",
    // "haojihui",
    // "chunyangtea",
    // "veronabrunch",
    // "yummybaby",
    // "blackice",
    // "goodday",
    // "idealboxed",
    // "rabbitrabbit",
    // "fancypoke",
    // "jackboy",
    // "slowlyyo",
    // "biyachas",
    // "dorcafe",
    // "yearningtea",
    // "hisugar",
    // "openyourdoor",
    // "ruguodrinks",
    // "chusha",
    // "timecoffee",
    // "oldgod",
    // "gocoloring",
    // "1982eco",
    // "shihhaocha",
    // "fengsushi",
    // "teatop",
    "comebuytea",
    // "bobatea",
    // "truewintea",
    "milkteastore",
    // "yoshinoya",
    "cocotea",
    // "dragonhorn",
    // "circlesushi",
    "50lantea",
    "louisacoffee",
    // "goodcuptogo",
    // "hitosandwich",
    // "monmonday",
    // "bighamburger",
    // "missingtea",
    "milkshoptea"
];
let queriedPages = {};
var allStores = {};
brandCodes.forEach((brandCode) => {
    dispatchQueryStores(brandCode);
})

function dispatchQueryStores(brandCode) {
    for(let page = 1; page <= 1; page++ ) {
        queryStores(page, brandCode)
    }
}
let storeAttributes = [
    'name',
    'address',
    'latitude',
    'longitude',
    'brand_name',
    'brand_photo',
    'start_time',
    'end_time',
    'tel',
]
function queryStores(page, brandCode) {
    fetch(`https://loctw-service-api.nidin.shop/shopper/v2/store/listByPosition/?longitude=121.57123879999999&latitude=25.077789&page=${page}&count=20&brand_code=${brandCode}`)
        .then(resp => resp.json())
        .then(resp => {
            if(!allStores.hasOwnProperty(brandCode)) {
                allStores[brandCode] = []
            }
            // allStores[brandCode] = allStores[brandCode].concat(resp.list)
            if(resp.list.length) {
                resp.list.forEach(store => {
                    fetch(`https://loctw-service-api.nidin.shop/shopper/v2/store/${store.id}/onShelfMenu`)
                        .then(resp => resp.json())
                        .then(resp => {
                            let _store = {}
                            storeAttributes.forEach(attr => {
                                _store[attr] = store[attr]
                            })
                            _store.menuInfo = {
                                product_list_json: resp.menu.product_list_json
                            }
                            allStores[brandCode] = allStores[brandCode].concat(_store);
                        })
                })
            }
        })
}
