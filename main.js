$('#imageSearchForm').submit(function (event) {
    event.preventDefault();

    const keyword = $('#imageSearchInput').val();

    if (!keyword) {
        return;
    }
    $.get(`https://www.flickr.com/services/feeds/photos_public.gne?tags=${keyword}&format=json&jsoncallback=?`,
        null,
        handleData,
        'jsonp'
    );
})

const handleData = ( data ) => {
    data.items.forEach((item) => {
        $('#imageList').append(`<img class="result-image" src=${item.media.m} />`);
    });
}