
/*

Para função executar corretamente, é necessário um elemento 'div' com id = notification na página.

Estrutura a ser informada na chamada da função como o parâmetro 'data':

data = {
    status: Boolean,
    message: Text
}

Ao passar o parâmetro 'hide' como false, a notificação não some.

No parâmetro 'time' é o tempo em segundos para ficar na tela a notificação, caso o parâmetro 'hide' esteja como true.

*/

/**
 * @param object data
 */
function notify(data,hide = true,time = 5000)
{
    var notification = document.getElementById('notification')

    var wrapper = document.createElement("div")
    var notify = document.createElement("div")
    var content = document.createElement("div")
    var details = document.createElement("div")
    var p = document.createElement("p")
    var close = document.createElement("div")
    var icon = document.createElement("div")
    var i_icon = document.createElement("i")
    var i_close = document.createElement("i")

    wrapper.classList.add("wrapper")
    notify.classList.add("notify")
    content.classList.add("content")
    details.classList.add("details")
    close.classList.add("close-icon")
    icon.classList.add("icon")
    i_close.classList.add("fas")
    i_close.classList.add("fa-times")
    i_icon.classList.add("fas")

    switch (data.status) {
        case true:
            i_icon.classList.add("fa-check")
            break;
        case false:
            i_icon.classList.add("fa-times")
            notify.classList.add("error")
            break;
        default:
            i_icon.classList.add("fa-exclamation")
            notify.classList.add("default")
    }

    close.addEventListener('click',function(){
        if(notification.hasChildNodes(wrapper))
        {
            wrapper.classList.add("hide")
            setTimeout(function(){
                wrapper.remove()
            }, 1000)
        }
    })

    p.innerHTML = data.message

    close.appendChild(i_close);
    icon.appendChild(i_icon);
    details.appendChild(p);
    content.appendChild(icon);
    content.appendChild(details);
    notify.appendChild(content);
    notify.appendChild(close);
    wrapper.appendChild(notify);

    w = 0

    $(".wrapper").each(function() {
        w += 10 + $(this).outerHeight()
    });

    if(w!=0)
    {
        w += 15
        wrapper.style.top += w + "px"
    }

    notification.appendChild(wrapper);

    if(hide)
    {
        setTimeout(function(){        
            if(notification.hasChildNodes(wrapper))
            {
                wrapper.classList.add("hide")
                setTimeout(function(){
                    wrapper.remove()
                }, 1000)
            }
        }, time);
    }
}