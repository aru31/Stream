var streamSocket = new WebSocket('ws://127.0.0.1:8000/ws/stream/');
var searchURL = document.getElementById('search');

streamSocket.onmessage = function(e) {
    var data = JSON.parse(e.data);
    var url = data['url'];
};

streamSocket.onclose = function(e) {
    console.error('Failed!');
}

searchURL.addEventListener('input', (e) => {
    let url = searchURL.value;
    streamSocket.send(JSON.stringify({
        'url': url
    }));
});
