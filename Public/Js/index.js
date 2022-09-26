const recognition = new 
webkitSpeechRecognition();

recognition.lang = 'es-ES'
'es-ES'
recognition.continuos = true
true
recognition.onresult = event => {
    for (const result of event.results){
        console.log(result[0].transcript)
    }
}
recognition.start()
