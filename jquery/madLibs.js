$(document).ready(function(){
    let btn = $("#btn")
    let name = $("#name")
    let char = $("#char")
    let adv = $("#adv")
    let adj = $("#adj")

    btn.click(function(){
        $("h2").after(`<p>One day, my friend ${name.val()} was visiting New York and ran into ${char.val()}. ${name.val()} ran ${adv.val()} to meet ${char.val()}. But ${char.val()} turned out to be very ${adj.val()} and ${name.val()} did not enjoy the meeting</p>`)
        $(".story").css("display", "flex")
    })
})