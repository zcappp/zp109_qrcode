function init({ exc, props, container }) {
    exc('load("//z.zccdn.cn/vendor/qrcode.min.js")', {}, () => {
        new QRCode(container, {
            text: props.text || location.href,
            width: props.width || 128,
            height: props.width || 128,
            correctLevel: QRCode.CorrectLevel.H
        })
    })
}

$plugin({
    id: "zp109",
    props: [{
        prop: "text",
        type: "text",
        label: "文字内容",
        ph: "默认是当前URL(location.href)"
    }, {
        prop: "width",
        type: "number",
        label: "宽度(px)",
        ph: "默认是128"
    }],
    init
})