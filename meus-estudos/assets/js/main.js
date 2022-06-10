document.getElementsByClassName("create-session--form")[0].addEventListener("submit", minhaFunc);


function minhaFunc(event){
    var myForm = document.getElementsByClassName("create-session--form")[0];

    var duration = document.getElementById("session-duration").value;
    var description = document.getElementById("session-description").value;
    console.log(duration, description)


    var pDuration = document.createElement('p');
    pDuration.innerText = duration;
    pDuration.className = 'session-duration';

    var sessionDiv = document.createElement('div')
    sessionDiv.className = 'session'

    sessionDiv.appendChild(pDuration)

    document.getElementById("sessions-area--ul").appendChild(sessionDiv)

    event.preventDefault()
}