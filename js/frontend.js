( function( $ ) {

	$( document ).ready( function() {
		
	// Project description toggle
	$( '.single-project .toggle-content' ).on( 'click', function( e ) {
		e.preventDefault();
		$( '.single-project .entry-content' ).slideToggle();
		$( '.single-project .toggled-off' ).toggle();
		$( '.single-project .toggled-on' ).toggle();
	});
	
	// Project archive grid
	if ( $( '.post-type-archive-project .projects' ).size() > 0 ) {
		var $container = $( '.post-type-archive-project .projects' );
		$( '.post-type-archive-project .project img' ).css( 'visibility', 'hidden' );
		$container.imagesLoaded(function(){
			$container.masonry({
				itemSelector: '.project',
				columnWidth: '.project',
				percentPosition: true
			});
			$( '.post-type-archive-project .project img' ).css( 'visibility', 'visible' );
		});
	}

	// Project grid
	if ( $( '.single-project .entry-gallery' ).size() > 0 ) {
		var $container = $( '.single-project .entry-gallery' );
		$( '.single-project .entry-gallery img' ).css( 'visibility', 'hidden' );
		$container.imagesLoaded(function(){
			$container.masonry({
				itemSelector: '.project-image',
				columnWidth: '.project-image',
				percentPosition: true
			});
			$( '.single-project .entry-gallery img' ).css( 'visibility', 'visible' );
		});
	}
	
	// Project lightbox
	$( '.single-project' ).lightGallery({
		selector: '.single-project .project-image a',
		mode: 'lg-slide',
		appendSubHtmlTo: '',
		preload: 5,
		counter: false,
		download: false
	});
	
	});

} )( jQuery );