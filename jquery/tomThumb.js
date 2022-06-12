$(document).ready(function(){
    let btn = $("#btn")
    btn.click(function(){
        let width = parseInt($("#width").val())
        let height = parseInt($("#height").val())
        let color = parseInt($("#color").val())
        let bit
        switch (color) {
            case 1,2:
                bit = 1
                break;
        
            case 3,4:
                bit = 2
                break;
                
            case 3,4:
                bit = 3
                break;
            
            case 5, 6, 7, 8:
                bit = 4
                break;
            
            case 9, 10, 11, 12, 13, 14, 15, 16:
                bit = 5
                break;

        }
        let colorBytes = color * 3
        let sizeBytes = height * width * (bit/8)
        let size = sizeBytes + colorBytes
        $(".result").after(`<p>File is ${size/1024}KB which is OK</p>`)
        $(".result").css("display", "flex")
    })

    console.log()
})