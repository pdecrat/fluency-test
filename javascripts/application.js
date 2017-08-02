$(document).ready(function() {

// Language choice
	var language = "" ;

	mixpanel.track("page2");
	mixpanel.track("page3");
	mixpanel.track("page4");

	// si on clic sur un drapeau, on récupère la langue
	$('#french').on('click' , function () {
		language = "French";
		$('#french').addClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#english').on('click' , function () {
		language = "English";
		$('#french').removeClass('languechoisie');
		$('#english').addClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#spanish').on('click' , function () {
		language = "Spanish";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').addClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#italian').on('click' , function () {
		language = "Italian";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').addClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#german').on('click' , function () {
		language = "German";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').addClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#chinese').on('click' , function () {
		language = "Chinese";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').addClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#japonese').on('click' , function () {
		language = "Japonese";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').addClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#russian').on('click' , function () {
		language = "Russian";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').addClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#portuguese').on('click' , function () {
		language = "Portuguese";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').addClass('languechoisie');
		$('#turkish').removeClass('languechoisie');
		console.log(language);
	});

	$('#turkish').on('click' , function () {
		language = "Turkish";
		$('#french').removeClass('languechoisie');
		$('#english').removeClass('languechoisie');
		$('#spanish').removeClass('languechoisie');
		$('#italian').removeClass('languechoisie');
		$('#german').removeClass('languechoisie');
		$('#chinese').removeClass('languechoisie');
		$('#japonese').removeClass('languechoisie');
		$('#russian').removeClass('languechoisie');
		$('#portuguese').removeClass('languechoisie');
		$('#turkish').addClass('languechoisie');
		console.log(language);
	});

	$('#other').on('click' , function () {
		language = "your language";
		console.log(language);
	});


// Reading Level
	var readingLevel = 0 ;

	// si on clic sur A1, E1 réagit aussi
	$('#A1').on('click' , function () {
		if ($(this).hasClass('rectangle2-gauche-choix')) {
			$('#A2').removeClass('rectangle2-milieu-choix');
			$('#A3').removeClass('rectangle2-milieu-choix');
			$('#A4').removeClass('rectangle2-milieu-choix');
			$('#A5').removeClass('rectangle2-milieu-choix');
			$('#A6').removeClass('rectangle2-milieu-choix');
			$('#A7').removeClass('rectangle2-gauche-choix');
			$('#E2').removeClass('rectangle2-milieu-choix');
			$('#E3').removeClass('rectangle2-milieu-choix');
			$('#E4').removeClass('rectangle2-milieu-choix');
			$('#E5').removeClass('rectangle2-milieu-choix');
			$('#E6').removeClass('rectangle2-milieu-choix');
			$('#E7').removeClass('rectangle2-droite-choix');
			readingLevel = 0 ;
		} else {
			$(this).addClass('rectangle2-gauche-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			readingLevel = 0 ;
		}
	});

	// si on sur clic A2, E2 réagit aussi
	$('#A2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#A3').removeClass('rectangle2-milieu-choix');
			$('#A4').removeClass('rectangle2-milieu-choix');
			$('#A5').removeClass('rectangle2-milieu-choix');
			$('#A6').removeClass('rectangle2-milieu-choix');
			$('#A7').removeClass('rectangle2-droite-choix');
			$('#E3').removeClass('rectangle2-milieu-choix');
			$('#E4').removeClass('rectangle2-milieu-choix');
			$('#E5').removeClass('rectangle2-milieu-choix');
			$('#E6').removeClass('rectangle2-milieu-choix');
			$('#E7').removeClass('rectangle2-droite-choix');
			readingLevel = 1 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#A1').addClass('rectangle2-gauche-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			$('#E2').addClass('rectangle2-milieu-choix');
			readingLevel = 1 ;
		}
	});

	// si on sur clic A3, E3 réagit aussi
	$('#A3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#A4').removeClass('rectangle2-milieu-choix');
			$('#A5').removeClass('rectangle2-milieu-choix');
			$('#A6').removeClass('rectangle2-milieu-choix');
			$('#A7').removeClass('rectangle2-droite-choix');
			$('#E4').removeClass('rectangle2-milieu-choix');
			$('#E5').removeClass('rectangle2-milieu-choix');
			$('#E6').removeClass('rectangle2-milieu-choix');
			$('#E7').removeClass('rectangle2-droite-choix');
			readingLevel = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#A1').addClass('rectangle2-gauche-choix');
			$('#A2').addClass('rectangle2-milieu-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			$('#E2').addClass('rectangle2-milieu-choix');
			$('#E3').addClass('rectangle2-milieu-choix');
			readingLevel = 2 ;
		}
	})

	// si on sur clic A4, E4 réagit aussi
	$('#A4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#A5').removeClass('rectangle2-milieu-choix');
			$('#A6').removeClass('rectangle2-milieu-choix');
			$('#A7').removeClass('rectangle2-droite-choix');
			$('#E5').removeClass('rectangle2-milieu-choix');
			$('#E6').removeClass('rectangle2-milieu-choix');
			$('#E7').removeClass('rectangle2-droite-choix');
			readingLevel = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#A1').addClass('rectangle2-gauche-choix');
			$('#A2').addClass('rectangle2-milieu-choix');
			$('#A3').addClass('rectangle2-milieu-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			$('#E2').addClass('rectangle2-milieu-choix');
			$('#E3').addClass('rectangle2-milieu-choix');
			$('#E4').addClass('rectangle2-milieu-choix');
			readingLevel = 3 ;
		}
	})


	// si on sur clic A5, E5 réagit aussi
	$('#A5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#A6').removeClass('rectangle2-milieu-choix');
			$('#A7').removeClass('rectangle2-droite-choix');
			$('#E6').removeClass('rectangle2-milieu-choix');
			$('#E7').removeClass('rectangle2-droite-choix');
			readingLevel = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#A1').addClass('rectangle2-gauche-choix');
			$('#A2').addClass('rectangle2-milieu-choix');
			$('#A3').addClass('rectangle2-milieu-choix');
			$('#A4').addClass('rectangle2-milieu-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			$('#E2').addClass('rectangle2-milieu-choix');
			$('#E3').addClass('rectangle2-milieu-choix');
			$('#E4').addClass('rectangle2-milieu-choix');
			$('#E5').addClass('rectangle2-milieu-choix');
			readingLevel = 4 ;
		}
	})

	// si on sur clic A6, E6 réagit aussi
	$('#A6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#A7').removeClass('rectangle2-droite-choix');
			$('#E7').removeClass('rectangle2-droite-choix');
			readingLevel = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#A1').addClass('rectangle2-gauche-choix');
			$('#A2').addClass('rectangle2-milieu-choix');
			$('#A3').addClass('rectangle2-milieu-choix');
			$('#A4').addClass('rectangle2-milieu-choix');
			$('#A5').addClass('rectangle2-milieu-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			$('#E2').addClass('rectangle2-milieu-choix');
			$('#E3').addClass('rectangle2-milieu-choix');
			$('#E4').addClass('rectangle2-milieu-choix');
			$('#E5').addClass('rectangle2-milieu-choix');
			$('#E6').addClass('rectangle2-milieu-choix');
			readingLevel = 5 ;
		}
	})


		// si on sur clic A7, E7 réagit aussi
	$('#A7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			readingLevel = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-choix');
			$('#A1').addClass('rectangle2-gauche-choix');
			$('#A2').addClass('rectangle2-milieu-choix');
			$('#A3').addClass('rectangle2-milieu-choix');
			$('#A4').addClass('rectangle2-milieu-choix');
			$('#A5').addClass('rectangle2-milieu-choix');
			$('#A6').addClass('rectangle2-milieu-choix');
			$('#E1').addClass('rectangle2-gauche-choix');
			$('#E2').addClass('rectangle2-milieu-choix');
			$('#E3').addClass('rectangle2-milieu-choix');
			$('#E4').addClass('rectangle2-milieu-choix');
			$('#E5').addClass('rectangle2-milieu-choix');
			$('#E6').addClass('rectangle2-milieu-choix');
			$('#E7').addClass('rectangle2-droite-choix');
			readingLevel = 6 ;
		}
	})

// Listening Level
	var listeningLevel = 0 ;

	// si on clic sur B1, F1 réagit aussi
	$('#B1').on('click' , function () {
		if ($(this).hasClass('rectangle2-gauche-choix')) {
			$('#B2').removeClass('rectangle2-milieu-choix');
			$('#B3').removeClass('rectangle2-milieu-choix');
			$('#B4').removeClass('rectangle2-milieu-choix');
			$('#B5').removeClass('rectangle2-milieu-choix');
			$('#B6').removeClass('rectangle2-milieu-choix');
			$('#B7').removeClass('rectangle2-droite-choix');
			$('#F2').removeClass('rectangle2-milieu-choix');
			$('#F3').removeClass('rectangle2-milieu-choix');
			$('#F4').removeClass('rectangle2-milieu-choix');
			$('#F5').removeClass('rectangle2-milieu-choix');
			$('#F6').removeClass('rectangle2-milieu-choix');
			$('#F7').removeClass('rectangle2-droite-choix');
			listeningLevel = 0 ;
		} else {
			$(this).addClass('rectangle2-gauche-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			listeningLevel = 1 ;
		}
	})

	// si on sur clic B2, F2 réagit aussi
	$('#B2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#B3').removeClass('rectangle2-milieu-choix');
			$('#B4').removeClass('rectangle2-milieu-choix');
			$('#B5').removeClass('rectangle2-milieu-choix');
			$('#B6').removeClass('rectangle2-milieu-choix');
			$('#B7').removeClass('rectangle2-droite-choix');
			$('#F3').removeClass('rectangle2-milieu-choix');
			$('#F4').removeClass('rectangle2-milieu-choix');
			$('#F5').removeClass('rectangle2-milieu-choix');
			$('#F6').removeClass('rectangle2-milieu-choix');
			$('#F7').removeClass('rectangle2-droite-choix');
			listeningLevel = 1 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#B1').addClass('rectangle2-gauche-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			$('#F2').addClass('rectangle2-milieu-choix');
			listeningLevel = 1 ;
		}
	})

	// si on sur clic B3, F3 réagit aussi
	$('#B3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#B4').removeClass('rectangle2-milieu-choix');
			$('#B5').removeClass('rectangle2-milieu-choix');
			$('#B6').removeClass('rectangle2-milieu-choix');
			$('#B7').removeClass('rectangle2-droite-choix');
			$('#F4').removeClass('rectangle2-milieu-choix');
			$('#F5').removeClass('rectangle2-milieu-choix');
			$('#F6').removeClass('rectangle2-milieu-choix');
			$('#F7').removeClass('rectangle2-droite-choix');
			listeningLevel = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#B1').addClass('rectangle2-gauche-choix');
			$('#B2').addClass('rectangle2-milieu-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			$('#F2').addClass('rectangle2-milieu-choix');
			$('#F3').addClass('rectangle2-milieu-choix');
			listeningLevel = 2 ;
		}
	})

	// si on sur clic B4, F4 réagit aussi
	$('#B4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#B5').removeClass('rectangle2-milieu-choix');
			$('#B5').removeClass('rectangle2-milieu-choix');
			$('#B7').removeClass('rectangle2-droite-choix');
			$('#F5').removeClass('rectangle2-milieu-choix');
			$('#F6').removeClass('rectangle2-milieu-choix');
			$('#F7').removeClass('rectangle2-droite-choix');
			listeningLevel = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#B1').addClass('rectangle2-gauche-choix');
			$('#B2').addClass('rectangle2-milieu-choix');
			$('#B3').addClass('rectangle2-milieu-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			$('#F2').addClass('rectangle2-milieu-choix');
			$('#F3').addClass('rectangle2-milieu-choix');
			$('#F4').addClass('rectangle2-milieu-choix');
			listeningLevel = 3 ;
		}
	})


	// si on sur clic B5, F5 réagit aussi
	$('#B5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#B6').removeClass('rectangle2-milieu-choix');
			$('#B7').removeClass('rectangle2-droite-choix');
			$('#F6').removeClass('rectangle2-milieu-choix');
			$('#F7').removeClass('rectangle2-droite-choix');
			listeningLevel = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#B1').addClass('rectangle2-gauche-choix');
			$('#B2').addClass('rectangle2-milieu-choix');
			$('#B3').addClass('rectangle2-milieu-choix');
			$('#B4').addClass('rectangle2-milieu-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			$('#F2').addClass('rectangle2-milieu-choix');
			$('#F3').addClass('rectangle2-milieu-choix');
			$('#F4').addClass('rectangle2-milieu-choix');
			$('#F5').addClass('rectangle2-milieu-choix');
			listeningLevel = 4 ;
		}
	})

	// si on sur clic B6, F6 réagit aussi
	$('#B6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#B7').removeClass('rectangle2-droite-choix');
			$('#F7').removeClass('rectangle2-droite-choix');
			listeningLevel = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#B1').addClass('rectangle2-gauche-choix');
			$('#B2').addClass('rectangle2-milieu-choix');
			$('#B3').addClass('rectangle2-milieu-choix');
			$('#B4').addClass('rectangle2-milieu-choix');
			$('#B5').addClass('rectangle2-milieu-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			$('#F2').addClass('rectangle2-milieu-choix');
			$('#F3').addClass('rectangle2-milieu-choix');
			$('#F4').addClass('rectangle2-milieu-choix');
			$('#F5').addClass('rectangle2-milieu-choix');
			$('#F6').addClass('rectangle2-milieu-choix');
			listeningLevel = 5 ;
		}
	})


		// si on sur clic B7, F7 réagit aussi
	$('#B7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			listeningLevel = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-choix');
			$('#B1').addClass('rectangle2-gauche-choix');
			$('#B2').addClass('rectangle2-milieu-choix');
			$('#B3').addClass('rectangle2-milieu-choix');
			$('#B4').addClass('rectangle2-milieu-choix');
			$('#B5').addClass('rectangle2-milieu-choix');
			$('#B6').addClass('rectangle2-milieu-choix');
			$('#F1').addClass('rectangle2-gauche-choix');
			$('#F2').addClass('rectangle2-milieu-choix');
			$('#F3').addClass('rectangle2-milieu-choix');
			$('#F4').addClass('rectangle2-milieu-choix');
			$('#F5').addClass('rectangle2-milieu-choix');
			$('#F6').addClass('rectangle2-milieu-choix');
			$('#F7').addClass('rectangle2-droite-choix');
			listeningLevel = 6 ;
		}
	})

// Writing Level
	var writingLevel = 0 ;

	// si on clic sur C1, G1 réagit aussi
	$('#C1').on('click' , function () {
		if ($(this).hasClass('rectangle2-gauche-choix')) {
			$('#C2').removeClass('rectangle2-milieu-choix');
			$('#C3').removeClass('rectangle2-milieu-choix');
			$('#C4').removeClass('rectangle2-milieu-choix');
			$('#C5').removeClass('rectangle2-milieu-choix');
			$('#C6').removeClass('rectangle2-milieu-choix');
			$('#C7').removeClass('rectangle2-droite-choix');
			$('#G2').removeClass('rectangle2-milieu-choix');
			$('#G3').removeClass('rectangle2-milieu-choix');
			$('#G4').removeClass('rectangle2-milieu-choix');
			$('#G5').removeClass('rectangle2-milieu-choix');
			$('#G6').removeClass('rectangle2-milieu-choix');
			$('#G7').removeClass('rectangle2-droite-choix');
			writingLevel = 0 ;
		} else {
			$(this).addClass('rectangle2-gauche-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			writingLevel = 0 ;
		}
	})

	// si on sur clic C2, G2 réagit aussi
	$('#C2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#C3').removeClass('rectangle2-milieu-choix');
			$('#C4').removeClass('rectangle2-milieu-choix');
			$('#C5').removeClass('rectangle2-milieu-choix');
			$('#C6').removeClass('rectangle2-milieu-choix');
			$('#C7').removeClass('rectangle2-droite-choix');
			$('#G3').removeClass('rectangle2-milieu-choix');
			$('#G4').removeClass('rectangle2-milieu-choix');
			$('#G5').removeClass('rectangle2-milieu-choix');
			$('#G6').removeClass('rectangle2-milieu-choix');
			$('#G7').removeClass('rectangle2-droite-choix');
			writingLevel = 1 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#C1').addClass('rectangle2-gauche-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			$('#G2').addClass('rectangle2-milieu-choix');
			writingLevel = 1 ;
		}
	})

	// si on sur clic C3, G3 réagit aussi
	$('#C3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#C4').removeClass('rectangle2-milieu-choix');
			$('#C5').removeClass('rectangle2-milieu-choix');
			$('#C6').removeClass('rectangle2-milieu-choix');
			$('#C7').removeClass('rectangle2-droite-choix');
			$('#G4').removeClass('rectangle2-milieu-choix');
			$('#G5').removeClass('rectangle2-milieu-choix');
			$('#G6').removeClass('rectangle2-milieu-choix');
			$('#G7').removeClass('rectangle2-droite-choix');
			writingLevel = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#C1').addClass('rectangle2-gauche-choix');
			$('#C2').addClass('rectangle2-milieu-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			$('#G2').addClass('rectangle2-milieu-choix');
			$('#G3').addClass('rectangle2-milieu-choix');
			writingLevel = 2 ;
		}
	})

	// si on sur clic C4, G4 réagit aussi
	$('#C4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#C5').removeClass('rectangle2-milieu-choix');
			$('#C5').removeClass('rectangle2-milieu-choix');
			$('#C7').removeClass('rectangle2-droite-choix');
			$('#G5').removeClass('rectangle2-milieu-choix');
			$('#G6').removeClass('rectangle2-milieu-choix');
			$('#G7').removeClass('rectangle2-droite-choix');
			writingLevel = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#C1').addClass('rectangle2-gauche-choix');
			$('#C2').addClass('rectangle2-milieu-choix');
			$('#C3').addClass('rectangle2-milieu-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			$('#G2').addClass('rectangle2-milieu-choix');
			$('#G3').addClass('rectangle2-milieu-choix');
			$('#G4').addClass('rectangle2-milieu-choix');
			writingLevel = 3 ;
		}
	})


	// si on sur clic C5, G5 réagit aussi
	$('#C5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#C6').removeClass('rectangle2-milieu-choix');
			$('#C7').removeClass('rectangle2-droite-choix');
			$('#G6').removeClass('rectangle2-milieu-choix');
			$('#G7').removeClass('rectangle2-droite-choix');
			writingLevel = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#C1').addClass('rectangle2-gauche-choix');
			$('#C2').addClass('rectangle2-milieu-choix');
			$('#C3').addClass('rectangle2-milieu-choix');
			$('#C4').addClass('rectangle2-milieu-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			$('#G2').addClass('rectangle2-milieu-choix');
			$('#G3').addClass('rectangle2-milieu-choix');
			$('#G4').addClass('rectangle2-milieu-choix');
			$('#G5').addClass('rectangle2-milieu-choix');
			writingLevel = 4 ;
		}
	})

	// si on sur clic C6, G6 réagit aussi
	$('#C6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#C7').removeClass('rectangle2-droite-choix');
			$('#G7').removeClass('rectangle2-droite-choix');
			writingLevel = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#C1').addClass('rectangle2-gauche-choix');
			$('#C2').addClass('rectangle2-milieu-choix');
			$('#C3').addClass('rectangle2-milieu-choix');
			$('#C4').addClass('rectangle2-milieu-choix');
			$('#C5').addClass('rectangle2-milieu-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			$('#G2').addClass('rectangle2-milieu-choix');
			$('#G3').addClass('rectangle2-milieu-choix');
			$('#G4').addClass('rectangle2-milieu-choix');
			$('#G5').addClass('rectangle2-milieu-choix');
			$('#G6').addClass('rectangle2-milieu-choix');
			writingLevel = 5 ;
		}
	})


		// si on sur clic C7, G7 réagit aussi
	$('#C7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			writingLevel = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-choix');
			$('#C1').addClass('rectangle2-gauche-choix');
			$('#C2').addClass('rectangle2-milieu-choix');
			$('#C3').addClass('rectangle2-milieu-choix');
			$('#C4').addClass('rectangle2-milieu-choix');
			$('#C5').addClass('rectangle2-milieu-choix');
			$('#C6').addClass('rectangle2-milieu-choix');
			$('#G1').addClass('rectangle2-gauche-choix');
			$('#G2').addClass('rectangle2-milieu-choix');
			$('#G3').addClass('rectangle2-milieu-choix');
			$('#G4').addClass('rectangle2-milieu-choix');
			$('#G5').addClass('rectangle2-milieu-choix');
			$('#G6').addClass('rectangle2-milieu-choix');
			$('#G7').addClass('rectangle2-droite-choix');
			writingLevel = 6 ;
		}
	})

// speaking Level
	var speakingLevel = 0 ;

	// si on clic sur D1, H1 réagit aussi
	$('#D1').on('click' , function () {
		if ($(this).hasClass('rectangle2-gauche-choix')) {
			$('#D2').removeClass('rectangle2-milieu-choix');
			$('#D3').removeClass('rectangle2-milieu-choix');
			$('#D4').removeClass('rectangle2-milieu-choix');
			$('#D5').removeClass('rectangle2-milieu-choix');
			$('#D6').removeClass('rectangle2-milieu-choix');
			$('#D7').removeClass('rectangle2-droite-choix');
			$('#H2').removeClass('rectangle2-milieu-choix');
			$('#H3').removeClass('rectangle2-milieu-choix');
			$('#H4').removeClass('rectangle2-milieu-choix');
			$('#H5').removeClass('rectangle2-milieu-choix');
			$('#H6').removeClass('rectangle2-milieu-choix');
			$('#H7').removeClass('rectangle2-droite-choix');
			speakingLevel = 0 ;
		} else {
			$(this).addClass('rectangle2-gauche-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			speakingLevel = 0 ;
		}
	})

	// si on sur clic D2, H2 réagit aussi
	$('#D2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#D3').removeClass('rectangle2-milieu-choix');
			$('#D4').removeClass('rectangle2-milieu-choix');
			$('#D5').removeClass('rectangle2-milieu-choix');
			$('#D6').removeClass('rectangle2-milieu-choix');
			$('#D7').removeClass('rectangle2-droite-choix');
			$('#H3').removeClass('rectangle2-milieu-choix');
			$('#H4').removeClass('rectangle2-milieu-choix');
			$('#H5').removeClass('rectangle2-milieu-choix');
			$('#H6').removeClass('rectangle2-milieu-choix');
			$('#H7').removeClass('rectangle2-droite-choix');
			speakingLevel = 1 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#D1').addClass('rectangle2-gauche-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			$('#H2').addClass('rectangle2-milieu-choix');
			speakingLevel = 1 ;
		}
	})

	// si on sur clic D3, H3 réagit aussi
	$('#D3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#D4').removeClass('rectangle2-milieu-choix');
			$('#D5').removeClass('rectangle2-milieu-choix');
			$('#D6').removeClass('rectangle2-milieu-choix');
			$('#D7').removeClass('rectangle2-droite-choix');
			$('#H4').removeClass('rectangle2-milieu-choix');
			$('#H5').removeClass('rectangle2-milieu-choix');
			$('#H6').removeClass('rectangle2-milieu-choix');
			$('#H7').removeClass('rectangle2-droite-choix');
			speakingLevel = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#D1').addClass('rectangle2-gauche-choix');
			$('#D2').addClass('rectangle2-milieu-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			$('#H2').addClass('rectangle2-milieu-choix');
			$('#H3').addClass('rectangle2-milieu-choix');
			speakingLevel = 2 ;
		}
	})

	// si on sur clic D4, H4 réagit aussi
	$('#D4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#D5').removeClass('rectangle2-milieu-choix');
			$('#D5').removeClass('rectangle2-milieu-choix');
			$('#D7').removeClass('rectangle2-droite-choix');
			$('#H5').removeClass('rectangle2-milieu-choix');
			$('#H6').removeClass('rectangle2-milieu-choix');
			$('#H7').removeClass('rectangle2-droite-choix');
			speakingLevel = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#D1').addClass('rectangle2-gauche-choix');
			$('#D2').addClass('rectangle2-milieu-choix');
			$('#D3').addClass('rectangle2-milieu-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			$('#H2').addClass('rectangle2-milieu-choix');
			$('#H3').addClass('rectangle2-milieu-choix');
			$('#H4').addClass('rectangle2-milieu-choix');
			speakingLevel = 3 ;
		}
	})


	// si on sur clic D5, H5 réagit aussi
	$('#D5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#D6').removeClass('rectangle2-milieu-choix');
			$('#D7').removeClass('rectangle2-droite-choix');
			$('#H6').removeClass('rectangle2-milieu-choix');
			$('#H7').removeClass('rectangle2-droite-choix');
			speakingLevel = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#D1').addClass('rectangle2-gauche-choix');
			$('#D2').addClass('rectangle2-milieu-choix');
			$('#D3').addClass('rectangle2-milieu-choix');
			$('#D4').addClass('rectangle2-milieu-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			$('#H2').addClass('rectangle2-milieu-choix');
			$('#H3').addClass('rectangle2-milieu-choix');
			$('#H4').addClass('rectangle2-milieu-choix');
			$('#H5').addClass('rectangle2-milieu-choix');
			speakingLevel = 4 ;
		}
	})

	// si on sur clic D6, H6 réagit aussi
	$('#D6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			$('#D7').removeClass('rectangle2-droite-choix');
			$('#H7').removeClass('rectangle2-droite-choix');
			speakingLevel = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-choix');
			$('#D1').addClass('rectangle2-gauche-choix');
			$('#D2').addClass('rectangle2-milieu-choix');
			$('#D3').addClass('rectangle2-milieu-choix');
			$('#D4').addClass('rectangle2-milieu-choix');
			$('#D5').addClass('rectangle2-milieu-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			$('#H2').addClass('rectangle2-milieu-choix');
			$('#H3').addClass('rectangle2-milieu-choix');
			$('#H4').addClass('rectangle2-milieu-choix');
			$('#H5').addClass('rectangle2-milieu-choix');
			$('#H6').addClass('rectangle2-milieu-choix');
			speakingLevel = 5 ;
		}
	})


		// si on sur clic D7, H7 réagit aussi
	$('#D7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			speakingLevel = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-choix');
			$('#D1').addClass('rectangle2-gauche-choix');
			$('#D2').addClass('rectangle2-milieu-choix');
			$('#D3').addClass('rectangle2-milieu-choix');
			$('#D4').addClass('rectangle2-milieu-choix');
			$('#D5').addClass('rectangle2-milieu-choix');
			$('#D6').addClass('rectangle2-milieu-choix');
			$('#H1').addClass('rectangle2-gauche-choix');
			$('#H2').addClass('rectangle2-milieu-choix');
			$('#H3').addClass('rectangle2-milieu-choix');
			$('#H4').addClass('rectangle2-milieu-choix');
			$('#H5').addClass('rectangle2-milieu-choix');
			$('#H6').addClass('rectangle2-milieu-choix');
			$('#H7').addClass('rectangle2-droite-choix');
			speakingLevel = 6 ;
		}
	})



// Reading goal
	var readingGoal = 6


	// Passer le bouton E2 en orange
	$('#E2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			readingGoal = 0 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			$('#E3').removeClass('rectangle2-milieu-objectif');
			$('#E4').removeClass('rectangle2-milieu-objectif');
			$('#E5').removeClass('rectangle2-milieu-objectif');
			$('#E6').removeClass('rectangle2-milieu-objectif');
			$('#E7').removeClass('rectangle2-droite-objectif');
			readingGoal = 1 ;
		}
	})

	// Passer le bouton E3 en orange
	$('#E3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			readingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#E4').removeClass('rectangle2-milieu-objectif');
			$('#E5').removeClass('rectangle2-milieu-objectif');
			$('#E6').removeClass('rectangle2-milieu-objectif');
			$('#E7').removeClass('rectangle2-droite-objectif');
			readingGoal = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			readingGoal = 2 ;
			if ($('#E2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E2').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton E4 en orange
	$('#E4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			readingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#E5').removeClass('rectangle2-milieu-objectif');
			$('#E6').removeClass('rectangle2-milieu-objectif');
			$('#E7').removeClass('rectangle2-droite-objectif');
			readingGoal = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			readingGoal = 3 ;
			if ($('#E2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E3').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton E5 en orange
	$('#E5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			readingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#E6').removeClass('rectangle2-milieu-objectif');
			$('#E7').removeClass('rectangle2-droite-objectif');
			readingGoal = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			readingGoal = 4 ;
			if ($('#E2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E4').addClass('rectangle2-milieu-objectif');
			}
		}
	})


	// Passer le bouton E6 en orange
	$('#E6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			readingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#E7').removeClass('rectangle2-droite-objectif');
			readingGoal = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			readingGoal = 5 ;
			if ($('#E2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E5').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton E7 en orange
	$('#E7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			readingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-droite-objectif')) {
			readingGoal = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-objectif');
			readingGoal = 6 ;
			if ($('#E2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E5').addClass('rectangle2-milieu-objectif');
			}
			if ($('#E6').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#E6').addClass('rectangle2-milieu-objectif');
			}
		}
	})


// Listening goal
	var listeningGoal = 6


	// Passer le bouton F2 en orange
	$('#F2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			listeningGoal = 0 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			$('#F3').removeClass('rectangle2-milieu-objectif');
			$('#F4').removeClass('rectangle2-milieu-objectif');
			$('#F5').removeClass('rectangle2-milieu-objectif');
			$('#F6').removeClass('rectangle2-milieu-objectif');
			$('#F7').removeClass('rectangle2-droite-objectif');
			listeningGoal = 1 ;
		}
	})

	// Passer le bouton F3 en orange
	$('#F3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			listeningGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#F4').removeClass('rectangle2-milieu-objectif');
			$('#F5').removeClass('rectangle2-milieu-objectif');
			$('#F6').removeClass('rectangle2-milieu-objectif');
			$('#F7').removeClass('rectangle2-droite-objectif');
			listeningGoal = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			listeningGoal = 2 ;
			if ($('#F2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F2').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton F4 en orange
	$('#F4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			listeningGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#F5').removeClass('rectangle2-milieu-objectif');
			$('#F6').removeClass('rectangle2-milieu-objectif');
			$('#F7').removeClass('rectangle2-droite-objectif');
			listeningGoal = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			listeningGoal = 3 ;
			if ($('#F2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F3').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton F5 en orange
	$('#F5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			listeningGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#F6').removeClass('rectangle2-milieu-objectif');
			$('#F7').removeClass('rectangle2-droite-objectif');
			listeningGoal = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			listeningGoal = 4 ;
			if ($('#F2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F4').addClass('rectangle2-milieu-objectif');
			}
		}
	})


	// Passer le bouton F6 en orange
	$('#F6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			listeningGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#F7').removeClass('rectangle2-droite-objectif');
			listeningGoal = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			listeningGoal = 5 ;
			if ($('#F2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F5').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton F7 en orange
	$('#F7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			listeningGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-droite-objectif')) {
			listeningGoal = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-objectif');
			listeningGoal = 6 ;
			if ($('#F2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F5').addClass('rectangle2-milieu-objectif');
			}
			if ($('#F6').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#F6').addClass('rectangle2-milieu-objectif');
			}
		}
	})

// Writing goal
	var writingGoal = 6


	// Passer le bouton G2 en orange
	$('#G2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			writingGoal = 0 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			$('#G3').removeClass('rectangle2-milieu-objectif');
			$('#G4').removeClass('rectangle2-milieu-objectif');
			$('#G5').removeClass('rectangle2-milieu-objectif');
			$('#G6').removeClass('rectangle2-milieu-objectif');
			$('#G7').removeClass('rectangle2-droite-objectif');
			writingGoal = 1 ;
		}
	})

	// Passer le bouton G3 en orange
	$('#G3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			writingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#G4').removeClass('rectangle2-milieu-objectif');
			$('#G5').removeClass('rectangle2-milieu-objectif');
			$('#G6').removeClass('rectangle2-milieu-objectif');
			$('#G7').removeClass('rectangle2-droite-objectif');
			writingGoal = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			writingGoal = 2 ;
			if ($('#G2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G2').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton G4 en orange
	$('#G4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			writingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#G5').removeClass('rectangle2-milieu-objectif');
			$('#G6').removeClass('rectangle2-milieu-objectif');
			$('#G7').removeClass('rectangle2-droite-objectif');
			writingGoal = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			writingGoal = 3 ;
			if ($('#G2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G3').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton G5 en orange
	$('#G5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			writingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#G6').removeClass('rectangle2-milieu-objectif');
			$('#G7').removeClass('rectangle2-droite-objectif');
			writingGoal = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			writingGoal = 4 ;
			if ($('#G2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G4').addClass('rectangle2-milieu-objectif');
			}
		}
	})


	// Passer le bouton G6 en orange
	$('#G6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			writingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#G7').removeClass('rectangle2-droite-objectif');
			writingGoal = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			writingGoal = 5 ;
			if ($('#G2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G5').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton G7 en orange
	$('#G7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			writingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-droite-objectif')) {
			writingGoal = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-objectif');
			writingGoal = 6 ;
			if ($('#G2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G5').addClass('rectangle2-milieu-objectif');
			}
			if ($('#G6').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#G6').addClass('rectangle2-milieu-objectif');
			}
		}
	})

// Speaking goal
	var speakingGoal = 6


	// Passer le bouton H2 en orange
	$('#H2').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			speakingGoal = 0 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			$('#H3').removeClass('rectangle2-milieu-objectif');
			$('#H4').removeClass('rectangle2-milieu-objectif');
			$('#H5').removeClass('rectangle2-milieu-objectif');
			$('#H6').removeClass('rectangle2-milieu-objectif');
			$('#H7').removeClass('rectangle2-droite-objectif');
			speakingGoal = 1 ;
		}
	})

	// Passer le bouton H3 en orange
	$('#H3').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			speakingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#H4').removeClass('rectangle2-milieu-objectif');
			$('#H5').removeClass('rectangle2-milieu-objectif');
			$('#H6').removeClass('rectangle2-milieu-objectif');
			$('#H7').removeClass('rectangle2-droite-objectif');
			speakingGoal = 2 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			speakingGoal = 2 ;
			if ($('#H2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H2').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton H4 en orange
	$('#H4').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			speakingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#H5').removeClass('rectangle2-milieu-objectif');
			$('#H6').removeClass('rectangle2-milieu-objectif');
			$('#H7').removeClass('rectangle2-droite-objectif');
			speakingGoal = 3 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			speakingGoal = 3 ;
			if ($('#H2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H3').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton H5 en orange
	$('#H5').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			speakingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#H6').removeClass('rectangle2-milieu-objectif');
			$('#H7').removeClass('rectangle2-droite-objectif');
			speakingGoal = 4 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			speakingGoal = 4 ;
			if ($('#H2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H4').addClass('rectangle2-milieu-objectif');
			}
		}
	})


	// Passer le bouton H6 en orange
	$('#H6').on('click' , function () {
		if ($(this).hasClass('rectangle2-milieu-choix')) {
			speakingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-milieu-objectif')) {
			$('#H7').removeClass('rectangle2-droite-objectif');
			speakingGoal = 5 ;
		} else {
			$(this).addClass('rectangle2-milieu-objectif');
			speakingGoal = 5 ;
			if ($('#H2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H5').addClass('rectangle2-milieu-objectif');
			}
		}
	})

	// Passer le bouton H7 en orange
	$('#H7').on('click' , function () {
		if ($(this).hasClass('rectangle2-droite-choix')) {
			speakingGoal = 0 ;
		} else if ($(this).hasClass('rectangle2-droite-objectif')) {
			speakingGoal = 6 ;
		} else {
			$(this).addClass('rectangle2-droite-objectif');
			speakingGoal = 6 ;
			if ($('#H2').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H2').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H3').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H3').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H4').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H4').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H5').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H5').addClass('rectangle2-milieu-objectif');
			}
			if ($('#H6').hasClass('rectangle2-milieu-choix')) {
			} else {
				$('#H6').addClass('rectangle2-milieu-objectif');
			}
		}
	})


// Days of the week

	var week = 0 ;

	// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#monday').on('click' , function () {
		if ($(this).hasClass('rectangle-gauche-choix')) {
			$(this).removeClass('rectangle-gauche-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-gauche-choix');
			week = week + 1 ;
		}
	});

		// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#tuesday').on('click' , function () {
		if ($(this).hasClass('rectangle-milieu-choix')) {
			$(this).removeClass('rectangle-milieu-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-milieu-choix');
			week = week + 1 ;
		}
	});

		// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#wednesday').on('click' , function () {
		if ($(this).hasClass('rectangle-milieu-choix')) {
			$(this).removeClass('rectangle-milieu-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-milieu-choix');
			week = week + 1 ;
		}
	});

		// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#thursday').on('click' , function () {
		if ($(this).hasClass('rectangle-milieu-choix')) {
			$(this).removeClass('rectangle-milieu-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-milieu-choix');
			week = week + 1 ;
		}
	});

		// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#friday').on('click' , function () {
		if ($(this).hasClass('rectangle-milieu-choix')) {
			$(this).removeClass('rectangle-milieu-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-milieu-choix');
			week = week + 1 ;
		}
	});

		// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#saturday').on('click' , function () {
		if ($(this).hasClass('rectangle-milieu-choix')) {
			$(this).removeClass('rectangle-milieu-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-milieu-choix');
			week = week + 1 ;
		}
	});

		// si on clic sur monday, on ajoute 1 jour à la semaine
	$('#sunday').on('click' , function () {
		if ($(this).hasClass('rectangle-droite-choix')) {
			$(this).removeClass('rectangle-droite-choix')
			week = week - 1 ;
		} else {
			$(this).addClass('rectangle-droite-choix');
			week = week + 1 ;
		}
	});

// Intensity

	var intensity = 0 ;

	// si on clic sur less, on ajoute
	$('#less').on('click' , function () {
		intensity = 0.4 ;
		if ($(this).hasClass('rectangle-gauche-choix')) {
			$(this).removeClass('rectangle-gauche-choix')
			$('#more').addClass('rectangle-droite-choix')
		} else {
			$(this).addClass('rectangle-gauche-choix');
			$('#more').removeClass('rectangle-droite-choix')
		}
	});

		// si on clic sur more,
	$('#more').on('click' , function () {
		intensity = 1 ;
		if ($(this).hasClass('rectangle-droite-choix')) {
			$(this).removeClass('rectangle-droite-choix')
			$('#less').addClass('rectangle-gauche-choix')
		} else {
			$(this).addClass('rectangle-droite-choix');
			$('#less').removeClass('rectangle-gauche-choix')
		}
	});


// resultats
	$('#result').on('click' , function () {
		var step = (readingGoal+writingGoal+speakingGoal+listeningGoal)-(readingLevel+writingLevel+speakingLevel+listeningLevel);
		console.log("step" + step)
		var hours = step * 17 ;
		console.log("hours" + hours);

		var timelapse = hours/(week * intensity); // nombre de semaine
		console.log('nombre de semaine' + timelapse) ;

		var date = new Date();

		var jours = new Array("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");
		var mois = new Array("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER");



		var nombreMois = Math.floor(timelapse / 4.3) ; // nombre de mois
		console.log('nombreMois'+ nombreMois);

		var moisRestant = nombreMois % 12 ; // pour connaitre le resultat mois
		console.log('mois restant' + moisRestant)

		var nombreAnnee = Math.floor((nombreMois + date.getMonth())/12)
		console.log('nombre annee' + nombreAnnee)


		var message = jours[date.getDay()] + " ";   // nom du jour
     	message += date.getDate() + "th ";   // numero du jour
     	message += mois[date.getMonth() + moisRestant] + " ";   // mois
     	message += date.getFullYear() + nombreAnnee;
     	console.log(message);
		$('#fluencyDate').html(message);
	})


//Changer le texte du level quand la souris passe devant les niveaux

	// changer le texte du reading Level
	$('#A1').on('mouseenter' , function () {
		$('#readingLevelText').html("I'm a novice");
	})

	$('#A2').on('mouseenter' , function () {
		$('#readingLevelText').html("I can read restaurant menus");
	})

	$('#A3').on('mouseenter' , function () {
		$('#readingLevelText').html("I can read work emails");
	})

	$('#A4').on('mouseenter' , function () {
		$('#readingLevelText').html("I can read blog articles");
	})

	$('#A5').on('mouseenter' , function () {
		$('#readingLevelText').html("I can read newspapers");
	})

	$('#A6').on('mouseenter' , function () {
		$('#readingLevelText').html("I can read novels");
	})

	$('#A7').on('mouseenter' , function () {
		$('#readingLevelText').html("I can read academic papers");
	})


	// changer le texte du listening Level
	$('#B1').on('mouseenter' , function () {
		$('#listeningLevelText').html("I'm a novice");
	})

	$('#B2').on('mouseenter' , function () {
		$('#listeningLevelText').html("I can understand greetings");
	})

	$('#B3').on('mouseenter' , function () {
		$('#listeningLevelText').html("I can understand weather reports");
	})

	$('#B4').on('mouseenter' , function () {
		$('#listeningLevelText').html("I can understand a guided tour");
	})

	$('#B5').on('mouseenter' , function () {
		$('#listeningLevelText').html("I can understand TV series");
	})

	$('#B6').on('mouseenter' , function () {
		$('#listeningLevelText').html("I can understand movies");
	})

	$('#B7').on('mouseenter' , function () {
		$('#listeningLevelText').html("I can understand political debates");
	})



	// changer le texte du writing Level
	$('#C1').on('mouseenter' , function () {
		$('#writingLevelText').html("I'm a novice");
	})

	$('#C2').on('mouseenter' , function () {
		$('#writingLevelText').html("I can write shopping lists");
	})

	$('#C3').on('mouseenter' , function () {
		$('#writingLevelText').html("I can write an online bio");
	})

	$('#C4').on('mouseenter' , function () {
		$('#writingLevelText').html("I can write holiday postcards");
	})

	$('#C5').on('mouseenter' , function () {
		$('#writingLevelText').html("I can write motivation letters");
	})

	$('#C6').on('mouseenter' , function () {
		$('#writingLevelText').html("I can write blog articles");
	})

	$('#C7').on('mouseenter' , function () {
		$('#writingLevelText').html("I can write essays");
	})


	// changer le texte du speaking Level
	$('#D1').on('mouseenter' , function () {
		$('#speakingLevelText').html("I'm a novice");
	})

	$('#D2').on('mouseenter' , function () {
		$('#speakingLevelText').html("I can greet a friend");
	})

	$('#D3').on('mouseenter' , function () {
		$('#speakingLevelText').html("I can give directions");
	})

	$('#D4').on('mouseenter' , function () {
		$('#speakingLevelText').html("I can talk about my holidays");
	})

	$('#D5').on('mouseenter' , function () {
		$('#speakingLevelText').html("I can participate in work meetings");
	})

	$('#D6').on('mouseenter' , function () {
		$('#speakingLevelText').html("I can engage in a debate");
	})

	$('#D7').on('mouseenter' , function () {
		$('#speakingLevelText').html("I can make a public speech");
	})

//Ghanger le texte du goal quand la souris passe devant les niveaux

	// changer le texte du reading Goal
	$('#E1').on('mouseenter' , function () {
		$('#readingGoalText').html("I'm a novice");
	})

	$('#E2').on('mouseenter' , function () {
		$('#readingGoalText').html("To be able to read restaurant menus");
	})

	$('#E3').on('mouseenter' , function () {
		$('#readingGoalText').html("To be able to read work emails");
	})

	$('#E4').on('mouseenter' , function () {
		$('#readingGoalText').html("To be able to read blog articles");
	})

	$('#E5').on('mouseenter' , function () {
		$('#readingGoalText').html("To be able to read newspapers");
	})

	$('#E6').on('mouseenter' , function () {
		$('#readingGoalText').html("To be able to read novels");
	})

	$('#E7').on('mouseenter' , function () {
		$('#readingGoalText').html("To be able to read academic papers");
	})


	// changer le texte du listening Goal
	$('#F1').on('mouseenter' , function () {
		$('#listeningGoalText').html("I'm a novice");
	})

	$('#F2').on('mouseenter' , function () {
		$('#listeningGoalText').html("To be able to understand greetings");
	})

	$('#F3').on('mouseenter' , function () {
		$('#listeningGoalText').html("To be able to understand weather reports");
	})

	$('#F4').on('mouseenter' , function () {
		$('#listeningGoalText').html("To be able to understand a guided tour");
	})

	$('#F5').on('mouseenter' , function () {
		$('#listeningGoalText').html("To be able to understand TV series");
	})

	$('#F6').on('mouseenter' , function () {
		$('#listeningGoalText').html("To be able to understand movies");
	})

	$('#F7').on('mouseenter' , function () {
		$('#listeningGoalText').html("To be able to understand political debates");
	})



	// changer le texte du writing Goal
	$('#G1').on('mouseenter' , function () {
		$('#writingGoalText').html("I'm a novice");
	})

	$('#G2').on('mouseenter' , function () {
		$('#writingGoalText').html("To be able to write shopping lists");
	})

	$('#G3').on('mouseenter' , function () {
		$('#writingGoalText').html("To be able to write an online bio");
	})

	$('#G4').on('mouseenter' , function () {
		$('#writingGoalText').html("To be able to write holiday postcards");
	})

	$('#G5').on('mouseenter' , function () {
		$('#writingGoalText').html("To be able to write motivation letters");
	})

	$('#G6').on('mouseenter' , function () {
		$('#writingGoalText').html("To be able to write blog articles");
	})

	$('#G7').on('mouseenter' , function () {
		$('#writingGoalText').html("To be able to write essays");
	})


	// changer le texte du speaking Goal
	$('#H1').on('mouseenter' , function () {
		$('#speakingGoalText').html("I'm a novice");
	})

	$('#H2').on('mouseenter' , function () {
		$('#speakingGoalText').html("To be able to greet a friend");
	})

	$('#H3').on('mouseenter' , function () {
		$('#speakingGoalText').html("To be able to give directions");
	})

	$('#H4').on('mouseenter' , function () {
		$('#speakingGoalText').html("To be able to talk about my holidays");
	})

	$('#H5').on('mouseenter' , function () {
		$('#speakingGoalText').html("To be able to participate in work meetings");
	})

	$('#H6').on('mouseenter' , function () {
		$('#speakingGoalText').html("To be able to engage in a debate");
	})

	$('#H7').on('mouseenter' , function () {
		$('#speakingGoalText').html("To be able to make a public speech");
	})



	//je rentre un nom et un email, quand je clique sur ok, ça s'intègre au corps de l'email

	$('#OK1').on('click' , function () {
		var elt1 = document.getElementById('friend-name');
		var friendName = elt1.innerText || elt1.textContent;
		console.log(friendName);
		$('#hey').html("Hey "+friendName+",");
		var elt2 = document.getElementById('friend-email');
		var friendEmail = elt2.innerText || elt2.textContent;
		console.log(friendEmail);
	})

	$('#OK2').on('click' , function () {
		var elt3 = document.getElementById('your-name');
		var yourName = elt3.innerText || elt3.textContent;
		console.log(yourName);
		$('#ciao').html(yourName + " xxx");
		var elt4 = document.getElementById('your-email');
		var yourEmail = elt4.innerText || elt4.textContent;
		console.log(yourEmail);
	})



//envouer un emaail

	$('#SEND').on('click' , function () {



})



});
