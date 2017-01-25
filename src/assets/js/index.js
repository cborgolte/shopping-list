hoodie.ready.then(function () {
    console.log("ready");
    function render(items) {
        console.log("items:");
        for (i=0; i < items.length; i+=1) {
            console.log(items[i]);
        }
    };
    hoodie.store.findAll().then(render)

    hoodie.store.add({
        a: 'x'
    });
});