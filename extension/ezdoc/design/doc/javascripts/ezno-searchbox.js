
function initDocSearch(){
    var searchBox = document.getElementById( 'searchbox' );
    var searchForm = searchBox.getElementsByTagName( 'form' )[0];
    var searchText =  document.getElementById( 'searchtext' );
    var searchDefaultValue = 'Search for documentation';

    //set action of search form
    searchForm.setAttribute( 'action', '/content/search' );

    //set value of searchText
    searchText.setAttribute( 'value', searchDefaultValue );
    searchText.style.fontStyle='italic';
    searchText.style.color='#333333';
    searchText.onclick=function(){
       searchText.value='';
       searchText.style.fontStyle='';
       searchText.style.color='#000000';
    };
}

