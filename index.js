
const commentsContainer = document.getElementById('commentsContainer')

commentsContainer.addEventListener('click', (e) => {
    if(e.target.classList[0] == 'action__btn') {
        selectActionBtn({
            actionBtn: e.target.classList[1],
            commentElement: e.target.parentElement.parentElement.parentElement.lastElementChild
        })
    }

    if(e.target.parentElement.classList[0] == 'action__btn') {
        selectActionBtn({
            actionBtn: e.target.parentElement.classList[1],
            commentElement: e.target.parentElement.parentElement.parentElement.parentElement.lastElementChild
        })
    }
})

const selectActionBtn = ({ actionBtn, commentElement }) => {
    const actionBtns = {
        'action-up': (commentElement) => actionUpBtn(commentElement),
        'action-down': (commentElement) => actionDownBtn(commentElement)
    }

    Object.entries(actionBtns).forEach(([actionBtnName, actionBtnFunction]) => {
        if(actionBtnName == actionBtn) {
            actionBtnFunction(commentElement)
        }
    })
}

const actionUpBtn = (commentElement) => {
    if(commentElement.nodeName == 'UL') {
        commentElement.classList.remove('comment__list--hide')
    }
}

const actionDownBtn = (commentElement) => {
    if(commentElement.nodeName == 'UL') {
        commentElement.classList.add('comment__list--hide')
    }
}