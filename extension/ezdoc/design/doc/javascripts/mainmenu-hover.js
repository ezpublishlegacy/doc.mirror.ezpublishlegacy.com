/* MAINMENU SUBMENU HOVER - th[eZ]20051024 */

/* Custom settings */
var currentSelected = 0;
var mainTabs = ['','main-1','main-2','main-3','main-4','main-5','main-6','main-7'];
var subMenus = ['nosubmenu','sub-1','sub-2','sub-3','sub-4','sub-5','sub-6','sub-7'];
var tabHighlightClass = 'selected';
var delayMs = 2000;

/* General settings */
var currentMainTab = mainTabs[currentSelected];
var currentSubMenu = subMenus[currentSelected];
var triggerCount = 0;
var hoverCheck = false;

/* Main script */
function holdReset()
{
    hoverCheck = true;
}

function delayReset()
{
    hoverCheck = false;
    if (triggerCount <= 10) { triggerCount++; setTimeout('tryReset()',delayMs); }
}

function tryReset()
{
    triggerCount--;
    if (triggerCount == 0 && !hoverCheck) { switchMenues(currentSelected); }
}

function switchMenues(menuNumber)
{
    for ( i = 1; i < mainTabs.length; i++ ) { document.getElementById(mainTabs[i]).className = ''; }
    if ( menuNumber != 0 ) document.getElementById(mainTabs[menuNumber]).className = tabHighlightClass;
    for ( i = 0; i < subMenus.length; i++ ) { document.getElementById(subMenus[i]).style.display = 'none'; }
    document.getElementById(subMenus[menuNumber]).style.display = 'block';
}