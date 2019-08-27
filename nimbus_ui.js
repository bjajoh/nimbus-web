

// Variables
// resolution height and width
var resolutionHeight = 288;
var resolutionWidth = 352;

var animationDT = 666;

// On document loaded

$( document ).ready(function() {
  
  // connect clicks
  $( 'button.toggleFullScreen' ).click( function() { toggleFullScreen( $( this ).parent( '.viewContainer' ) ) });
  $( 'button#globalSettingsButton' ).click( function() { toggleGlobalSettings() });
  
});

function toggleGlobalSettings() {
  var windowH = $( window ).height();
  var containerH = $( '#globalSettingsContainer' ).outerHeight( false );
  
  $( '#globalSettingsContainer' ).slideToggle( animationDT );
}

function toggleFullScreen( parentContainer ) {
  if( parentContainer.hasClass( 'fullScreen' ) ) {
    parentContainer.removeClass( 'fullScreen' );
    $( 'h1' ).show();
    parentContainer.siblings( '.viewContainer' ).show();
    
    parentContainer.height( resolutionHeight );
    parentContainer.width( resolutionWidth );
    
    var canvas = parentContainer.children( 'canvas' );
    canvas.height( resolutionHeight );
    canvas.width( resolutionWidth );
    
    $('html, body').css( {
      overflow: 'inherit',
      height: 'inherit'
    });
  }
  else {
    parentContainer.addClass( 'fullScreen' );
    $( 'h1' ).hide();
    parentContainer.siblings( '.viewContainer' ).hide();
    
    parentContainer.height( $( window ).height() );
    parentContainer.width( $( window ).width() );
    
    var parentHfactor = parentContainer.innerHeight() / resolutionHeight;
    var parentWfactor = parentContainer.innerWidth() / resolutionWidth;
    
    var canvas = parentContainer.children( 'canvas' );
    
    if( parentHfactor < parentWfactor ) {
      canvas.height( parentContainer.innerHeight() );
      canvas.width( resolutionWidth * parentHfactor );
    }
    else {
      canvas.height( resolutionHeight * parentWfactor );
      canvas.width( parentContainer.innerWidth() );
    }
    
    $('html, body').css( {
      overflow: 'hidden',
      height: '100%'
    });
  }
}
