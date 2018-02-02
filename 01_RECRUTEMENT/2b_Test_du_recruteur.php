<?php include ('header.php'); ?>
	<div class="barba-container page_container game2b" id="game2b" data-namespace="game2b">
	
		<!-- Jingle Game -->
		<i id="sound_page" audio_src="03_TransitionSonore-EcranJeux.mp3"></i>

		<!-- la video dont on va changer la src en js -->
		<video src="videos/game2b_bg1.mp4"></video>

		<!-- les slides visibles ou non en js -->
		<div class="slides_container game2b1_visible">
			
			<div class="game2b1 slide slide_active">
				<img src="img/game2b1_bg.svg" alt="">
				<ul class="qcm_container qcm1">
					<li istrue='false' qcm-value='a' class='reveal1 case_a'></li>
					<li istrue='false' qcm-value='c' class='reveal2 case_c'></li>
					<li istrue='false' qcm-value='b' class='reveal3 case_b'></li>
				</ul>
			</div>

			<div class="game2b2 slide">
				<img src="img/game2b2_bg.svg" alt="">
				<ul class="qcm_container qcm2">
					<li istrue='false' qcm-value='c' class='reveal1 case_c'></li>
					<li istrue='false' qcm-value='a' class='reveal2 case_a'></li>
					<li istrue='false' qcm-value='b' class='reveal3 case_b'></li>
				</ul>
			</div>

			<div class="game2b3 slide">
				<img src="img/game2b3_bg.svg" alt="">
				<ul class="qcm_container qcm3">
					<li istrue='false' qcm-value='b' class='reveal1 case_b'></li>
					<li istrue='false' qcm-value='c' class='reveal2 case_c'></li>
					<li istrue='false' qcm-value='a' class='reveal3 case_a'></li>
				</ul>
			</div>

			<div class="game2b4 slide">
				<img src="img/game2b4_bg.svg" alt="">
				<ul class="qcm_container qcm4">
					<li istrue='false' qcm-value='b' class='reveal1 case_b'></li>
					<li istrue='false' qcm-value='c' class='reveal2 case_c'></li>
					<li istrue='false' qcm-value='a' class='reveal3 case_a'></li>
				</ul>
			</div>

			<div class="game2b5 slide">
				<img src="img/game2b5_bg.svg" alt="">
				<ul class="qcm_container qcm5">
					<li istrue='false' qcm-value='a' class='reveal1 case_a'></li>
					<li istrue='false' qcm-value='b' class='reveal2 case_b'></li>
					<li istrue='false' qcm-value='c' class='reveal3 case_c'></li>
				</ul>
			</div>


		<a href="#" id="bt_continuer_game2" class="bt_continuer"></a>

		<a href="#" id="bt_valider_game2" class="bt_valider">
			<span class="bouton"></span>
			<span class="pouceEnLair"></span>
		</a>





		</div>

	</div>
<?php include ('footer.php'); ?>