/* DROPDOWN MENU INITIALIZATION */

var mainMenuID = 'mainmenu';
var dropdownMenuID = 'submenuID';
var dropdownMenuClass = 'dropdownmenu';
var iframeID = 'iframeID';

var subMenues = new Array();
var subMenuIframes = new Array();
var stillHover, delayHide;
var hoverOffDelay = 500;
var minWidthPixels = 120; /* Only used for IE6 */
var setMenuWidth = '10em'; /* Only used for IE6 */

function menuInit()
{
	var elementNodeList = document.getElementById( mainMenuID ).getElementsByTagName( 'li' );
    var elementItems = new Array();
    
  	for( var copyCount = 0; copyCount < elementNodeList.length; copyCount++ )
    {
        elementItems[copyCount] = elementNodeList[copyCount];
    }
    
	for( var dropdownMenu = 0; dropdownMenu < elementItems.length; dropdownMenu++ )
	{
        var newMenuDiv = document.createElement( 'div' );
        var newUl = document.createElement( 'ul' );
        
	    for( var dropdownItems = 0; dropdownItems < menu[dropdownMenu].length; dropdownItems += 2 )
        {
            var newLi = document.createElement( 'li' );
            var newDiv = document.createElement( 'div' );
            var newA = document.createElement( 'a' );
            var newText = document.createTextNode( menu[dropdownMenu][dropdownItems] );

            newA.setAttribute( 'href', menu[dropdownMenu][dropdownItems+1] );
            newA.appendChild( newText );
            newDiv.appendChild( newA );
            newLi.appendChild( newDiv );
            newUl.appendChild( newLi );
        }
        newMenuDiv.setAttribute( 'id', dropdownMenuID + dropdownMenu );
        newMenuDiv.className = dropdownMenuClass;

        if( newUl.childNodes.length > 0 )
        {
            newMenuDiv.appendChild( newUl );
        }

        if( /MSIE 6/.test( navigator.appVersion ) ) 
        {
            var newIframe = document.createElement( 'iframe' );

       		subMenuIframes[dropdownMenu] = iframeID + dropdownMenu;
            newIframe.setAttribute( 'id', subMenuIframes[dropdownMenu] );
            newMenuDiv.appendChild( newIframe );
        }
        elementItems[dropdownMenu].appendChild( newMenuDiv );
		subMenues[dropdownMenu] = dropdownMenuID + dropdownMenu;
	}
}

/* DROPDOWN CONTROL */

function switchSubMenu( element )
{
    var getElement = element.nextSibling.id;
    
    if( !getElement ) /* Fix for IE */
    {
        getElement = element.nextSibling.nextSibling.id;
    }
    
	if( /(^submenuID)(\d+)/.test( getElement ) )
	{
		var currentMenuNumber = RegExp.$2;
	}
	else
	{
		return false;
	}
	
	for( menuCount = 0; menuCount < subMenues.length; menuCount++ )
	{
		if( menuCount == currentMenuNumber )
		{
			showSubMenu( menuCount );
		}
		else
		{
			hideSubMenu( menuCount );
		}
	}
	stillHover = true;
}

function showSubMenu( menuNumber )
{
    var currentMenu = document.getElementById( subMenues[menuNumber] );
	currentMenu.style.display = 'block';
    currentMenu.parentNode.firstChild.className = 'menuhover';

    if( /MSIE 6/.test( navigator.appVersion ) ) 
    {
        var currentIframe = document.getElementById( subMenuIframes[menuNumber] );

        if( currentMenu.offsetWidth < minWidthPixels )
        {
            currentMenu.style.width = setMenuWidth;
        }

        currentIframe.style.height = currentMenu.offsetHeight;
        currentIframe.style.width = currentMenu.offsetWidth;
    }
}

function menuHover()
{
	stillHover = true;
}

function tryHideSubMenues()
{
	stillHover = false;
	clearTimeout( delayHide );
	delayHide = setTimeout( 'hideSubMenues()', hoverOffDelay );
}

function hideSubMenues()
{
	if( !stillHover )
	{
		for( menuCount = 0; menuCount < subMenues.length; menuCount++ )
		{
			hideSubMenu( menuCount );
		}
	}
}

function hideSubMenu( menuNumber )
{
    var currentMenu = document.getElementById( subMenues[menuNumber] );
	currentMenu.style.display = 'none';
    currentMenu.parentNode.firstChild.className = '';
}