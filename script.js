const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-cmt')
const commentItem = document.querySelectorAll('#list-cmt .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click',function (event) {
    event.preventDefault()
    if (count == 1) {
        //xem hết bình luận
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
} )

prev.addEventListener('click', function (event){
    event.preventDefault()
    if (count == 3) {
        //xem hết bình luận
        return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})